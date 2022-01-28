import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { scroller } from "react-scroll";

interface Props {
  scrolltotop: boolean;
}

function ScrollTop({ scrolltotop }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={scrolltotop ? "c-scroll-top" : "c-scroll-top-disable"}>
      <span onClick={handleClick} role="presentation">
        <i className="fas fa-chevron-up c-scroll-top-icon"></i>
      </span>
    </div>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [scrolltotop, setScrolltotop] = useState(false);
  const [nosticky, setNosticky] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });

  const handleScroll = () => {
    var header: any = document.getElementsByClassName("c-nav-header");

    if (window.scrollY > 90) {
      setScrolltotop(true);
      header[0].style.borderBottom = "none";
      window.innerWidth <= 1212 ? setSticky(false) : setSticky(true);
    } else if (window.scrollY < 90) {
      header[0].style.borderBottom = "1px solid rgba(117, 153, 162, 0.3)";
      setSticky(false);
      setScrolltotop(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setNosticky(2);
    } else if (window.innerWidth <= 1212 && window.innerWidth > 768) {
      setNosticky(1);
    } else {
      setNosticky(0);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    handleScroll();
  }, []);
  const scrollToSection = (id: string) => {
    scroller.scrollTo(id, {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md" className="py-0">
        <div className="c-container c-nav-header">
          <NavbarBrand href="/">
            {nosticky === 1 ? (
              <span className="c-logo-large">
                <img src="/static/svg/logo.svg"></img>
                <span className="ms-2">Zilionixx</span>
              </span>
            ) : nosticky === 2 ? (
              <span className="c-logo-large">
                <img src="/static/svg/logo.svg"></img>
                <span className="ms-2">Zilionixx</span>
              </span>
            ) : sticky ? (
              <span className="c-logo-small">
                <img src="/static/svg/logo.svg"></img>
                <span className="ms-2">Zilionixx</span>
              </span>
            ) : (
              <span className="c-logo-large">
                <img src="/static/svg/logo.svg"></img>
                <span className="ms-2">Zilionixx</span>
              </span>
            )}
          </NavbarBrand>
          <div onClick={toggle} className="c-toggler">
            <span className="menu-line-1"></span>
            <span className="menu-line-2"></span>
            <span className="menu-line-3"></span>
          </div>
          <Nav className="c-navbar-nav" navbar>
            <NavItem>
              <NavLink onClick={() => scrollToSection("About ZNX")}>
                About ZNX
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection("Our Tokens")}>
                Our ZNX
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection("crowdsale")}>
                Crowdsale
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection("Roadmap")}>
                Roadmap
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection("FAQ")}>FAQ</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      {isOpen && (
        <Nav className="c-navbar-res" navbar>
          <NavItem>
            <NavLink onClick={() => scrollToSection("About ZNX")}>
              About ZNX
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("Our Tokens")}>
              Our ZNX
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("crowdsale")}>
              Crowdsale
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("Roadmap")}>
              Roadmap
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection("FAQ")}>FAQ</NavLink>
          </NavItem>
        </Nav>
      )}
      <div id="back-to-top-anchor" />
      <ScrollTop scrolltotop={scrolltotop} />
    </div>
  );
};

export default Header;
