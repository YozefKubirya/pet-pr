import { mySkillsData } from "../../data/data"
import css from './Skills.module.css'
export const Skills = () => {
return <>
<div id = "skills" >
   <h2 className = {css.skillTitle}>My skills </h2>
   <ul className = {css.skillsList}>
      {mySkillsData.map((skill)=>{
         return <li className = {css.skillsItem} key = {skill}>{skill}</li>
      })}
   </ul>
</div>
</>
}