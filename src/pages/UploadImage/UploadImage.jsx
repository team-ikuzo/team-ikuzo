import { supabase } from '@/supabase';
import { useEffect, useRef, useState } from 'react';

const bucket = 'test';
const FILE_NAME = 'profileImage';
const userId = 'jaehun';
const fileUrl = `${userId}/${FILE_NAME}`;

export const UploadImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.storage.from(bucket).upload(fileUrl, imageFile);

    if (error) {
      console.log(error);
      return;
    }
    const publicUrl = supabase.storage.from(bucket).getPublicUrl(fileUrl);
    console.log(publicUrl);
  };
  const onFileChange = (e) => {
    const file = imgRef.current.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };
  useEffect(() => {
    const getExistProfileImage = async () => {
      const { data, error } = await supabase.storage.from('test').list('jaehun');
      if (data.length > 0) {
        const publicUrl = supabase.storage.from(bucket).getPublicUrl(fileUrl);
        console.log(publicUrl);
        setImageUrl(publicUrl.data.publicUrl);
      }
    };
    getExistProfileImage();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {imageUrl && <img src={imageUrl} alt="preview" width="50px" height="50px" />}
        <input ref={imgRef} type="file" accept="image/*" onChange={onFileChange} />
        <button>Upload</button>
      </form>
    </>
  );
};
