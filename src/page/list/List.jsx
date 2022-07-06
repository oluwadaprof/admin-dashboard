import React from 'react'
import './list.scss'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import DataTable from '../../components/datatable/DataTable'

const List = () => {
  return (
    <div className='list' >
      <SideBar/>
      <div className="list__container">
        <NavBar/>
        Motherfucker!!
        <DataTable/>
      </div>
    </div>
  )
}

export default List