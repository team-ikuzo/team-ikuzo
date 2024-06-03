import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { SideBar } from '../../components/SideBar';
import { StContent, StLayout } from './StyledLayout';

export const Layout = () => {
  return (
    <>
      <SideBar />
      <StLayout>
        <NavBar />
        <StContent>
          <Outlet />
        </StContent>
      </StLayout>
    </>
  );
};
