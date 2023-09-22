import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import EmployeeForm from './pages/EmployeeForm'
import EmployeeList from './pages/EmployeeList'
import Home from './pages/Home'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employee/add" element={<EmployeeForm />} />
                    <Route path="/employee/list" element={<EmployeeList />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
