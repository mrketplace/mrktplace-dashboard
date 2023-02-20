import { useEffect, useState } from 'react';

export default function CircularLoader(): JSX.Element {
    // Component rendering
    return (
        <center>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </center>
    );
}
