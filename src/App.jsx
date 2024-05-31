import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { router } from '../routes/Router';

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <Globalstyle />
      <RouterProvider router={router} />
      <h1>Hello, Team IKUZO!</h1>
    </>
  );
}

export default App;
