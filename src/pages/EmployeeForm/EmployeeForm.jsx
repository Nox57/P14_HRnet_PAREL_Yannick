import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/employeeSlice'
import Select from 'react-select'
import { US_states } from '../../datas/US_states'
import Modal from '../../components/Modal/Modal'
import './EmployeeForm.css'

export default function EmployeeForm() {
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'HRnet - Add Employee'
    }, [])

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

    const handleChange = (name) => (eventOrOption) => {
        const newValue = eventOrOption.target
            ? eventOrOption.target.value
            : eventOrOption.value
        setFormData((prevData) => ({ ...prevData, [name]: newValue }))
    }

    const [isModalOpen, setModalOpen] = useState(false)

    const saveEmployee = () => {
        dispatch(addEmployee(formData))
        setModalOpen(true)
    }

    return (
        <div className="form-container">
            <h2 className="title-container">Create Employee</h2>
            <form onSubmit={(e) => e.preventDefault()} id="create-employee">
                <div className="row">
                    <div className="col">
                        <label htmlFor="firstName">First Name :</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange('firstName')}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName">Last Name :</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange('lastName')}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="dateOfBirth">Date of Birth :</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            placeholder="Date of Birth"
                            value={formData.dateOfBirth}
                            onChange={handleChange('dateOfBirth')}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="startDate">Start Date :</label>
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            placeholder="Start Date"
                            value={formData.startDate}
                            onChange={handleChange('startDate')}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="street">Street :</label>
                        <input
                            type="text"
                            name="street"
                            id="street"
                            placeholder="Street"
                            value={formData.street}
                            onChange={handleChange('street')}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="city">City :</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange('city')}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="state">State :</label>
                        <Select
                            inputId="state"
                            name="state"
                            value={{
                                value: formData.state,
                                label: US_states.find(
                                    (state) =>
                                        state.abbreviation === formData.state
                                ).name,
                            }}
                            onChange={handleChange('state')}
                            options={US_states.map((state) => ({
                                value: state.abbreviation,
                                label: state.name,
                            }))}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    marginTop: '10px',
                                }),
                            }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="zipCode">Zip Code :</label>
                        <input
                            type="number"
                            name="zipCode"
                            id="zipCode"
                            placeholder="Zip Code"
                            value={formData.zipCode}
                            onChange={handleChange('zipCode')}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="department">Department :</label>
                        <Select
                            inputId="department"
                            name="department"
                            value={departments.find(
                                (dept) => dept.value === formData.department
                            )}
                            onChange={handleChange('department')}
                            options={departments}
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    marginTop: '10px',
                                }),
                            }}
                        />
                    </div>
                </div>
            </form>

            <button onClick={saveEmployee}>Save</button>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Confirmation</h2>
                <p>Employee successfully added !</p>
            </Modal>
        </div>
    )
}
