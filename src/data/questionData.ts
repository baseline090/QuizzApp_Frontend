import {AllQuizData, CheckboxItem, Question} from '../types';

// export const mathematicsData: Question[] = [
//   {
//     id: '1',
//     questionText:
//       'If two dice are rolled, what is the probability of getting a sum of 7?',
//     options: ['1/6', '1/12', '1/18', '1/36'],
//     correctAnswer: '1/6',
//   },
//   {
//     id: '2',
//     questionText:
//       'A box contains 3 red, 2 blue, and 5 green balls. What is the probability of randomly selecting a blue ball?',
//     options: ['1/5', '1/4', '1/2', '2/10'],
//     correctAnswer: '1/5',
//   },
//   {
//     id: '3',
//     questionText: 'What is 12 / 4?',
//     options: ['2', '3', '4', '6'],
//     correctAnswer: '3',
//   },
//   {
//     id: '4',
//     questionText: 'What is the square root of 16?',
//     options: ['2', '3', '4', '5'],
//     correctAnswer: '4',
//   },
//   {
//     id: '5',
//     questionText: 'What is the integral of f(x) = 2x?',
//     options: ['x^2 + C', '2x + C', 'x^2', '2x^2 + C'],
//     correctAnswer: 'x^2 + C',
//   },
//   {
//     id: '6',
//     questionText:
//       'The sum of the first 10 terms of an arithmetic sequence is 120. What is the first term if the common difference is 4?',
//     options: ['8', '6', '10', '12'],
//     correctAnswer: '6',
//   },
//   {
//     id: '7',
//     questionText: 'What is the solution to the equation x^2 - 5x + 6 = 0?',
//     options: ['(2, 3)', '(1, 6)', '(3, 2)', '(0, 5)'],
//     correctAnswer: '(2, 3)',
//   },
//   {
//     id: '8',
//     questionText: 'If a triangle has sides of lengths 3, 4, and 5, what is the area?',
//     options: ['6', '12', '10', '7'],
//     correctAnswer: '6',
//   },
//   {
//     id: '9',
//     questionText: 'What is the value of sin 45°?',
//     options: ['1/2', '√2/2', '1', '√3/2'],
//     correctAnswer: '√2/2',
//   },
//   {
//     id: '10',
//     questionText: 'What is 12 / 4?',
//     options: ['2', '3', '4', '6'],
//     correctAnswer: '3',
//   }
// ];



// export const quizData: AllQuizData = {
//   mathematics: {
//     title: 'Mathematics Quiz',
//     questions: mathematicsData,
//     rightAnswerPoints: 1,
//     wrongAnswerPoints: 1,
//     totalTime: '1 m 20s ',
//     description: 'Test your math skills with this quiz!',
//   },
 
// };

export const erectionData: CheckboxItem[] = [
  {
    id: '1',
    questionText: 'Q.1 Which programming language is primarily used to build React applications?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
    status: 'unchecked',
  },
  {
    id: '2',
    questionText: 'Q.2 What is the main purpose of React?',
    options: [
      'Data Analysis',
      'Web Development',
      'Mobile App Development',
      'Game Development',
    ],
    correctAnswer: 'Web Development',
    status: 'unchecked',
  },
  {
    id: '3',
    questionText: 'Q.3 What is JSX in React?',
    options: [
      'JavaScript and XML',
      'JavaScript Extension',
      'Java Syntax Extension',
      'Java Express Syntax',
    ],
    correctAnswer: 'JavaScript and XML',
    status: 'unchecked',
  },
  {
    id: '4',
    questionText: 'Q.4 Which command is used to create a new React app?',
    options: [
      'npm init react-app',
      'npx create-react-app',
      'react-create-app',
      'npx start-react',
    ],
    correctAnswer: 'npx create-react-app',
    status: 'unchecked',
  },
  {
    id: '5',
    questionText: 'Q.5 What is the use of `useState` in React?',
    options: [
      'To manage state in functional components',
      'To manage props',
      'To handle API requests',
      'To create components',
    ],
    correctAnswer: 'To manage state in functional components',
    status: 'unchecked',
  },
  {
    id: '6',
    questionText: 'Q.6 How do you pass data from a parent component to a child component in React?',
    options: ['State', 'Props', 'Context', 'Hooks'],
    correctAnswer: 'Props',
    status: 'unchecked',
  },
  {
    id: '7',
    questionText: 'Q.7 What does the `useEffect` hook do in React?',
    options: [
      'It handles HTTP requests',
      'It manages state',
      'It performs side effects in functional components',
      'It renders components',
    ],
    correctAnswer: 'It performs side effects in functional components',
    status: 'unchecked',
  },
  {
    id: '8',
    questionText: 'Q.8 Which lifecycle method is replaced by `useEffect` in functional components?',
    options: [
      'componentDidMount',
      'componentDidUpdate',
      'componentWillUnmount',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    status: 'unchecked',
  },
  {
    id: '9',
    questionText: 'Q.9 What is a common library used for routing in React applications?',
    options: [
      'React Router',
      'Redux',
      'Axios',
      'Express',
    ],
    correctAnswer: 'React Router',
    status: 'unchecked',
  },
  {
    id: '10',
    questionText: 'Q.10 What is a key feature of React?',
    options: [
      'One-way data binding',
      'Two-way data binding',
      'No data binding',
      'None of the above',
    ],
    correctAnswer: 'One-way data binding',
    status: 'unchecked',
  },
];

