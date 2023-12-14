import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer_section text-light py-4">
      <Container>
        <Row>
          {/* First Section */}
          <Col xs={12} md={6} lg={3}>
            <h5><span className='demo_color'>Ship</span>Up</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum, dicta delectus neque</p>
          </Col>

          {/* Second Section */}
          <Col xs={12} md={6} lg={3}>
            <h5>Explore</h5>
            <ul className="list-unstyled text-light">
              <li><a href="#link1" className='text-light'>About Us</a></li>
              <li><a href="#link2" className='text-light'>Warehouses</a></li>
              <li><a href="#link3" className='text-light'>Blogs</a></li>
              <li><a href="#link4" className='text-light'>News and Media</a></li>
            </ul>
          </Col>

          {/* Third Section */}
          <Col xs={12} md={6} lg={3}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#link5" className='text-light'>Terms</a></li>
              <li><a href="#link6" className='text-light'>Privacy</a></li>
            </ul>
          </Col>

          {/* Fourth Section */}
          <Col xs={12} md={6} lg={3}>
            <h5>Social Media</h5>
            <div className="d-flex">
              <FaFacebook className="me-2" />
              <FaTwitter className="me-2" />
              <FaInstagram className="me-2" />
              <FaLinkedin />
            </div>
          </Col>
        </Row>
        <hr className="my-4 text-light" />

        {/* Centered Heading */}
        <Row className="text-center">
          <Col>
            <h4 className="text-light"><span className='text-secondary'>Ship</span><span className='demo_color'>Up</span>.ng</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
