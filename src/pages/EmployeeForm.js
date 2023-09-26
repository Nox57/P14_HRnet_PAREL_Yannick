import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeeSlice'
import Select from 'react-select'
import { US_states } from '../datas/US_states'
import Modal from '../components/Modal/Modal'
import './EmployeeForm.css'

export default function EmployeeForm() {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        department: 'Sales', // default
        street: '',
        city: '',
        state: US_states[0].abbreviation, // Juste l'abréviation
        zipCode: '',
    })

    const departments = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ]

    const handleChange = (name, option) => {
        const newValue = option.value || option.target.value
        setFormData((prevData) => ({ ...prevData, [name]: newValue }))
    }

    const [isModalOpen, setModalOpen] = useState(false)

    const saveEmployee = () => {
        dispatch(addEmployee(formData))
        setModalOpen(true)
    }

    return (
        <div className="container">
            <a href="/">View Current Employees</a>
            <h2>Create Employee</h2>
            <form onSubmit={(e) => e.preventDefault()} id="create-employee">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={formData.startDate}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formData.street}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                />
                <Select
                    name="state"
                    value={{
                        value: formData.state,
                        label: US_states.find(
                            (state) => state.abbreviation === formData.state
                        ).name,
                    }}
                    onChange={(option) => handleChange('state', option)}
                    options={US_states.map((state) => ({
                        value: state.abbreviation,
                        label: state.name,
                    }))}
                />
                <input
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                />
                <Select
                    name="department"
                    value={departments.find(
                        (dept) => dept.value === formData.department
                    )}
                    onChange={(option) =>
                        handleChange('department', option.value)
                    }
                    options={departments}
                />
            </form>
            <button onClick={saveEmployee}>Save</button>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Confirmation</h2>
                <p>Employee successfully added !</p>
            </Modal>
        </div>
    )
}
