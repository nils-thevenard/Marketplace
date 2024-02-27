import React from "react";

export type Category = "A" | "B" | "C";

export interface Course {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
}

const DATA: Course[] = [
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
  { id: 4, name: "Bob", description: "blah blah", price: 100, category: "A" },
  {
    id: 5,
    name: "Nils",
    description: "blah blah",
    price: 100,
    category: "A",
  },
  { id: 6, name: "Jim", description: "blah blah", price: 100, category: "C" },
  { id: 7, name: "Tom", description: "blah blah", price: 100, category: "C" },
  { id: 8, name: "Sam", description: "blah blah", price: 100, category: "B" },
  { id: 9, name: "Bob", description: "blah blah", price: 100, category: "A" },
];

export default DATA;
