import { useState } from 'react'
import { US_states } from '../datas/US_states'
import './EmployeeForm.css'

export default function EmployeeForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        department: 'Sales', // default
        street: '',
        city: '',
        state: US_states[0].abbreviation, // default
        zipCode: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const saveEmployee = () => {
        const employees = JSON.parse(localStorage.getItem('employees')) || []
        employees.push(formData)
        localStorage.setItem('employees', JSON.stringify(employees))
        alert('Employee Created!')
    }

    return (
        <div className="container">
            <a href="employee-list.html">View Current Employees</a>
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
                <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                >
                    {US_states.map((state) => (
                        <option
                            key={state.abbreviation}
                            value={state.abbreviation}
                        >
                            {state.name}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                />
                <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                >
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
            </form>
            <button onClick={saveEmployee}>Save</button>
        </div>
    )
}
