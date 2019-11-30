import React,{useState} from 'react';
import { Button ,
        Row,
        Col,
        Card,
        CardText,
    } from 'reactstrap';

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
        <div className="imgStyle" name="Home">
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
            <div className="bodySection" name="About" >
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

    const htmlDesc = "Stands for Hypertext Markup Language. HTML is the language used to create webpages. Hypertext refers to the hyperlinks that an HTML page may contain. Markup language refers to the way tags are used to define the page layout and elements within the page.";
    const jsDesc = "Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code. JavaScript is an interpreted language. ... JavaScript renders web pages in an interactive and dynamic fashion.";
    const bsDesc = "Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps. ... The software is available precompiled or as source code.";
    const cssDesc = "CSS. Stands for Cascading Style Sheet. Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.";
    const phpDesc = "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications. PHP stands for Hypertext Pre-processor, that earlier stood for Personal Home Pages. PHP scripts can only be interpreted on a server that has PHP installed.";
    const symfDesc = "Symfony is a PHP framework, which aims at accelerating the creation and maintenance of web applications and to replace recurrent coding tasks.";
    const reactDesc = "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance.";
    const mysqlDesc = "MySQL is an Oracle-backed open source relational database management system (RDBMS) based on Structured Query Language (SQL). MySQL runs on virtually all platforms, including Linux, UNIX and Windows.";
    const javaDesc = "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications. The Java syntax is similar to C++, but is strictly an object-oriented programming language";
    const hiberDesc = "Hibernate is an open source object relational mapping (ORM) tool that provides a framework to map object-oriented domain models to relational databases for web applications. Object relational mapping is based on the containerization of objects and the abstraction that provides that capacity.";

    const rowsElements = [
    {name: "HTML",desc: htmlDesc,image: "HTML5.png"},
    {name: "JS",desc: jsDesc,image: "JS.png"},
    {name: "CSS",desc: cssDesc,image: "CSS.png"},
    {name: "BS",desc: bsDesc,image: "BOOTSTRAP.png"},
    {name: "PHP",desc: phpDesc,image: "PHP.png"},
    {name: "SYMFONY",desc: symfDesc,image: "SYMFONY.png"},
    {name: "REACT",desc: reactDesc,image: "REACT.png"},
    {name: "MYSQL",desc: mysqlDesc,image: "Mysql.png"},
    {name: "JAVA",desc: javaDesc,image: "JAVA.png"},
    {name: "HIBERNATE",desc: hiberDesc,image: "Hibernate.png"}

    ];

    const rows = [];
    for (let index = 0; index < rowsElements.length-1; index+=2) {
        rows.push([rowsElements[index],rowsElements[index+1]]);
    }
    if(rowsElements.length%2===1){   rows.push(  [   rowsElements[rowsElements.length-1] ]   )   }

    return (
            <div className="bodySection" name="Portfolio" >
                 <h1 className="SectionTitle">My Portfolio</h1>

                 {

                     rows.map( function(currentRowElements,index) {
                       return ( <Row  key={index} className="PortfolioRow">
                            {
                                currentRowElements.map((currentRowElement,index) => <Col key={index} className="cardCol"><PortfolioCard name={currentRowElement.name} desc={currentRowElement.desc} image={currentRowElement.image} /></Col>)
                            }
                        </Row>);
                        }
                     )
                 }
            </div>
        )
    
} 



const PortfolioCard = (props) => {

    // const imgStyle = {
    //     backgroundImage : "url('images/"+props.image+"')",
    // }
    // let bg;
    // switch (props.name) {
    //     case 'HTML':
    //         bg=HTML;
    //         break;
    
    //     default:
    //         break;
    // }
    // const imgStyle = {
    //     backgroundImage : `url('${bg}')`,
    // }
    // const imgStyle = {
    //     backgroundImage : `url(require("../assets/images/${props.image}"))`
    // }
    return (
        <Card className="internal-card">
            <Row className="internal-card-row">
                <Col className={`WebDevImg ${props.name}`}>  {/*style={imgStyle}*/}
                </Col>
                <Col>
                    <CardText >
                        {props.desc}
                    </CardText>
                </Col>
            </Row>
        </Card>
        )

} 

const Github = (props) => {
    return <div />;

} 

const Contact = (props) => {
    
    return <div name="Contact" />;
} 