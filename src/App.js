import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import FaceRecognition from './views/faceRecognition';
import CameraFaceDetect from './views/cameraFaceDetect';
import Home from './views/home';
import Footer from './components/footer.jsx';
import Header from './components/header';
import './App.css';
import TestImages from './views/testImages';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
          <div className="route">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={FaceRecognition} />
            <Route exact path="/camera" component={CameraFaceDetect} />
            <Route exact path="/testimage" component={TestImages} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
