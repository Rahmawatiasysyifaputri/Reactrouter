import React from "react"
import Hub from "./components/hub";
import { Link } from "react-router-dom";
//import Navbar from "./components/Navbar"
//import Main from "./Main"

class App extends React.Component{
  render(){
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-green bg-dark">
        <a class="navbar-brand" href="/">Beranda</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
            < a class="nav-link" href="/haribesar">Hari Besar <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/gallery">Galeri</a>
            </li>
          </ul>
        </div>
      </nav>
      <p><Hub /></p>
      </div>
    )
  }
}

export default App;