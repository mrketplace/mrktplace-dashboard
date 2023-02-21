import { useState } from "react";
import User from "../../mrktplace-models/User";

export default function ProfileView() {
    // Properties
    const [currentPage, setCurrentPage] = useState("Compte");
    // Component rendering
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Mon profil /</span> {currentPage}</h4>

            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-3">
                        <li className="nav-item">
                            <a className="nav-link active" href="javascript:void(0);"><i className="bx bx-user me-1"></i> Compte</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages-account-settings-notifications.html"
                            ><i className="bx bx-bell me-1"></i> Notifications</a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages-account-settings-connections.html"
                            ><i className="bx bx-link-alt me-1"></i> Connections</a
                            >
                        </li>
                    </ul>
                    <div className="card mb-4">
                        <h5 className="card-header">Informations personnelles</h5>
                        {/* <!-- Account --> */}
                        <div className="card-body">
                            <div className="d-flex align-items-start align-items-sm-center gap-4">
                                <img
                                    src={process.env.PUBLIC_URL + "/template/assets/img/avatars/" + User.authUser?.gender + ".png"}
                                    alt="user-avatar"
                                    className="d-block rounded"
                                    height="100"
                                    width="100"
                                    id="uploadedAvatar"
                                />
                                {/* <div className="button-wrapper">
                                    <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex={0}>
                                        <span className="d-none d-sm-block">Upload new photo</span>
                                        <i className="bx bx-upload d-block d-sm-none"></i>
                                        <input
                                            type="file"
                                            id="upload"
                                            className="account-file-input"
                                            hidden
                                            accept="image/png, image/jpeg"
                                        />
                                    </label>
                                    <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                                        <i className="bx bx-reset d-block d-sm-none"></i>
                                        <span className="d-none d-sm-block">Reset</span>
                                    </button>

                                    <p className="text-muted mb-0">Boutique: Allthingsyouwantshop</p>
                                </div> */}
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="card-body">
                            <form id="formAccountSettings" method="POST">
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="firstname" className="form-label">Prénom</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            value={User.authUser?.firstname}
                                            disabled
                                        />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="lastname" className="form-label">Nom</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            value={User.authUser?.lastname}
                                            disabled
                                        />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="email"
                                            name="email"
                                            value={User.authUser?.email}
                                            disabled
                                        />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="organization" className="form-label">Boutique</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="organization"
                                            name="organization"
                                            value={User.authUser?.firstname} // TODO -> Update models to create link between Seller and their Shops
                                            disabled
                                        />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label" htmlFor="tel">Téléphone</label>
                                        <div className="input-group input-group-merge">
                                            <span className="input-group-text"><i className="bx bx-phone me-1"></i></span>
                                            <input
                                                type="text"
                                                id="tel"
                                                name="tel"
                                                className="form-control"
                                                value={User.authUser?.tel}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="address" className="form-label">Adresse</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            value={User.authUser?.address}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    {/* TODO -> Code API Backend for this feature */}
                                    <button type="submit" className="btn btn-primary me-2">Demander une mise à jour</button>
                                    {/* <button type="reset" className="btn btn-outline-secondary">Cancel</button> */}
                                </div>
                            </form>
                        </div>
                        {/* <!-- /Account --> */}
                    </div>
                    {/* TODO -> Code API Backend for this feature */}
                    <div className="card">
                        <h5 className="card-header">Fermer le compte</h5>
                        <div className="card-body">
                            <div className="mb-3 col-12 mb-0">
                                <div className="alert alert-warning">
                                    <h6 className="alert-heading fw-bold mb-1">Êtes vous sûre de vouloir fermer votre compte ?</h6>
                                    <p className="mb-0">Vous ne pourrez plus continuer à vendre vos produits sur la Marketplace.</p>
                                </div>
                            </div>
                            <form id="formAccountDeactivation">
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="accountActivation"
                                        id="accountActivation"
                                    />
                                    <label className="form-check-label" htmlFor="accountActivation"
                                    >Je confirme mon choix</label>
                                </div>
                                <button type="submit" className="btn btn-danger deactivate-account">Fermer le compte</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}