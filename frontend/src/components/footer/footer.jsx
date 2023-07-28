import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, Pinterest } from '@mui/icons-material';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f5f5f5',
    borderTop: '2px solid #2196f3', // Add top border with a blue color (#2196f3)
    padding: '40px 0',
    marginTop: '40px', // Add margin at the top
  };

  const containerStyle = {
    margin: '0 auto',
  };

  const columnStyle = {
    flex: '1 1 300px',
    marginBottom: '20px',
  };

  const headerStyle = {
    marginBottom: '10px',
    color: '#2196f3',
  };

  const paragraphStyle = {
    color: '#777',
  };

  const contactInfoStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const contactItemStyle = {
    marginBottom: '10px',
  };

  const socialMediaStyle = {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
  };

  const socialMediaItemStyle = {
    marginRight: '10px',
  };

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    marginRight: '10px',
  };

  const footerBottomStyle = {
    backgroundColor: '#ddd',
    padding: '10px 0',
    marginTop: '20px',
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg" style={containerStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} style={columnStyle}>
            <Typography variant="h6" style={headerStyle}>
              About Luxelane
            </Typography>
            <Typography variant="body2" style={paragraphStyle}>
              Discover the world of luxury fashion at Luxelane. We curate the finest collection of clothing, accessories, and more from renowned designers around the globe.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={columnStyle}>
            <Typography variant="h6" style={headerStyle}>
              Contact Us
            </Typography>
            <ul style={contactInfoStyle}>
              <li style={contactItemStyle}><i className="fas fa-envelope"></i> Email: info@luxelane.com</li>
              <li style={contactItemStyle}><i className="fas fa-phone"></i> Phone: +1 (XXX) XXX-XXXX</li>
              <li style={contactItemStyle}><i className="fas fa-map-marker-alt"></i> Address: 1234 Luxe Avenue, City, Country</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={columnStyle}>
            <Typography variant="h6" style={headerStyle}>
              Customer Service
            </Typography>
            <ul style={contactInfoStyle}>
              <li style={contactItemStyle}><Link href="/faq" style={linkStyle}>FAQ</Link></li>
              <li style={contactItemStyle}><Link href="/shipping" style={linkStyle}>Shipping</Link></li>
              <li style={contactItemStyle}><Link href="/returns" style={linkStyle}>Returns &amp; Exchanges</Link></li>
              <li style={contactItemStyle}><Link href="/privacy" style={linkStyle}>Privacy Policy</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={columnStyle}>
            <Typography variant="h6" style={headerStyle}>
              Stay Connected
            </Typography>
            <ul style={socialMediaStyle}>
              <li style={socialMediaItemStyle}><Link href="#" style={linkStyle}><Facebook /></Link></li>
              <li style={socialMediaItemStyle}><Link href="#" style={linkStyle}><Twitter /></Link></li>
              <li style={socialMediaItemStyle}><Link href="#" style={linkStyle}><Instagram /></Link></li>
              <li style={socialMediaItemStyle}><Link href="#" style={linkStyle}><Pinterest /></Link></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div style={footerBottomStyle}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">&copy; {currentYear} Luxelane. All rights reserved.</Typography>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
