import React from 'react';
import "../../../styles/Partials/_footer.scss";
import mewcode from "../../../assets/meow_code.gif"

export default function Footer() {
  return (
    <div className='footer'>
        <section className='webTag'>
            <p>
                <span className='versionTag'>V1.0.0</span>
                <span className='dateTag'>Last Updated: 2024-11-19</span>
                <br/>
                <br/>
                Powered with 🧋 and Developed by Hanson Wong ❣️
            </p>
        </section>
        <section className='links'>
            <ul>
                <li><a href="https://www.linkedin.com/in/hanson-wong-776520157/">LinkedIn</a></li>
                <li><a href="https://github.com/HappyHanSolo?tab=repositories">Github</a></li>
                <li><a href='https://x.com/HansonTweets'>X</a></li>
                <li><a href="https://www.youtube.com/@hansonsadventure">Youtube</a></li>
                {/* <li><a>Readings</a></li> */}
            </ul>
        </section>
        <section className='connect'>
            <p>Let's build something together<img src={mewcode} alt="Meow_Code" /></p>     
            <p>hanson.wong01@gmail.com</p>
        </section>
    </div>
  );

}
