import { useState } from "react";
import Logo from "./Logo";
import {
  NavbarWrapper,
  NavLinksWrapper,
  LinkWrapper,
  NavLinkItem,
  ResponsiveIcon,
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

  return (
    <NavbarWrapper>
      <Logo></Logo>
      <ResponsiveIcon
        icon={faBars}
        onClick={() => {
          setActive((preActive) => !preActive);
        }}
      ></ResponsiveIcon>
      <NavLinksWrapper active={active ? "true" : "false"}>
        <ResponsiveIcon
          className="closeIcon"
          icon={faXmark}
          onClick={() => {
            setActive((preActive) => !preActive);
          }}
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
