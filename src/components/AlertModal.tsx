// Props definition
interface AlertModalProps {
    modalId: string;
    title: string;
    content?: JSX.Element;
    buttons?: JSX.Element[];
}

// Component definition
export default function AlertModal(props: AlertModalProps): JSX.Element {
    // Component rendering
    return (
        <div className="modal fade" id={props.modalId} aria-labelledby={props.modalId + "Label"} aria-hidden="true" tabIndex={-1} >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.modalId + "Label"}>{props.title}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {props.content}
                    </div>
                    <div className="modal-footer">
                        {props.buttons}
                    </div>
                </div>
            </div>
        </div>
    );
}