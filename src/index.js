//This project uses Materialize-CSS
//Packages:
//react-materialize
//materialize-css
//https://www.npmjs.com/package/react-materialize
//https://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome
//https://materializecss.com/
//Dependancy:
//https://www.npmjs.com/package/prop-types

// import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
