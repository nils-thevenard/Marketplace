import { useState } from "react";
import styles from "./courseCard.module.scss";
import { Course } from "./data";
// update logo to import corresponding logo
//_______________________________
// the on click function works by storing a function within the Brackets after set is expanded.
// the function simply takes the isExpanded and returns it as the opposite with the ! symbol.
// the reason i haven't had to write return {!isExpanded} is because we are only doing one operation
// and so the return is assumed
//_______________________________

//mapping out the array of objects and displaying as JSX
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  console.log("the value of isExpanded:", isExpanded);

  return (
    <div>
      {isExpanded === false && (
        <div
          onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
          className={styles.card}
          key={course.id}
        >
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
              <div>
                Description: this is lots of extra text being used as a place
                holder {course.description}
              </div>
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
      )}
      {/* ___________________________expanded card________________________________________ */}
      {isExpanded && (
        <div
          onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
          className={styles.expandedCard}
          key={course.id}
        >
          <div className={styles.category}>
            Category {course.category} {course.company}
          </div>

          <div className={styles.content}>
            {/* _______ */}

            <div className={styles.leftContent}>
              <div className={styles.description}>
                Description: this is lots of extra text being used as a place
                holder {course.description}
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
                <div>Time: Within X weeks of enrollment</div>
              </div>
              <div className={styles.buttonBox}>
                <button className={styles.enrollButton}>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CourseCards: React.FC<{ data: Course[] }> = ({ data }) => {
  return (
    <div className={styles.courseCardsContainer}>
      {data.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  );
};

export default CourseCards;
