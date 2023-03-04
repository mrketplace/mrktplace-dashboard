import { useEffect, useState } from "react";
import CircularLoader from "../../components/CircularLoader";
import ProductGroup from "../../components/ProductGroup";
import ShopCard from "../../components/ShopCard";
import api from "../../mrktplace-models/api.json";
import Shop from "../../mrktplace-models/Shop";
import User from "../../mrktplace-models/User";

export default function ProductsView() {
    // Properties
    const [productGroup, setProductGroup] = useState([]);
    const [loading, setLoading] = useState(false);
    // Datas fecthing
    const getDatas = () => {
        setLoading(true);
        fetch(
            // Get products from user shops
            api.serverIp + api.products.getBySeller.replace('{id}', User.authUser?.id.toString() || '0'),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + User.authUser?.token,
                },
            })
            .then(response => response.json())
            .then(jsonData => {
                const data: any = [];
                jsonData.shops.forEach((shop: any, index: number) => {
                    data.push(
                        <ProductGroup key={index} shop={new Shop(shop)} />
                    );
                });
                setProductGroup(data);
            })
            .catch(error => {
                console.error("API ERROR -> " + error);
            }).finally(() => setLoading(false));
    };
    useEffect(() => {
        getDatas();
    }, []);
    // Component rendering
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Boutiques /</span> Produits</h4>
            {/* <h5 className="pb-1 mb-4">Images caps & overlay</h5> */}
            {loading ? <CircularLoader /> : productGroup}
        </div>
    );
}