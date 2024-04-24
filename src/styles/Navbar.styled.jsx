import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const LinkWrapper = styled.li`
  transition: all 0.2s;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: #202121cf;
  transition: all 0.2s;

  &:hover {
    color: #d81717;
  }

  &.${(props) => props.activeclassname} {
    background-color: #d81717;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    color: snow;
  }
`;

export { LogoImg, NavbarWrapper, NavLinkItem, NavLinkWrapper, LinkWrapper };
