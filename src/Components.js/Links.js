import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export default function Links() {
  return (
    <>
      <h1>Routing Concept</h1>
      <Router>
        <Link to="/home">Home Page</Link> <br />
        <Link to="/About">About us</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
function About() {
  return (
    <>
      <h1 style={{ backgroundColor: "green" }}>About Us</h1>
      <h6>
        
        Learn ReactJS Tutorial ReactJS Tutorial ReactJS tutorial provides basic
        and advanced concepts of ReactJS. Currently, ReactJS is one of the most
        popular JavaScript front-end libraries which has a strong foundation and
        a large community. ReactJS is a declarative, efficient, and flexible
        JavaScript library for building reusable UI components. It is an
        open-source, component-based front end library which is responsible only
        for the view layer of the application. It was initially developed and
        maintained by Facebook and later used in its products like WhatsApp &
        Instagram. Our ReactJS tutorial includes all the topics which help to
        learn ReactJS. These are ReactJS Introduction, ReactJS Features, ReactJS
        Installation, Pros and Cons of ReactJS, ReactJS JSX, ReactJS Components,
        ReactJS State, ReactJS Props, ReactJS Forms, ReactJS Events, ReactJS
        Animation and many more. Why we use ReactJS? The main objective of
        ReactJS is to develop User Interfaces (UI) that improves the speed of
        the apps. It uses virtual DOM (JavaScript object), which improves the
        performance of the app. The JavaScript virtual DOM is faster than the
        regular DOM. We can use ReactJS on the client and server-side as well as
        with other frameworks. It uses component and data patterns that improve
        readability and helps to maintain larger apps.
      </h6>
      
    </>
  );
}
function Home() {
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>Home page</h1>
      <h5>
        Quick Start Welcome to the React documentation! This page will give you
        an introduction to the 80% of React concepts that you will use on a
        daily basis. You will learn How to create and nest components How to add
        markup and styles How to display data How to render conditions and lists
        How to respond to events and update the screen How to share data between
        components Creating and nesting components React apps are made out of
        components. A component is a piece of the UI (user interface) that has
        its own logic and appearance. A component can be as small as a button,
        or as large as an entire page. React components are JavaScript functions
        that return markup: Notice that starts with a capital letter. That’s how
        you know it’s a React component. React component names must always start
        with a capital letter, while HTML tags must be lowercase. Have a look at
        the result:
      </h5>
    </>
  );
}
