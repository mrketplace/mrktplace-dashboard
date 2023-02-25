export default function NotifsView() {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Board /</span> Notifications</h4>

            {/* <!-- Accordion --> */}
            <div className="row">
                <div className="col-md mb-4 mb-md-0">
                    <h5 className="mt-4">Non lues</h5>
                    <small className="text-light fw-semibold">25/02/23</small>
                    <div className="accordion mt-3" id="accordionExample">
                        <div className="card accordion-item active">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    type="button"
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordionOne"
                                    aria-expanded="true"
                                    aria-controls="accordionOne"
                                >
                                    Accordion Item 1
                                </button>
                            </h2>

                            <div
                                id="accordionOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                                    marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                                    soufflé. Wafer gummi bears marshmallow pastry pie.
                                </div>
                            </div>
                        </div>
                        <div className="card accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordionTwo"
                                    aria-expanded="false"
                                    aria-controls="accordionTwo"
                                >
                                    Accordion Item 2
                                </button>
                            </h2>
                            <div
                                id="accordionTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake
                                    dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies.
                                    Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.
                                </div>
                            </div>
                        </div>
                        <div className="card accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordionThree"
                                    aria-expanded="false"
                                    aria-controls="accordionThree"
                                >
                                    Accordion Item 3
                                </button>
                            </h2>
                            <div
                                id="accordionThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon
                                    gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake
                                    dragée caramels. Ice cream wafer danish cookie caramels muffin.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <h5 className="mt-4">Lues</h5>
                    <small className="text-light fw-semibold">Accordion Without Arrow</small>
                    <div id="accordionIcon" className="accordion mt-3 accordion-without-arrow">
                        <div className="accordion-item card">
                            <h2 className="accordion-header text-body d-flex justify-content-between" id="accordionIconOne">
                                <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordionIcon-1"
                                    aria-controls="accordionIcon-1"
                                >
                                    Accordion Item 1
                                </button>
                            </h2>

                            <div id="accordionIcon-1" className="accordion-collapse collapse" data-bs-parent="#accordionIcon">
                                <div className="accordion-body">
                                    Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing
                                    marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping
                                    soufflé. Wafer gummi bears marshmallow pastry pie.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item card">
                            <h2 className="accordion-header text-body d-flex justify-content-between" id="accordionIconTwo">
                                <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordionIcon-2"
                                    aria-controls="accordionIcon-2"
                                >
                                    Accordion Item 2
                                </button>
                            </h2>
                            <div id="accordionIcon-2" className="accordion-collapse collapse" data-bs-parent="#accordionIcon">
                                <div className="accordion-body">
                                    Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake
                                    dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies.
                                    Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item card active">
                            <h2 className="accordion-header text-body d-flex justify-content-between" id="accordionIconThree">
                                <button
                                    type="button"
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordionIcon-3"
                                    aria-expanded="true"
                                    aria-controls="accordionIcon-3"
                                >
                                    Accordion Item 3
                                </button>
                            </h2>
                            <div
                                id="accordionIcon-3"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionIcon"
                            >
                                <div className="accordion-body">
                                    Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon
                                    gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake
                                    dragée caramels. Ice cream wafer danish cookie caramels muffin.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Accordion --> */}

            {/* <!--/ Advance Styling Options --> */}
        </div>
        // <!-- / Content -->
    );
}