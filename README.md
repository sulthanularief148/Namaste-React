# Welcome to React World

Welcome to the React World! This guide will walk you through essential tools, concepts, and practices for working with React and its ecosystem.

---

## Extensions

<!-- Here are some helpful **VS Code extensions** for React development: -->

1. **Better Comments** – Improves code commenting with different colors and styles.
2. **Bracket Pair Colorization Toggler** – Adds color to matching brackets for better readability.
3. **ES7+ React/Redux** – Provides code snippets for React, Redux, and ES7+ features.
4. **Gitlens** – Enhances Git capabilities within VS Code, making it easier to visualize code history.
5. **Prettier** – Automatically formats your code to ensure consistency and readability.
6. **vscode-icons** – Adds icons to files and folders in VS Code for better visual identification.

---

## What is React?

**React** is a JavaScript library developed by Facebook for building user interfaces, specifically for single-page applications (SPAs). It allows developers to:

- Create **reusable UI components**.
- Efficiently update and render components with changing data using the **virtual DOM**.

---

## What is ReactDOM?

**ReactDOM** is a package providing **DOM-specific methods** used in web applications built with React. It allows React components to be:

- Rendered in the browser.
- Updated dynamically as the application state changes.

---

## Difference Between Library and Framework

### Library

- A collection of pre-written code that provides specific functionality or utilities.
- Developers call specific functions to perform tasks.
  
### Framework

- A more structured platform offering a foundation for application development.
- Defines architecture and often enforces a code structure.

---

## What is a CDN?

**CDN (Content Delivery Network)** is a network of geographically distributed servers that:

- Deliver web content (e.g., images, scripts, videos) efficiently.
- Reduce latency and improve load times by serving content from servers closest to users.

---

## What is NPM?

**NPM (Node Package Manager)** is:

- A package manager for JavaScript.
- Used to install, share, and manage packages (libraries or modules) for Node.js projects.

### Common Commands:
```bash
# Initialize a new project
npm init

# Install a package
npm install <package-name>

# Install a package as a dev dependency
npm install <package-name> --save-dev
```

## What is package.json?

**package.json** is a JSON file in a Node.js project that contains metadata about the project and its dependencies. It includes:

- Project name, version, author, and description.
- Scripts for automating tasks (e.g., build, start).
- Dependencies and devDependencies, specifying the libraries needed for the project to run or develop.

## What is a Bundler?

A **bundler** is a tool that takes multiple JavaScript files and dependencies, combines them into a single (or a few) optimized files for the browser. It also minifies code and optimizes performance. Common bundlers include **Webpack**, **Parcel**, **Rollup**, and **Vite**.

## Types of Dependencies

### **Normal Dependency**:

- Packages that are essential for the application to run in production (e.g., React, Express).

### **Dev Dependency**:

- Packages that are needed only during development or testing (e.g., Babel, Webpack). These are not required in production.

## **what is package.lock.json?**

- package-lock.json is an automatically generated file in a Node.js project that locks the versions of the dependencies installed.
- It is created when you run npm install and records the exact version of each package, including all of its dependencies, ensuring consistent installations across different environments or systems.

## **What is Nodemodules?**

- This folder is created when you run npm install, and it contains both the project's direct dependencies (listed in package.json) and their sub-dependencies (i.e., dependencies of dependencies).

## **What is Transitive Dependency?**

- A transitive dependency is a dependency of a dependency in your project. In other words, it is not a direct dependency, but rather a package that gets installed as a result of installing another package. These dependencies are automatically included in your project by the package manager

## Difference Between Caret (^) and Tilde (~)

### **Caret (^)**:

- `^1.2.3` will match any version from `1.2.3` to `<2.0.0`. It allows minor and patch updates but prevents major updates.

### **Tilde (~)**:

- `~1.2.3` will match any version from `1.2.3` to `<1.3.0`. It only allows patch updates and prevents both minor and major updates.

## What is Parcel?

**Parcel** is a fast, zero-configuration JavaScript bundler that simplifies the process of building web applications. Key features include:
`https://parceljs.org`

