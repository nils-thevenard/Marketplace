import styles from "./courseCard.module.scss";
import { Course } from "./data";

//mapping out the array of objects and displaying as JSX
const CourseCards: React.FC<{ data: Course[] }> = ({ data }) => {
  return (
    <div className={styles.CourseCards}>
      {data.map((data) => (
        <div className={styles.card} key={data.id}>
          <div className={styles.heading}>{data.name}</div>
          <div className={styles.content}>
            <div>Description: {data.description}</div>
            <div>Price: {data.price}</div>
            <div>Category: {data.category}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
