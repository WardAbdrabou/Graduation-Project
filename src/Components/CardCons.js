// import { Card } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/card.css";

//Each Card Contain
export default function CardConsultation(props) {
    const { consultation } = props;
    
    return (
        <div className='box'>
            <div className="data">
                <img src={consultation.thumbnail} alt="img" />
                <div className="social">
                {/* <FontAwesomeIcon icon={fatwitter} /> */}
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="info">
                    <h3 className="limitnumberh">{consultation.name}</h3>
                    <p className="limitnumber">{consultation.email}</p>
                </div>
        </div>

    );
}

// export default function CardConsultation(props) {
//     const { consultation } = props;
//     return (
//         <>
//             <Card className='box' >
//                 <div className="data">
//                     <Card.Img  src={consultation.image}  className="img"/>
//                     <div className="social">
//                         <a href="#"><i class="fab fa-facebook-f"></i></a>
//                         <a href="#"><i class="fab fa-twitter"></i></a>
//                         <a href="#"><i class="fab fa-linkedin-in"></i></a>
//                         <a href="#"><i class="fab fa-youtube"></i></a>
//                     </div>
//                 </div>
//                 <div class="info">
//                         <Card.Title>{consultation.title}</Card.Title>
//                         <Card.Text>
//                             {consultation.description}
//                         </Card.Text>
//                 </div>
//             </Card>
//         </>
//     );
// }