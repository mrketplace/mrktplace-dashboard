export default function ShopCard(props: any) {
    // Component rendering
    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
                <img className="card-img-top w-100 h-100" style={{ objectFit: 'cover' }} src={props.shop.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.shop.name}</h5>
                    <p className="card-text">
                        {props.shop.description}
                    </p>
                    <a href={props.shop.url} className="btn btn-outline-primary">Voir</a>
                </div>
            </div>
        </div>
    );
}