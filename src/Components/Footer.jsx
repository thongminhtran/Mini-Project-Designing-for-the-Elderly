import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { Link } from "react-scroll";
import "./Navbar.css";

const Footer = () => {
    return (
        <AppBar id="footer" position="static" style={{ backgroundColor: '#2c3e50', borderTop: '5px solid #3498db', marginTop: '40px' }}>
            <Toolbar style={{ justifyContent: 'center', padding: '20px 0' }}>
                <Stack direction="row" justifyContent="center" columnGap={2}>
                    <Button id="nav-button" style={{ color: '#ecf0f1' }}>
                        <Link
                            id="link"
                            to="Problem"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Problem
                        </Link>
                    </Button>
                    <Button id="nav-button" style={{ color: '#ecf0f1' }}>
                        <Link
                            id="link"
                            to="Research"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Research
                        </Link>
                    </Button>
                    <Button id="nav-button" style={{ color: '#ecf0f1' }}>
                        <Link
                            id="link"
                            to="Analysis"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Analysis
                        </Link>
                    </Button>
                    <Button id="nav-button" style={{ color: '#ecf0f1' }}>
                        <Link
                            id="link"
                            to="VisualDesign"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Visual Design
                        </Link>
                    </Button>
                    <Button id="nav-button" style={{ color: '#ecf0f1' }}>
                        <Link
                            className="last-link"
                            id="link"
                            to="FinalDesign"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Final Design
                        </Link>
                    </Button>
                </Stack>
            </Toolbar>
            <Toolbar style={{ justifyContent: 'center', borderTop: '1px solid #ecf0f1', padding: '20px 0' }}>
                <h2 style={{ margin: '0', color: '#ecf0f1' }}>MiniProject-SOEN357</h2>
                <p style={{ margin: '0', color: '#ecf0f1' }}>© 2023. All rights reserved.</p>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
