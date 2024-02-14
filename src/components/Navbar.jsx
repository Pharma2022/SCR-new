import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { navLinks } from '../data';
import { Link } from 'react-router-dom';

const NavItem = ({ active, href, title, onClick, id }) => (
  <li className={`nav-item ${active ? 'active' : ''}`}>
    <a className="nav-link" onClick={onClick} href={href} id={id} target="_blank">
      {title}
    </a>
  </li>
);

export const NavItemLink = ({ to, children }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [links, setLinks] = useState(navLinks);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (ID) => {
    setLinks((prev) =>
      prev.map((item) => ({
        ...item,
        active: item.id === ID ? true : false,
      }))
    );
  };

  const toggleNavbar = () => setExpanded((prev) => !prev);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg  navbar-dark bg-dark ${!expanded ? 'navbar-center' : ''}`}>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse ${!expanded ? 'collapse' : ''}`}>
        <ul className="navbar-nav ml- text-left">
          <li className="navbar-brand" onClick={toggleNavbar}>
            Clinical applications
          </li>
          {links.map(({ active, href, title, id }) => (
            <NavItem active={active} href={href} title={title} key={nanoid()} onClick={() => handleChange(id)} />
          ))}
          <NavItemLink to={'/'}>Home</NavItemLink>
          {/* <NavItemLink to={'/clozapine'}>Clozapine</NavItemLink> */}
          <NavItemLink to={'/contact'}>Contacts</NavItemLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
