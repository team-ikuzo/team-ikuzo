import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <Globalstyle />
      <h1>Hello, Team IKUZO!</h1>
    </>
  );
}

export default App;
