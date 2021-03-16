
import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import weather from "../weather.png";
import corona from "../corona.png";
import password from "../password.png";

class portfolio extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={corona} />
            <MDBCardBody cascade>
              <MDBCardTitle>Corona Date</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn rounded color='primary' icon='play' href="https://github.com/mmeii/corona-date">github</MDBBtn>
              <MDBBtn rounded color='primary' icon='play' href="https://mmeii.github.io/project-1-corona-date/" >App</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={weather} />
            <MDBCardBody cascade>
              <MDBCardTitle>Weather App</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn rounded color='primary' icon='play' href="https://github.com/munozjuan/Weather-Dashboard">github</MDBBtn>
              <MDBBtn rounded color='primary' icon='play' href="https://munozjuan.github.io/Weather-Dashboard/">App</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={password} />
            <MDBCardBody cascade>
              <MDBCardTitle>Random Password Generator</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn rounded color='primary' icon='play' href="https://github.com/munozjuan/Password-Generator">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://munozjuan.github.io/Password-Generator/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={password} />
            <MDBCardBody cascade>
              <MDBCardTitle>Random Password Generator</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn rounded color='primary' icon='play' href="https://github.com/munozjuan/Password-Generator">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://munozjuan.github.io/Password-Generator/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={password} />
            <MDBCardBody cascade>
              <MDBCardTitle>Random Password Generator</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn rounded color='primary' icon='play' href="https://github.com/munozjuan/Password-Generator">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://munozjuan.github.io/Password-Generator/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol><MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={password} />
            <MDBCardBody cascade>
              <MDBCardTitle>Random Password Generator</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn rounded color='primary' icon='play' href="https://github.com/munozjuan/Password-Generator">github</MDBBtn>
              
              <MDBBtn onClick rounded color='primary' icon='play' href="https://munozjuan.github.io/Password-Generator/" target="_blank">App</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      
    )
  }
}




export default portfolio;