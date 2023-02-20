export default function Alert(props: any): JSX.Element {
    // Component rendering
    return (
        <div className={"alert alert-" + (props.type || "primary")} role="alert">
            {props.message}
        </div>
    );

}