import React from 'react'
import Productcard from './Productcard'
import styles from "./Products.module.css"

const Products = () => {
  return (
    <>
    
    <div>
        <h1>Our Populer listings</h1>

        </div>
    <div className={styles.maincontainer}>
        
 
        <Productcard
      img="https://picsum.photos/160/160"
      name="Spinch"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Potato"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Watermelom"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Grapes"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Reddish"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="carrot"
      price="300"
      />

      <Productcard
      img="https://picsum.photos/160/160"
      name="Beans"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="spinch"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Qualiflower"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Alovera"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Tomato"
      price="300"
      />
      <Productcard
      img="https://picsum.photos/160/160"
      name="Tea"
      price="300"
      />

    </div>
    </>
  )
}

export default Products