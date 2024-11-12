import css from '../Expirience/Expirience.module.css'
import { experienceData } from "../../data/data"
export const Experience = () => {
   return <>
   <div id = "experience">
    <h2>My Experience</h2>
    <ul className = {css.expList}>
      {experienceData.map((data) =>
      <li key = {data.id} className = {css.expItem}>
        <h3>{data.title}</h3>
        <p>Location: {data.location}</p>
        <p>Description: {data.description}</p>
        <p>Date: {data.date}</p>
      </li>)}
     </ul>
   </div>
   </>
}