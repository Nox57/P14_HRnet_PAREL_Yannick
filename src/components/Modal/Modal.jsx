import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

export default function Modal({
    isOpen,
    onClose,
    children,
    className,
    closeOnOverlayClick,
    width,
    closeButtonText,
}) {
    const modalRef = useRef()

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.addEventListener('keydown', handleEscape)
            modalRef.current.focus()
        }

        return () => {
            document.body.style.overflow = 'visible'
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const handleCloseOnOverlay = (e) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose()
        }
    }

    return (
        <div
            className={`modal-overlay ${className}`}
            onClick={handleCloseOnOverlay}
            ref={modalRef}
            tabIndex={-1}
        >
            <div className="modal-content" style={{ width: width }}>
                {children}
                <button className="modal-close" onClick={onClose}>
                    {closeButtonText || 'Close'}
                </button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    closeOnOverlayClick: PropTypes.bool,
    width: PropTypes.string,
    closeButtonText: PropTypes.string,
}

Modal.defaultProps = {
    className: '',
    closeOnOverlayClick: true,
    width: '500px',
    closeButtonText: 'Close',
}
