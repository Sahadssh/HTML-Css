// src/App.jsx

import Header from "./Components/Header";
import Content from "./Components/Content";
import Pages from "./Components/Pages";
import { AppProvider } from "./Context/AppContext";
import "./styles.css";

function App() {
  return (
    <AppProvider>
      <Header />
      <Content />
      <Pages />
    </AppProvider>
  );
}

export default App;
