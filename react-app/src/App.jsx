import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useState } from "react";

const courses = [
  {title: 'Web Development', desc: 'Learn WEB tips and tricks'},
  {title: 'SEO', desc: 'Learn SEO tips and tricks'},
  {title: 'Cyber Security', desc: 'Learn Cyber security'}
]

function App() {
  const [count, setCount] = useState(1)
  // togglevisibility
  const [isVisible, setVisibility] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <button className="bg-blue-600 p-2 rounded" onClick={() => setCount(count + 1)}>Count: {count}</button>

      <button className="bg-blue-600 text-white font-bold p-2 rounded ml-2" onClick={() => setVisibility(!isVisible)}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </button>

      {isVisible && (
        <h1 className="font-bold text-2xl">Some Text</h1>
      )}

      <div className="card-container">
        {courses.map((course) => (
          <Card title={course.title} desc={course.desc} img='/hero.png'/>
        ))}
      </div>
    </>
  );
}



export default App;


