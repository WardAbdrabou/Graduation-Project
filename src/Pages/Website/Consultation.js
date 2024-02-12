import { useEffect, useState } from "react";
import CardConsultation from '../../Components/CardCons';
import "../../Css/card.css";
import { CONSUL, baseURL } from "../../Api/Api";
import { Axios } from "../../Api/axios";
// import axios from "axios";

// Consultation Item

export default function Consultation() {
    // const api_url = `${baseURL2}`;
    const [consultations, setconsultations] = useState([]);

    // useEffect(() => {
    //     fetch(`${baseURL2}/${CONSUL}`)
    //         .then((res) => res.json())
    //         .then((data) => setconsultations(data));
    // }, []);

    useEffect(() => {
        Axios.get(`${baseURL}/${CONSUL}`)
            .then((data) => setconsultations(data.data.instructors.data));
    }, []);



    
    return (
        <>
            <div className="team" id="team">
            <h2 className="main-title"> Our Consultation</h2>
            <p className="main-titlep">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth </p>
            <div className="container">
                    {consultations.map((consultation) => {
                        return (
                            <div key={consultation.id}>
                                <CardConsultation consultation={consultation} />  
                            </div>

                        );
                    })}
                </div>
            </div>
        </>
    )
}
