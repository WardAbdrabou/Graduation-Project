import { Link } from "react-router-dom";
import "../Css/card.css";

export default function CardSuitableP(props) {
    const { suitablePlant ,showButton } = props;
    return (        
                <div className='box'>
                    <img src={suitablePlant.image}  alt="img"/> 
                    <div className="content">
                        <h3 className="limitnumberh">
                            {suitablePlant.title}
                        </h3>
                        <p className="limitnumber">{suitablePlant.description}</p>
                    </div>
                    {showButton && <div className="info">
                        
                        <Link to={`/product/${suitablePlant.id}`}>Read More</Link>  
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div> }
                    
                </div>
        );
}

