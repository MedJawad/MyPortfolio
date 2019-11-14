import React from 'react';
//import  from '';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  import '../assets/Navbar.css';

  const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

export default class MainNavbar extends React.Component {

    constructor(props){
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
    }
    state = {
        isOpen : false,
        isHovered : false,
        isVisible : false,
    }

    toggleNavbar = () => {
        this.setState({isOpen : !this.state.isOpen })
    }

    setNavbarHovered = () => {
      this.setState({isHovered : true , isVisible : true})
    }
    setNavbarUnhovered = () => {
      this.setState({isHovered : false })
    }
    setNavbarVisible = () => {
      this.setState({isVisible : true })
    }
    
    setNavbarInvisible = () => {
      this.setState({isVisible : false })
    }

    componentDidMount() {
        window.addEventListener('scroll',  debounce(this.handleScroll, 15));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll',  debounce(this.handleScroll, 15));
    }
    
    handleScroll(event) {
        let scrollPosition = window.scrollY;
      // console.log(window.scrollY);
        if(scrollPosition > 200){
          this.setNavbarVisible();
        }else{
          this.setNavbarInvisible();
        }
    }
    
    navStyle={
        position : 'fixed',
        top : 0,
        left : 0,
        zIndex : 100,
        width : '100%',
    };

    render(){

        return (
            <div style={this.navStyle}>
            <Navbar color={this.state.isVisible?'dark':'faded'} style={{transition : "0.75s ease"}} light expand="md" onMouseEnter={this.setNavbarHovered} onMouseLeave={this.setNavbarUnhovered}>
              <NavbarToggler onClick={this.toggleNavbar} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="col-sm-12 col-md-6 offset-md-3" navbar>
                  <NavItem className="col-sm-2 item">
                    <NavLink href="#"><span className="navLink">Portfolio</span></NavLink>
                  </NavItem>
                  <NavItem className="col-sm-2 item">
                    <NavLink href="#"><span className="navLink">About</span></NavLink>
                  </NavItem>
                  <NavItem className="col-sm-4 item">
                    <NavLink href="/Home/"><span className="navLink">Home</span></NavLink>
                  </NavItem>
                  <NavItem className="col-sm-2 item">
                    <NavLink href="https://github.com/MedJawad"><span className="navLink">Github</span></NavLink>
                  </NavItem>
                  <NavItem className="col-sm-2 item">
                    <NavLink href="#"><span className="navLink">Contact</span></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

        )
    }
}