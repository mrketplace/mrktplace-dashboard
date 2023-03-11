import ReactDOM from "react-dom/client";
import Toast from "../components/Toast";

export default class ToastMiddleware {
    static create(id: string, title: string, content: string, bg?: string) {
        const toastSpace = ReactDOM.createRoot(document.getElementById(id) as HTMLElement);
        toastSpace.render(<Toast id={id + "Child"} bg={bg} title={title} content={content} />);
        setTimeout(() => {
            toastSpace.render(null);
        }, 5000);
    }

}