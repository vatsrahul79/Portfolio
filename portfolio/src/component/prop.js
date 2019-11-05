import React from 'react'
import 'tachyons'
function Proficiencies(){
    return( 
    <div className="container-flux bg-info mt-5 head2 grow ">
        <h1 className="App1 grow bg-white"><b>Proficiencies</b></h1>
        <div class="card-group">
          <div class="card m-4 grow rounded ">
            <img src="logo512.png" class="card-img-top prep rounded rounded-circle" alt="React-Redux"/>
            <div class="card-body">
              <h5 class="card-title text-center App1 b">React-redux</h5>
              <p class="card-text text" style = {{color:" #1abc9c "}}>Made over more than 5 single page website with functionality Added using React-Redux</p>
            </div>
          </div>
          <div class="card m-4 grow ">
            <img src="data1.png" class="card-img-top prep rounded rounded-circle App1" alt="DataStructure"/>
            <div class="card-body">
              <h5 class="card-title text-center App1 b">Data Structure and Algorithm</h5>
              <p class="card-text text" style = {{color:" #1abc9c "}}>Solved More than 200 questions of data Structure and Algorithm most probably covering each and every topic</p>
            </div>
          </div>
          <div class="card m-4 grow ">
            <img src="ds.png" class="card-img-top prep rounded rounded-circle" alt="JavaScript"/>
            <div class="card-body">
              <h5 class="card-title text-center App1 b">JavaScript </h5>
              <p class="card-text text" style = {{color:" #1abc9c "}}>Made many single page with MVP in JavaScript along with Ecma Script.</p>
            </div>
          </div>
          <div class="card m-4 grow ">
            <img src="frend.png" class="card-img-top prep " alt="Front-End"/>
            <div class="card-body">
              <h5 class="card-title text-center App1 b">Front-End</h5>
              <p class="card-text text" style = {{color:" #1abc9c "}}>Made over more than 20 single page website using HTML,CSS,JAVA-SCRIPT,REACT-REDUX</p>
            </div>
          </div>
        </div>
    </div>

    )

}
export default Proficiencies