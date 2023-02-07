import {Link} from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to={'/'} style={{color:'inherit', textDecoration: 'none'}} >
                    <span className='logo'>Afetzede Ara</span>
                </Link>
                <div className='navItems'>
                    <Link to={'/'} style={{color:'inherit', textDecoration: 'none'}} >
                        <span className='logo'>Yaralı Ara</span>
                    </Link>
                    <Link to={'/helptable'} style={{color:'inherit', textDecoration: 'none'}} >
                        <span className='logo'>Yardım talebi ara</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
