import { useEffect, useState } from "react";
import CircularLoader from "../../components/CircularLoader";
import ShopCard from "../../components/ShopCard";
import api from "../../mrktplace-models/api.json";
import Shop from "../../mrktplace-models/Shop";
import User from "../../mrktplace-models/User";

export default function MyShopsView() {
    // Properties
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(false);
    // Datas fecthing
    const getDatas = () => {
        setLoading(true);
        fetch(
            // Get user infos to retreive his shops
            api.serverIp + api.users.get + "/" + User.authUser?.id,
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
                jsonData.user.shops.forEach((shop: any, index: number) => {
                    data.push(
                        <ShopCard key={index} shop={new Shop(shop)} />
                    );
                });
                setShops(data);
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
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Board /</span> Mes boutiques</h4>
            {/* <h5 className="pb-1 mb-4">Images caps & overlay</h5> */}
            <div className="row mb-5">
                {loading ? <CircularLoader /> : shops}
            </div>
        </div>
    );
}