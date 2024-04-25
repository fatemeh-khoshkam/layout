import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #ffd43e6b;
  width: 100%;
  padding: 1.25rem 10rem;
  display: flex;
  gap: 2rem;
`;

const FooterLinkItem = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: #202121cf;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #d81717;
  }
`;

export { FooterStyle, FooterLinkItem };
