import { FooterStyle, FooterLinkItem } from "../styles/Footer.styled";

function Footer() {
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
    <FooterStyle>
      {links.map((link) => (
        <FooterLinkItem key={link.page} to={link.href}>
          {link.page}
        </FooterLinkItem>
      ))}
    </FooterStyle>
  );
}

export default Footer;
