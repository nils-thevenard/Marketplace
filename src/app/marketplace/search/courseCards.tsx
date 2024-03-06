import { useState } from "react";
import styles from "./courseCard.module.scss";

import { Course } from "./data";
import SmallCard from "./smallCard";
import BigCard from "./bigCard";
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

  // console.log("the value of isExpanded:", isExpanded);

  return (
    <div>
      <div>
        {isExpanded === false && (
          <div
            onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
            key={course.id}
          >
            <SmallCard course={course} />
          </div>
        )}
      </div>

      <div>
        {isExpanded && (
          <div
            onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
            key={course.id}
          >
            <BigCard course={course} />
          </div>
        )}
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
