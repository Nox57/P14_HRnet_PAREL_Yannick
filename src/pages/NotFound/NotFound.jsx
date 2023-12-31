import { useEffect } from 'react'
import './NotFound.css'

export default function NotFound() {
    useEffect(() => {
        document.title = 'HRnet - Page Not Found'
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oops! Page Not Found</p>
            <p>
                We're sorry, but the page you are looking for doesn't exist or
                has been moved.
            </p>
        </div>
    )
}
