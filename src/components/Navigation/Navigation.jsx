import { Link } from "react-router-dom"

import css from '../Navigation/Navigation.module.css'
export const Navigation=()=>{
   return <>
   {/* <NavLink to='/' >
   Home
   </NavLink>

   <NavLink to='/about'>
      About
   </NavLink>

   <NavLink to='/projects'>
      Projects
   </NavLink>
   <NavLink to='/skills'>
Skills
   </NavLink>
   <NavLink to='/experience'>
Experience
   </NavLink>
   <NavLink to='/contacts'>
Contacts
   </NavLink> */}
   <Link to='/' onClick={()=>{
      const element=document.getElementById('home')
      element.scrollIntoView({
         behavior:'smooth'
      })
   }} className={css.headLink}>
   Home
   </Link>

   <Link to='/about' onClick={()=>{
      const element=document.getElementById('about')
      element.scrollIntoView({
         behavior:'smooth'
      })
   }} className={css.headLink}>
      About
   </Link>

   <Link to='/projects' onClick={()=>{
      const element=document.getElementById('projects')
      element.scrollIntoView({
         behavior:'smooth'
      })
   }} className={css.headLink}>
      Projects
   </Link>
   <Link to='/skills' onClick={()=>{
      const element=document.getElementById('skills')
      element.scrollIntoView({
         behavior:'smooth'
      })
   }} className={css.headLink}>
Skills
   </Link>
   <Link to='/experience' onClick={()=>{
      const element=document.getElementById('experience')
      element.scrollIntoView({
         behavior:'smooth'
      })
   }} className={css.headLink}>
Experience
   </Link>
   <Link to='/contacts' onClick={()=>{
      const element=document.getElementById('contacts')
      element.scrollIntoView({
         behavior:'smooth'
      })
   }} className={css.headLink}>
Contacts
   </Link>
   </>
}