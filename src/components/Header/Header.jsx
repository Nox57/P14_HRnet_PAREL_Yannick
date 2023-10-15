import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header className="hrnet-header">
            <div className="hrnet-logo-container">
                <Link to="/">
                    <img src={logo} alt="HRnet Logo" className="hrnet-logo" />
                </Link>
            </div>
            <div className="hrnet-title-container">
                <h1 className="hrnet-title">HRnet</h1>
            </div>
            <div className="hrnet-nav-container">
                <nav className="hrnet-nav">
                    <ul>
                        <li>
                            <Link to="/employee-list">Employee List</Link>
                        </li>
                        <li>
                            <Link to="/add-employee">Add Employee</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
