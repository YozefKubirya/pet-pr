import { myProjectsData } from "../../data/data"
import { ProjectItem } from "../ProjectItem/ProjectItem"
import css from './ProjectList.module.css'
export const ProjectsList = () => {
   
   return<>
   <div>
      <ul className = {css.projectList}>
         {myProjectsData.map((project)=>
         <li key = {project.id} className = {css.projectItem}>
            <ProjectItem title = {project.title} description = {project.description} functional = {project.functional} tags = {project.tags} imageUrl = {project.imageUrl} gitHubLink = {project.gitHubLink} projectLink = {project.projectLink}/>
         </li>)}
      </ul>
   </div>
   </>
}
