// Props definition
interface ToastProps {
    id: string;
    bg?: string;
    title: string;
    content: string;
}

// Component definition
export default function Toast(props: ToastProps): JSX.Element {
    // Component rendering
    return (
        <div id={props.id} className={"bs-toast toast toast-placement-ex m-2 fade top-0 end-0 show " + (props.bg || "bg-primary")} role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
            <div className="toast-header">
                <i className="bx bx-bell me-2"></i>
                <div className="me-auto fw-semibold">{props.title}</div>
                <small>Maintenant</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {props.content}
            </div>
        </div>
    );
}