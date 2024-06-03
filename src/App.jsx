import { useState } from "react";
import CreatePost from "./components/CreatePost/CreatePost";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
  return (
    <Provider store={store}>
      <CreatePost></CreatePost>
    </Provider>
  );
}

export default App;