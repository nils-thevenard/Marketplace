import React, { useState } from "react";
import styles from "./courseCard.module.scss";
import { Course } from "./data";

const BigCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className={styles.expandedCard}>
      <div className={styles.category}>
        Category {course.category} {course.company}
      </div>

      {/* _______ */}

      <div className={styles.leftContent}>
        <div className={styles.description}>
          Description: {course.description}
        </div>
        <div className={styles.costAndEnroll}>
          <div className={styles.cost}>
            <h1>${course.price}</h1>
            <h2>(plus GST)</h2>
          </div>
        </div>
      </div>
      {/* ___________ */}
      <div className={styles.rightContent}>
        <div className={styles.logo}> LOGO</div>
        <div className={styles.unitStandard}>
          <div>NZQA expanded</div>
          <div>Level 5 (10 credits)</div>
        </div>

        <div className={styles.descriptionAndTimeFrame}>
          Time: Within X weeks of enrollment
        </div>

        <div className={styles.buttonBox}>
          <button className={styles.enrollButton}>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
