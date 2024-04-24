import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const NavLinksWrapper = styled.ul`
  display: flex;
  gap: 3rem;

  @media (max-width: 704px) {
    display: ${(props) => (props.active === "true" ? "flex" : "none")};
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    color: #0a172e;
    background-color: #e66464;
    min-height: 100%;
    width: 30%;
    justify-content: center;
  }
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

const ResponsiveIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  color: #d81717;
  font-size: 2rem;
  cursor: pointer;

  ${(props) =>
    (props["data-icon"] =
      "xmark" &&
      `
        position: fixed;
        top: 2rem;
   `)}

  .closeIcon {
    position: fixed;
    top: 2rem;
  }

  @media (max-width: 704px) {
    display: block;
  }
`;

export {
  LogoImg,
  NavbarWrapper,
  NavLinkItem,
  NavLinksWrapper,
  LinkWrapper,
  ResponsiveIcon,
};
