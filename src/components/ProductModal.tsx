import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "../mrktplace-models/Image";
import AlertModal from "./AlertModal";

export default function ProductModal(props: any) {
    // Properties
    const images: JSX.Element[] = [];
    props.product.images.forEach((img: Image, index: number) => {
        images.push(
            <div>
                <img className="product-details-img" src={img.path} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
        );
    });
    // Component rendering
    return (
        <div className="modal fade" id={"productModal" + props.product.id} aria-labelledby={"productModalLabel" + props.product.id} tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={"productModalLabel" + props.product.id}>Détails du produit</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {/* Img */}
                        <div className="row">
                            <Carousel>
                                {images}
                            </Carousel>
                        </div>
                        {/* Name */}
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="name" className="form-label">Nom</label>
                                <input type="text" id="name" className="form-control" placeholder="Ex: Nike Air Jordan 4" value={props.product.name} />
                            </div>
                        </div>
                        {/* Price & Qty */}
                        <div className="row g-2">
                            <div className="col mb-3">
                                <label htmlFor="price" className="form-label">Prix</label>
                                <input type="number" id="price" className="form-control" placeholder="Ex: 123456" value={props.product.price} />
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="quantity" className="form-label">En stock</label>
                                <input type="number" disabled id="quantity" className="form-control" placeholder="Ex: 99" value={props.product.quantity} />
                            </div>
                        </div>
                        {/* Description */}
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea id="description" className="form-control" rows={3} placeholder="Ex: Le meilleur produit de mon magasin" value={props.product.description} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* TODO: Add more options like Approvisionnement, Déstockage, etc. */}
                        <button className="btn btn-outline-danger" data-bs-target={"#deleteProduct" + props.product.id} data-bs-toggle="modal" data-bs-dismiss="modal" >
                            Retirer le produit
                        </button>
                        <button type="button" className="btn btn-primary">Enregistrer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}