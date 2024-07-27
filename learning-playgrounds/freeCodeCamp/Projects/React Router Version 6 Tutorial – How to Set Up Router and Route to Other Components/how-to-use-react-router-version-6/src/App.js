import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about" style={{ color: 'white' }}>Click to view our about page</Link>
      <br />
      <Link to="contact" style={{ color: 'white' }}>Click to view our contact page</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>This is the contact page</h1>
    </div>
  )
}
export default App;
