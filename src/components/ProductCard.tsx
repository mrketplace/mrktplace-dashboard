import Product from "../mrktplace-models/Product";
import AlertModal from "./AlertModal";
import ProductModal from "./ProductModal";

// Props definition
interface ProductCardProps {
    product: Product;
}

// Component definition
export default function ProductCard(props: ProductCardProps) {
    console.log(props.product);
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
                title="Supprimer le produit ?"
                content="Confirmez vous le retrait de ce produit de votre boutique ? Vos clients n'aurons plus la possibilité d'en acheter chez vous."
                buttons={[
                    <button type="button" className="btn btn-outline-secondary" data-bs-target={"#productModal" + props.product.id} data-bs-toggle="modal" data-bs-dismiss="modal" >Conserver </button>,
                    <button type="button" className="btn btn-danger">Retirer</button>
                ]}
                additionalComponent={
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
                }
            />
        </div>
    );
}