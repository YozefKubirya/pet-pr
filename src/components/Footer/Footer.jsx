import css from './Footer.module.css'
export const Footer = () => {
   return<>
   <footer>
      <small>
         &copy; 2024 Yozef. All rights reserved.
      </small>
      <p className={css.footerText}><span className='font-semibold'>About this website:</span> built with React,  TypeScript, Vercel hosting.</p>
   </footer>
   </>
}