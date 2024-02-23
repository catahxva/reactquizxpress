export const questions = [
  {
    question: "What is the primary purpose of React?",
    answers: [
      "To manage server-side logic",
      "To build user interfaces",
      "To perform data validation",
      "To create databases",
    ],
    correctAnswer: "To build user interfaces",
  },
  {
    question: "In React, what is JSX?",
    answers: [
      "A templating engine",
      "A preprocessor for JavaScript",
      "A markup syntax extension for JavaScript",
      "A styling framework",
    ],
    correctAnswer: "A markup syntax extension for JavaScript",
  },
  {
    question: "What is the significance of the virtual DOM in React?",
    answers: [
      "It handles server-side rendering",
      "It optimizes database queries",
      "It improves performance by updating the DOM efficiently",
      "It validates user input",
    ],
    correctAnswer: "It improves performance by updating the DOM efficiently",
  },
  {
    question: "Which of the following best describes React components?",
    answers: [
      "Functional units of code that only handle styles",
      "Reusable, self-contained building blocks for UI elements",
      "Backend server modules",
      "Components responsible for server-side rendering",
    ],
    correctAnswer: "Reusable, self-contained building blocks for UI elements",
  },
  {
    question: "What is the main difference between state and props in React?",
    answers: [
      "State is immutable, while props can be changed",
      "State is local to a component, while props are passed from parent to child",
      "State is only used in class components, while props are used in functional components",
      "State is used for styling, while props are used for data flow",
    ],
    correctAnswer:
      "State is local to a component, while props are passed from parent to child",
  },
  {
    question:
      "Which hook is used for adding state to functional components in React?",
    answers: ["useEffect", "useState", "useReducer", "useContext"],
    correctAnswer: "useState",
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    answers: [
      "Managing the state of a component",
      "Handling asynchronous operations",
      "Subscribing to changes in context",
      "Performing side effects after component renders",
    ],
    correctAnswer: "Performing side effects after component renders",
  },
  {
    question: "In React, what is a key used for in lists of elements?",
    answers: [
      "Triggering an event",
      "Providing a unique identifier for each list item",
      "Sorting elements in the list",
      "Triggering animations for list items",
    ],
    correctAnswer: "Providing a unique identifier for each list item",
  },
  {
    question:
      "What is the purpose of the map function when rendering a list of elements in React?",
    answers: [
      "Adding event listeners to each element",
      "Iterating over an array and transforming its elements",
      "Creating a new array with the same elements",
      "Filtering the array based on a condition",
    ],
    correctAnswer: "Iterating over an array and transforming its elements",
  },
  {
    question: "What is the role of the key prop in React components?",
    answers: [
      "Defining the component's style",
      "Specifying the order of the component in a list",
      "Providing a unique identifier for the component",
      "Assigning a class name to the component",
    ],
    correctAnswer: "Providing a unique identifier for the component",
  },
  {
    question: "In React, how can you conditionally render components?",
    answers: [
      "Using the if statement within JSX",
      "Using the switch statement within JSX",
      "Using the ternary operator or logical && operator",
      "Using the for loop within JSX",
    ],
    correctAnswer: "Using the ternary operator or logical && operator",
  },
  {
    question:
      "What is the significance of the children prop in React components?",
    answers: [
      "It contains the component's state",
      "It is used for styling the component",
      "It represents the content between the opening and closing tags of the component",
      "It determines the order of rendering for child components",
    ],
    correctAnswer:
      "It represents the content between the opening and closing tags of the component",
  },
  {
    question: "What is the purpose of React Fragments?",
    answers: [
      "To create reusable UI components",
      "To group multiple elements without adding an extra node to the DOM",
      "To handle asynchronous operations",
      "To conditionally render components",
    ],
    correctAnswer:
      "To group multiple elements without adding an extra node to the DOM",
  },
  {
    question: "In React, how can you handle forms to capture user input?",
    answers: [
      "By using only class components",
      "By relying solely on the onChange event",
      "By managing form state with the useState hook",
      "By avoiding controlled components",
    ],
    correctAnswer: "By managing form state with the useState hook",
  },
  {
    question: "What is the purpose of the onClick event in React?",
    answers: [
      "Triggering an asynchronous operation",
      "Handling changes in input fields",
      "Responding to a button or element being clicked",
      "Managing component state",
    ],
    correctAnswer: "Responding to a button or element being clicked",
  },
  {
    question: "How can you optimize the performance of a React application?",
    answers: [
      "By using only functional components",
      "By minimizing the use of state",
      "By avoiding the use of hooks",
      "By optimizing render methods",
    ],
    correctAnswer: "By optimizing render methods",
  },
  {
    question: "What is a Higher Order Component (HOC) in React?",
    answers: [
      "A component with a higher number of props",
      "A component that renders only on higher-order elements",
      "A function that takes a component and returns a new component with additional functionality",
      "A component used for handling layout in higher-order components",
    ],
    correctAnswer:
      "A function that takes a component and returns a new component with additional functionality",
  },
  {
    question:
      "How can you pass data from a parent component to a deeply nested child component in React?",
    answers: [
      "By using the props object",
      "By using only the context API",
      "By using a global state management library",
      "By using the useState hook",
    ],
    correctAnswer: "By using the context API",
  },
  {
    question: "What is the purpose of the React.memo function?",
    answers: [
      "Memoizing the component's props and state",
      "Memoizing the component's rendered output",
      "Memoizing the component's context",
      "Memoizing the component's lifecycle methods",
    ],
    correctAnswer: "Memoizing the component's rendered output",
  },
  {
    question: "What is the purpose of the useCallback hook in React?",
    answers: [
      "To memoize the component's rendered output",
      "To optimize rendering with caching",
      "To create a stable reference to a function",
      "To handle side effects",
    ],
    correctAnswer: "To create a stable reference to a function",
  },
];
