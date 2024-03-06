import React, { useState } from "react";
import styles from "./courseCard.module.scss";
import { Course } from "./data";

const SmallCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeading}>
        <div className={styles.title}>{course.company}</div>
        <div className={styles.logo}> LOGO</div>
      </div>
      <div className={styles.content}>
        <div className={styles.category}>Category {course.category}</div>

        <div className={styles.unitStandard}>
          <div>NZQA 11551</div>
          <div>Level 5 (10 credits)</div>
        </div>
        <div className={styles.descriptionAndTimeFrame}>
          <div>Time: Within X weeks of enrollment</div>
          <div>Description: {course.description}</div>
        </div>
      </div>
      <div className={styles.costAndEnroll}>
        <div className={styles.cost}>
          <h1>${course.price}</h1>
          <h2>(plus GST)</h2>
        </div>

        <button className={styles.enrollButton}>Enroll Now</button>
      </div>
    </div>
  );
};

export default SmallCard;
