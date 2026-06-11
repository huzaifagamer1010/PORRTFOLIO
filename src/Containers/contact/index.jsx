import React from 'react'
import PageHeaderContent from '../../Components/pageHeaderContainer/index'
import {BsInfoCircleFill} from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss'


const Contact = () => {
  return (
    <section id='contact' className='contact'>
    
        <PageHeaderContent 
        headerText = "Contact Me"
        ico n={<BsInfoCircleFill size={40} />}
        />
        <div className='contact__content'>
         <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:'translateX(-200px)'
          }}
          end={{
            transform:'translateX(0px)'
          }}
          >
          <h3 className='contact__content__header-text'>
            Let's Talk
          </h3>
          </Animate>


          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:'translateX(200px)'
          }}
          end={{
            transform:'translateX(0px)'
          }}
          >
          <div className='contact__content__form'>
            <div className='contact__content__form__controlswrapper'>
              <div>
                <input required name="name" className='inputName' type='text' />
                <label htmlFor="name" className='nameLabel'>Name</label>
              </div>
              <div>
                <input required name="email" className='inputEmail' type='email' />
                <label htmlFor="email" className='emailLabel'>Email</label>
              </div>
              <div>
                <textarea 
                rows="5" 
                required name="description" className='inputDescription'
                type='text' />
                <label htmlFor="description" className='descriptionLabel'>Description</label>
              </div>
              
            </div>
            <button>Submit</button>
          </div>
          </Animate>
        </div>
    
        </section>
  )
}

export default Contact