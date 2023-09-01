import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useUserContext } from '../../context/UserContext'

export default function GuestLayout() {
    const { loggedIn } = useUserContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (loggedIn) {
            return navigate("/myprofile")
        }
    }, [loggedIn])

    return (
        <div>
            <Outlet />
        </div>
    )
}
