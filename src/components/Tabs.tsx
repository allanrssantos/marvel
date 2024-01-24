import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

interface TabProps {
  isActive: boolean;
}

const StyledLi = styled.li<TabProps>`
  cursor: pointer;
  margin-right: 10px;
  padding: 8px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "#007bff" : "#e60000")};
  border-bottom: 2px solid ${(props) => (props.isActive ? "#007bff" : "transparent")};
  transition: color 0.3s, border-bottom 0.3s;

  a {
    color: ${(props) => (props.isActive ? "#007bff" : "#e60000")};
    text-decoration: none;
  }
`;

const TabsContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    border-bottom: 1px solid #ddd;
  }
`;

interface TabsProps {
  tabs: string[];
  onChangeTab: (tab: string) => void;
}


const Tabs: React.FC<TabsProps> = ({ tabs, onChangeTab }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const location = useLocation();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onChangeTab(tab);
  };

  const isTabsRoute = location.pathname !== "/";

  return isTabsRoute ? (
    <TabsContainer>
      <ul>
        {tabs.map((tab) => (
          <StyledLi
            key={tab}
            onClick={() => handleTabChange(tab)}
            isActive={tab === activeTab}
          >
           <Link to={`/${tab.toLowerCase()}`}>{tab}</Link>
          </StyledLi>
        ))}
      </ul>
    </TabsContainer>
  ) : null;
};

export default Tabs;
