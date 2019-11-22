import React from 'react';
    import Card from 'react-bootstrap/Card'
    import CardGroup from 'react-bootstrap/CardGroup'
    import GitHubCalendar from 'react-github-calendar'
    import ReactTooltip from "react-tooltip";
    class Home extends React.Component {
        render(){
            return(
                <div className = "pl-3 pr-3">
                    <div className = "row">
                        <div className = "col-lg-6 col-md-12 col-sm-12 jumbotron" style = {{backgroundColor:"#d621ad"}}>
                            <img src = "123.JPG" className = "offset-3" style = {{borderRadius: "50%", border: "10px solid  #d61055", height : "150px",width:"150px"}}></img>
                                <div className = "offset-5">
                                    <h1 style = {{fontFamily: "Open Sans", fontSize: "38px"}} className = "text-light"><b>Rahul Kumar</b></h1>
                                    <h1 style = {{fontFamily: "Open Sans", fontSize: "38px"}} className = "text-light"><b>Vats</b></h1>
                                    <h5><b>Full Stack Developer</b></h5>
                                    <div className = "row mt-3">
                                        <img className  = "col-2 ml-n2" src = "loc.png" style = {{float: "left", height: "20px", width: "50px"}}></img>
                                        <h6 className = "ml-n3"> Bengaluru, Karnataka, India</h6>
                                    </div>
                                    <div className = "row mt-3">
                                        <img className  = "col-2 ml-n2" src = "call.png" style = {{float: "left", height: "20px", width: "50px"}}></img>
                                        <h6 className = "ml-n3">8951519217</h6>
                                    </div>
                                    <div className = "row mt-3">
                                        <img className  = "col-2 ml-n2" src = "mail.png" style = {{float: "left", height: "20px", width: "50px"}}></img>
                                        <h6 className = "ml-n3">vatsrahul79@gmail.com</h6>
                                    </div>
                                    <h6 className = "mt-3 text-light">A passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai School's numerous training. Actively ready to join in a great 
                                    lively team of a good start-up to adapt me in any situation and environment with ease and perform the best.<a href="https://drive.google.com/file/d/1dzO_1O7BPHauyt-d8nPO_f-HPx4nV5gR/view?usp=sharing" target="blank">View Resume</a></h6>
                                </div>
                                <div className = "row mt-5">
                                    <div className = "col-1 ml-4">
                                       <a href = "https://www.linkedin.com/in/vatsrahul" target="blank"><img src = "https://image.flaticon.com/icons/svg/145/145807.svg" style = {{height: "50px", width:"50px"}}></img></a>
                                    </div>
                                    <div className = "col-1 ml-4">
                                        <a href = "https://twitter.com/RahulVa27596811" target ="blank"><img src = "https://image.flaticon.com/icons/svg/185/185961.svg" style = {{height: "50px", width:"50px"}}></img></a>
                                    </div>
                                    <div className = "col-1 ml-4">
                                       <a href ="https://github.com/vatsrahul79" target="blank"><img src = "https://image.flaticon.com/icons/svg/733/733609.svg" style = {{height: "50px", width:"50px"}}></img></a>
                                    </div>
                                    {/* <div className = "col-1 ml-4">
                                        <a href = "https://www.hackerrank.com/1"><img src = "https://brandfolder.com/hackerrank/logo/hackerrank-primary-logo.png" style = {{height: "50px", width:"50px"}}></img></a>
                                    </div> */}
                                    <div className = "col-1 ml-4">
                                        <a href = "mailto:vatsrahul79@gmail.com"><img src = "https://icon-library.net/images/email-svg-icon/email-svg-icon-5.jpg" style = {{height: "50px", width:"50px"}}></img></a>
                                    </div>
                                </div>  
                        </div>
                        <div className = "col-lg-6 col-md-12 col-sm-12 jumbotron" style = {{ background: "linear-gradient(#d621ad, #2c3e50)"}}>
                            <div className = "row">
                                <div className = "col-4 p-4">
                                    <img src = "html.png" style = {{height: "110px", width: "120px", borderRadius: "50%" }}></img>
                                    {/* <h3 className = "offset-2">HTML</h3> */}
                                </div>
                                <div className = "col-4 p-4">
                                    <img src = "css.png" style = {{height: "110px", width: "110px", borderRadius:"50%" }}></img>
                                    {/* <h3 className = "offset-2">Css</h3> */}
                                </div>
                                <div className = "col-4 p-4">
                                    <img src = "js.png" style = {{height: "110px", width: "110px", borderRadius: "50%" }}></img>
                                    {/* <h3 className = "ml-n3">JavaScript</h3> */}
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-4 p-4">
                                    <img src = "bsp.png" style = {{height: "110px", width: "110px", borderRadius: "50%" }}></img>
                                    {/* <h3>Bootstrap</h3> */}
                                </div>
                                <div className = "col-4 p-4">
                                    <img src = "react.png" style = {{height: "110px", width: "110px",borderRadius: "50%"  }}></img>
                                    {/* <h3 className = "offset-2">React</h3> */}
                                </div>
                                <div className = "col-4 p-4">
                                    <img src = "favicon.ico" style = {{height: "110px", width: "110px", borderRadius: "50%" }}></img>
                                    {/* <h3 className = "offset-1">Redux</h3> */}
                                </div>
                            </div>
                            <div className = "offset-3">
                                    <div className = "col-4 p-4">
                                        <img className = "offset-5" src = "python.png" style = {{height: "110px", width: "110px",borderRadius: "50%" }}></img>
                                        {/* <h3 className = "offset-5">Python</h3> */}
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className = "jumbotron-fluid pl-3 pr-3">
                        <h1 className = "text-center">Proficiencies</h1>
                        <div className = "row text-center">
                            <div className = "col-lg-4 col-md-6 col-sm-12">
                                <img src = "logo512.png" style = {{height : "110px", width : "110px"}}></img>
                                <h3>React App</h3>
                                <p>A good hang of React creation <br></br> I have the strength of Atlas</p>
                            </div>
                            <div className = "col-lg-4 col-md-6 col-sm-12">
                                <img src = "frnt.jpg" style = {{height : "110px", width : "110px"}}></img>
                                <h3>Front End</h3>
                                <p>I do not only imagine but also i can structure it in reality <br></br>can even host the show</p>
                            </div>
                            <div className = "col-lg-4 col-md-12 col-sm-12">
                                <img src = "backend.png" style = {{height : "110px", width : "110px"}}></img>
                                <h3>Backend</h3>
                                <p>I do work completely not partially</p>
                            </div>
                        </div>
                    </div>
                    <div className = "jumbotron-fluid pl-2 pr-3 mt-5 mb-5">
                        <h1 className = "text-center">Projects</h1>
                        <CardGroup className = "row">
                            <Card className = "col-lg-3 col-md-12 col-sm-12">
                                <Card.Img variant="top" src="w1.jpeg"  style = {{height : "200px", width : "300px"}} />
                                <Card.Body>
                                <Card.Title className = "text-center"><h2>Genie</h2></Card.Title>
                                <Card.Text>
                                    Single page created with HTML and inline CSS only.
                                </Card.Text>
                                </Card.Body>
                                <a href = "https://github.com/vatsrahul79/masai-week-1" className = "btn btn-outline-danger mb-5">View Project</a>
                            </Card>
                           
                             <Card className = "col-lg-3 col-md-12 col-sm-12">
                                <Card.Img variant="top" src="sat.jpg" style = {{height : "200px", width : "300px"}} />
                                <Card.Body>
                                <Card.Title className = "text-center"><h2>Satellite</h2></Card.Title>
                                <Card.Text>
                                    Designed four pages for Satellite using HTML and CSS
                                </Card.Text>
                                </Card.Body>
                                <a href = "https://github.com/vatsrahul79/masai-week-2" className = "btn btn-outline-danger mb-5">View Project</a>
                            </Card>
                            <Card className = "col-lg-3 col-md-12 col-sm-12">
                                <Card.Img variant="top" src="w4.jpeg"  style = {{height : "200px", width : "300px"}} />
                                <Card.Body>
                                <Card.Title className = "text-center"><h2>Bhagwatgita</h2></Card.Title>
                                <Card.Text>
                                    Designed Bhagwatgita using JavaScript  Jquerry and API call
                                </Card.Text>
                                </Card.Body>
                                <a href = "https://github.com/vatsrahul79/Masai-Week-5/tree/master/week_5" className = "btn btn-outline-danger mb-5">View Project</a>
                            </Card>
                            <Card className = "col-lg-3 col-md-12 col-sm-12">
                                <Card.Img variant="top" src="w7.png"  style = {{height : "200px", width : "300px"}} />
                                <Card.Body>
                                <Card.Title className = "text-center"><h2>Microsoft</h2></Card.Title>
                                <Card.Text>
                                    Designed a static Microsoft Landing page using React.
                                </Card.Text>
                                </Card.Body>
                                <a href = "https://github.com/vatsrahul79/Masai-Week-7/tree/master/week_7" className = "btn btn-outline-danger mb-5">View Project</a>
                            </Card>
                        </CardGroup>
                        {/*<CardGroup className = "row">
                            <Card className = "col-lg-4 col-md-12 col-sm-12">
                                <Card.Img variant="top" src="w4.png" />
                                <Card.Body>
                                <Card.Title className = "text-center"><h2>Stock Manager</h2></Card.Title>
                                <Card.Text>
                                    Designed Dynamic Stock Manager using JavaScript
                                </Card.Text>
                                </Card.Body>
                                <a href = "https://github.com/masai-week-4/tree/master/week_4" className = "btn btn-outline-danger mb-5">View Project</a>
                                </CardGroup> */}
                    </div>
                    <div className = "jumbptron-fluid pl-3 pr-3" style = {{ background: "linear-gradient(#d621ad, #2c3e50)"}}>
                        <div className = "row text-center pl-3">
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                                <div className="mt-5 offset-3" style={{width: "150px",height:"150px", background: "#C8F2EE", borderRadius: "50%", border:"20px solid", borderColor: "white white #d621ad #d621ad"}}>
                                <div className="text-center display-4 mt-4 font-weight-bold" style = {{marginTop: "60px",fontSize : "40px"}}>
                                    600+
                                </div>
                                </div>
                                <div className=" display-4 mt-2 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "30px" }}>Hours of Full Stack Coding</div>
                            </div> 
                            <div className = "col-lg-4 col-md-6 col-sm-12 mt-5">
                                <div className="mt-5 offset-3" style={{width: "150px",height:"150px", background: "#C8F2EE", borderRadius: "50%", border:"20px solid", borderColor: " #960526  #960526  white white"}}>
                                <div className="text-center display-4 mt-4 font-weight-bold" style = {{marginTop: "60px",fontSize : "40px"}}>
                                    150+
                                </div>
                                </div>
                                <div className=" display-4 mt-2 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "30px" }}>Hackerrank Problem</div>         
                            </div>
                            <div className = 'col-lg-4 col-md-6 col-sm-12 mt-5'>
                                <div className="mt-5 offset-3" style={{width: "150px",height:"150px", background: "#C8F2EE", borderRadius: "50%", border:"20px solid", borderColor: "white  #f7809b   #f7809b  white"}}>
                                <div className="text-center display-4 mt-4 font-weight-bold" style = {{marginTop: "60px",fontSize : "40px"}}>
                                    150+
                                </div>
                                </div>
                                <div className="display-4 mt-2 ml-n5 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "30px" }}>Git Commits</div>
                            </div>
                        </div>
                        <center>
                        <div className = "mt-5 text-light">
                        <GitHubCalendar username="vatsrahul79" color="#d621ad"style={{ margin: "30px 0px" }}>
                            <ReactTooltip delayShow={50} html />
                        </GitHubCalendar>
                        </div> 
                         </center>
                </div>
            </div>
            )
        }
    }
    export default Home; 