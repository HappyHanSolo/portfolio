import React from "react";
import NavBar from "../../Layout/navBar/index";
import Footer from "../../Layout/Footer/index";
import "../../../styles/Partials/_home.scss"
import IDPhoto from "../../../assets/me/ID Photo.jpeg";
import MeGif from "../../../assets/me/It Me.gif"
import MeSketch1 from "../../../assets/me/HansonSketch.png"
import MeSketch2 from "../../../assets/me/HansonSketch2.png"
import MeSketch3 from "../../../assets/me/HansonSketch3.webp";
import HansonTrendHunters from "../../../assets/me/HansonTrendhunters.jpg"
import HansonHeadshot from "../../../assets/me/HansonHeadshot.jpg"


export default function Home() {
  return (
    <>
      < NavBar/>
      <div className="mainWrapper">
        <div id="home" className="homeWrapper">
          <section className="content">
            <h3>Software Developer</h3>
            <h1>Heyo, I'm Hanson Wong</h1>
            <h2>(He/Him)</h2>
            <a href="https://www.linkedin.com/in/hanson-wong-776520157/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/HappyHanSolo?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a>
          </section>
          <section className="photoSection">
            <img className="photo1" src={IDPhoto} alt="Photo of Hanson" />
            <img className="photo2" src={HansonHeadshot} alt="Headshot of Hanson" />
            <img className="photo3" src={HansonTrendHunters} alt="Photo of Hanson 2" />
            <img className="photo4" src={MeGif} alt="Block Gif of Hanson" />
            <img className="photo5" src={MeSketch1} alt="Sketch of Hanson" />
            <img className="photo6" src={MeSketch2} alt="Sketch of Hanson 2" />
            <img className="photo7" src={MeSketch3} alt="Sketch of Hanson 3" />
          </section>
        </div>
        <div id="about" className="aboutWrapper">
          <h2 className="aboutMeTitle">About Me</h2>
          <p>
              I am a creative at heart. I love making all kinds of things, from websites and content to furniture. My approach is grounded in psychology, helping me connect with users on a deeper level. As a lifelong learner, I'm always expanding my coding skills and taking on new side projects.
              <br/>
              <br/>
              Outside of coding, I am the founder of Plastic Flux and a fitness enthusiast. I was formerly a high-performance dragon boat paddler 🐉 for <a href="https://www.truenorthpaddlingclub.com/home">True North Paddling Club</a> (SLP Premier Open and Hammerheads). If I'm not immersed in code, you'll probably find me on the water, training or building something! For a glimpse into my journey, check out my <a href="https://www.youtube.com/@hansonsadventure">youtube</a>!
          </p>
        </div>
        <div id="projects" className="ProjectWrapper">
          <div className="ProjectOverview">
              <ul>
                <li><img src="https://picsum.photos/id/10/253/910"/><p>Pomodoro Project</p></li>
                <li><img src="https://picsum.photos/id/20/253/910"/><p>Movie Tracker</p></li>
                <li><img src="https://picsum.photos/id/30/253/910"/><p>Anime Tracker</p></li>
                <li><img src="https://picsum.photos/id/40/253/910"/><p>Spoiler Shield</p></li>
                <li><img src="https://picsum.photos/id/50/253/910"/><p>Project5</p></li>
                <li><img src="https://picsum.photos/id/60/253/910"/><p>Project6</p></li>
                <li><img src="https://picsum.photos/id/70/253/910"/><p>Project7</p></li>
                <li><img src="https://picsum.photos/id/80/253/910"/><p>Project8</p></li>
              </ul>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
