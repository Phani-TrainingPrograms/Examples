# React + Vite
- 
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Notes:
- Reactjs
- JSX
- Virtual Dom
- Requirements: JS, HTML, 
- Installations: Nodejs for backend services and npm, VS Code for text editor. 
- Create a new project folder called ReactExamples. 
- Open cmd: npm create vite@latest, name it my-react-app. Select React, use plain js. 
- cd my-react-app
- npm install
- npm run dev
- node-modules: External libraries. 
- public: has public assets, images
- src: Code for UR application. 
- assets folder will be the part of the final project bundle and public folder shall be available as URLs only. 
- main jsx: Its our main app. 
- App component is the root component. 
- Index.html is the main entry point and is the main page of the application. 
- package.json contains the metadata of our project. 
- Make some chages to the App component and other components are added to the App components
- Create header component. Function based components: Header should be in caps. This function shall return a mix of JS and HTML. React components can return only single element which can have multiple child elements. 
- Props are readonly properties that are shamed b/w components. A parent component can send data to the child component. Properties are in the form of key-value pairs. Use Proptypes for typesafety. U could use default props.