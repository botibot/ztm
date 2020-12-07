import React, { Component } from "react";
import Navigation from "./Components/Navigation.Component/Navigation";
import Logo from "./Components/Logo.Component/Logo";
import ImageLinkForm from "./Components/ImageLinkForm.Component/ImageLinkForm";
import QR from "./Components/QR.Component/QR";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {
          // <FaceRecognition />
        }
        <QR />
      </div>
    );
  }
}

export default App;
