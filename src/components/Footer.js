import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3>s.molaverdikhani@gmail.com</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sina-molaverdikhani-091b081b4/" target="_blank"><LinkedInIcon className="fontIcon"/></a>
              <a href="https://github.com/SinaSS77" target="_blank"><GitHubIcon className="fontIcon"/></a>
              <a href="tel:+16043967565"><PhoneIphoneIcon className="fontIcon"/></a>
              <a href="mailto:s.molaverdikhani@gamil.com"><EmailOutlinedIcon className="fontIcon"/></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
