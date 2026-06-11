import {Routes, Route, useLocation} from 'react-router-dom'

//particles react
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles";
// if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import particles from './utils/particlesopt'





import Home from './Containers/home/index'
import About from './Containers/about/index'
import Resume from './Containers/resume/index'
import Portfolio from './Containers/portfolio/index'
import Contact from './Containers/contact/index'
import Skills from './Containers/skills/index'

import './App.scss'
import Navbar from './Components/Navbar'

function App() {
  const location = useLocation();
//   console.log(location);
  
  const renderParticleJsInHomePage = location.pathname== '/' 




 const [ init, setInit ] = useState(false);
     // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            await loadFull(engine);
            //await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        //console.log(container);
    };

  return (
   <div className="App">
    {/* {particles js} */}

     {
      renderParticleJsInHomePage && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particles}
        />
}  
     


   

    



    {/* navbar  */}
    <Navbar/>

    {/* {main page content} */}
 <div className='App__main-page-content'>
       <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
 </div>





   </div>
  )
}

export default App
