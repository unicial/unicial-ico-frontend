import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { scroller } from "react-scroll";

interface Props {
  sticky: boolean;
}

function ScrollTop({ sticky }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={sticky ? "c-scroll-top" : "c-scroll-top-disable"}>
      <span onClick={handleClick} role="presentation">
        <i className="fas fa-chevron-up c-scroll-top-icon"></i>
      </span>
    </div>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [nosticky, setNosticky] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      window.innerWidth <= 1212 ? setSticky(false) : setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setNosticky(2);
    } else if (window.innerWidth <= 1212 && window.innerWidth > 768) {
      setNosticky(1);
    } else {
      setNosticky(0);
    }
  };
  const toggleModal = () => {
    setIsOpen(false);
  };

  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current !== event.target) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

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
      <Navbar light expand="md">
        <div className="c-container c-nav-header">
          <NavbarBrand href="/">
            {nosticky === 1 ? (
              <img
                src="/static/images/logo_large.png"
                className="c-logo-large"
              ></img>
            ) : nosticky === 2 ? (
              <img
                src="/static/images/logo_res.png"
                className="c-logo-large"
              ></img>
            ) : sticky ? (
              <img
                src="/static/images/logo_small.png"
                className="c-logo-small"
              ></img>
            ) : (
              <img
                src="/static/images/logo_large.png"
                className="c-logo-large"
              ></img>
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
        <Nav className="c-navbar-res" navbar forwardref={ref}>
          <NavItem>
            <NavLink href="/">About ZNX</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#feature">Our ZNX</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#service">Crowdsale</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">Roadmap</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">News</NavLink>
          </NavItem>
        </Nav>
      )}
      <div id="back-to-top-anchor" />
      <ScrollTop sticky={sticky} />
    </div>
  );
};

export default Header;
