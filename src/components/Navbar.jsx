import Logo from "./Logo";
import {
  NavbarWrapper,
  NavLinkWrapper,
  LinkWrapper,
  NavLinkItem,
} from "../styles/Navbar.styled";

function Navbar() {
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
      <NavLinkWrapper>
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
      </NavLinkWrapper>
    </NavbarWrapper>
  );
}

export default Navbar;
