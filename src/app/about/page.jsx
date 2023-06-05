import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            cupiditate nisi fuga eos minus animi in provident est corporis.
            Aliquid aut, a qui iste, nulla assumenda saepe voluptate expedita
            officiis quasi explicabo delectus nesciunt dicta maiores sequi
            asperiores dolores tempora mollitia magni. Possimus vitae, facere
            soluta assumenda unde, enim esse similique eum autem debitis, nobis
            hic eos. Provident esse impedit, nihil aspernatur facere ea ad odit.
            Dolor aliquam officia alias.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quos
            beatae enim voluptatum reiciendis tempore quae quibusdam, totam
            earum aliquam inventore possimus magni accusantium ex officia
            officiis vitae ad dolor. Harum eligendi magni nisi earum, velit
            temporibus vitae voluptatum similique fuga dolor quo, qui corrupti
            ipsa voluptatibus vel distinctio consequuntur.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
