import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import EmployeeForm from './pages/EmployeeForm/EmployeeForm'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import NotFound from './pages/NotFound/NotFound'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<EmployeeForm />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
