import React from 'react'
import Productcard from './Productcard'
import styles from "./Products.module.css"

const Products = () => {
  return (
    <>
    
    <div>
        <h1>Our Populr listings</h1>

        </div>
    <div className={styles.maincontainer}>
        
 
        <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />
      <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />
      <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />
      <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />
      <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />
      <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />

      <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />
      <Productcard
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtun6qqPMDb0z7FphAigDy_8u45OB4E9DQ7Qsp6w8KQ&s"
      name="spinch"
      price="300"
      />
    </div>
    </>
  )
}

export default Products