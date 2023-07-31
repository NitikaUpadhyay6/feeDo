import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Ifa,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Stories</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Weddings</FooterLink>
            <FooterLink href="#">Parties</FooterLink>
            <FooterLink href="#">Birthdays</FooterLink>
            <FooterLink href="#">Events</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Varansi</FooterLink>
            <FooterLink href="#">Gurugram</FooterLink>
            <FooterLink href="#">Delhi</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#">
              <i className="fa fa-instagram" style={{fontSize:'2.5rem'}}></i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fa fa-twitter" style={{fontSize:'2.5rem'}}></i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fa fa-youtube" style={{fontSize:'2.5rem'}}></i>
            </FooterLink>
          </Column>
          <Column style={{width:'35vw'}}>
          <Heading>Newsletters</Heading>
          <p style={{color:'white',fontSize:'20px',fontFamily:"'Yeon Sung', cursive"}}>Be our valuable customer and subscribe to our Newletters to get information about deal of the day and great offers</p>

            <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
            
                <input className="form-control me-5" type="search" placeholder="Your email" aria-label="Search"/>
                <button id="btn" className="btn btn-outline-light" style={{marginTop:'20px'}} type="submit">Subscribe</button>
                   </div>     
          </Column>

        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
