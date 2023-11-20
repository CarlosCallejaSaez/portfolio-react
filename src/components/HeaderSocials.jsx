import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/CarlosCallejaSaez/" target="_blank" rel="noreferrer" ><BsLinkedin size="30px" /> </a>
      <a href="https://github.com/CarlosCallejaSaez" target="_blank" rel="noreferrer" ><FaGithub size="30px" /></a>
    </div>
  )
}

export default HeaderSocials