



const FeatureText = (props)=>{
    return(
        <div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src ={props.img} />
                    <span style={{fontSize: "20px", paddingLeft:"10px", width: "65%", lineHeight: "30px"}}>{props.span}</span>
                </div>
                <p style={{width: "100%", fontSize: "16px", lineHeight: "24px", paddingTop: "10px"}}>{props.p}</p>
        </div>
    
          
    )
};

export default FeatureText