/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.scss';
import Redirections from './components/redirections';
import ProfilePicture from './components/ProfilePicture';
import Blogs from './components/Blogs';
import { useState } from 'react';



function App() {
  let [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter => counter + 1)
    console.log(counter)
  }
  const headers = [{ title: 'Projects', image: '/projects.jpg' }, { title: 'Courses', image: '/courses.jpg' }, { title: 'Education', image: '/education.jpg' }]

  return (
    <div className="App">
      <div className="navigation-content">
        <img src={logo} className="App-logo" alt="logo" />
        <Redirections />
      </div>
      <div className="main-content">
        <div className="information-content">
          <span>Who am I? </span>
          <span>Abdelrahman</span>
          <p>As a dedicated professional with a strong background in e-commerce and CRM systems, I have successfully contributed to the development of a dynamic website that integrates book sales with local trip bookings. My work on this innovative platform involved designing and implementing features that enhance user experience and streamline operations. Passionate about leveraging technology to solve real-world problems, I am committed to driving business growth and delivering exceptional value through strategic solutions.</p>
          <button onClick={handleClick}>
            Explore more
          </button>
        </div>
        {counter !== 0 ? <span>{counter}</span> : null}
        <ProfilePicture />
      </div>
      <Blogs headers={headers} />
    </div>
  );
}


export default App;
