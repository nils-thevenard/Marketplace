"use client";

import React from "react";
import { useState } from "react";
import CourseCards from "./courseCards";
import DATA, { Category, Course } from "./data";
import styles from "./filters.module.scss";
import notSelected from "../../../../public/notSelected.svg";
import selected from "../../../../public/selected.svg";
import Image from "next/image";

const FilteredCards: React.FC = () => {
  // I could set use state as just a string but by importing Category and declaring it as the type I have the type safety of only being able to use the sect category's
  const [searchCategory, setCategory] = useState<Category>("");
  const [searchCompany, setCompany] = useState<string | "">("");
  const [searchText, setSearchText] = useState<string | "">("");

  // filter for category
  function filterCategory(
    courses: Course[],
    searchCategory: Category
  ): Course[] {
    if (searchCategory === "") {
      console.log("THE RESULT OF FILTER CATEGORY NOT SELECTED", courses);
      return courses;
    } else {
      const result = courses.filter((c) => c.category === searchCategory);
      console.log("CATEGORY FILTER RESULT", result);
      return result;
    }
  }
  // filter for company
  function filterCompany(courses: Course[], searchCompany: string): Course[] {
    if (searchCompany === "") {
      return filterCategory(filteredArray, searchCategory);
    } else {
      const result = courses.filter((c) => searchCompany.includes(c.company));
      console.log("COMPANY FILTER RESULT", result);
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
    console.log("SEARCH FILTER RESULT", result);
    return result;
  }

  // stacking the filters, using let to be able to update the variable as we travel down
  let filteredArray = DATA;
  filteredArray = filterCategory(filteredArray, searchCategory);
  filteredArray = filterCompany(filteredArray, searchCompany);
  filteredArray = filterSearch(filteredArray, searchText);

  const handleCategory = (searchCategory: "A" | "B" | "C") => {
    setCategory((prevState) => {
      if (prevState === searchCategory) {
        return "";
      } else {
        return searchCategory;
      }
    });
  };

  const handleCompany = (
    searchCompany: "Jims coding" | "Dacreed" | "Maccas"
  ) => {
    setCompany((prevState) => {
      if (prevState === searchCompany) {
        return "";
      } else {
        return searchCompany;
      }
    });
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
      <div className={styles.CategoryButtonParent}>
        <div className={styles.All}>All</div>

        <button
          className={`${styles.button} ${
            searchCategory === "A" && styles.active
          } `}
          onClick={() => {
            handleCategory("A");
          }}
        >
          <div className={styles.checkbox}>
            {searchCategory === "A" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {searchCategory !== "A" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Category A
        </button>

        <button
          className={`${styles.button} ${
            searchCategory === "B" && styles.active
          }`}
          onClick={() => {
            handleCategory("B");
          }}
        >
          <div className={styles.checkbox}>
            {searchCategory === "B" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {searchCategory !== "B" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Category B
        </button>

        <button
          className={`${styles.button} ${
            searchCategory === "C" && styles.active
          }`}
          onClick={() => {
            handleCategory("C");
          }}
        >
          <div className={styles.checkbox}>
            {searchCategory === "C" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {searchCategory !== "C" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Category C
        </button>
        <button className={styles.arrow}> arw</button>
      </div>
      {/*_________________________companies_____________________________ */}

      <div className={styles.CompanyButtonParent}>
        <div className={styles.AllProviders}>All Providers</div>
        <button
          className={`${styles.button} ${
            searchCompany === "Dacreed" && styles.active
          }`}
          onClick={() => {
            handleCompany("Dacreed");
          }}
        >
          <div className={styles.checkbox}>
            {searchCompany === "Dacreed" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {searchCompany !== "Dacreed" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Dacreed
        </button>
        <button
          className={`${styles.button} ${
            searchCompany === "Maccas" && styles.active
          }`}
          onClick={() => {
            handleCompany("Maccas");
          }}
        >
          <div className={styles.checkbox}>
            {searchCompany === "Maccas" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {searchCompany !== "Maccas" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Maccas
        </button>
        <button
          className={`${styles.button} ${
            searchCompany === "Jims coding" && styles.active
          }`}
          onClick={() => {
            handleCompany("Jims coding");
          }}
        >
          <div className={styles.checkbox}>
            {searchCompany === "Jims coding" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {searchCompany !== "Jims coding" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Jims coding
        </button>
        <button className={styles.arrow}> arw </button>
      </div>
      <div className={styles.returnedCourseCount}>
        {filteredArray.length} courses returned from your above criteria:
      </div>

      <CourseCards data={filteredArray} />
    </div>
  );
};

export default FilteredCards;
