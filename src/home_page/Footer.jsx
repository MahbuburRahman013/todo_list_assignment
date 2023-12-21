import { Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled('footer')({
    color: '#ffffff', // White text color
    padding: theme => theme.spacing(4),
    marginTop: 'auto',
});

const SocialIcon = styled(IconButton)({
    color: '#ffffff', // White icon color
    fontSize: 30,
    '&:hover': {
        color: '#FFC107', // Change the hover color as needed
    },
});

const Footer = () => {
    const socialMediaLinks = [
        {
          icon: <FacebookIcon />,
          link: 'https://www.facebook.com/example',
        },
        {
          icon: <TwitterIcon />,
          link: 'https://twitter.com/example',
        },
        {
          icon: <LinkedInIcon />,
          link: 'https://www.linkedin.com/in/example',
        },
        // Add more social media links as needed
      ];

    return (
        <div className='bg-[#1B4242] pt-10'>
            <FooterContainer>
                <Typography variant="h6" align="center" gutterBottom>
                    Connect with Us
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                    {socialMediaLinks.map((social, index) => (
                        <Grid item key={index}>
                            <SocialIcon
                                component="a"
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </SocialIcon>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="body2" align="center" sx={{color:'white'}} component="p">
                    © {new Date().getFullYear()} TaskHub. All rights reserved.
                </Typography>
            </FooterContainer>
        </div>
    );
};

export default Footer;