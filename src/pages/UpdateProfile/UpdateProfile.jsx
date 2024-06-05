import React from 'react';
import styled from 'styled-components';
import UpdateProfilecComponent from '@/components/UpdateProfile/UpdateProfile';
//import { supabase } from '../../supabase';

const StContainer = styled.div`
  display: flex;
`;

const StMain = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

function UpdateProfile() {
  return (
    <StContainer>
      <StMain>
        <UpdateProfilecComponent />
      </StMain>
    </StContainer>
  );
}

export default UpdateProfile;