
import React from 'react'
import styles from "./Homepage.module.css"

const About = () => {
  return (
    <div className={styles.aboutcontainer}>
        <div><h2>About our Mission</h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam eum, 
            numquam dolorem blanditiis cupiditate facere id asperiores adipisci tenetur totam fugiat molestiae iusto voluptates provident. 
            Eveniet repellendus nostrum sapiente beatae delectus voluptatem deleniti iure, sunt harum suscipit velit dolorem!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus natus reiciendis inventore asperiores adipisci dolor magni quis quisquam distinctio, omnis, autem sed iste tenetur id
             iusto repudiandae obcaecati temporibus! Quibusdam, magnam earum? Veniam maxime ipsam consectetur 
             libero porro esse vel.</div>
        <div>
            <img className={styles.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvt4yWLvj5ofcvt-mRi1qgfVt7X8YHDa2KV1qnaGRqtA&s" alt="" />
        </div>
    </div>
  )
}

export default About