import React from 'react';
import './skills.css';
import javascript from '../../Assets/javascript.webp';
import sql from '../../Assets/sql.png';
import reactImg from '../../Assets/React.png';
//import nodeImg from '../../Assets/Node.png';
import springImg from '../../Assets/Spring.png';
import javaImg from '../../Assets/Java.png';

const Skill = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>
        Experienced Full Stack Developer with a strong foundation in both front-end and back-end technologies,
        <br />
        I excel in the art of crafting visually appealing and user-friendly websites
        <br />
        that seamlessly integrate both front-end and back-end technologies.
      </span>

      <div className='skillBars'>

        <div className='skillBar'>
          <img src={javascript} alt='JavaScript' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>JavaScript</h2>
            
          </div>
        </div>

        <div className='skillBar'>
          <img src={sql} alt='SQL' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>SQL</h2>
            
          </div>
        </div>

        <div className='skillBar'>
          <img src={reactImg} alt='React.js' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>React.js</h2>
          </div>
        </div>

        

        <div className='skillBar'>
          <img src={javaImg} alt='Java' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Java</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={springImg} alt='Spring Boot' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Spring Boot</h2>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skill;