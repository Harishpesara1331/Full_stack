
import Navbar from '../components/NavBar.jsx'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    return (
        <>
            <div className=''>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default WebLayout