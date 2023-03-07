import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    let currentUser = true
    return (
        currentUser ? <Outlet/> : <Navigate to="/" replace/> //! reaplace sayfada geri gelmek için
    )
}

export default PrivateRouter