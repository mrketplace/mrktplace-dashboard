export default function ProductCard(props: any) {
    // Component rendering
    return (
        <div className="row mb-5">
            <div className="col-md">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="card-img card-img-left" src={props.product.img} alt="Card image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.product.name}</h5>
                                <p className="card-text">
                                    {props.product.description}
                                </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}