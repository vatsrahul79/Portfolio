import React from 'react'
import 'tachyons'
function Body(){
    return(
        <div className="container headbg1 mt-5 grow col-lg-4 col-md-12 col-sm-12" style={{backgroundColor:" #5dade2"}}>
            <img src ="html.png" alt="HTML" className="body grow col-lg-4 col-md-12 col-sm-12" style = {{border: "10px solid white", margin:"20px"}}/>
            <img src ="css.png" alt="HTML" className="body grow col-lg-4 col-md-12 col-sm-12" style = {{border: "10px solid white", margin:"20px"}}/>
            <img src ="js.png" alt="HTML" className="body grow col-lg-4 col-md-12 col-sm-12" style =  {{border: "10px solid white", margin:"20px"}}/>
            <img src ="es6.png" alt="HTML" className="body grow col-lg-4 col-md-12 col-sm-12" style =  {{border: "10px solid #5dade2", margin:"20px"}}/>
            <img src ="bsp.png" alt="HTML" className="body grow col-lg-4 col-md-12 col-sm-12" style =  {{border: "10px solid #5dade2", margin:"20px"}}/>
            <img src ="react.png" alt="HTML" className="body grow col-lg-4 col-md-12 col-sm-12" style = {{border: "10px solid #5dade2", margin:"20px"}}/>
            <img src ="python.png" alt="HTML" className="body grow col-lg-4 col-md-12 col-sm-12" style = {{border: "10px solid white", margin:"20px",display:"none"}}/>
        </div>

    )

}
export default Body;