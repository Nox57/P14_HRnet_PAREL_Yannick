import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <main role="main" className="home-container">
            <header className="home-header">
                <h1>Welcome to WealthHealth</h1>
            </header>
            <section className="home-content">
                <p>
                    At WealthHealth, innovation and your digital comfort are our
                    priority. The overhaul of HRnet, supercharged with React, is
                    here to provide you with an even more efficient and
                    intuitive employee file management.
                </p>
                <p>
                    Inspired by your feedback, we have optimized our platform to
                    turn yesterday's challenges into today's simplicity. Dive
                    into a reimagined user experience, where speed, stability,
                    and efficiency are paramount.
                </p>
            </section>
            <section className="home-invitation">
                <p>
                    Your valuable contribution has brought us here, and we
                    invite you to continue the journey with us, exploring and
                    sharing your impressions of HRnet.
                </p>
            </section>
            <nav className="home-navigation">
                <ul>
                    <li>
                        <Link to="/employee-list">View Employee List</Link>
                    </li>
                    <li>
                        <Link to="/add-employee">Add an Employee</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}
