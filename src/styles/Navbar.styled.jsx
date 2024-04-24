import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  align-self: start;
  width: 100px;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffd43e6b;
  padding: 1.25rem 10rem;
`;

const NavLinkWrapper = styled.ul`
  display: flex;
  gap: 3rem;
`;

const NavLink = styled.li``;

const NavLinkItem = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #202121cf;
  transition: all 0.2s;

  &:hover {
    color: #d81717;
  }
`;

export { LogoImg, NavbarWrapper, NavLinkItem, NavLinkWrapper, NavLink };
