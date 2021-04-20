import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Routes } from "../routes";
import Iplcover from "../assets/img/iplcover.jpg";
import stadium from "../assets/img/stadium.jpg";
import dd from "../assets/img/teamsimg/dd.jpg";
import kxip from "../assets/img/teamsimg/kxip.jpg";
import csk from "../assets/img/teamsimg/csk.png";
import mi from "../assets/img/teamsimg/mi.png";
import rcb from "../assets/img/teamsimg/rcb.png";
import rr from "../assets/img/teamsimg/rr.png";
import srh from "../assets/img/teamsimg/srh.png";
import kkr from "../assets/img/teamsimg/kkr.png";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import { matchinfo, singlematch } from "../apidata/apiinfo";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


 
export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;
    

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    matchinfo()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);


  const Dbox = (props) => {
    const id = props
    const [open, setOpen] = React.useState(false);
    const [datum, setDatum] = useState([]);
    
    const handleClickOpen = () => {
      setOpen(true);
      singlematch(id.id)
      .then((data) => {
        setDatum(data);
        console.log(datum.score)
      })
      .catch((error) => {});
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    
    return (
      <div>
        <Button variant="outlined" 
                color="primary" onClick={handleClickOpen} className = "btn btn-raised btn-dark">
          More Information
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
             Score Information
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Score : {datum.score}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
             Dismiss
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  const mumbai = [
    "Rohit Sharma(c)", "Aditya Tare", "Anmolpreet Singh", "Anukul Roy", "Dhawal Kulkarni", "Hardik Pandya", "Ishan Kishan","Jasprit Bumrah", "Jayant Yadav", "Kieron Pollard", "Krunal Pandya", "Quinton de Kock", "Rahul Chahar", "Suryakumar Yadav", "Chris Lynn", "Mohsin Khan", "Saurabh Tiwary", "Trent Boult", "Adam Milne", "Nathan Coulter-Nile", "Piyush Chawla", "James Neeshan", "Yudhvir Charak", "Marco Jansen", "Arjun Tendulkar"
  ];
  const bangalore = [
    'Virat Kohli(c)', 'AB de Villiers', 'Yuzvendra Chahal', 'Devdutt Padikkal', 'Harshal Patel', 'Daniel Sams', 'Washington Sundar', 'Mohammed Siraj', 'Navdeep Saini', 'Adam Zampa', 'Shahbaz Ahmed', 'Kane Richardson', 'Pavan Deshpande', 'Glenn Maxwell', 'Sachin Baby', 'Rajat Patidar', 'Mohammed Azharuddeen', 'Kyle Jamieson', 'Dan Christian', 'Suyesh Prabhudessai', 'K.S. Bharat', 'Finn Allen'
  ];
  const chennai = [
    'Suresh Raina', 'MS Dhoni(c)', 'Narayan Jagadeesabn', 'Ruturaj Gaikwad', 'KM Asif', 'Karn Sharma', 'Ambati Rayudu', 'Deepak Chahar', 'Faf du Plessis', 'Shardul Thakur', 'Mitchell Santner', 'Dwayne Bravo', 'Lungi Ngidi', 'Sam Curran', 'Ravindra Jadeja', 'Imran Tahir', 'Robin Uthappa', 'Moeen Ali', 'K Gowtham', 'Cheteshwar Pujara', 'M.Harisankar Reddy', 'K.Bhagath Varma', 'C Hari Nishaanth', 'R Sai Kishore', 'Jason Behrendorff'
  ];
  const kolkata = [
    'Dinesh Karthik', 'Andre Russell', 'Kamlesh Nagarkoti', 'Kuldeep Yadav', 'Lockie Ferguson', 'Nitish Rana', 'Prasidh Krishna', 'Gurkeerat Singh Mann', 'Sandeep Warrier', 'Shivam Mavi', 'Shubman Gill', 'Sunil Narine', 'Eoin Morgan(c)', 'Pat Cummins', 'Rahul Tripathi', 'Varun Chakravarthy', 'Pawan Negi', 'Tim Seifert', 'Shakib al Hasan', 'Sheldon Jackson', 'Vaibhav Arora', 'Karun Nair', 'Harbhajan Singh', 'Ben Cutting', 'Venkatesh Iyer'
  ];
  const rajasthan = [
    'Sanju Samson(c)', 'Ben Stokes', 'Jofra Archer', 'Jos Buttler', 'Riyan Parag', 'Shreyas Gopal', 'Rahul Tewatia', 'Mahipal Lomror', 'Kartik Tyagi', 'Andrew Tye', 'Jaydev Unadkat', 'Mayank Markande', 'Yashasvi Jaiswal', 'Anuj Rawat', 'David Miller', 'Manan Vohra', 'Shivam Dube', 'Chris Morris', 'Mustafizur Rahim', 'Chetan Sakariya', 'K.C. Cariappa', 'Liam Livingstone', 'Kuldip Yadav', 'Akash Singh'
  ];
  const delhi = [
  'Shreyas Iyer', 'Ajinkya Rahane', 'Amit Mishra', 'Avesh Khan', 'Axar Patel', 'Ishant Sharma', 'Kagiso Rabada', 'Prithvi Shaw', 'Ravichandran Ashwin', 'Rishabh Pant(c)', 'Shikhar Dhawan', 'Lalit Yadav', 'Marcus Stoinis', 'Shimron Hetmyer', 'Chris Woakes', 'Anrich Nortje', 'Steve Smith', 'Umesh Yadav', 'Ripal Patel', 'Lukman Hussain Meriwala', 'M Siddharth', 'Tom Curran', 'Sam Billings', 'Pravin Dubey', 'Vishnu Vinod'
  ];
  const punjab = [
    'KL Rahul (c)', 'Chris Gayle', 'Mayank Agarwal', 'Nicholas Pooran', 'Mandeep Singh', 'Sarfaraz Khan', 'Deepak Hooda', 'Prabhsimran Singh', 'Mohammed Shami', 'Chris Jordan', 'Darshan Nalkande', 'Ravi Bishnoi', 'Murugan Ashwin', 'Arshdeep Singh', 'Harpreet Brar', 'Ishan Porel', 'Dawid Malan', 'Jhye Richardson', 'Shahrukh Khan', 'Riley Meredith', 'Moises Henriques', 'Jalaj Saxena', 'Utkarsh Singh', 'Fabian Allen', 'Saurabh Kumar'
  ];
  const hyderabad = [
    'Kane Williamson', 'David Warner(c)', 'Manish Pandey', 'Virat Singh', 'Priyam Garg', 'Abdul Samad', 'Bhuvneshwar Kumar', 'Khaleel Ahmed', 'Sandeep Sharma', 'Siddharth Kaul', 'T Natarajan', 'Abhishek Sharma', 'Shahbaz Nadeem', 'Vijay Shankar', 'Mohammad Nabi', 'Rashid Khan', 'Jonny Bairstow', 'Wriddhiman Saha', 'Shreevats Goswami', 'Basil Thampi', 'Jason Holder', 'Jagadeesha Suchith', 'Kedar Yadav', 'Mujeeb ur Rahman', 'Jason Roy'
  ];
  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <span className="ms-2 brand-text d-none d-md-inline">Analyticz</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
              <Nav.Link as={HashLink} to="#squad">Squad</Nav.Link>
                <Nav.Link as={HashLink} to="#live" className="d-sm-none d-xl-inline">Live Scores</Nav.Link>
                <Nav.Link as={HashLink} to="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h1 className="fw-bolder text-secondary">Pitch Reportz</h1>
              <p className="text-muted fw-light mb-5 h5">Power your game</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
        
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image className="justify-content-center" src={Iplcover} alt="Mockup presentation" />
            </Col>
          </Row>
          <div id="squad"></div>
          <Row className="justify-content-center mt-5 mt-lg-6" >
          <h1 className="text-center fw-bolder text-dark">Squad Information</h1>
          <br></br>
            <Col xs={6} md={3} className="text-center mb-4">
              <div>
              <Image src={mi} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">MI</h3>
              <p className="text-gray">Mumbai</p>
              <Dropdown options={mumbai} value="Mumbai"/>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div>
              <Image src={rcb} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">RCB</h3>
              <p className="text-gray">Bangalore</p>
              <Dropdown options={bangalore} value="Bangalore" />
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div>
                <Image src={csk} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">CSK</h3>
              <p className="text-gray">Chennai</p>
              <Dropdown options={chennai} value="Chennai"/>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div>
                <Image src={kxip} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">KXIP</h3>
              <p className="text-gray">Punjab</p>
              <Dropdown options={punjab} value="Punjab"/>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div>
                <Image src={dd} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">DD</h3>
              <p className="text-gray">Delhi</p>
              <Dropdown options={delhi} value="Delhi"/>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div>
                <Image src={srh} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">SRH</h3>
              <p className="text-gray">Hyderabad</p>
              <Dropdown options={hyderabad} value="Hyderabad"/>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div>
                <Image src={rr} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">RR</h3>
              <p className="text-gray">Rajasthan</p>
              <Dropdown options={rajasthan} value="Rajasthan"/>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div>
                <Image src={kkr} style={{width: 150, height: 150, borderRadius: 75}} />
              </div>
              <h3 className="fw-bolder">KKR</h3>
              <p className="text-gray">Kolkata</p>
              <Dropdown options={kolkata} value="Kolkata"/>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <Row className="justify-content-center">
          </Row>
      <div id="live"></div>
      <div className = "container">
      <h1 className="text-center fw-bolder text-dark">Live Score Information</h1>
          <br></br>
      <div className="row">
              {matches.map((match, i) => (
                <div className="card col-md-3" key = {i}>
                        <div className="card-body">
                            <h5 className="card-title">{match["team-1"]} vs {match["team-2"]}</h5>
                            <p className="card-text">Toss won By: {match.toss_winner_team}</p>
                            <p className="card-text">Match won By:{match.winner_team}</p>
                            <p className="font-italic mark">
                              Time : {new Date(match.dateTimeGMT).toLocaleString()}
                            </p>
                            <br></br>
                        </div>
                        <Dbox id={match["unique_id"]}></Dbox>
                        <br></br>
                </div>
              ) )}
        </div>
        </div>
        <div id="about"></div>
        <div className="container">
        <div>
        <h1 className="text-center fw-bolder text-dark">About</h1>
          <br></br>
          <p>Cricket is the most popular played game in India. Being passionate about cricket, we have decided to launch a website.
The objective of our website is to organize people of similar thougts who are into the world of CRICKET. Everybody can post their views and discuss. We will be also working on our products...</p>
        </div>
        <br></br>
        <h4>@PitchReportz</h4>
        </div>
    </>
  );
};
