"use client";

import React from "react";
import { useState } from "react";
import CourseCards from "./courseCards";
import DATA, { Category, Course } from "./data";
import styles from "./filters.module.scss";

const FilteredCards: React.FC = () => {
  // I could set use state as just a string but by importing Category and declaring it as the type i have the type safety of only being able to use the sect category's
  const [category, setCategory] = useState<Category | "">("");
  const [company, setCompany] = useState<string | "">("");
  const [style, setStyle] = useState("light");

  const changeStyle = () => {
    if (style !== "light") {
      setStyle("light");
    } else {
      setStyle("dark");
    }
    console.log("you just clicked");
  };

  // filtering the array depending on the value of letter
  // need to improve filter logic to alow
  const filteredData: Course[] = DATA.filter((course) => {
    if (category != "") {
      return course.category === category;
    } else {
      return course.name === company;
    }
  });

  const handleCategory = (category: "A" | "B" | "C") => {
    setCategory((prevState) => {
      if (prevState === category) {
        return "";
      } else {
        return category;
      }
    });
  };

  const handleName = (company: "Nils") => {
    setCompany((prevState) => {
      if (prevState === "") {
        return company;
      } else {
        return "";
      }
    });
  };

  //mapping out the array of objects and displaying as JSX
  const SearchCards: React.FC = () => {
    const [searchText, setSearchText] = useState<string>("");
    return (
      <div className={styles.searchFilters}>
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
          <button onClick={() => setSearchText("")}>Search</button>
        </form>
      </div>
    );
  };

  return (
    <div className={styles.filters}>
      <SearchCards />
      <div className={styles.CategoryButtonParent}>
        <div className={styles.All}>All</div>
        {category !== "A" && (
          <button
            className={styles.buttonA}
            onClick={(event) => {
              handleCategory("A");
              if (event.currentTarget.style.backgroundColor) {
                event.currentTarget.style.backgroundColor = "black";
              } else {
                event.currentTarget.style.backgroundColor = "salmon";
              }
            }}
          >
            Category A
          </button>
        )}

        <button
          className={`${styles.buttonB} ${category === "B" && styles.active}`}
          onClick={() => {
            handleCategory("B");
          }}
        >
          Category B
        </button>

        <button
          className={styles.buttonC}
          onClick={() => {
            handleCategory("C");
          }}
        >
          Category C
        </button>
        <button className={styles.arrow}> arw</button>
      </div>
      {/*______________________________________________________ */}

      <div className={styles.CompanyButtonParent}>
        <div className={styles.AllProviders}>All Providers</div>
        <button
          className={styles.buttonA}
          onClick={() => {
            handleName("Nils");
          }}
        >
          Nils
        </button>
        <button
          className={styles.buttonB}
          onClick={() => {
            handleCategory("B");
          }}
        >
          Category 2B
        </button>
        <button
          className={styles.buttonC}
          onClick={() => {
            handleCategory("C");
          }}
        >
          Category 2C
        </button>
        <button className={styles.arrow}> arw </button>
        {/* <button
          onClick={() => {
            setCategory("");
          }}
        >
          Clear
        </button> */}
      </div>

      <CourseCards data={filteredData} />
    </div>
  );
};

export default FilteredCards;
