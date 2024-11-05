import { AppBar } from "../AppBar/AppBar"
import css from '../Layout/Layout.module.css'
export const Layout=({children})=>{
   return <>
<div className={css.container}>
   <AppBar/>
{children}
</div>
   
   
   </>
}