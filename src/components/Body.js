import React,{useState} from 'react';
import { Button ,Row, Col} from 'reactstrap';
import '../assets/Body.css';



export default class MainBody extends React.Component {



    render(){

        return (
            <div>

                <TopPicture />
                <AboutMe />
                <Portfolio />
                <Github />
                <Contact />
                
            </div>
        )
    }
}

const TopPicture = (props) => {

    const [hover, setHover] = useState(false);

    // const imgStyle = {
    //     backgroundImage : "url('images/top.jpg')",
    //     backgroundSize : "cover",
    //     backgroundRepeat : "no-repeat",
    //     backgroundPosition: "center",
    //     height: "100vh",
    // }

    let opa;
    if (hover) {
        opa=1;
    }else{
        opa=0.3;
    }
    const descrStyle = {
        position : 'relative',
        top : '70%',
        opacity : opa,
        transition : "0.75s ease",
        padding : '10px',
        display : 'inline-block',
    }

    return (
        <div className="imgStyle">
           {/* <img src="images/top.jpg" alt="Top of Page Pic" width="100%" /> */}
           <div className="TopDescription bg-light text-dark" style={descrStyle} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
               <h1>I'm Mohamed Jawad</h1>
               <h3>I'm a Software Engineer Based at Morocco</h3>
               <Button color="success" size="lg">Send Hi !</Button>
           </div>
        </div>
    )
} 

const AboutMe = (props) => {

    return (
            <div className="bodySection">
                <h1 className="SectionTitle">About Me</h1>
                <Row className="AboutmeRow">
                    <Col>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                </p>
                    </Col>
                    <Col className="PictureCol">
                        
                    </Col>
                    <Col>
                    <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                </p>
                    </Col>
                </Row>
            </div>
        )
    
} 

const Portfolio = (props) => {
    return (
            <div className="bodySection">
                 <h1 className="SectionTitle">My Portfolio</h1>
                <Row className="PortfolioRow">
                    <Col>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                </p>
                    </Col>
                    <Col>
                    <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                </p>
                    </Col>
                </Row>
                <Row className="PortfolioRow">
                    <Col>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                </p>
                    </Col>
                    <Col>
                    <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?
                                </p>
                    </Col>
                </Row>
            </div>
        )
    
} 


const Github = (props) => {
    return <div />;

} 

const Contact = (props) => {
    
    return <div />;
} 