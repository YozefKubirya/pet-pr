import { Link } from "react-router-dom"
import css from './ProjectItem.module.css'

export const ProjectItem = ({title,description,functional,tags,imageUrl,gitHubLink,projectLink}) => {
   
return<>
<div className = {css.projectDiv}>
   <div className = {css.projectContent}>
      <h3 >{title}</h3>
      <p className = {css.projectTitle}>{description}</p>
      <p className = {css.projectTitle}>Functional: <span>{functional}</span></p>
      <Link to = {gitHubLink} className = {css.linkGT}>Click here to move github</Link>
      <ul className = {css.tagsList}>
         {tags.map((tag, index)=>(
            <li key = { index } className = {css.tagsItem}>
               { tag }
            </li>
         ))}
      </ul>
   </div>

   <Link to = {projectLink} >
   <img src = {imageUrl} alt="image project"   className = {css.projectImg} />
   </Link>  
</div>
</>
}