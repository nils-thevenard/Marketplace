"use client";

import React from "react";
import { useState, useEffect } from "react";
import CourseCards from "./courseCards";
import DATA, { Category, Course } from "./data";
import styles from "./filters.module.scss";
import filterIcon from "../../../../public/filterIcon.svg";
import notSelected from "../../../../public/notSelected.svg";
import selected from "../../../../public/selected.svg";
import arrowRight from "../../../../public/arrowRight.svg";
import Image from "next/image";

const FilteredCards: React.FC = () => {
  // I could set use state as just a string but by importing Category and declaring it as the type I have the type safety of only being able to use the sect category's
  const [searchCategory, setSearchCategory] = useState<Category[]>([]);
  const [searchCompany, setSearchCompany] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string | "">("");
  const [filtersButton, setFiltersButton] = useState<boolean>(true);
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect is used here to watch the screen size
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // console.log("THE WINDOW SIZE", width);
    };
  }, []);

  // filter for category if search category is empty (the filter has not been selected return all the courses )
  // i have made this filter with a ternary as a demo, which is different to all the other filters
  function filterCategory(
    courses: Course[],
    searchCategory: Category[]
  ): Course[] {
    return searchCategory.length > 0
      ? courses.filter((c) => searchCategory.includes(c.category))
      : courses;

    // console.log("CATEGORY FILTER RESULT", result);
  }

  // filter for company
  function filterCompany(courses: Course[], searchCompany: string[]): Course[] {
    if (searchCompany.length === 0) {
      // console.log("THE RESULT OF FILTER COMPANY NOT SELECTED", courses);
      return courses;
    } else {
      const result = courses.filter((c) => searchCompany.includes(c.company));
      // console.log("COMPANY FILTER RESULT", result);
      return result;
    }
  }
  // filter for search
  function filterSearch(courses: Course[], searchText: string): Course[] {
    if (searchText === "") {
      return courses;
    }
    const result = courses.filter(
      (c) =>
        c.description.toLowerCase().includes(searchText.toLowerCase()) ||
        c.company.toLowerCase().includes(searchText.toLowerCase())
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
      setSearchCategory(searchCategory.filter((c) => c !== string));
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

  const CategoryFilterButton: React.FC<string> = ({ category }) => {
    return (
      <div>
        <button
          className={`${styles.button} ${
            searchCategory.includes(category) && styles.active
          } `}
          onClick={() => {
            handleCategory(category);
          }}
        >
          <div className={styles.checkbox}>
            {searchCategory.includes(category) && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {!searchCategory.includes(category) && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          Category {category}
        </button>
      </div>
    );
  };

  const CompanyFilterButton: React.FC<string> = ({ name }) => {
    return (
      <div>
        <button
          className={`${styles.button} ${
            searchCompany.includes(name) && styles.active
          }`}
          onClick={() => {
            handleCompany(name);
          }}
        >
          <div className={styles.checkbox}>
            {searchCompany.includes(name) && (
              <Image src={selected} alt="checkbox" width={20} height={20} />
            )}
            {searchCompany.includes(name) === false && (
              <Image src={notSelected} alt="checkbox" width={20} height={20} />
            )}
          </div>
          {name}
        </button>
      </div>
    );
  };

  const MobileFilters = () => {
    return (
      <div className={styles.mobileFilters}>
        {filtersButton === true && (
          <div className={styles.allFiltersContainer}>
            <div className={styles.mobileCategoryFilters}>
              <CategoryFilterButton category="A" />
              <CategoryFilterButton category="B" />
              <CategoryFilterButton category="C" />
            </div>

            <div className={styles.mobileCompanyFilters}>
              <CompanyFilterButton name="Dacreed" />
              <CompanyFilterButton name="Maccas" />
              <CompanyFilterButton name="Jims coding" />
            </div>
            <div className={styles.resetAll}>
              <div
                onClick={() => {
                  setSearchCategory([]);
                  setSearchCompany([]);
                }}
              >
                Reset All
              </div>
            </div>

            <button
              className={styles.showResultsButton}
              onClick={() => {
                setFiltersButton(!filtersButton);
                console.log("the value of filters button", filtersButton);
              }}
            >
              Show {filteredArray.length} courses
            </button>
          </div>
        )}
      </div>
    );
  };

  //I want to reduce all my filter buttons to just one function that loads all the buttons. Would I want to be mapping out all the buttons? essentially like we did with the cards?
  return (
    <div className={styles.parentDiv}>
      <MobileFilters />

      <div
        className={`${styles.filters} ${
          filtersButton === true && styles.filterBlur
        }`}
      >
        <div className={styles.searchFilters}>
          {width < 700 && (
            <div className={styles.mobilePageHeading}>
              {searchText == "" && <div>Course Marketplace</div>}
            </div>
          )}
          {width > 700 && (
            <div className={styles.pageHeading}>
              {searchText == "" && <h1>Course Marketplace</h1>}
              {searchText == "" && (
                <h2>Grow continuously, succeed infinitely</h2>
              )}
            </div>
          )}
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
            {width < 700 && (
              <Image
                onClick={() => {
                  setFiltersButton(!filtersButton);
                  console.log("the value of filters button", filtersButton);
                }}
                className={styles.filterIcon}
                src={filterIcon}
                alt="filter icon"
                width={40}
                height={40}
              />
            )}
          </form>
        </div>
        {width > 700 && (
          <div>
            <div className={styles.CategoryButtonParent}>
              <div className={styles.allButton}>All</div>
              <div className={styles.categoryFiltersContainer}>
                <CategoryFilterButton category="A" />
                <CategoryFilterButton category="B" />
                <CategoryFilterButton category="C" />
              </div>
              <div className={styles.arrow}>
                <Image
                  src={arrowRight}
                  alt="arrowRight"
                  height={30}
                  width={30}
                />
              </div>
            </div>

            <div className={styles.CompanyButtonParent}>
              <div className={styles.AllProviders}>All Providers</div>
              <div className={styles.companyFiltersContainer}>
                <CompanyFilterButton name="Dacreed" />
                <CompanyFilterButton name="Maccas" />
                <CompanyFilterButton name="Jims coding" />
              </div>

              <div className={styles.arrow}>
                <Image
                  src={arrowRight}
                  alt="arrowRight"
                  height={30}
                  width={30}
                />
              </div>
            </div>

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
          </div>
        )}
        <div className={styles.returnedCourseCount}>
          {filteredArray.length} courses returned from your above criteria:
        </div>

        <CourseCards data={filteredArray} />
      </div>
    </div>
  );
};

export default FilteredCards;
