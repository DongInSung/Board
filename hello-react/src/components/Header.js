import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import headerStyle from './Header.module.css';

function Header() {

    return (
        <div className={headerStyle.header}>

            <div className={headerStyle.homeLogo}>
                <Link to='/'>
                    <img src={logo} alt='null' />
                </Link>
            </div>

            <ul className={headerStyle.nav}>
                <Link to='/board'><li>image test</li></Link>
                <Link to='/store'><li>redux test</li></Link>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>

            <div className={headerStyle.user}>
                {/* <div><span> ~님 안녕하세요! </span></div> */}
                <button>Sign In</button>
                <Link to='/signup'><button>Sign Up</button></Link>
            </div>

        </div>
    )
}

export default Header;