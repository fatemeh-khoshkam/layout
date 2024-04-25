import { useState } from "react";
import Logo from "./Logo";
import {
  NavbarWrapper,
  NavLinksWrapper,
  LinkWrapper,
  NavLinkItem,
  ResponsiveIcon,
  Overlay,
} from "../styles/Navbar.styled";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [active, setActive] = useState(false);

  const links = [
    {
      page: "Home",
      href: "/",
    },
    { page: "About", href: "/about" },
    { page: "Blog", href: "/blog" },
    { page: "Sign Up", href: "/signUp" },
  ];

  const closeMenuHandler = () => {
    setActive((preActive) => !preActive);
  };

  return (
    <NavbarWrapper>
      <Logo></Logo>
      <ResponsiveIcon icon={faBars} onClick={closeMenuHandler}></ResponsiveIcon>
      <Overlay
        onClick={closeMenuHandler}
        active={active ? "true" : "false"}
      ></Overlay>
      <NavLinksWrapper active={active ? "true" : "false"}>
        <ResponsiveIcon
          className="close"
          icon={faXmark}
          onClick={closeMenuHandler}
        ></ResponsiveIcon>
        {links.map((link) => (
          <LinkWrapper key={link.page}>
            <NavLinkItem
              key={link.page}
              to={link.href}
              activeclassname="active"
            >
              {link.page}
            </NavLinkItem>
          </LinkWrapper>
        ))}
      </NavLinksWrapper>
    </NavbarWrapper>
  );
}

export default Navbar;
