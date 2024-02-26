import React from "react";
import styles from "./courseCard.module.scss";

export default function CourseCard() {
  type category = "A" | "B" | "C";

  interface course {
    id: number;
    Name: string;
    Description: string;
    price: Number;
    category: category;
  }

  const data = [
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
  ];

  const courseCard = data.map((data) => (
    <div className={styles.card} key={data.id}>
      <div className={styles.heading}>{data.name}</div>
      <div className={styles.content}>
        <div>{data.description}</div>
        <div>{data.price}</div>
        <div>{data.category}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className={styles.layout}>{courseCard}</div>
    </div>
  );
}
