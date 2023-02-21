import { useEffect, useState } from 'react';

export default function CircularLoader(props: any): JSX.Element {
    // Component rendering
    return (props.mini) ? (
        <div className={"spinner-border spinner-border-sm text-" + (props.color || "primary")} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    ) :
        (
            <center>
                <div className={"spinner-border text-" + (props.color || "primary")} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </center>
        );
}
