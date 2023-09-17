import './Header.css'
import logo from '../../assets/logo.jpg'

function Header() {
    return (
        <header className="hrnet-header">
            <img src={logo} alt="HRnet Logo" className="hrnet-logo" />
            <h1 className="hrnet-title">HRnet</h1>
        </header>
    )
}

export default Header