- **Dev Build** – Simplifies the development build process.
- **Local Server** – Built-in server for running the app locally.
- **HMR (Hot Module Replacement)** – Allows live reloading and fast development iterations.
- **File Watching Algorithm** – Written in C++ for optimal performance.
- **Caching** – Faster builds by caching files.
- **Image Optimization** – Automatically optimizes image assets.
- **Minification** – Compresses files for production.
- **Bundling** – Combines multiple files into one optimized file.
- **Compressing** – Reduces file size for quicker downloads.
- **Consistent Hashing** – Ensures consistent file hashing for better caching.
- **Code Splitting** – Splits code into smaller, more efficient bundles.
- **Differential Bundling** – Supports older browsers with separate bundles.
- **Diagnostic & Error Handling** – Provides clear error messages and diagnostic tools.
- **HTTPS** – Supports secure connections in development.
- **Tree Shaking** – Removes unused code to reduce bundle size.
- **Different Dev and Prod Bundles** – Separates development and production builds for optimized performance.

## What is Type Module in Script Tag and Why?
- The type="module" attribute in the<```script>``` tag specifies that the script should be treated as an ECMAScript module. Modules are JavaScript files that can import and export functionality, enabling modular and reusable code. Modern browsers support ES modules, allowing features like scoped variables and asynchronous loading.
## What is BrowserList?
- **Browserslist** is a tool used in modern web development to specify which browsers a project should support. It works with tools like Babel, Autoprefixer, and others to ensure compatibility with the specified browsers. Configuration is done in a browserslist file or within package.json.
> 1%
last 2 versions
not dead

## What is ReactElement and HTML Element?
- **ReactElement:** An immutable representation of a UI component in React. It’s created by calling React.createElement or using JSX syntax.
- **HTMLElement:** A DOM object representing an element on a webpage, directly managed by the browser.
# React and Web Development Concepts

## What is JSX?
- JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript. JSX makes it easier to write and add HTML in React. Each JSX element is just syntactic sugar for calling `React.createElement()`.

## What is Babel?
- Babel is a JavaScript compiler that converts ECMAScript 2015+ code into a backwards-compatible version of JavaScript. It allows you to use the latest features of JavaScript without worrying about browser support.

## What is Webpack?
- Webpack is a module bundler for JavaScript applications. It takes modules with dependencies and generates static assets representing those modules. Webpack can transform, bundle, or package any resource or asset.

## What is a Component?
- A component in React is a reusable piece of UI. It can be a class or a function that optionally accepts inputs (props) and returns a React element that describes how a section of the UI should appear.

## What is Component Composition?
- Component composition is the process of combining multiple components to create a more complex UI. It allows for better code reuse and organization by breaking down the UI into smaller, manageable pieces.

## What are Props?
- Props (short for properties) are read-only attributes used to pass data from one component to another in React. They allow components to be dynamic and reusable by providing them with different data.

## What is an API?
- An API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. It defines the methods and data structures that developers can use to interact with the software.

## What is Conflict Driven UI?
- Conflict Driven UI is a design approach where the UI adapts based on conflicts or changes in the application's state. It ensures that the UI remains consistent and responsive to user interactions and data changes.

## What is Render and Re-render in React?
- Render is the process of creating a representation of the UI based on the current state and props. Re-render occurs when the state or props of a component change, causing React to update the UI to reflect the new data.

## What is Object Destructuring in React?
- Object destructuring is a JavaScript feature that allows you to extract properties from objects and assign them to variables. In React, it is commonly used to extract props or state values for easier access.

## What are Key Props in React?
- Key props are special attributes used to identify elements in a list. They help React optimize rendering by keeping track of which items have changed, been added, or removed. Keys should be unique and stable.

## What is Conditional Rendering in React?
- Conditional rendering in React allows you to render different components or elements based on certain conditions. It can be achieved using JavaScript conditional statements like `if`, `else`, and ternary operators.

## What are Hooks?
- Hooks are functions that let you use state and other React features in functional components. They provide a way to manage state, side effects, and other React functionalities without using class components.

## What is useState Hook in React?
- The `useState` hook is a function that allows you to add state to functional components. It returns an array with the current state value and a function to update it.

## What is useEffect Hook in React?
- The `useEffect` hook is a function that lets you perform side effects in functional components. It runs after the component renders and can be used for tasks like data fetching, subscriptions, and manually changing the DOM.
- `useEffect` is called after every render of the component.
- Dependency array changes the behaviour of the render. if empty dependenct is called only initial render

## What is Dependency Array?
- The dependency array is an optional second argument to the `useEffect` hook. It specifies the variables that the effect depends on. The effect will only re-run if one of the dependencies changes.

