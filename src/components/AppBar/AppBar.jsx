import { Navigation } from "../Navigation/Navigation"
import css from '../AppBar/AppBar.module.css'
export const AppBar = () =>{
   return <>
   <header className = {css.header}>
      <Navigation/>
   </header>
   </>
}