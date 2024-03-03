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
  // I could set use state as just a string but by importing Category and declaring it as the type i have the type safety of only being able to use the sect category's
  const [category, setCategory] = useState<Category | "">("");
  const [company, setCompany] = useState<string | "">("");
  // const selected = "/../../../../public/selected.svg";
  // const notSelected = "/../../../../public/notSelected.svg";

  // filtering the array depending on the value of letter
  // need to improve filter logic to alow
  const filteredData: Course[] = DATA.filter((course) => {
    if (category !== "" && company !== "") {
      return course.category === category && course.company === company;
    } else if (category !== "") {
      return course.category === category;
    } else if (company !== "") {
      return course.company === company;
    }
    return true;
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

  const handleCompany = (company: "Jims coding" | "Dacreed" | "Maccas") => {
    setCompany((prevState) => {
      if (prevState === company) {
        return "";
      } else {
        return company;
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

        <button
          className={`${styles.button} ${category === "A" && styles.active} `}
          onClick={() => {
            handleCategory("A");
          }}
        >
          <div className={styles.checkbox}>
            {category === "A" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {category !== "A" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Category A
        </button>

        <button
          className={`${styles.button} ${category === "B" && styles.active}`}
          onClick={() => {
            handleCategory("B");
          }}
        >
          <div className={styles.checkbox}>
            {category === "B" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {category !== "B" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Category B
        </button>

        <button
          className={`${styles.button} ${category === "C" && styles.active}`}
          onClick={() => {
            handleCategory("C");
          }}
        >
          <div className={styles.checkbox}>
            {category === "C" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {category !== "C" && (
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
            company === "Dacreed" && styles.active
          }`}
          onClick={() => {
            handleCompany("Dacreed");
          }}
        >
          <div className={styles.checkbox}>
            {company === "Dacreed" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {company !== "Dacreed" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Dacreed
        </button>
        <button
          className={`${styles.button} ${
            company === "Maccas" && styles.active
          }`}
          onClick={() => {
            handleCompany("Maccas");
          }}
        >
          <div className={styles.checkbox}>
            {company === "Maccas" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {company !== "Maccas" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Maccas
        </button>
        <button
          className={`${styles.button} ${
            company === "Jims coding" && styles.active
          }`}
          onClick={() => {
            handleCompany("Jims coding");
          }}
        >
          <div className={styles.checkbox}>
            {company === "Jims coding" && (
              <Image src={selected} alt="checkbox" width={10} height={10} />
            )}
            {company !== "Jims coding" && (
              <Image src={notSelected} alt="checkbox" width={10} height={10} />
            )}
          </div>
          Jims coding
        </button>
        <button className={styles.arrow}> arw </button>
      </div>
      <div className={styles.returnedCourseCount}>
        {filteredData.length} courses returned from your above criteria:
      </div>

      <CourseCards data={filteredData} />
    </div>
  );
};

export default FilteredCards;
