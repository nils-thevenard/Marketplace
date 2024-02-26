import React from "react";
import styles from "./courseCard.module.scss";

export default function CourseCard() {
  type category = "A" | "B" | "C";

  interface course {
    id: number;
    name: string;
    description: string;
    price: number;
    category: category;
  }

  const DATA: course[] = [
    {
      id: 0,
      name: "Nils",
      description: "blah blah",
      price: 100,
      category: "A",
    },
    { id: 1, name: "Jim", description: "blah blah", price: 100, category: "C" },
    { id: 2, name: "Tom", description: "blah blah", price: 100, category: "C" },
    { id: 3, name: "Sam", description: "blah blah", price: 100, category: "B" },
    { id: 4, name: "Bob", description: "blah blah", price: 100, category: "A" },
  ];

  const CourseCards: React.FC<{ data: course[] }> = ({ data }) => {
    return (
      <div className={styles.layout}>
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

  return (
    <div>
      <CourseCards data={DATA} />
    </div>
  );
}
