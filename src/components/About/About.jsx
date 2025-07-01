import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/profile_img.svg' 
import sauravImage from '../../assets/sauravImage.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={sauravImage} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p> I'm enthusiastic about embarking on my journey as a Full Stack Developer. Eager to make a significant mark in the tech world, I'm equipped with a solid foundation in both frontend and backend development.

My passion for creating seamless and engaging user experiences drove me to master essential technologies like HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, Java, MySQL, JDBC, and Hibernate, allowing me to build visually appealing and responsive web interfaces.</p>
            <p>I'm excited to connect with fellow developers, mentors, and industry professionals to learn, share experiences, and contribute to impactful projects.

Let's code, collaborate, and make a difference together!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p>
            <hr style={{width:'75%'}}/></div>
            <div className="about-skill"><p>React Js</p>
            <hr style={{width:'65%'}}/></div>
            <div className="about-skill"><p>JavaSCript</p>
            <hr style={{width:'70%'}}/></div>
            <div className="about-skill"><p>Java</p>
            <hr style={{width:'80%'}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
