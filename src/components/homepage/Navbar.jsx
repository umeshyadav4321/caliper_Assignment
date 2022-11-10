import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.maincontainer}>
        <div className={styles.containerone}>
        <h1>Acmefresh</h1>

        </div>
      
        <div className={styles.containertwo}>
        <Link to="/Login">     <h5 className={styles.divspace}>Login</h5></Link>
            <Link to="/Products"> <h5 className={styles.divspace}>Shop</h5></Link>
           
       
        </div>

    </div>
  )
}

export default Navbar