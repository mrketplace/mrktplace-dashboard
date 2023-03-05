export default function ViewOptions(): JSX.Element {
    // Component rendering
    return (
        <div className="accordion mt-3 mb-5" id="accordionExample">
            <div className="card accordion-item active">
                <h2 className="accordion-header" id="headingOne">
                    <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#accordionOne" aria-expanded="true" aria-controls="accordionOne">
                        Options
                    </button>
                </h2>

                <div id="accordionOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                        <div className="btn-toolbar demo-inline-spacing" role="toolbar" aria-label="Toolbar with button groups">
                            {/* Affichage */}
                            <div>
                                <div className="text-light small fw-semibold">Affichage</div>
                                <div className="demo-vertical-spacing">
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        {/* Grille */}
                                        <input type="radio" checked className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                                        <label className="btn btn-outline-secondary" htmlFor="btnradio1"><i className="tf-icons bx bx-grid-alt"></i></label>
                                        {/* Tableau */}
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                        <label className="btn btn-outline-secondary" htmlFor="btnradio2"><i className="tf-icons bx bx-dock-top"></i></label>
                                    </div>
                                </div>
                            </div>
                            {/* Stock */}
                            <div>
                                <div className="text-light small fw-semibold">Stock</div>
                                <div className="demo-vertical-spacing">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        {/* Approvisionnement */}
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="tf-icons bx bx-archive-in"></i>
                                        </button>
                                        {/* Déstockage */}
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="tf-icons bx bx-archive-out"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Documents */}
                            <div>
                                <div className="text-light small fw-semibold">Documents</div>
                                <div className="demo-vertical-spacing">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        {/* Imprimer */}
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="tf-icons bx bx-printer"></i>
                                        </button>
                                        {/* Factures */}
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="tf-icons bx bx-file"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Rechercher */}
                            <div>
                                <div className="text-light small fw-semibold">Rechercher</div>
                                <div className="demo-vertical-spacing">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <div className="mb-3">
                                            <input className="form-control custom-searchbar" type="search" placeholder="Ex: Nike Air Jordan 4" id="html5-search-input" />
                                        </div>
                                        <button type="button" className="btn btn-icon btn-secondary custom-searchbar-btn">
                                            <span className="tf-icons bx bx-search"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}