import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateIntroduction, updateTags, updateTitle } from "@/redux/slices/updateProfileSlice";
import { useParams } from "react-router-dom";
import { supabase } from "@/supabase";



const UpdateProfile = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('user_id', id)
                    .single();
                if (error) {
                    throw Error(error.message);
                }
                setTitle(data.display_name)
                setIntroduction(data.introduction)
                setTags(data.hashtags)
                return data;
            } catch (error) {
                console.log(error)
            }
        };
        fetchUserData();
    },[])
    const dispatch = useDispatch();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(title)
        console.log(introduction)
        console.log(tags)
        if (title === "") {
            alert("닉네임을 입력하세요");
            return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
        }
        dispatch(
            updateTitle({ title })
        );
        dispatch(
            updateIntroduction({ introduction })
        );
        dispatch(
            updateTags({ tags })
        );

        const { error } = await supabase
            .from('users')
            .update({
                display_name: title,
                introduction: introduction,
                hashtags: tags
            })
            .eq('user_id', id)
        if (error) {
            throw Error(error.message);
        } else (
            console.log('변경 완료')
        )
    };

    return (
        <StProfile>
            <StProfileHeader>
                <StProfilePhoto />

                <StProfileInfo>
                    <StProfileTitle>
                        <StInput
                            type="text"
                            placeholder={title}
                            defaultValue={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </StProfileTitle>
                </StProfileInfo>

                <StProfileTemperature>
                    <StButton onClick={onSubmitHandler}>편집 종료</StButton>
                </StProfileTemperature>
            </StProfileHeader>

            <StIntroduction>
                <h3>소개글</h3>
                <StInput
                    type="text"
                    placeholder={introduction}
                    defaultValue={introduction}
                    onChange={(e) => {
                        setIntroduction(e.target.value);
                        console.log(introduction)
                    }}
                />
            </StIntroduction>

            <div className="tags">
                <StInput
                    type="text"
                    placeholder={tags}
                    defaultValue={tags}
                    onChange={(e) => {
                        setTags(e.target.value);
                    }}
                />
            </div>

        </StProfile>
    );
};

export default UpdateProfile;

// const StFormContainer = styled.div`
//   display: flex;
//   gap: 24px;
//   padding: 30px;
// `;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const StProfile = styled.div`
  background-color: #333;
  /* color: white; */
  padding: 20px;
  border-radius: 8px;
`;

const StProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StProfilePhoto = styled.div`
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 20%;
`;

const StProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-left: 30px;
`;

const StProfileTitle = styled.h1`
  margin-bottom: 10px;
  color: white;
`;

const StProfileLink = styled.a`
  margin: 5px 0;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const StIntroduction = styled.p`
  margin-top: 0;
  color: white;
`;

const StTag = styled.span`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 24px;
  margin-right: 5px;
`;

const StProfileTemperature = styled.div`
  display: flex;
  align-items: center;
`;