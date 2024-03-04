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
  const [searchText, setSearchText] = useState<string | "">("");
  // filter for category
  function filterCategory(courses: Course[], category: Category): Course[] {
    const result = courses.filter((c) => c.category === category);
    console.log("CATEGORY FILTER RESULT", result);
    return result;
  }
  // filter for company
  function filterCompany(courses: Course[], company: string): Course[] {
    const result = courses.filter((c) => c.company === company);
    console.log("COMPANY FILTER RESULT", result);
    return result;
  }

  function filterSearch(courses: Course[], searchText: string): Course[] {
    const result = courses.filter((c) =>
      c.description.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("SEARCH FILTER RESULT", result);
    return result;
  }

  // stacking the filters
  // @ts-ignore
  const filteredCategory = filterCategory(DATA, category);
  const filteredCompany = filterCompany(DATA, company);
  const filteredSearch = filterSearch(DATA, searchText);
  const filteredData = [...filteredSearch];

  // const uniqueFilteredData = filteredData.filter(
  //   (value, index, self) =>
  //     index ===
  //     self.findIndex(
  //       (t) => t.category === value.category && t.company === value.company
  //     )
  // );

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
    return (
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
    );
  };

  return (
    <div className={styles.filters}>
      <div className={styles.searchFilters}>
        <div className={styles.pageHeading}>
          {searchText == "" && <h1>Course Marketplace</h1>}
          {searchText == "" && <h2>Grow continuously, succeed infinitely</h2>}
        </div>
        <SearchCards />
      </div>
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
