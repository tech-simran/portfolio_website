import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavLink = ({ href, title, className }) => {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      className='block py-2 pr-4 pl-2 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
    >
      {title}
    </ScrollLink>
  );
}

export default NavLink;
