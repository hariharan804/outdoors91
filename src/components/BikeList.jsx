import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/css/bike-list.css";


export const BikeList = (() => {

    const getData = async () => {
        const response = await axios.get('./json/Bike-list.json')
            .catch(err => console.log(err))
        setBikeList(response.data)
    }
    useEffect(() => {
        getData();
    }, [])

    const [bikeList, setBikeList] = useState([]);
    console.log(bikeList);

    return (<>
        <div className="container-fluid bike-list">
            <div className="row gx-3 gy-4">
                {bikeList && bikeList.map((h) => (
                    <div key={h.id} className="col-lg-4 col-md-6 col-12 text-center">
                        <div className="bike-card">
                            <div className="body">
                                <h1 className="title mt-2">{h.title}</h1>
                                <p className="m-0 details"><span className="border-end">{h.year}</span> <span className="border-end">{h.feet}</span><span>{h.cm}</span></p>
                                <div className="rating">
                                    <p className="m-0"><span className="m-0 rating-txt">{h.rating}</span><span className="review-txt">{h.review} Reviews</span></p>
                                </div>
                                <img className="bike-img" src={h.image} alt={h.title} />
                                <div className="text-start">
                                    <h3 className="rate mb-1">{h.price}</h3>
                                    <h5 className="offer mb-1"><span>{h.originalPrice}</span> {h.offer}</h5>
                                    <p className="emi mb-0">{h.emi}</p>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="quick-view btn">QUICK VIEW</button>
                                    </div>
                                    <div className="col-6"> <button className="buy-now btn">BUY NOW</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </>)
})

export default BikeList;