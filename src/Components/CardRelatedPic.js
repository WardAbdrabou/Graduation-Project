import "../Css/card.css";

export default function CardRelatedPic(props) {
    const { relatedPicture } = props;
    return (        
                <div className='box'>
                    <img src={relatedPicture.image}  alt="img"/> 
                    {/* <div className="content">
                        <h3 className="limitnumberh">
                            {relatedPicture.title}
                        </h3>
                        <p className="limitnumber">{relatedPicture.description}</p>
                    </div> */}
                    {/* <div className="info">
                    <Link to={`/product/${relatedPicture.id}`}>Read More</Link>  
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div> */}
                </div>
        );
}

