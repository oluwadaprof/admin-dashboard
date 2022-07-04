import NavBar from '../../components/navbar/NavBar';
import SideBar from '../../components/sidebar/SideBar';
import Widget  from '../../components/widget/Widget';
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <SideBar />
            <div className="home__container">
                <NavBar />
                <div className="widget type=''s">
                    <Widget type='users' />
                    <Widget type='orders' />
                    <Widget type='earnings' />
                    <Widget type='balance' />
                </div>
            </div>
        </div>
    )
}

export default Home;