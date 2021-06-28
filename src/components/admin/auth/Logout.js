import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Logout() {
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('login')
        history.push('/')
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout