import { useEffect, useState } from "react";
import CircularLoader from "../../components/CircularLoader";
import ProductGroup from "../../components/ProductGroup";
import ShopCard from "../../components/ShopCard";
import Toast from "../../components/Toast";
import ViewOptions from "../../components/ViewOptions";
import api from "../../mrktplace-models/api.json";
import Shop from "../../mrktplace-models/Shop";
import User from "../../mrktplace-models/User";

export default function ProductsView() {
    // Properties
    const [productGroup, setProductGroup] = useState([]);
    const [loading, setLoading] = useState(false);
    // Datas fecthing
    const getDatas = (searchCriterias: string[]) => {
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
                // TODO later: Optimize data fetching
                jsonData.shops.forEach((shopJson: any, index: number) => {
                    data.push(
                        <ProductGroup key={index} shop={new Shop(shopJson)} searchCriterias={searchCriterias} />
                    );
                });
                setProductGroup(data);
            })
            .catch(error => {
                console.error("API ERROR -> " + error);
            }).finally(() => setLoading(false));
    };
    useEffect(() => {
        getDatas([]);
    }, []);
    // Methods
    const handleSearch = (searchValue: string) => {
        const dispatchedSearchValue: string[] = searchValue.split(' ');
        console.log("Product searched -> " + dispatchedSearchValue);
        getDatas(dispatchedSearchValue);
    };
    // Component rendering
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
                <div className="col-md-6">
                    <h4 className="fw-bold py-3 mb-4">
                        <span className="text-muted fw-light">Boutiques /</span> Produits
                    </h4>
                </div>
            </div>
            {/* Toast space */}
            <div id="productViewToast"></div>
            {/* View options */}
            <ViewOptions onSearch={handleSearch} />
            {loading ? <CircularLoader /> : productGroup}
        </div>
    );
}