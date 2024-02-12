import { useEffect, useState } from "react";
import { DISEASESDETAIL, RELATEDPICTUREDISEASES, baseURL2 } from "../../Api/Api";
import { Link, useParams } from "react-router-dom";
import CardRelatedPic from "../../Components/CardRelatedPic";
// import CardSuitableP from "../../Components/CardSuitableP";

export default function PlantDiseases() {
    const params = useParams();
    // console.log(params);

    const [disease, setDisease] = useState({});
    const [relatedPictures, setrelatedPictures] = useState([]);

    useEffect(() => {
        fetch(`${baseURL2}/${DISEASESDETAIL}/${params.diseaseId}`)
            .then((res) => res.json())
            .then((disease) => setDisease(disease));
    }, []);

    useEffect(() => {
        fetch(`${baseURL2}/${RELATEDPICTUREDISEASES}`)
            .then((res) => res.json())
            .then((data) => setrelatedPictures(data));
    }, []);

    return (
       
        <>
        
            <h1 className="plantDetDes">Plant Diseases</h1>
            <div className=' d-flex align-content-center'>
                    <img src={disease.image}  alt="img" className="imgplantdetial col-4"/> 
                    <div className="contentplant col-4">
                        <h3 className="limitnumberh">
                            {disease.title}
                        </h3>
                        <p className="limitnumber">{disease.description}</p>
                        <Link to={`/product/${disease.id}`} showButton={true} className="btn-detail">Read More</Link>  
                    </div> 
                    
                </div>

            <div className="cards" id="cards">
                <h2 className="plantDetDessec">Related Pictures</h2>
                <div className='container'>
                    {relatedPictures.map((relatedPicture) => {
                        return (
                            <div key={relatedPicture.id}>
                                <CardRelatedPic relatedPicture={relatedPicture} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}





