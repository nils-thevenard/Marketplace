"use client";

// to lower case on both sides for search
// search to be held in state
// input value held in state

//have button options for a b c
// on click set stare a or whatever
// render the new array filters course cards

import React, { useState } from "react";
import styles from "./courseCard.module.scss";
import DATA from "./data";

export default function CourseCard() {
  const [letter, setLetter] = useState<string>("");

  // have interface imported from data file
  type category = "A" | "B" | "C";
  interface course {
    id: number;
    name: string;
    description: string;
    price: number;
    category: category;
  }

  // filtering the array depending on the value of letter
  const setCourseA: course[] = DATA.filter((course) => {
    return course.category === letter;
  });

  const handleSetLetterA = () => {
    setLetter("A");
  };
  const handleSetLetterB = () => {
    setLetter("B");
  };
  const handleSetLetterC = () => {
    setLetter("C");
  };

  //mapping out the array of objects and displaying as JSX
  const CourseCards: React.FC<{ data: course[] }> = ({ data }) => {
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

  return (
    <div>
      <CourseCards data={setCourseA} />

      <button onClick={handleSetLetterA}>Category A</button>
      <button onClick={handleSetLetterB}>Category B</button>
      <button onClick={handleSetLetterC}>Category C</button>
    </div>
  );
}
