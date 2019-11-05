import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Header from './component/header'
import Body from './component/body';
import Proficiencies from './component/prop';
import Git from './component/git'

class App extends React.Component{
  render(){
    return(
      <div className="bg-primary headbg">
    
     <Header />
     <Body />
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <Proficiencies style={{margin:"20px"}} />
     <Git />
     <img src = "https://cdn.dribbble.com/users/583436/screenshots/1927104/dotinversion.gif" style = {{height: "150px", width : "1350px", marginTop: "150px"}} className = "float-left"></img>
     </div>
    )
  }
 
}

export default App;
