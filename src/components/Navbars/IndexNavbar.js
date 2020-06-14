
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
          >
            MentApp
          </NavbarBrand>

        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/about-page"
                target="_blank"

              >
                Therapy

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/support-page"
                target="_blank"

              >
                Support Groups

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  data-placement="bottom"
                  href="/chat-page"
                  target="_blank"

              >
                Chat room

              </NavLink>
            </NavItem>


            <NavItem>
              <NavLink
              href="/about-page"
                target="_blank"
              >
                Mental exercises

              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                  className="btn-round"
                  color="aliceblue"
                  target="_blank"

              >
                <a href="register-page">Log In</a>

              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"

                target="_blank"

              >
                <a href="register-page">Register</a>

              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
