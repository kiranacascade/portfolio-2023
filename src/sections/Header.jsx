import React, { useState, useEffect } from "react";

export default function Header() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(true); // Initialize as true for desktop view

  const handleScroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
    setShowMenu(!isHamburgerActive);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      // Adjust the breakpoint as needed
      setShowMenu(false); // Hide the menu on small screens
      setIsHamburgerActive(false); // Reset hamburger active state
    } else {
      setShowMenu(true); // Always show the menu on large screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10  ${isNavbarFixed ? "navbar-fixed box" : ""}`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div data-aos="fade-down" className="px-4">
            <a href="#home" className="font-bold text-lg text-primary block py-6 transition duration-300">
              KC
            </a>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" onClick={toggleHamburger} className={`block absolute right-4 md:hidden ${isHamburgerActive ? "hamburger-active" : ""}`}>
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              className={`${
                isHamburgerActive || showMenu // Show menu when hamburger is active or showMenu is true (large screen)
                  ? "absolute py-5 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none"
                  : "hidden"
              }`}
            >
              <ul data-aos="fade-down" className="block md:flex">
                <li className="group">
                  <a href="#home" className="text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary">
                    Home
                  </a>
                </li>
                <li className="group">
                  <a href="#about" className="text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary">
                    About
                  </a>
                </li>
                <li className="group">
                  <a href="#projects" className="text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary">
                    Projects
                  </a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-base text-dark py-2 mx-8 md:mx-4 flex group-hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
