import React from 'react'
import { getImageUrl } from '../../util'
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImg.jpg')} alt='about image'></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorImg.png')} alt='cursorIcon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Frontend Developer 
                        </h3>
                        <p> 
                            I'm a frontend developer with in building and optimized sites. 
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverImg.png')} alt='cursorIcon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            Backend Developer 
                        </h3>
                        <p> 
                            I have developed backend functionalities of 5+ websites. 
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/UI.png')} alt='cursorIcon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>
                            UI Designer 
                        </h3>
                        <p> 
                            I have developed UI of 10+ websites which having multiple landing pages.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
