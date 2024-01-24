import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyles";
import Tabs from "./components/Tabs";
import Header from "./components/Header";
import List from "./pages/List";


const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = React.useState("Personagens");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <GlobalStyles />
      <Header />      
      <Tabs
        tabs={["Personagens", "Quadrinhos", "Criadores"]}
        onChangeTab={handleTabChange}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/personagens"
          element={<List key="characters" route="characters" />}
        />
        <Route
          path="/quadrinhos"
          element={<List key="comics" route="comics" />}
        />
        <Route
          path="/criadores"
          element={<List key="creators" route="creators" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
