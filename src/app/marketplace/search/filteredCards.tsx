"use client";

import React from "react";
import { useState } from "react";
import CourseCards from "./courseCards";
import DATA, { Category, Course } from "./data";
import styles from "./courseCard.module.scss";

export default function FilteredCards() {
  // I could set use state as just a string but by importing Category and declaring it as the type i have the type safety of only being able to use the sect category's
  const [letter, setLetter] = useState<Category | "">("");

  // filtering the array depending on the value of letter
  const filteredData: Course[] = DATA.filter((course) => {
    return course.category === letter;
  });

  //mapping out the array of objects and displaying as JSX
  const SearchCards: React.FC<{ data: Course[] }> = ({ data }) => {
    const [searchText, setSearchText] = useState<string>("");
    return (
      <div className={styles.CourseCards}>
        {searchText == "" && <h1>marketplace</h1>}
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => setSearchText("")}>Clear</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <SearchCards data={[]} />
      <CourseCards data={filteredData} />
      <button
        onClick={() => {
          setLetter("A");
        }}
      >
        Category A
      </button>
      <button
        onClick={() => {
          setLetter("B");
        }}
      >
        Category B
      </button>
      <button
        onClick={() => {
          setLetter("C");
        }}
      >
        Category C
      </button>
      <button
        onClick={() => {
          setLetter("");
        }}
      >
        Clear
      </button>
    </div>
  );
}
