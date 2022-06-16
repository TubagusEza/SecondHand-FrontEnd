import React from 'react'
import { Navbar, Container,Nav,Offcanvas,Button } from 'react-bootstrap'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { flexbox } from '@mui/system';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    borderRadius: '16px',
    justifyContent: 'space-between',
    paddingLeft: '10px',
    height: '40px',
    backgroundColor: '#EEEEEE',
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: '400px',
      },
  }));
  

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    display: 'grid',
  
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    padding: theme.spacing(1, 1, 1, 0),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    width: '400px',
  },
}));

const StyledNav=styled(Nav) (({ theme }) => ({
    marginRight:'100px',
}));

const StyledFormatListBulletedIcon= styled(FormatListBulletedIcon) (({ theme }) => ({
    color: ' #7126B5',
}));


export default function NavbarLogIn() {
       return (
                <div>
                    <Navbar className="ms-auto navbar"bg="white" expand="lg">
                        <Container fluid className='mt-3'>
                            <Navbar.Brand href="#home" className='logo' ></Navbar.Brand>
                            <Search>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                            </Search>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                            <Navbar.Offcanvas >
                            <Offcanvas.Body>
                                <StyledNav  className='flex-grow-1 justify-content-end pe-5'>
                                <Nav.Link><StyledFormatListBulletedIcon/></Nav.Link>
                                   <Nav.Link><NotificationsActiveIcon/></Nav.Link>
                                   <Nav.Link><PersonOutlineIcon/></Nav.Link>
                                    
                                </StyledNav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                            
                        
                    </Navbar>
                </div>

        )
    
}