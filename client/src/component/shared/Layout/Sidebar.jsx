import React from 'react'
import { userMenu } from './Menus/userMenu'
import { NavLink, useLocation } from 'react-router-dom'
import '../../../component/style/Layout.css'
import { useSelector } from "react-redux"

function Sidebar() {
    let location = useLocation()
    let { user } = useSelector(item => item.auth)
    return (
        <>
            {/* organization for user and hospital */}
            {(user?.role === "donar" || user?.role === "hospital") && (
                <>
                    <div className={location.pathname === "/" && "navbarActive"} >
                        <i className={`fa-solid fa-building-ngo  custom-icon`}></i>
                        <NavLink to="/" className={"nav-style"}>
                            Home
                        </NavLink>
                    </div>

                    <div className={location.pathname === "/organization" && "navbarActive"}>
                        <i className={`fa-solid fa-building-ngo  custom-icon`}></i>
                        <NavLink to="/organization" className={"nav-style"}>
                            Organization
                        </NavLink>
                    </div>

                </>
            )}


            {/* For Donar */}
            {(user?.role === "donar" && <div className={location.pathname === "/donation" && "navbarActive"}>
                <i className={`fa-solid fa-building-ngo  custom-icon`}></i>
                <NavLink to="/donation" className={"nav-style"}>Donation</NavLink>
            </div>)}

            {/* For Hospital */}
            {(user?.role === "hospital" && <div className={location.pathname === "/consumer" && "navbarActive"}>
                <i className={`fa-solid fa-building-ngo  custom-icon`}></i>
                <NavLink to="/consumer" className={"nav-style"}>Consumer</NavLink>
            </div>)}


            {/* Admin */}
            {user?.role == "admin" && (
                <>
                    <div className={location.pathname === "/" && "navbarActive"}>
                        <i className={` fa-solid fa-building-ngo  custom-icon`}></i>
                        <NavLink to="/" className={"nav-style"}>
                            Home
                        </NavLink>
                    </div>
                    <div className={location.pathname === "/donar-list" && "navbarActive"}>
                        <i className={` fa-solid fa-building-ngo  custom-icon`}></i>
                        <NavLink to="/donar-list" className={"nav-style"}>
                            Donar-List
                        </NavLink>
                    </div>

                    <div className={location.pathname === "/org-list" && "navbarActive"}>
                        <i className={` fa-solid fa-building-ngo  custom-icon`}></i>
                        <NavLink to="/org-list" className={"nav-style"}>
                            Organization-List
                        </NavLink>
                    </div>

                    <div className={location.pathname === "/hospital-list" && "navbarActive"}>
                        <i className={` fa-solid fa-building-ngo  custom-icon`}></i>
                        <NavLink to="/hospital-list" className={"nav-style"}>
                            Hospital-List
                        </NavLink>
                    </div>
                </>
            )}

            {/* organization */}
            {user.role == "organization" && (
                <>
                    {/* Inventory */}
                    <div className={location.pathname === "/" && "navbarActive"}>
                        <i className={`fa-solid fa-boxes-stacked custom-icon`}></i>
                        <NavLink to="/" className={"nav-style"}>
                            Inventory
                        </NavLink>
                    </div>

                    {/* Donar */}
                    <div className={location.pathname === "/donar" && "navbarActive"}>
                        <i className={`fa-solid fa-hand-holding-medical custom-icon `}></i>
                        <NavLink to="/donar" className={"nav-style"}>
                            Donar
                        </NavLink>
                    </div>

                    {/* hospital */}
                    <div className={location.pathname === "/hospital" && "navbarActive"}>
                        <i className={`fa-regular fa-hospital custom-icon `}></i>
                        <NavLink to="/donar" className={"nav-style"}>
                            Hospital
                        </NavLink>
                    </div>
                </>
            )}
        </>
    )
}

export default Sidebar

/* {
               userMenu.map((item) => {
                   let isActive = location.pathname === item.path
                   return (
                       <div className={isActive && "navbarActive"}>
                           <i className={`${item.icon} custom-icon`}>
                               <NavLink to={item.path} className={"nav-style"}>{item.name}</NavLink>
                           </i>
                       </div>
                   )
               })
         */