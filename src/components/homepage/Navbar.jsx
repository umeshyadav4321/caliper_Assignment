import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.maincontainer}>
        <div className={styles.containerone}>
        <h1>Acmefresh</h1>

        </div>
      
        <div className={styles.containertwo}>
            <h5 className={styles.divspace}>Shop</h5>
            <h5 className={styles.divspace}>Login</h5>
        </div>

    </div>
  )
}

export default Navbar