# Learn React with Akshay Saini (Creator of [NamasteDev](https://namastedev.com/))


This repository contains all the examples that were explained during the course and also contains a [README.md]() file where I will provide a link of an article for each concepts.

## Who can benefit from this repo?
This repository will be useful for all the developers, who has ba has basic knowledge of HTML, CSS and Javascript and taken up [NamasteDev]() course for react and want to refer the codebase which was discussed during the course and can also contribute to update the documentation and can also add some additional cool features to the current projects. 

## Tools Required:
You need to install these two application on your machine before you start the course and also to run the app.
- VS Code (Editor) - [Download](https://code.visualstudio.com/download)
- Chrome (Browser) - [Download](https://www.google.com/chrome/)
- node.js - [Download](https://nodejs.org/en/download/current)
- git - [Download](https://git-scm.com/)


## Tech Stack you will learn in this course:
As you go forward in the course, you will find all the given tech stack coming your way and at the end of the course you will end learning about all these teck stacks. So buckle up, its going to be a roller-coaster.
- React V18 (UI Library)
- Tailwind (CSS Library)
- Redux Toolkit (State Management System)
- React Router DOM (Page Navigation)
- Parcel (Bundler)
- Babel (Transpiler)
- Jest (Unit Testing)
- React Testing Library (React Component Testing)


## Steps to run the app
- Step 1: Open your VS Code editor's terminal.
- Step 2: Clone the repo by running the command below on your VS Code terminal.
```sh
git clone https://github.com/tanishraj/learn-react-18.git
cd learn-react-18
```
- Step 2: Now, you are at the root of the folder. Choose which episode's app you want to run.
- Step 3: Move into the folder. Lets say I want to run the app from `Episode 03 - Laying the foundation`
```sh
cd Episode\ 03\ -\ Laying\ the\ foundation/
```
- Step 4: If that folder contains a `package.json` file. Run the below command to install the dependency packages.
```sh
npm install
```
- Step 5: Run the app
```sh
npm start
```
- Step 6: Open the browser, and paste this link [http://localhost:1234/](http://localhost:1234/).
- Step 7: You will be able to see the app running.


====================================================================================

## Episode 01 - Inception
| # | Questions |
| --- | --- |
| 1 | [What is Emmet?](https://medium.com/@tanish_rajput/emmet-supercharge-your-coding-with-web-developments-speed-demon-dead0c4e8384) |
| 2 | [Difference between a Library and Framework?](https://medium.com/@tanish_rajput/libraries-vs-frameworks-a-tale-of-two-code-structures-0dd47a75a72e) |
| 3 | [What is CDN? Why do we use it?](https://medium.com/@tanish_rajput/unraveling-the-anatomy-of-a-content-delivery-network-cdn-8241eaa7a815) |
| 4 | [Why is React known as React?](https://medium.com/@tanish_rajput/why-react-unpacking-the-name-behind-the-javascript-juggernaut-c5c806b1786c) |
| 5 | [What is crossorigin in script tag?](https://medium.com/@tanish_rajput/crossorigin-your-guide-to-secure-cross-origin-adventures-in-html-8c84f174ecf9) |
| 6 | [What is the difference between React and ReactDOM?](https://medium.com/@tanish_rajput/react-and-reactdom-the-dynamic-duo-behind-stunning-user-interfaces-3e83ca3d1468) |
| 7 | [What is the difference between react.development.js and react.production.js files via CDN?](https://medium.com/@tanish_rajput/react-development-vs-production-choosing-the-right-tools-for-the-job-75206915ba5e) |
| 8 | [What is async and defer?)](https://medium.com/@tanish_rajput/loading-javascript-asynchronously-defer-vs-async-15a6c6471927) |

====================================================================================

## Episode 02 - Igniting our app
| # | Questions |
| --- | --- |
| 1 | [What is NPM?](https://medium.com/@tanish_rajput/npm-demystified-your-guide-to-the-node-package-manager-c4426d6550ee) |
| 2 | [What is Parcel/Webpack? Why do we need it?](https://medium.com/@tanish_rajput/comparing-two-most-popular-bundlers-parcel-vs-webpack-014f993b8190) |
| 3 | What is .parcel-cache? |
| 4 | What is npx? |
| 5 | What is the difference between dependencies and devDependencies? |
| 6 | [What is Tree Shaking?](https://medium.com/@tanish_rajput/anatomy-of-tree-shaking-a-code-fueled-exploration-4c3687942241) |
| 7 | [What is Hot Module Replacement?](https://medium.com/@tanish_rajput/hmr-hot-module-replacement-keeping-the-development-wheel-spinning-12e42ba45bad) |
| 8 | [List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.](https://medium.com/@tanish_rajput/parcel-a-zero-configuration-bundler-for-the-modern-web-5e7159c9fa43) |
| 9 | [What is .gitignore? What should we add and not add into it?](https://medium.com/@tanish_rajput/demystifying-the-gitignore-your-guide-to-repository-cleanliness-dc5b8e7f7675) |
| 10 | [What is the difference between package.json and package-lock.json?](https://medium.com/@tanish_rajput/demystifying-package-json-and-package-lock-json-the-guardians-of-node-js-dependencies-c8863f974441) |
| 11 | [Why should I not modify package-lock.json?](https://medium.com/@tanish_rajput/dont-touch-package-lock-json-a66d8a96e931) |
| 12 | [What is node_modules? Is it a good idea to push that on Git?](https://medium.com/@tanish_rajput/unpacking-the-node-modules-mystery-what-it-is-and-why-its-best-left-off-git-1d732e0e65d7) |
| 13 | What is the dist folder? |
| 14 | [What is browserlists?](https://medium.com/@tanish_rajput/browserslist-compatibility-across-a-diverse-range-of-browsers-f4beeb58b18e) |
| 15 | Read about different bundlers: vite, webpack, parcel |
| 16 | [Read about: ^ - caret and ~ - tilde](https://medium.com/@tanish_rajput/a73e02033bfc) |
| 17 | Read about Script types in HTML (MDN Docs) |

====================================================================================

## Episode 03 - Laying the foundation
| # | Questions |
| --- | --- |
| 1 JSX |
| 2 React.createElement vs JSX |
| 3 Benefits of JSX |
| 4 Behind the Scenes of JSX |
| 5 Babel & parcel role in JSX |
| 6 Components |
| 7 Functional Components |
| 8 Composing Components |
| 8 Superpowers of JSX |
| 10 Role of type attribute in script tag? What options can I use there? |
| 11 {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX |

====================================================================================

## Episode 04 - Talk is cheap, show me the code!
| # | Questions |
| --- | --- |
| 1 Is JSX mandatory for React? |
| 2 Is ES6 mandatory for React? |
| 3 {TitleComponent} vs {} vs {} in JSX |
| 4 How can I write comments in JSX? |
| 5 What is `React.Fragment` and `<> </>`? |
| 6 What is Virtual DOM? |
| 7 What is Reconciliation in React? |
| 8 What is React Fiber? |
| 9 Why do we need keys in React? When do we need keys in React? |
| 10 Can we use index as keys in React? |
| 11 What are props in React? Ways to pass props|
| 12 What is a Config Driven UI?|

====================================================================================

## Episode 05 - Let's get Hooked!
| # | Questions |
| --- | --- |
| 1 What is the difference between Named Export, Default export, and * as export? |
| 2 What is the importance of config.js file? |
| 3 What are React Hooks? |
| 4 Why do we need a useState Hook? |

====================================================================================

## Episode 06 - Exploring the world
| # | Questions |
| --- | --- |
| 1 What is a Microservice? |
| 2 What is Monolith architecture? |
| 3 What is the difference between Monolith and Microservice? |
| 4 Why do we need a useEffect Hook? |
| 5 What is Optional Chaining? |
| 6 What is Shimmer UI? |
| 7 What is the difference between JS expression and JS statement |
| 8 What is Conditional Rendering, explain with a code example |
| 9 What is CORS? |
| 10 What is async and await? |
| 11 What is the use of `const json = await data.json();` in getRestaurants() |

====================================================================================

## Episode 07 - Finding the Path
| # | Questions |
| --- | --- |
| 1 What are various ways to add images into our App? Explain with code examples |
| 2 What would happen if we do console.log(useState())? |
| 3 How will useEffect behave if we don't add a dependency array? |
| 4 What is SPA? |
| 5 What is the difference between Client Side Routing and Server Side Routing? |

====================================================================================

## Episode 08 - Let's get Classy
| # | Questions |
| --- | --- |
| 1 How do you create Nested Routes in react-router-dom configuration? |
| 2 Read about createHashRouter and createMemoryRouter from React Router docs. |
| 3 What is the order of life cycle method calls in Class Based Components? |
| 4 Why do we use componentDidMount? |
| 5 Why do we use componentWillUnmount? Show with example |
| 6 Why do we use super(props) in constructor? (Research) |
| 7 Why can't we have the callback function of useEffect async? (Research) |

====================================================================================

## Episode 09 - Optimizing our App
| # | Questions |
| --- | --- |
| 1 When and why do we need lazy()? |
| 2 What is suspense? |
| 3 Why do we get this error: "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition"? How does suspense fix this error? |
| 4 Advantages and disadvantages of using this code splitting pattern? |
| 5 When do we need suspense and why? |

====================================================================================

## Episode 10 - Jo dikhta hai vo bikta hai
| # | Questions |
| --- | --- |
| 1 Explore all the ways of writing CSS. |
| 2 How do we configure Tailwind? |
| 3 In tailwind.config.js, what do all the keys mean (content, theme, extend, plugins)? |
| 4 Why do we have a .postcssrc file? |

====================================================================================

## Episode 11 - Data is the new Oil
| # | Questions |
| --- | --- |
| 1 What is prop drilling? |
| 2 What is lifting the state up? |
| 3 What is Context Provider and Context Consumer? |
| 4 If you don’t pass a value to the provider, does it take the default value? |

====================================================================================

## Episode 12 - Let's Build our Store
| # | Questions |
| --- | --- |
| 1 useContext vs Redux |
| 2 Advantage of using Redux Toolkit over Redux |
| 3 Explain Dispatcher |
| 4 Explain Reducer |
| 5 Explain slice |
| 6 Explain selector |
| 7 Explain createSlice and the configuration it takes |

====================================================================================

## Episode 13 - Time for the test
| # | Questions |
| --- | --- |
| 1 What are different types for testing? |
| 2 What is Enzyme? |
| 3 Enzyme vs React Testing Library |
| 4 What is Jest and why do we use it? |

====================================================================================