import { useNavigate } from "react-router-dom";

export default function NoMatchView(): JSX.Element {
    // Methods
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    // Component rendering
    return (
        <div className="container-xxl container-p-y">
            <div className="misc-wrapper">
                <h2 className="mb-2 mx-2 fw-bold">Page Introuvable</h2>
                <p className="mb-4 mx-2">Oups ! 😖 Nous n'avous pas trouvé la page que vous demandez.</p>
                <button onClick={goBack} className="btn btn-primary">Revenir en arrière</button>
                <div className="mt-3">
                    <img
                        src={process.env.PUBLIC_URL + "/template/assets/img/illustrations/page-misc-error-light.png"}
                        alt="page-misc-error-light"
                        width="500"
                        className="img-fluid"
                        data-app-dark-img={process.env.PUBLIC_URL + "/template/assets/img/illustrations/page-misc-error-dark.png"}
                        data-app-light-img={process.env.PUBLIC_URL + "/template/assets/img/illustrations/page-misc-error-light.png"}
                    />
                </div>
            </div>
        </div>
    );
}