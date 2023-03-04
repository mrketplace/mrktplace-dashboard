import ProductModal from "./ProductModal";

export default function ProductCard(props: any) {
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
        </div>
    );
}