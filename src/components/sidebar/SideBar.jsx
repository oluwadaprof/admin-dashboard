import { Notifications, CreditCard, Dashboard, Person, Store, SettingsApplications,  LocalShipping,AccountCircleOutlined, ExitToApp,Assessment } from '@material-ui/icons'
import { PsychologyOutlined } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import React from 'react'
import './sidebar.scss' 

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">tobidev</span>
            </div>
            <hr />
            <div className="center">
                <ul> 
                    <p className="title">MAIN</p>
                    <li><Dashboard className='icon' /><span>Dashboard</span></li>

                    <p className="title">LISTS</p>
                    <li><Person className='icon' /> <span>Users</span></li>
                    <li><Store className='icon' /> <span>Products</span></li>
                    <li><CreditCard className='icon' /> <span>Orders</span></li>
                    <li><LocalShipping className='icon' /> <span>Delivery</span></li>

                    <p className="title">USEFUL</p>
                    <li><Assessment className='icon' /> <span>Stats</span></li>
                    <li><Notifications className='icon' /> <span>Notifications</span></li>

                    <p className="title">SERVICE</p>
                    <li><SettingsSystemDaydreamIcon className='icon' /><span>System Health</span></li>
                    <li><PsychologyOutlined className='icon' /> <span>Logs</span></li>
                    <li><SettingsApplications className='icon' /> <span>Settings</span></li>

                     <p className="title">USER</p>
                    <li><AccountCircleOutlined className='icon' /> <span>Profile</span></li>
                    <li><ExitToApp className='icon' /> <span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color__option"> <DarkModeIcon/> </div>
                <div className="color__option"> <LightModeIcon/> </div>
                
            </div>
        </div>
    )
}

export default SideBar