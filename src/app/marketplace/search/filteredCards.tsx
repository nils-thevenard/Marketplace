"use client";

import React from "react";
import { useState } from "react";
import CourseCards from "./courseCards";
import DATA, { Category, Course } from "./data";
import styles from "./courseCard.module.scss";

export default function FilteredCards() {
  // I could set use state as just a string but by importing Category and declaring it as the type i have the type safety of only being able to use the sect category's
  const [category, setCategory] = useState<Category | "">("");

  // filtering the array depending on the value of letter
  const filteredData: Course[] = DATA.filter((course) => {
    return course.category === category;
  });

  //mapping out the array of objects and displaying as JSX
  const SearchCards: React.FC = () => {
    const [searchText, setSearchText] = useState<string>("");
    return (
      <div className={styles.SearchFilters}>
        <div className={styles.pageHeading}>
          {searchText == "" && <h1>Course Marketplace</h1>}
          {searchText == "" && <h2>Grow continuously, succeed infinitely</h2>}
        </div>

        <form className={styles.searchBarParent}>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => setSearchText("")}>X</button>
        </form>
      </div>
    );
  };

  return (
    <div className={styles.filters}>
      <SearchCards />
      <CourseCards data={filteredData} />
      <button
        onClick={() => {
          setCategory("A");
        }}
      >
        Category A
      </button>
      <button
        onClick={() => {
          setCategory("B");
        }}
      >
        Category B
      </button>
      <button
        onClick={() => {
          setCategory("C");
        }}
      >
        Category C
      </button>
      <button
        onClick={() => {
          setCategory("");
        }}
      >
        Clear
      </button>
    </div>
  );
}
