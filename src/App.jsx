/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import Redirections from './components/redirections';
import ProfilePicture from './components/ProfilePicture';


function App() {
  return (
    <div className="App">
      <div className="navigation-content">
        <img src={logo} className="App-logo" alt="logo" />
        <Redirections />
      </div>
      <div className="main-content">
        <div class="information-content">
          <span>Who am I? </span>
          <span>Abdelrahman</span>
          <p>As a dedicated professional with a strong background in e-commerce and CRM systems, I have successfully contributed to the development of a dynamic website that integrates book sales with local trip bookings. My work on this innovative platform involved designing and implementing features that enhance user experience and streamline operations. Passionate about leveraging technology to solve real-world problems, I am committed to driving business growth and delivering exceptional value through strategic solutions.</p>
          <button>
            Explore more
          </button>
        </div>
        <ProfilePicture />
      </div>
    </div>
  );
}


export default App;
