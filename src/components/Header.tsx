import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import img from "../styles/img/marvel-logo.png";

const HeaderContainer = styled.div`
  background-color: #007bff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const MenuContainer = styled.div<{ "data-showmenu": boolean }>`
  display: ${(props) => (props["data-showmenu"] ? "flex" : "none")};
  align-items: center;
`;

const MenuButton = styled.div`
  cursor: pointer;
  padding: 10px;
  font-size: 1.5rem;
  color: #fff;
`;

const MenuItem = styled(Link)`
  color: #fff;
  width: 100px;
  text-decoration: none;
  margin-top: 6px;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-top: 8px;
    border-top: 1px solid #fff;
    padding-top: 8px;
  }
`;

const MobileMenu = styled.div<{ "data-isopen": boolean }>`
  position: absolute;
  top: 70px;
  right: 0;
  background-color: #007bff;
  padding: 10px;
  display: ${(props) => (props["data-isopen"] ? "block" : "none")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { pathname } = useLocation();
  const [, , removeCookies] = useCookies(["public", "private"]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    removeCookies("public");
    removeCookies("private");
    closeMobileMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, closeMobileMenu]);

  return (
    <HeaderContainer>
      <Logo src={img} alt="Marvel Logo" />
      <MenuContainer data-showmenu={pathname !== "/"}>
        <MenuButton onClick={handleMobileMenuToggle}>☰</MenuButton>
        <MobileMenu ref={menuRef} data-isopen={isMobileMenuOpen}>
          <MenuItem to="/" onClick={closeMobileMenu}>
            Mudar Keys
          </MenuItem>
          <MenuItem to="/" onClick={handleLogout}>
            Sair
          </MenuItem>
        </MobileMenu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
