import Logo from "./Logo";
import { StyledLink } from "../styles/Navbar.styled";

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
    <>
      <Logo></Logo>
      {links.map((link) => (
        <StyledLink key={link.page} to={link.href}>
          {link.page}
        </StyledLink>
      ))}
    </>
  );
}

export default Navbar;
