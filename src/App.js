import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ColorSchemesExample from './components/Navbar/Navbar';
import Profile from './components/Profile/profile';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      {/* <Navbar/> */}
      <ColorSchemesExample/>
      {/* <MyComponent/> */}
      <Profile/>
      <Footer/>
    </>
  );
}

export default App;
