import React from 'react'
import Chart from '../../components/chart/Chart'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import './single.scss'

const Single = () => {
  return (
    <div className='single' >
      <SideBar />
      <div className="single__container">
        <NavBar />
     
      <div className="top">
        <div className="left">
          <div className="edit__button">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB-LNm-0OOD5g1FEXFqDsLgSZEGuaWJA8zw&usqp=CAU" alt="" className="item__image" />
              <div className="details">
                <h1 className="item__title">Jane Doe</h1>
                <div className="detail__item">
                  <span className="item__key">Email:</span>
                  <span className="item__value">adeekotobiloba@gmail.com</span>
                </div>

                <div className="detail__item">
                  <span className="item__key">Phone:</span>
                  <span className="item__value">+234 812 60 197 96</span>
                </div>

                <div className="detail__item">
                  <span className="item__key">Address:</span>
                  <span className="item__value">13, Musediq, Olajide Street.</span>
                </div>


                <div className="detail__item">
                  <span className="item__key">Country:</span>
                  <span className="item__value">Nigeria</span>
                </div>
              </div>
          </div>
        </div>
        <div className="right">
          <Chart/>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
    </div>

  )
}

export default Single