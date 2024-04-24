import Logo from "./Logo";
import {
  NavbarWrapper,
  NavLinkWrapper,
  NavLink,
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
          <NavLink key={link.page}>
            <NavLinkItem to={link.href}>{link.page}</NavLinkItem>
          </NavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
}

export default Navbar;
