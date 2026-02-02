## React Hook 
React Hooks are functions that enable you to use state, lifecycle methods, and other React features within functional components, without needing to use class components. They were introduced in React 16.8 to simplify code, promote logic reuse, and improve readability and performance. 
Core Concepts
Functional Components Only: Hooks can only be used inside React function components or custom Hooks. They do not work in class components.
Top-Level Calls: Hooks must be called at the top level of your component or custom Hook. You cannot call them inside loops, conditions, or nested functions.
State Management: They provide a more direct and concise way to manage component state, replacing the this.state and this.setState methods used in class components.
Side Effects: The useEffect Hook unifies the functionality of lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount into a single, cohesive API. 
Commonly Used Built-in Hooks 
React provides several built-in Hooks for various purposes, which are documented in detail on the official React documentation: 
useState: Adds state to functional components. It returns a pair: the current state value and a function to update it.
useEffect: Performs side effects (like data fetching, subscriptions, or manual DOM manipulation) in function components.
useContext: Subscribes a component to React context without introducing nested components, allowing data to be shared throughout the component tree.
useReducer: An alternative to useState for managing more complex state logic, often involving multiple sub-values or next-state based on the previous one.
useRef: Creates a mutable reference that persists across renders and doesn't cause a re-render when updated. It is commonly used for accessing DOM nodes or storing any mutable value.
useMemo: Caches the result of an expensive calculation to avoid unnecessary re-computation during re-renders, thereby optimizing performance.
useCallback: Caches a function definition itself, which helps in preventing unnecessary re-renders of child components that rely on the function as a prop. 