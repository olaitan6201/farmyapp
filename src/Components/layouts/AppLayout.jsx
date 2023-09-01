import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'

export default function AppLayout() {
    const {
        loggedIn,
        fetchUserData
    } = useUserContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedIn) {
            return navigate('/signin')
        }
        fetchUserData()
    }, [loggedIn])

    return (
        <div className='App'>
            <Outlet />
        </div>
    )
}
