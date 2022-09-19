import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import { minHeight } from '@mui/system';

export class Header extends Component {
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#fcdf03"}}>
                    <div className="container-fluid"> */}

                    <Typography 
                     variant="h2" textAlign={"center"} 
                     sx = {
                      {
                        backgroundColor: "#003d5b",
                        height: "5rem"
                      }
                     }
                      gutterBottom>
                    Crypto Dashboard
                    </Typography>

                        

                    {/* </div>
                </nav> */}
            </div>
        )
    }
}

export default Header