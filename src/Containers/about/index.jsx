import React from 'react'
import './styles.scss'
import PageHeaderContent from '../../Components/pageHeaderContainer/index'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'





const personalDetails = [
  {
    label: "Name",
    value: "Huzaifa Bin Younus"
  },
  {
    label: "Age",
    value: "23"
  },
  {
    label: "Address",
    value: "Pakistan"
  }, {
    label: "Email",
    value: "younushuzaifa480@gmail.com"
  }, {
    label: "Contact No",
    value: "+92 3170266191"
  },
]


const jobSummary = 'Innovative front-end developer proficient in React and JavaScript with a strong foundation in responsive design. I specialize in building responsive, user-centric applications, including Ecommerce Sites which I built to improve user interaction.I bring high-fidelity designs to life, turning Figma mockups into pixel-perfect, interactive code, bridging the gap between design and development.'
const About = () => {
  return (
    <section id='about' className='about'>

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">

        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-1000px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>

          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >

            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">

        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >


          <div className='about__content__servicesWrapper__innerContent'>
            <div><FaDev size={60} color='var(--yellow-theme-main-color)' /></div>
            <div><DiAndroid size={60} color='var(--yellow-theme-main-color)' /></div>
            <div><FaDatabase size={60} color='var(--yellow-theme-main-color)' /></div>
            <div><DiApple size={60} color='var(--yellow-theme-main-color)' /></div>

          </div>
          </Animate>



        </div>




      </div>


    </section>
  )
}

export default About
