import React from 'react'
import { getImageUrl } from '../../util'
import styles from './Contact.module.css';
const Contact = () => {
  return (
    <footer id='contact' className={styles.container} >
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email'/>
                <a href='mailto:vaibhav.indure21@pccoepune.org'>Vaibhav.indure21@pccoepune.org</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkedin'/>
                <a href='https://www.linkedin.com/in/vaibhav-indure18/'>LinkedIn</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github'/>
                <a href='https://github.com/vaibhavindure188'>Github</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
