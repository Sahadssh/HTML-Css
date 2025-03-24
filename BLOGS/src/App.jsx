import Header from "./Components/Header";
import Content from "./Components/Content";
import Pages from "./Components/Pages";
import { AppProvider } from "./context/AppContext";
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
