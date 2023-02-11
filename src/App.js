import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
// import HomePage from "./components/HomePage"

function App() {
  return (
    <>
    <Nav/>
    <Main/>
    {/* <HomePage/> */}
    <Footer/>
    </>
  );
}

export default App;

/*
<Header/> - shows the navbar
<Main/> - links to other pages in the SPA
<HomePage/> - displays content on the homepage
<Footer/>
 */