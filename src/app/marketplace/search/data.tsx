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
    description:
      "Master the art of effective leadership with our comprehensive Leadership, covering ",
    price: 100,
    category: "A",
  },
  {
    id: 1,
    company: "Maccas",
    description:
      "Enhance your communication skills and make a lasting impffective Communication course, ",
    price: 100,
    category: "C",
  },
  {
    id: 2,
    company: "Jims coding",
    description:
      "Boost your productivity and achieve more in less time with our Time Management course, ",
    price: 100,
    category: "C",
  },
  {
    id: 3,
    company: "Maccas",
    description:
      "Gain essential project management skills with our Project Management Basics course, ",
    price: 100,
    category: "B",
  },
  {
    id: 4,
    company: "Dacreed",
    description:
      "Learn to resolve conflicts and build stronger teams with our Conflict Resolution course,",
    price: 100,
    category: "A",
  },
  {
    id: 5,
    company: "Jims coding",
    description:
      "Develop your emotional intelligence with our Emotional Intelligence course, designed to ",
    price: 100,
    category: "A",
  },
  {
    id: 6,
    company: "Dacreed",
    description:
      "Master the fundamentals of digital marketing with our Digital Marketing Fundamentals course, ",
    price: 100,
    category: "C",
  },
  {
    id: 7,
    company: "Jims coding",
    description:
      "Learn to analyze data and make informed business decisions with our Data Analysis Essentia",
    price: 100,
    category: "B",
  },
  {
    id: 8,
    company: "Dacreed",
    description:
      "Overcome your fear of public speaking and deliver  Speaking Mastery ",
    price: 100,
    category: "B",
  },
  {
    id: 9,
    company: "Maccas",
    description:
      "Manage your finances and plan for the future with our Financial Planning Basics course,.",
    price: 100,
    category: "A",
  },
  {
    id: 10,
    company: "Dacreed",
    description:
      "Develop your critical thinking skills with our Critical Thinking",
    price: 100,
    category: "A",
  },
  {
    id: 11,
    company: "Maccas",
    description: "Learn effective negotiation strategies for any",
    price: 100,
    category: "C",
  },
  {
    id: 12,
    company: "Jims coding",
    description: "Develop and execute effective strategies with our Strategic",
    price: 100,
    category: "C",
  },
  {
    id: 13,
    company: "Maccas",
    description:
      "Navigate change and lead transitions with our Change Management ",
    price: 100,
    category: "B",
  },
  {
    id: 14,
    company: "Dacreed",
    description:
      "Build professional relationships and expand your network with our ",
    price: 100,
    category: "A",
  },
  {
    id: 15,
    company: "Jims coding",
    description: "Manage stress and improve your well-being wicing stress.",
    price: 100,
    category: "A",
  },
  {
    id: 16,
    company: "Dacreed",
    description:
      "Foster creativity and drivive ideas and implementing innovative solutions.",
    price: 100,
    category: "C",
  },
  {
    id: 17,
    company: "Jims coding",
    description: "Navigate cultural differences and ccscsc",
    price: 100,
    category: "B",
  },
  {
    id: 18,
    company: "Dacreed",
    description:
      "Build and lead high-performinging cohesive and productive teams.",
    price: 100,
    category: "B",
  },
  {
    id: 19,
    company: "Maccas",
    description:
      "Define and showcase your uniquedesigned to help you stand out and advance your career.",
    price: 100,
    category: "A",
  },
];

export default DATA;
