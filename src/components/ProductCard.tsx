import { useState } from "react";
import Product from "../mrktplace-models/Product";
import AlertModal from "./AlertModal";
import ProductModal from "./ProductModal";
import api from "../mrktplace-models/api.json";
import User from "../mrktplace-models/User";
import CircularLoader from "./CircularLoader";
import ToastMiddleware from "../middleware/ToastMiddleware";

// Props definition
interface ProductCardProps {
    product: Product;
}

// Component definition
export default function ProductCard(props: ProductCardProps) {
    // Properties
    const [loading, setLoading] = useState(false);
    // Methods
    const deleteProduct = () => {
        setLoading(true);
        fetch(
            api.serverIp + api.products.delete.replace('{id}', props.product.id.toString()),
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + User.authUser?.token,
                },
            })
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                if (jsonData.state === "SUCCESS")
                    ToastMiddleware.create("productViewToast", jsonData.msg, "Le produit a bien été retiré de votre boutique.");
                else
                    ToastMiddleware.create("productViewToast", "Echec", jsonData.msg, "bg-warning");
            })
            .catch(error => {
                console.error("API ERROR -> " + error);
                ToastMiddleware.create("productViewToast", "Erreur", error, "bg-danger");
            }).finally(() => setLoading(false));
    };
    // Component rendering
    return (
        <div className="col">
            <button className="card h-100 custom-card card-for-modal" type="button" data-bs-toggle="modal" data-bs-target={"#productModal" + props.product.id}>
                <img className="card-img-top product-card-img-top" src={props.product.images.length != 0 ? props.product.images[0].path : ''} alt={props.product.name} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.product.name}</h5>
                    <h6 className="card-title">{props.product.price} FCFA</h6>
                    <p className="card-text product-brief-description">
                        {props.product.description} sihfsihfisdnfisdnfsifisdnf isfisdhf isdhfgi sdhgiush ishgishfgi shgi shfgihs hgsifghsdouihgfpsj gosihbdgfl shofigjs djgosgdj osfjgos djgosijd gosjidg osjg osdgjsodgj sodjgosdjgosdj sodgij soigj osjodgj sdogjsodjsgdoj sodj sjdgo ijsdgo jsdogj sdoj osgij
                    </p>
                </div>
            </button>
            <ProductModal product={props.product} />
            <AlertModal
                modalId={"deleteProduct" + props.product.id}
                title="Retirer le produit ?"
                buttons={[
                    <button type="button" className="btn btn-outline-secondary" data-bs-target={"#productModal" + props.product.id} data-bs-toggle="modal" data-bs-dismiss="modal" >Conserver </button>,
                    <button type="button" className="btn btn-danger" onClick={deleteProduct}>Retirer</button>
                ]}
                content={
                    loading ?
                        <CircularLoader /> :
                        <>
                            <div className="row mb-3">
                                <div className="col-md">
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img className="card-img card-img-left custom-card-img-left" src={props.product.images[0].path} alt="Product 1st image" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{props.product.name}</h5>
                                                    <p className="card-text">
                                                        {props.product.price} FCFA
                                                    </p>
                                                    <p className="card-text"><small className="text-muted">{props.product.description}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Confirmez vous le retrait de ce produit de votre boutique ? Vos clients n'aurons plus la possibilité d'en acheter chez vous.
                            </p>
                        </>
                }
            />
        </div>
    );
}