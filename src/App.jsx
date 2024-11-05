
import './App.css'
import { Layout } from './components/Layout/Layout'
import { HomePage } from './pages/HomePage/HomePage'
import { Suspense } from 'react'
// import { Routes,Route } from 'react-router-dom'
import { About } from './pages/About/About'
import { Projects } from './pages/Projects/Projects';
import { Skills } from './pages/Skills/Skills'
import { Experience } from './pages/Expirience/Experience'
import { Contacts } from './pages/Contacts/Contacts'
import { Footer } from './components/Footer/Footer'
function App() {
  
  return (
    <>
<Layout >
<Suspense fallback={<div>Loading.....</div>}>
{/* <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/skills' element={<Skills/>}/>
<Route path='/experience' element={<Experience/>}/>
<Route path='/contacts' element={<Contacts/>}/>
</Routes> */}
<HomePage/>
<About/>
<Projects/>
<Skills/>
<Experience/>
<Contacts/>
<Footer/>
</Suspense>

</Layout>
     
    </>
  )
}

export default App
