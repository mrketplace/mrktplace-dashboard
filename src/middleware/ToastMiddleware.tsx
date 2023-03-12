import * as bootstrap from 'bootstrap';
import ReactDOM from "react-dom/client";
import Toast from "../components/Toast";

export default class ToastMiddleware {
    static create(id: string, title: string, content: string, bg?: string) {
        // Render toast in the view
        const toastSpace = ReactDOM.createRoot(document.getElementById(id) as HTMLElement);
        toastSpace.render(<Toast id={id + "Child"} bg={bg} title={title} content={content} />);
        // Dismiss toast after 5s
        setTimeout(() => {
            const toastChild = new bootstrap.Toast(document.getElementById(id + "Child") as HTMLElement);
            toastChild.hide()
        }, 5000);
    }

}