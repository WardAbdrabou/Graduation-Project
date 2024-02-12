// import {data} from "../../data";
import CardDiseases from "../../Components/CardDiseases";
import { useEffect, useState } from "react";
import { PLANTDETALI, baseURL2 } from "../../Api/Api";
import { Link, useParams } from "react-router-dom";
// import CardSuitableP from "../../Components/CardSuitableP";

export default function PlantDetalis() {
    const params = useParams();
    // console.log(params);

    const [plant, setPlant] = useState({});
    const [palntDiseases, setpalntDiseases] = useState([]);
    

    //show item through id
    useEffect(() => {
        fetch(`${baseURL2}/${PLANTDETALI}/${params.plantId}`)
            .then((res) => res.json())
            .then((plant) => setPlant(plant));
    }, []);
    
    //disease related to plant
    useEffect(() => {
        fetch(`${baseURL2}/${PLANTDETALI}`)
            .then((res) => res.json())
            .then((data) => setpalntDiseases(data));
    }, []);

    return (
        <>
            <h1 className="plantDetDes">Plant Detalis </h1>
            <div className=' d-flex align-content-center'>
                    <img src={plant.image}  alt="img" className="imgplantdetial col-4"/> 
                    <div className="contentplant col-4">
                        <h3 className="limitnumberh">
                            {plant.title}
                        </h3>
                        <p className="limitnumber">{plant.description}</p>
                        <Link to={`/product/${plant.id}`} showButton={true} className="btn-detail">Read More</Link>  
                    </div> 
                    
                </div>

            <div className="cards" id="cards">
                <h2 className="plantDetDessec">Plant Diseases </h2>
                <div className='container'>
                    {palntDiseases.map((plantdisease , index) => {
                        return (
                            <div key={plantdisease.id}>
                                <CardDiseases plantdisease={plantdisease} showButton={true}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}