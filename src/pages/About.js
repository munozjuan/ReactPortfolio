import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function about() {
    return (
        <div className="aboutme">
        <Card style={{ width: '50rem'}} >
      <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
      <Card.Body>
      
        <Card.Title>About Me</Card.Title>
        <Card.Text>
        
       <p>My name is Juan Munoz. I was born in Peru but moved to a small town in Ohio called Washington Court House when I was seven years old. I am one of four children in my family and I am the only male. I am a USA Air Force veteran. I work full-time at The Ohio State James Cancer hospital. I am currently in school going for a Geographic Information Science degree and I am taking a web developing boot-camp course.</p>
       <p>On my free time I love hanging out with my friends and prior to COVID-19 I would enjoy going out for dinner and drinks. Before the pandemic I would travel to various parts of the world for vacation which allowed me to try different types of cuisines that I now enjoy. This has only made me want to keep trying different foods. I have a very eclectic taste in music and I have been lucky enough to see various artist live. I consider myself a cinephile and throughout these past few months I have been able to watch multiple films that I previously did not have time to watch.</p>
       <p>I also love to hike at state or national parks whenever I get the chance. I have actually driven across America twice stopping at multiple National Parks. It was such an amazing experience I was able to share with one of my best friends. We would backpack through these parks and make our own fires so we could eat. We made our way to California going up North first and then we would come back down south stopping in various national parks. Some of my favorite National Parks have been: Arches National Park, Redwoods National Park, and Zion National Park. I also enjoy hiking at parks around Ohio and I have to say that Glen Helen in Yellow springs is my favorite.</p>
       <p>I am a full-stack web developer seeking projects that leverage my eye for design and instinct for functionality. I am eager to continue building my skillset to help clients bring their vision into reality. </p>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
             

    </div>
            
    )
}

export default about;