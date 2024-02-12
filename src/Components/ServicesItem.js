// import React, { useEffect, useState } from "react";
// import Service from './Service';


// function ServiceItem() {
//     const api_url = "https://fakestoreapi.com/products?limit=5";
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         fetch(api_url)
//             .then((res) => res.json())
//             .then((data) => setServices(data));
//     }, []);
//     return (
//         <>
//             <h2 className="text-center p-3" style={{ color: "#6F9A61", fontSize: "55px" }}> Our Service</h2>
//             <div className="container">
//                 <div className="row">
//                     {services.map((service) => {
//                         return (
//                             <div className="col-4" key={service.id}>
//                                 <Service service={service} />
                                
//                             </div>

//                         );
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }
// export default ServiceItem;