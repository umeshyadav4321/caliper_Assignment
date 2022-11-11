import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styles from "./Productcard.module.css"

const Productcard = (props) => {
  return (
    <div className={styles.maincontainer} >
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <h3> ₹{props.price}</h3>
        <button className={styles.button}>Add to cart</button>




    </div>
  )
}

export default Productcard