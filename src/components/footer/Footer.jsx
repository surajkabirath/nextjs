import Image from 'next/image'
import React from 'react'
import styles from "./footer.module.css";
const Footer = () => {
  console.log("Suraj Kabirath")
  return (
    <div className={styles.container}>
      <div>©2023 SKBlog. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Suraj Kabirath Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Suraj Kabirath" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Suraj Kabirath" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Suraj Kabirath" />
      </div>
    </div>
  )
}

export default Footer