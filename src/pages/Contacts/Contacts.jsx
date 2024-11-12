import css from './Contacts.module.css'
import { ACCESS_KEY } from "../../contactsApi/contactsApi";

export const Contacts = () => {
   const formSubmit = async(event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append("access_key", `${ACCESS_KEY}`);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const res = await fetch("https://api.web3forms.com/submit",
         {method: "POST",
            headers:{
               "Content-Type": "application/json",
               Accept: "application/json"
            },
            body: json}).then((res) => res.json());

            if (res.success) {
               console.log("Success", res);
         }
            event.target.reset()
   }
   return <>
   <div id = "contacts">
      <h2>My Contacts</h2>
      <p className = {css.inputText}>Please contact me directly to my email:
         <a href = 'mailto:ykubirya@gmail.com'>
            <span className = {css.emailSpan}> ykubirya@gmail.com</span>
         </a> or through this form.
      </p>
      <form onSubmit = {formSubmit} className = {css.contactForm}>
         <label htmlFor = "name" className = {css.inputText}>Your Name</label>
         <input className = {css.input} type = "text"  placeholder = "Please write your name"  name = "name" required />

         <label htmlFor = "email" className = {css.inputText}>Your Email</label>
         <input className = {css.input} type = "email"  placeholder = "Please write your email"  name = "email" required />

         <label htmlFor = "message" className = {css.inputText}>Message</label>
         <textarea name = "message" className = {css.textArea} required></textarea>
         
         <button type = "submit" className = {css.formBtn}>Submit</button>
      </form>
   </div>
   </>
}