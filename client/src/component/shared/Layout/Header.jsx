import React from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    let { user } = useSelector(item => item.auth)
    let navigate = useNavigate()
    let location = useLocation()

    function logoutHandler() {
        localStorage.clear('blood-token')
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Blood-Bank
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item d-flex">
                            <NavLink className="nav-link active mx-3"
                                aria-current="page">
                                {user?.name || user?.hospitalName || user?.organizationName}
                            </NavLink>
                            <h6><span className='badge bg-secondary'>{user?.role}</span>
                            </h6>
                        </li>

                        <li className="nav-item d-flex">
                            {user?.role === "organization" && location.pathname == "/" && (
                                <NavLink
                                    className="nav-link active mx-3"
                                    aria-current="page"
                                    to="/analytics"
                                >
                                    Analytics
                                </NavLink>
                            )}
                            {user?.role == "organization" && location.pathname == "/analytics" && (
                                <NavLink
                                    className="nav-link active mx-3"
                                    aria-current="page"
                                    to="/">
                                    Home
                                </NavLink>
                            )}
                        </li>

                        <li className='nav-item mx-3'>
                            <button className='btn btn-danger' onClick={logoutHandler}>
                                LOGOUT
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header