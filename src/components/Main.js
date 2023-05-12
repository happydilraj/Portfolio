import React from 'react'
import '../components.css'
const happer = require("../images/happer.png")
const coronaIndex = require("../images/coronaIndex.png")
const github = require("../images/github.png")
const bhu = require("../images/bhu.jpg")
const rajat = require("../images/rajat.jpg")
const vps = require("../images/vps2.png")

export default function Navbar() {
  return (
    <>
  
  <nav className="navbar fixed-top navbar-expand-lg ">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#Home"><strong>Home</strong></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About"><strong>About</strong></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Projects"><strong>Projects</strong></a>
        </li><li className="nav-item">
          <a className="nav-link" href="#Academics"><strong>Academics</strong></a>
        </li>
      </ul>
      
    </div>
  </div>
  
</nav>
<div className="icons">
    <a href="https://www.facebook.com/profile.php?id=100022484867047" className="facebook" target='blank'><i className="fa fa-facebook"></i></a>
    <a href="https://github.com/happydilraj" className="github" target='blank'><i className="fa fa-github"></i></a>
    <a href="https://www.linkedin.com/in/dilraj-singh-009613208/" target='blank' className="linkedin"><i className="fa fa-linkedin"></i></a>
    <a href="https://www.instagram.com/_happydilraj/" className="instagram" target='blank'><i className="fa fa-instagram"></i></a>
</div>

{/* Home Section */}
<section id='Home'>
        <div id="leftImage"></div>
        <div className='ms-auto' id="rightImage"></div>
        
</section>

{/* About Section */}
<section id='About'>
    <div className="heading">About Me</div>
    <div id='about_container'>
        <div className="about_image">
        </div>
        <div id='allAbout'>
        I am <strong>Dilraj</strong>  currently in B.Tech third year at <strong>IIT BHU</strong> . I am from Sriganganagar, Rajasthan. I am interested in Full Stack Web development.
        I had also done an internship in full stack at Fyzen Career Solutions Pvt ltd. <br />
        I am proficient in - <strong> MERN Stack . </strong> <br />
        I had done my Secondary education from Vidya Bharati Public School where I got 10 CGPA. In Senior Secondary, I got 94.20% in RBSE. <br />
        I am head of JAGRITI'23 Operations team and coordinate well with the members of the team. <br />
        I also like to play Football. <br />
        Contact Me at - <strong>+91-8890049370</strong> 

        </div>
    </div>


</section>

{/* Projects Section */}
<section id="Projects">
<div className="heading">Projects</div>
 
<div className="container cards-container">
    <div className="cards">
        <img src={happer} alt="" />
        <h2>Chat App</h2>
        <a href="http://3.108.215.228/" target='blank'><button>Go</button></a>
    </div>
    <div className="cards">
        <img src={coronaIndex} alt="" />
        <h2>Corona Cases Index</h2>
        <a href="https://happydilraj.github.io/corona_index.github.io/" target='blank'><button>Go</button></a>
    </div>
    <div className="cards">
        <img src={github} alt="" />
        <h2>Google Meet Links</h2>
        <a href="https://github.com/happydilraj/google_meet_link_api" target='blank'><button>Go</button></a>
    </div>
    <div className="cards">
        <img src={github} alt="" />
        <h2>Video Chat App</h2>
        <a href="https://github.com/happydilraj/Video-chat-App" target='blank'><button>Go</button></a>
    </div>
</div>

</section>

{/* Academics Section */}
<section id='Academics'>
    <div className="heading">Academics</div>

    <div className="container cards-container2">
        <div className="cards">
            <img src={bhu} alt="" />
            <h4>Graduation</h4>
            <strong>IIT BHU</strong>
            <strong>CGPA - 8.73</strong>
        </div>
        <div className="cards">
            <img src={rajat} alt="" />
            <h4>Senior Secondary</h4>
            <strong>Rajat Vidyapeeth School</strong>
            <strong>Percentage - 94.20%</strong>
        </div>
        <div className="cards">
            <img src={vps} alt="" />
            <h4>Secondary</h4>
            <strong>Vidya Bharati Public School</strong>
            <strong>CGPA - 10</strong>
        </div>
    </div>

    <div id="resume">
    <strong>My Resume - </strong>
    <a href="https://drive.google.com/file/d/1kY1aKtxKEfCJnT2jRCQI8L_fRw6O6ywS/view?usp=share_link" target='blank'><button>Resume</button></a>
    </div>
</section>



</>
  )
}