## What is Reconciliation Algorithm?
- The reconciliation algorithm is a process used by React to update the UI efficiently. It compares the current state of the UI with the new state and determines the minimal number of changes needed to update the UI.

## What is React Fiber?
- React Fiber is a reimplementation of React's core algorithm for rendering. It improves the performance and responsiveness of React applications by breaking rendering work into smaller units and spreading it out over multiple frames.

## What is Diff Algorithm?
- The diff algorithm is a technique used by React to compare the current and new virtual DOM trees. It identifies the differences and updates only the parts of the DOM that have changed, making the rendering process more efficient.

## What is Virtual DOM?
- The virtual DOM is an in-memory representation of the real DOM. React uses it to optimize rendering by updating only the parts of the DOM that have changed, rather than re-rendering the entire UI.

## What is DOM?
- The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of nodes, allowing developers to manipulate the content and structure of web pages.

## Difference between DOM and Virtual DOM?
- The DOM is the actual representation of the web page in the browser, while the virtual DOM is a lightweight copy of the DOM used by React to optimize rendering. The virtual DOM allows React to update only the parts of the DOM that have changed, improving performance.

## What is DOM Mutation?
- DOM mutation refers to changes made to the DOM, such as adding, removing, or modifying elements. React uses the virtual DOM to efficiently manage and apply these changes to the real DOM.

## What is Monolithic Architecture?
- Monolithic architecture is a software design pattern where all components of an application are tightly coupled and run as a single unit. It can be simpler to develop and deploy but may become difficult to maintain and scale as the application grows.

## What is Microservices Architecture?
- Microservices architecture is a design pattern where an application is composed of small, independent services that communicate with each other. It allows for better scalability, maintainability, and flexibility but can be more complex to develop and manage.

## Why is React Fast and Where?
- React is fast because it uses the virtual DOM to optimize rendering. By updating only the parts of the DOM that have changed, React minimizes the number of DOM manipulations, which are typically slow operations. This makes React applications more responsive and efficient.

## What is Conflict Driven UI?
- Conflict Driven UI is a design approach where the UI adapts based on conflicts or changes in the application's state. It ensures that the UI remains consistent and responsive to user interactions and data changes.

Note:
- Whenever the state variable changes, React will re-render the component (React triggers the reconciliation cycle).

 ## useState

   - Never create state variable outside of the component
   - Local state varibale inside the functional component
   - Try to call the Hook at the top level of your React function
   - Never create the useStaet Hook inside if Else or Switch statement, for loop, function


## Short Cut to Create The component

 - rafce: React Arrow Function Component with Export
 - rafc: React Arrow Function Component.
 - fcc: Function Component with Class
 - fccs: Function Component with Class and State
 - fccp: Function Component with Class, State and Props

  ## What is Router and React Router DOM

  - Router: A mechanism to define and manage navigation in applications, allowing the display of specific components based on U RL changes.
  - React Router DOM: A library for implementing routing in React applications, providing components like ```<BrowserRouter>```, ```<Route>```, and ```<Link>``` for navigation and rendering

  ## What is useRouteError

  - A React Router DOM hook used to fetch error data from the ErrorBoundary during routing, helping display custom error messages or fallback UI.

  ## What are the types of Routing

  - Static Routing: Defined at build time, routes don't change dynamically.
  - Dynamic Routing: Routes change dynamically based on user actions or data, defined at runtime.

  ## What is Dynamic Routing and How to Do that in React

  - Dynamic Routing: Adapts routes dynamically during runtime, often based on user input or API data.
  - ```<Route path="/product/:id" element={<Product />} /> const { id } = useParams();```

  ## What is Client Side Routing

  - Routing managed in the browser, where URL changes don't trigger server requests but instead load content dynamically using JavaScript.

  ## What is Server side Routing

  - Routing managed on the server, where each URL request fetches a new HTML page from the server

  ## What is SSRendering

  - SSR: Generates the HTML on the server and sends it to the browser. Improves SEO and initial page load time.
  -  Example: Frameworks like Next.js.

  ## What is CSRendering 

  - CSR: Renders content in the browser after downloading a minimal HTML page and loading JavaScript. Suitable for SPAs.

  ## What is SPA
  
  - A web application where all content is dynamically loaded without refreshing the page, providing a seamless user experience.
  - Example: Gmail or Trello
