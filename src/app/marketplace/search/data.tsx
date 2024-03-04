export type Category = "A" | "B" | "C" | "";

export interface Course {
  id: number;
  company: string;
  description: string;
  price: number;
  category: Category;
}

const DATA: Course[] = [
  {
    id: 0,
    company: "Dacreed",
    description: "not blah blah not blah blah",
    price: 100,
    category: "A",
  },
  {
    id: 1,
    company: "Maccas",
    description: "not blah blah not blah blah",
    price: 100,
    category: "C",
  },
  {
    id: 2,
    company: "Jims coding",
    description: "not blah blah not blah blah",
    price: 100,
    category: "C",
  },
  {
    id: 3,
    company: "Maccas",
    description: "not blah blah not blah blah",
    price: 100,
    category: "B",
  },
  {
    id: 4,
    company: "Dacreed",
    description: "not blah blah not blah blah",
    price: 100,
    category: "A",
  },
  {
    id: 5,
    company: "Jims coding",
    description: "not blah blah not blah blah",
    price: 100,
    category: "A",
  },
  {
    id: 6,
    company: "Dacreed",
    description: "not blah blah not blah blah",
    price: 100,
    category: "C",
  },
  {
    id: 7,
    company: "Jims coding",
    description: "not blah blah not blah blah",
    price: 100,
    category: "B",
  },
  {
    id: 8,
    company: "Dacreed",
    description: "not blah blah not blah blah",
    price: 100,
    category: "B",
  },
  {
    id: 9,
    company: "Maccas",
    description: "not blah blah not blah blah",
    price: 100,
    category: "A",
  },
  {
    id: 10,
    company: "Dacreed",
    description: "not blah blah not blah blah",
    price: 100,
    category: "A",
  },
  {
    id: 11,
    company: "Maccas",
    description: "hello blah",
    price: 100,
    category: "C",
  },
  {
    id: 12,
    company: "Jims coding",
    description: "blah blah",
    price: 100,
    category: "C",
  },
  {
    id: 13,
    company: "Maccas",
    description: "blah blah",
    price: 100,
    category: "B",
  },
  {
    id: 14,
    company: "Dacreed",
    description: "blah blah",
    price: 100,
    category: "A",
  },
  {
    id: 15,
    company: "Jims coding",
    description: "blah blah",
    price: 100,
    category: "A",
  },
  {
    id: 16,
    company: "Dacreed",
    description: "blah blah",
    price: 100,
    category: "C",
  },
  {
    id: 17,
    company: "Jims coding",
    description: "blah blah",
    price: 100,
    category: "B",
  },
  {
    id: 18,
    company: "Dacreed",
    description: "blah blah",
    price: 100,
    category: "B",
  },
  {
    id: 19,
    company: "Maccas",
    description: "blah blah",
    price: 100,
    category: "A",
  },
];

export default DATA;
