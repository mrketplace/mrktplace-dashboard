import User from "../../mrktplace-models/User";
import api from '../../mrktplace-models/api.json';
import { useState } from "react";
import CircularLoader from "../CircularLoader";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
    // Properties
    const [logoutBtnPressed, setLogoutBtnPressed] = useState(false);
    // Methods
    const logout = async (event: any) => { // Send logout request to server
        // Configs
        event.preventDefault();
        setLogoutBtnPressed(true);
        const url = api.serverIp + api.auth.logout;
        // Send request
        await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + User.authUser?.token,
                },
            })
            .then(response => response.json())
            .then(jsonData => {
                // Check the response
                console.log(jsonData); //! debug
                if (jsonData.state === "SUCCESS") {
                    // Remove authenticated user datas
                    // User.authUser?.logout();
                    User.authUser = null;
                    localStorage.removeItem("authUser");
                    window.location.replace('/login');
                    console.log(jsonData); //! debug
                } else {
                    console.log("JSON ERROR"); //! debug
                }
            }).catch(error => {
                // Show error alert
                console.log("API ERROR -> " + error); //! debug
            });
        // Enable logout button
        setLogoutBtnPressed(false);
    }
    // Component rendering
    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
        >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                    <i className="bx bx-menu bx-sm"></i>
                </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                {/* <!-- Search --> */}
                <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                        <i className="bx bx-search fs-4 lh-0"></i>
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Rechercher..."
                            aria-label="Rechercher..."
                        />
                    </div>
                </div>
                {/* <!-- /Search --> */}

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* <!-- Place this tag where you want the button to render. --> */}
                    <li className="nav-item lh-1 me-3">
                        <span className="fw-bold">
                            {User.authUser?.firstname + " " + User.authUser?.lastname}
                        </span>
                    </li>

                    {/* <!-- User --> */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                            <div className="avatar avatar-online">
                                <img src={process.env.PUBLIC_URL + '/template/assets/img/avatars/' + User.authUser?.gender + '.png'} alt="" className="w-px-40 h-auto rounded-circle" />
                            </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link className="dropdown-item" to="/profile">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar avatar-online">
                                                <img src={process.env.PUBLIC_URL + '/template/assets/img/avatars/' + User.authUser?.gender + '.png'} alt="" className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="fw-semibold d-block">{User.authUser?.firstname + " " + User.authUser?.lastname}</span>
                                            <small className="text-muted">{User.authUser?.role}</small>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className="dropdown-divider"></div>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/profile">
                                    <i className="bx bx-user me-2"></i>
                                    <span className="align-middle">Mon Profil</span>
                                </Link>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-cog me-2"></i>
                                    <span className="align-middle">Paramètres</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <span className="d-flex align-items-center align-middle">
                                        <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                        <span className="flex-grow-1 align-middle">Abonnements</span>
                                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div className="dropdown-divider"></div>
                            </li>
                            <li>
                                {logoutBtnPressed ?
                                    <button className="dropdown-item">
                                        <CircularLoader color="black" mini={true} />
                                        <span className="align-middle text-black"> En cours...</span>
                                    </button> :
                                    <button className="dropdown-item" onClick={logout}>
                                        <i className="bx bx-power-off me-2 text-danger"></i>
                                        <span className="align-middle text-danger">Se déconnecter</span>
                                    </button>}
                            </li>
                        </ul>
                    </li>
                    {/* <!--/ User --> */}
                </ul>
            </div>
        </nav>
    );
}
