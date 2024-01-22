import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyles from './styles/GlobalStyles';
import Tabs from './components/Tabs';
import CharacterList from './pages/CharacterList'; 
import Header from './components/Header';
import ComicList from './pages/ComicList';
import CreatorList from './pages/CreatorList';


const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = React.useState('Personagens');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Tabs tabs={['Personagens', 'Quadrinhos', 'Criadores']} onChangeTab={handleTabChange} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personagens" element={<CharacterList />} />
        <Route path="/quadrinhos" element={<ComicList />} />
        <Route path="/criadores" element={<CreatorList />} />
      </Routes>
    </Router>
  );
};

export default App;
