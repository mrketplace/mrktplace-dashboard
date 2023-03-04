import Product from "../mrktplace-models/Product";
import ProductCard from "./ProductCard";

export default function ProductGroup(props: any) {
    // Data loading
    const products: JSX.Element[] = [];
    props.shop.products.forEach((product: any, index: number) => {
        products.push(
            <ProductCard key={index} product={new Product(product)} />
        );
    });
    // Component rendering
    return (
        <>
            <h5 className="pb-1 mb-4">{props.shop.name}</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {products}
            </div>
        </>
    );
}