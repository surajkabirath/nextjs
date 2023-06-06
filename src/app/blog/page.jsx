import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css"
const Blog = () => {
  return (
    <>
    <Link href={`/blog/testId`} className={styles.container} >
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>PhotoGraphy</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          itaque voluptatibus qui voluptatum tempore delectus nemo accusantium
          ex quisquam doloribus inventore nihil perferendis quia iure eos fugit
          quod est facere?
        </p>
      </div>
    </Link>
    <Link href={`/blog/testId`} className={styles.container} >
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>PhotoGraphy</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          itaque voluptatibus qui voluptatum tempore delectus nemo accusantium
          ex quisquam doloribus inventore nihil perferendis quia iure eos fugit
          quod est facere?
        </p>
      </div>
    </Link>
    <Link href={`/blog/testId`} className={styles.container} >
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>PhotoGraphy</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          itaque voluptatibus qui voluptatum tempore delectus nemo accusantium
          ex quisquam doloribus inventore nihil perferendis quia iure eos fugit
          quod est facere?
        </p>
      </div>
    </Link>
    </>
  );
};

export default Blog;
