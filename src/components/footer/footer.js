import React from "react";
import {GiVolleyballBall} from 'react-icons/gi'
function Footer(){
    return(
        <>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
            <div>
                <a>dribble</a>
            </div>
            <div>
                <h6>For designers</h6>
                
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h7 href="#go-pro">Go Pro!</h7>
                    <h7>Explore design work</h7>
                    <h7>Design blog</h7>
                    <h7>Overtime podcast</h7>
                    <h7>Playoffs</h7>
                    <h7>Code of conduct</h7>
                </div>
            </div>
            <div>
                <h6>Hire designers</h6>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h7>Post a job opening</h7>
                    <h7>Post a freelance project</h7>
                    <h7>Search for designers</h7>
                </div>
                
            </div>
            <div>
                <h6>Company</h6>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h7>About</h7>
                    <h7>Careers</h7>
                    <h7>Support</h7>
                    <h7>Media kit</h7>
                    <h7>Testimonials</h7>
                    <h7>API</h7>
                    <h7>Terms of Services</h7>
                    <h7>Privacy Policy</h7>
                    <h7>Cookie Policy</h7>
                </div>
            </div>
            <div>
                <h6>Directories</h6>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h7>Design jobs</h7>
                    <h7>Designers for hire</h7>
                    <h7>Freelance designers for hire</h7>
                    <h7>Tags</h7>
                    <h7>Places</h7>
                </div>
            </div>
            <div>
                <h6>Design Resources</h6>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h7>Freelancing</h7>
                    <h7>Design Hiring</h7>
                    <h7>Design Portfolio</h7>
                    <h7>Design Education</h7>
                    <h7>Creative Process</h7>
                    <h7>Design Industry Trends</h7>
                </div>
            </div>
            
        </div>
        <hr></hr>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div>
                <p>© 2023 Dribbble. All rights reserved.</p>
            </div>
            <div >
                <p>
                21,673,158 shots dribbbled <GiVolleyballBall style={{color:'pink'}}/>
                </p>
            </div>
        </div>
        </>
    );
}
export default Footer;