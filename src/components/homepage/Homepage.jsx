import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from "./Homepage.module.css"
import SimpleImageSlider from "react-simple-image-slider";
const Homepage = () => {
    const images = [
        { url: "https://www.w3schools.com/howto/img_nature_wide.jpg" },
        { url: "https://www.w3schools.com/howto/img_snow_wide.jpg" },
        { url: "https://www.w3schools.com/howto/img_lights_wide.jpg" },
        { url: "https://www.w3schools.com/howto/img_mountains_wide.jpg" },
        {
          url:
            "https://images.unsplash.com/photo-1478827217976-7214a0556393?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      ];
  return (
   
    <div> <Navbar/>

<SimpleImageSlider
        showNavs="true"
        width={1200}
        height={400}
        images={images}
      />     
        <Footer/>
        </div>
  )
}

export default Homepage