import React from 'react'
// import { getImageUrl } from '../../util'
import { getImageUrl } from '../../util';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
           <h1 className={styles.title}>Hi I'm Vaibhav </h1>
           <p className={styles.description}>
              I'm a full-stack developer with experience of creating different projects in MERN Stack.
              Solved 200+ @GFG  , 250+ @Codechep , 30+ @Coding Ninja DSA problems.
           </p>

           <a href='mailto:vaibhav.indure21@pccoepune.org' className={styles.contactBtn}>Contact Me</a>
           
        </div>
        <img className= {styles.heroImg} src={getImageUrl('hero/heroImage2.png')} alt='heroImg'></img> 
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} /> 
    </section>
  )
}

export default Hero
