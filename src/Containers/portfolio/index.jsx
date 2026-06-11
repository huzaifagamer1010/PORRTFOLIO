import React, { useState } from 'react'
import PageHeaderContent from '../../Components/pageHeaderContainer/index'
import { BsInfoCircleFill } from 'react-icons/bs'
import ImageOne from '../../images/image1.jpg'
import ImageTwo from '../../images/image2.jpg'
import ImageThree from '../../images/image3.jpg'
import ImageFour from '../../images/image4.jpg'
import ImageFive from '../../images/image5.jpg'
import './styles.scss'

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: ''
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageTwo,
    link: ''
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link: ''
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageFour,
    link: ''
  },
  {
    id: 2,
    name: "UI Design",
    image: ImageFive,
    link: ''
  },
]


const filterData = [
  {
    filterId: 1,
    label: 'All'
  },
  {
    filterId: 2,
    label: 'Development'
  },
  {
    filterId: 3,
    label: 'Design'
  },
]





const Portfolio = () => {

  const [filteredValue, setFilteredValue] = useState(1)
  const [hoverValue, setHoverValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId)
  };

  function handleHover(index) {
    setHoverValue(index)
  }


  // console.log('=================================');
  // console.log(hoverValue);

  // console.log('=================================');


  const filteredItems = filteredValue === 1 ? portfolioData :
    portfolioData.filter(item => item.id === filteredValue);


  // console.log(filteredItems);


  return (
    <section id='portfolio' className='portfolio'>

      <PageHeaderContent
        headerText="My portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {
            filterData.map(item => (
              <li
                className={item.filterId === filteredValue ? 'active' : ''}
                onClick={() => handleFilter(item.filterId)} key={item.filterId}>

                {item.label}


              </li>
            ))
          }


        </ul>

        <div className='portfolio__content__cards'>
          {
            filteredItems.map((item, index) => (
              <div className='portfolio__content__cards__item' key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >

                <div className='portfolio__content__cards__item__img-wrapper'>
                  <a >
                    <img src={item.image} alt="dummy data" />
                  </a>
                </div>
                <div className='overlay'>


                {
                  index === hoverValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )
                }

                </div>


              </div>
            ))
          }
        </div>


      </div>


    </section>
  )
}

export default Portfolio