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
        <Link to="/Login">     <h3 className={styles.divspace}>Login</h3></Link>
            <Link to="/Products"> <h3 className={styles.divspace}>Shop</h3></Link>
           
       
        </div>

    </div>
  )
}

export default Navbar