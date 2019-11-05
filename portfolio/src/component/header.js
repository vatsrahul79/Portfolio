import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
function Header(){
    return(
    <div class="text-center">
        <img src="123.JPG" className="rounded rounded-circle header grow" style = {{border: "10px solid blue"}}  alt="myimage" />  
        <h3 style = {{color:" #1abc9c "}} className="mt-3 grow  "><b>Rahul Kumar Vats</b></h3>
        <h5 className="grow "><b>Full Stack Developer</b></h5>
        <br></br> 
        <div class ="row mt-5">
            <div className = "col-lg-4 col-md-12 col-sm-12">
                <img src ="loc.png" className="grow" style ={{height:"40px",width:"40px"}} alt="location"/>
                <h6 style = {{color:" #1abc9c "}} className="grow" >Banglore,India</h6>
            </div>
            <div className = "col-lg-4 col-md-12 col-sm-12">
            <img src ="call.png" className="grow" style ={{height:"40px",width:"40px"}} alt ="callOn"/>
            <h6 style = {{color:" #1abc9c "}} className="grow">8951519217</h6>
            </div>
            <div className = "col-lg-4 col-md-12 col-sm-12">
            <img src ="mail.png" className="grow" style ={{height:"40px",width:"40px"}} alt ="Email"/>
            <h6 style = {{color:" #1abc9c "}} className="grow">vatsrahul79@gmail.com</h6>
            </div>
        </div>
        <h6 className="container mt-5 grow " style = {{color:"#1abc9c"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id quam imperdiet, viverra  dolor rhoncus, tincidunt enim. Duis hendrerit urna in massa vulputate pharetra. Interdum  et malesuada fames ac ante ipsum primis in faucibus. View full resume</h6>
  </div>   
  )
}
export default Header  