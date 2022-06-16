
import React, {Component} from "react";
import { Container } from "react-bootstrap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box,  createTheme } from '@mui/system';
import { Button, TextField } from "@mui/material";
import './Profile.css';
import { CameraAltRounded } from "@mui/icons-material";


export default class Profile extends Component {
    render() {
        return (
                        
            <Container>
                {/* <div className="row profile">
                    <div className="col-3 justify-content-end">
                        <ArrowBackIcon />
                    </div>
                    <div className="col-6 d-flex justify-content-center" >
                       
                       <Box className='box '>
                            <Button >
                                <div className="button">
                                  <CameraAltRounded />
                                </div>
                            </Button>
                       </Box>
                    </div>  
                </div> */}
                
            </Container>
        )
    }
}