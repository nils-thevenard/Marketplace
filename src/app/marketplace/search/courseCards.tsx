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

  return (
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
        <div>Description: {course.description}</div>
        <div>Price: {course.price}</div>
        <div>Category: {course.category}</div>
      </div>

      <div className={styles.buttonParent}>
        <div>Enroll Now</div>

        {isExpanded && <div>hello</div>}
      </div>
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
