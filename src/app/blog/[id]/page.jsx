import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
const BlogPost = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Photography</h1>
        <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam fugit ratione beatae harum repellat quia amet saepe ducimus, asperiores incidunt aperiam a sunt reiciendis laboriosam quas soluta? Corrupti accusantium laborum ullam. Ea doloremque libero obcaecati saepe earum impedit, cum ad enim possimus dolores perferendis nam praesentium. Ducimus quod veniam ratione.
        </p>
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>Suraj Kabirath</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, dicta maiores explicabo sapiente id qui! Cumque optio tenetur voluptas omnis pariatur laborum et aspernatur aperiam sint tempora rem harum deserunt maxime amet animi totam error odit consectetur, laudantium accusantium repellendus nesciunt. Quasi modi facilis voluptas tempore maxime nam, est, nihil, illo molestias placeat beatae mollitia. Voluptatem, sed nam adipisci laborum aliquid nihil consequatur culpa deleniti! Quos, corrupti reiciendis enim hic, commodi repellat incidunt qui aspernatur consectetur eius laudantium. Necessitatibus consequuntur alias, ex excepturi quidem nostrum repellat aliquam voluptatibus atque tempore nulla magnam reiciendis distinctio delectus error ipsum officiis ducimus iste.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio iusto atque praesentium dolorem adipisci fuga, vitae cumque ullam dignissimos obcaecati voluptatum dolorum sint ex reiciendis debitis numquam aliquam optio pariatur rerum nisi unde, accusantium eveniet maxime. Officia velit cum quasi adipisci saepe ipsa atque blanditiis minus eos similique, nam quae sunt. Ad, quaerat similique. Explicabo nesciunt, mollitia omnis quam non blanditiis quis placeat quaerat harum illum iste debitis molestias illo quae ab suscipit voluptate laudantium cumque eos hic a odio facilis sit! Exercitationem, aperiam. Laudantium tempora blanditiis tempore unde in. Asperiores cupiditate expedita animi exercitationem iusto magni quasi voluptatem.
      </p>
    </div>
  </div>
  )
}

export default BlogPost