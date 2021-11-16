import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'
import Education from './components/Education';
import Experience from './components/Experience';


ReactDOM.render(
  <React.StrictMode>
    <About />
    <Experience />
    <Education />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

