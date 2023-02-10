import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <HomePage/>
    <Footer/>
    </>
  );
}

export default App;

/*
<Header/> - shows the navbar
<Nav/> - links to other pages in the SPA
<HomePage/> - displays content on the homepage
<Footer/>
 */