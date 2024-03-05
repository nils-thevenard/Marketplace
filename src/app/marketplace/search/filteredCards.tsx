"use client";

import React from "react";
import { useState } from "react";
import CourseCards from "./courseCards";
import DATA, { Category, Course } from "./data";
import styles from "./filters.module.scss";

import notSelected from "../../../../public/notSelected.svg";
import selected from "../../../../public/selected.svg";
import arrowRight from "../../../../public/arrowRight.svg";
import Image from "next/image";

const FilteredCards: React.FC = () => {
  // I could set use state as just a string but by importing Category and declaring it as the type I have the type safety of only being able to use the sect category's
  const [searchCategory, setSearchCategory] = useState<Category[]>([]);
  const [searchCompany, setSearchCompany] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string | "">("");

  // filter for category if search category is empty (the filter has not been selected return all the courses )
  function filterCategory(
    courses: Course[],
    searchCategory: Category[]
  ): Course[] {
    if (searchCategory.length === 0) {
      // console.log("THE RESULT OF FILTER CATEGORY NOT SELECTED", courses);
      return courses;
    } else {
      const result = courses.filter((c) => searchCategory.includes(c.category));
      // console.log("CATEGORY FILTER RESULT", result);
      return result;
    }
  }
  // filter for company
  function filterCompany(courses: Course[], searchCompany: string[]): Course[] {
    if (searchCompany.length === 0) {
      // console.log("THE RESULT OF FILTER COMPANY NOT SELECTED", courses);
      return filterCategory(filteredArray, searchCategory);
    } else {
      const result = courses.filter((c) => searchCompany.includes(c.company));
      // console.log("COMPANY FILTER RESULT", result);
      return result;
    }
  }
  // filter for search
  function filterSearch(courses: Course[], searchText: string): Course[] {
    if (searchText === "") {
      return filterCompany(filteredArray, searchCompany);
    }
    const result = courses.filter((c) =>
      c.description.toLowerCase().includes(searchText.toLowerCase())
    );
    // console.log("SEARCH FILTER RESULT", result);
    return result;
  }

  // stacking the filters, using let to be able to update the variable as we travel down
  let filteredArray = DATA;
  filteredArray = filterCategory(filteredArray, searchCategory);
  filteredArray = filterCompany(filteredArray, searchCompany);
  filteredArray = filterSearch(filteredArray, searchText);

  const handleCategory = (string: "A" | "B" | "C") => {
    if (searchCategory.includes(string)) {
      setSearchCategory(searchCategory.filter((letter) => letter !== string));
    } else {
      setSearchCategory([...searchCategory, string]);
    }
    // return console.log("THIS IS THE LOG FOR HANDLE CATEGORY", searchCategory);
  };

  const handleCompany = (string: "Jims coding" | "Dacreed" | "Maccas") => {
    if (searchCompany.includes(string)) {
      setSearchCompany(searchCompany.filter((letter) => letter !== string));
    } else {
      setSearchCompany([...searchCompany, string]);
      // return console.log("THIS IS THE LOG FOR HANDLE COMPANY"), searchCompany;
    }
  };

  return (
    <div className={styles.filters}>
      <div className={styles.searchFilters}>
        <div className={styles.pageHeading}>
          {searchText == "" && <h1>Course Marketplace</h1>}
          {searchText == "" && <h2>Grow continuously, succeed infinitely</h2>}
        </div>
        <form className={styles.searchBarParent}>
          <input
            className={styles.animatedSearchBar}
            type="text"
            placeholder="placeholder"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => setSearchText("")}>Search</button>
        </form>
      </div>
      {/* ________________________________category filters_____________________________________________________________ */}
      <div className={styles.CategoryButtonParent}>
        <div className={styles.All}>All</div>

        <button
          className={`${styles.button} ${
            searchCategory.includes("A") && styles.active
          } `}
          onClick={() => {
            handleCategory("A");
          }}
        >
          <div className={styles.checkbox}>
            {searchCategory.includes("A") && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {searchCategory.includes("A") === false && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          Category A
        </button>

        <button
          className={`${styles.button} ${
            searchCategory.includes("B") && styles.active
          }`}
          onClick={() => {
            handleCategory("B");
          }}
        >
          <div className={styles.checkbox}>
            {searchCategory.includes("B") && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {searchCategory.includes("B") === false && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          Category B
        </button>

        <button
          className={`${styles.button} ${
            searchCategory.includes("C") && styles.active
          }`}
          onClick={() => handleCategory("C")}
        >
          <div className={styles.checkbox}>
            {searchCategory.includes("C") && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {searchCategory.includes("C") === false && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          Category C
        </button>
        <div className={styles.arrow}>
          <Image src={arrowRight} alt="arrowRight" height={30} width={30} />
        </div>
      </div>
      {/*_________________________company filters_____________________________ */}

      <div className={styles.CompanyButtonParent}>
        <div className={styles.AllProviders}>All Providers</div>
        <button
          className={`${styles.button} ${
            searchCompany.includes("Dacreed") && styles.active
          }`}
          onClick={() => {
            handleCompany("Dacreed");
          }}
        >
          <div className={styles.checkbox}>
            {searchCompany.includes("Dacreed") && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {searchCompany.includes("Dacreed") === false && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          Dacreed
        </button>
        <button
          className={`${styles.button} ${
            searchCompany.includes("Maccas") && styles.active
          }`}
          onClick={() => {
            handleCompany("Maccas");
          }}
        >
          <div className={styles.checkbox}>
            {searchCompany.includes("Maccas") && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {searchCompany.includes("Maccas") === false && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          Maccas
        </button>
        <button
          className={`${styles.button} ${
            searchCompany.includes("Jims coding") && styles.active
          }`}
          onClick={() => {
            handleCompany("Jims coding");
          }}
        >
          <div className={styles.checkbox}>
            {searchCompany.includes("Jims coding") && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {searchCompany.includes("Jims coding") === false && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          Jims coding
        </button>
        <div className={styles.arrow}>
          <Image src={arrowRight} alt="arrowRight" height={30} width={30} />
        </div>
      </div>
      {/* ____________________________________________________________________________________________________________________ */}
      <div className={styles.resetAllContainer}>
        <div
          onClick={() => {
            setSearchCategory([]);
            setSearchCompany([]);
          }}
          className={styles.resetAll}
        >
          Reset All
        </div>
      </div>
      <div className={styles.returnedCourseCount}>
        {filteredArray.length} courses returned from your above criteria:
      </div>

      <CourseCards data={filteredArray} />
    </div>
  );
};

export default FilteredCards;
