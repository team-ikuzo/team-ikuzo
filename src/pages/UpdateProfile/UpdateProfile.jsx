import { Page } from '@/components/Page';
import UpdateProfilecComponent from '@/components/UpdateProfile/UpdateProfile';
import styled from 'styled-components';
// import { StBackground } from '../Home/StyledHome';
//import { supabase } from '../../supabase';

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const StMain = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

const StBackground = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #1d1f21;
  display: flex;
  justify-content: center;
`;

function UpdateProfile() {
  return (
    <Page>
      <StBackground>
        <StContainer>
          <StMain>
            <UpdateProfilecComponent />
          </StMain>
        </StContainer>
      </StBackground>
    </Page>
  );
}

export default UpdateProfile;
