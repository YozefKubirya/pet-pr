

import css from '../Navigation/Navigation.module.css'
export const Navigation = () => {
   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
  
   return <>
   
   <a href = "#home" className = {css.headLink} onClick = {(e) => { e.preventDefault(); scrollToSection('home'); }} >
      Home
   </a>
   <a href = "#about" className = {css.headLink} onClick = {(e) => { e.preventDefault(); scrollToSection('about'); }}>
      About
   </a>
   <a href = "#projects"  className = {css.headLink} onClick = {(e) => { e.preventDefault(); scrollToSection('projects'); }}>
      Projects
   </a>
   <a href = "#skills" className = {css.headLink} onClick = {(e) => { e.preventDefault(); scrollToSection('skills'); }}>
      Skills
   </a>
   <a href = "#experience" className = {css.headLink} onClick = {(e) => { e.preventDefault(); scrollToSection('experience'); }}>
      Experience
   </a>
   <a href = "#contacts" className = {css.headLink} onClick = {(e) => { e.preventDefault(); scrollToSection('contacts'); }}>
      Contacts
   </a>
   </>
}