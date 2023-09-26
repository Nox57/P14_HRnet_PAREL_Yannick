import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import EmployeeForm from './pages/EmployeeForm'
import EmployeeList from './pages/EmployeeList'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<EmployeeForm />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
