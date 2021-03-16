
import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import weather from "../weather.png";
import corona from "../corona.png";
import password from "../password.png";
import code from '../CodeQuiz.png';
import note from '../note.png';
import mad from '../mad.png';

class portfolio extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol className="mb-5" md={4} >
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={corona} />
            <MDBCardBody cascade>
              <MDBCardTitle>Corona Date</MDBCardTitle>
              <MDBBtn className="mr-2" rounded color='primary' icon='play' href="https://github.com/mmeii/corona-date">github</MDBBtn>
              <MDBBtn rounded color='primary' icon='play' href="https://mmeii.github.io/project-1-corona-date/" >App</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="mb-5" md={4}>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={weather} />
            <MDBCardBody cascade>
              <MDBCardTitle>Weather App</MDBCardTitle>
              <MDBBtn className="mr-2" rounded color='primary' icon='play' href="https://github.com/munozjuan/Weather-Dashboard">github</MDBBtn>
              <MDBBtn rounded color='primary' icon='play' href="https://munozjuan.github.io/Weather-Dashboard/">App</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="mb-5" md={4}>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={password} />
            <MDBCardBody cascade>
              <MDBCardTitle>Random Password Generator</MDBCardTitle>
              <MDBBtn className="mr-2" rounded color='primary' icon='play' href="https://github.com/munozjuan/Password-Generator">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://munozjuan.github.io/Password-Generator/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={code} />
            <MDBCardBody cascade>
              <MDBCardTitle>Code Quiz</MDBCardTitle>
              <MDBBtn className="mr-2" rounded color='primary' icon='play' href="https://github.com/munozjuan/Code-Quiz">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://munozjuan.github.io/Code-Quiz/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={note} />
            <MDBCardBody cascade>
              <MDBCardTitle>Note Taker</MDBCardTitle>
              <MDBBtn className="mr-2" rounded color='primary' icon='play' href="https://github.com/munozjuan/NoteTaker">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://floating-stream-17005.herokuapp.com/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md={4}>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={mad} />
            <MDBCardBody cascade>
              <MDBCardTitle>Random Password Generator</MDBCardTitle>
              
              <MDBBtn className="mr-2" rounded color='primary' icon='play' href="https://github.com/thorgriffs/make-your-madlibs">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://makeyourmadlib.herokuapp.com/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      
    )
  }
}




export default portfolio;