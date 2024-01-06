[![Netlify Status](https://api.netlify.com/api/v1/badges/bf62f839-1577-4eca-ad39-f64046c1692e/deploy-status?branch=main)](https://app.netlify.com/sites/markhanrahan/deploys)

# My Personal Website

Welcome to my website. I built it using the React framework. I chose to use React “Hooks” instead of traditional “State” management techniques to see how it compared and learn something new. 
Hooks are great!

## Structure

~/
├─ src/
│  ├─ Components/
│  │  ├─ <Example_Component>/
│  │  │  ├─ index.jsx
│  │  │  ├─ style.css
│  ├─ Pages/
│  │  ├─ Home/
│  │  │  ├─ index.jsx
│  │  ├─ Projects/
├─ README.md
├─ package.json
├─ package-lock.json
├─ .gitignore
├─ .prettierignore

### src

All source code is stored here.

#### Pages

Each 'View' of this website is a Page. Pages are constructed of Components.
Store new pages here.
Example: Home, Projects, Blog

#### Components

Custom React components are stored here for quick visibility and re-use
- Store each new Component as a sub-directory
- each Component sub-directory should contain an index.jsx and style.css file
- I prefer to keep style within the component, not to everyone's taste

### package.json and package-lock.json
These files control dependency management and dependency locking respectively within node.

### .prettierignore
This repository uses prettier to lint the codebase.






