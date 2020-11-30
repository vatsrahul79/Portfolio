import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./home.css";
import "./card.css";

class Home extends React.Component {
  render() {
    return (
      <div className=" container  col-12 pl-3 pr-3">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-sm-12 jumbotron"
            style={{ backgroundColor: " #e8f8f5 " }}
          >
            <img
              src="123.JPG"
              className="offset-3"
              alt="img"
              style={{
                borderRadius: "50%",
                border: "10px solid  #fdfefe",
                height: "150px",
                width: "150px",
              }}
            ></img>
            <div className="offset-5">
              <h1
                style={{ fontFamily: "Open Sans", fontSize: "38px" }}
                className="text-dark"
              >
                <b className="font-style">Rahul Kumar vats</b>
              </h1>
              <h5>
                <b className="font-style">Full Stack Developer</b>
              </h5>
              <div className="row mt-3">
                <img
                  className="col-2 ml-n2"
                  src="location.png"
                  alt="location"
                ></img>
                <h6 className="ml-n3 description">
                  {" "}
                  Bengaluru, Karnataka, India
                </h6>
              </div>
              <div className="row mt-3">
                <img
                  className="col-2 ml-n2"
                  src="call.png"
                  alt="call.png"
                ></img>
                <h6 className="ml-n3 description">93043430199</h6>
              </div>
              <div className="row mt-3">
                <img
                  className="col-2 ml-n2"
                  src="email.png"
                  alt="email.png"
                ></img>
                <h6 className="ml-n3 description">vatsrahul79@gmail.com</h6>
              </div>
              <h6 className="mt-3 text-dark description">
                A passionate aspiring Full Stack Developer skilled in MERN
                stack, moulded and shaped by Masai School's numerous training.
                Actively ready to join in a great lively team of a good start-up
                to adapt me in any situation and environment with ease and
                perform the best.<br></br>
                <a
                  href="https://drive.google.com/file/d/1CuZRnkFzpbW0zSkfYGTDEJ85N_2DAY2m/view?usp=sharing"
                  target="blank"
                >
                  View Resume
                </a>
              </h6>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-1 ml-4">
                <a href="https://www.linkedin.com/in/vatsrahul" target="blank">
                  <img
                    src="https://image.flaticon.com/icons/svg/145/145807.svg"
                    style={{ height: "50px", width: "50px" }}
                    alt="linkedin"
                  ></img>
                </a>
              </div>
              <div className="col-1 ml-4">
                <a href="https://twitter.com/@iamRkvats" target="blank">
                  <img
                    src="https://image.flaticon.com/icons/svg/185/185961.svg"
                    style={{ height: "50px", width: "50px" }}
                    alt="twitter"
                  ></img>
                </a>
              </div>
              <div className="col-1 ml-4">
                <a href="https://github.com/vatsrahul79" target="blank">
                  <img
                    src="https://image.flaticon.com/icons/svg/733/733609.svg"
                    style={{ height: "50px", width: "50px" }}
                    alt="github"
                  ></img>
                </a>
              </div>
              <div className="col-1 ml-4">
                <a href="mailto:vatsrahul79@gmail.com">
                  <img
                    src="https://icon-library.net/images/email-svg-icon/email-svg-icon-5.jpg"
                    style={{ height: "50px", width: "50px" }}
                    alt="mail"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 jumbotron"
            style={{ background: "#d1f2eb " }}
          >
            <div className="row justify-content-center">
              <div className="p-4 col-xl-3 col-md-4 col-sm-4">
                <img
                  src="html.png"
                  alt="html"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                ></img>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="css.png"
                  alt="css"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                ></img>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="js.png"
                  alt="js"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                ></img>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="bsp.png"
                  alt="React"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                ></img>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="react.png"
                  alt="React"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                ></img>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="favicon.ico"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                  alt="react"
                ></img>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="python.png"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                  alt="python"
                ></img>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="flask.jpg"
                  alt="flask"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                ></img>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-4 p-4">
                <img
                  src="mongo.png"
                  className="rounded-circle col-lg-12 col-md-12 col-sm-12"
                  alt="mongo"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron-fluid pl-3 pr-3">
          <h1 className="text-center">Proficiencies</h1>
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 col-sm-12 card-flyer">
              <img
                src="logo512.png"
                style={{ height: "110px", width: "110px" }}
                alt="React"
              ></img>
              <h3 className="titles">React App</h3>
              <p className="description">
                A good hang of React creation <br></br> I have the strength of
                Atlas
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                src="frnt.jpg"
                style={{ height: "110px", width: "110px" }}
                alt="front-end"
              ></img>
              <h3 className="titles">FrontEnd</h3>
              <p className="description">
                I do not only imagine but also i can structure it in reality{" "}
                <br></br>can even host the show
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <img
                src="backend.png"
                style={{ height: "110px", width: "110px" }}
                alt="backend"
              ></img>
              <h3 className="titles">Backend</h3>
              <p className="description">I do work completely not partially</p>
            </div>
          </div>
        </div>
        <div className="justify-content-center d-flex pt-5 p-2 font-style">
          <h2>Work Experience</h2>
        </div>
        <div id="cards_landscape_wrap-2">
          <div class="container-fluid ">
            <div class="row d-flex justify-content-center">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="masai.png" alt="Masai" />
                    </div>
                    <div class="text-container">
                      <h6>
                        <u>Masai Course Platform</u>
                      </h6>
                      <ul>
                        <li>
                          Worked on Internal course Platform website, Developed
                          UI components. Tools used: React-hooks, Redux,
                          Ant-design
                        </li>
                        <li>
                          Enhancing and updating ongoing projects ,project
                          status and updates.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="masaiThink.jpg" alt="Contest" />
                    </div>
                    <div class="text-container">
                      <h6>
                        <u>Masai Play</u>
                      </h6>
                      <ul>
                        <li>
                          Worked on Internal Masai play website, Developed UI
                          components. Tools used: html,css, bootstrap.
                        </li>
                        <li>
                          Enhancing and updating contests, winner updates and
                          adhoc things .
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="masai.png" alt="" />
                    </div>

                    <div class="text-container">
                      <h6>
                        <u>INSTRUCTIONAL ASSOCIATE</u>
                      </h6>
                      <ul>
                        <li>Involved in resolving coding related issue.</li>
                        <li>
                          Involved in Curriculum Team to Design and Execute day
                          to day tasks.pair-programming,code-review and adhoc
                          tasks.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container-fluid contenedor text-center p-5">
              <h1 class="text-center pb-4">Personal Projects</h1>
              <div class="text-center row d-flex justify-content-center ">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                  <div class="ver_mas text-center">
                    <a href="https://github.com/vatsrahul79/Masai-Week-5/tree/master/week_5">
                      <span className="lnr lnr-eye"></span>
                    </a>
                  </div>
                  <article class="text-left">
                    <h2>MAHABHARAT</h2>
                    <h4>
                      Designed Bhagwatgita using JavaScript Jquerry and API call
                    </h4>
                  </article>
                  <img src="maha.webp" alt="mahabharat" />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                  <div class="ver_mas text-center">
                    <a href="https://github.com/vatsrahul79/TIC-TAC-TOE/tree/master/tictactoe">
                      <span className="lnr lnr-eye"></span>
                    </a>
                  </div>
                  <article class="text-left">
                    <h2>TIC_TAC_TOE</h2>
                    <h4>
                      Designed a good Tic-Tac-Toe Game "LETS PLAY HERE".
                    </h4>
                  </article>
                  <img src="tictactoe.png" alt="Microsoft" />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                  <div class="ver_mas text-center">
                    <a href="https://github.com/vatsrahul79/Todo-Redux">
                      <span className="lnr lnr-eye"></span>
                    </a>
                  </div>
                  <article class="text-left">
                    <h2>TODO APPLICATION</h2>
                    <h4>Designed a simple Todo app using React,Redux.</h4>
                  </article>
                  <img src="todo.jpg" alt="satellite" />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                  <div class="ver_mas text-center">
                    <a href="https://github.com/vatsrahul79/chat-app">
                      <span className="lnr lnr-eye"></span>
                    </a>
                  </div>
                  <article class="text-left">
                    <h2>CHAT APPLICATION</h2>
                    <h4>
                      A simple chat application using React-hooks,
                      express,socket.io.
                    </h4>
                  </article>
                  <img src="chat.png" alt="satellite" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="jumbptron-fluid pl-3 pr-3"
          style={{ backgroundColor: " #e8f8f5 " }}
        >
          <div className="row text-center pl-3">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div
                className="mt-5 offset-3"
                style={{
                  width: "150px",
                  height: "150px",
                  background: "#C8F2EE",
                  borderRadius: "50%",
                  border: "20px solid #fdfefe",
                }}
              >
                <div
                  className="text-center display-4 mt-4 font-weight-bold titles"
                  style={{ marginTop: "60px", fontSize: "40px" }}
                >
                  2000+
                </div>
              </div>
              <div
                className=" display-4 mt-2 font-weight-bold text-dark titles"
                style={{ color: "#5D86B4", fontSize: "30px" }}
              >
                Hours of Full Stack Coding
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div
                className="mt-5 offset-3"
                style={{
                  width: "150px",
                  height: "150px",
                  background: "#C8F2EE",
                  borderRadius: "50%",
                  border: "20px solid #fdfefe",
                }}
              >
                <div
                  className="text-center display-4 mt-4 font-weight-bold titles"
                  style={{ marginTop: "60px", fontSize: "40px" }}
                >
                  180+
                </div>
              </div>
              <div
                className=" display-4 mt-2 font-weight-bold text-dark titles"
                style={{ color: "#5D86B4", fontSize: "30px" }}
              >
                Hackerrank Problem
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
              <div
                className="mt-5 offset-3"
                style={{
                  width: "150px",
                  height: "150px",
                  background: "#C8F2EE",
                  borderRadius: "50%",
                  border: "20px solid #fdfefe",
                }}
              >
                <div
                  className="text-center display-4 mt-4 font-weight-bold titles"
                  style={{ marginTop: "60px", fontSize: "40px" }}
                >
                  500+
                </div>
              </div>
              <div
                className="display-4 mt-2 ml-n5 font-weight-bold text-dark titles"
                style={{ color: "#5D86B4", fontSize: "30px" }}
              >
                Git Commits
              </div>
            </div>
          </div>
          <center>
            <div className="mt-5 text-dark">
              <GitHubCalendar
                username="vatsrahul79"
                color="#2ee8d2"
                fontSize={16}
                style={{ margin: "30px 0px" }}
              >
                <ReactTooltip delayShow={50} html />
              </GitHubCalendar>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default Home;
