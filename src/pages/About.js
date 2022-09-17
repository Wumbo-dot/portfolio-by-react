import React from 'react';
import MainLayout from './layouts/MainLayout';

const About = function() {
    return (
        <MainLayout title="About Me">
            <img style={{
                objectFit: "cover", 
                objectPosition: "25% 65%", 
                width: "350px", 
                height: "300px", 
                filter: "sepia()",
                borderRadius: "20px"
            }} 
            src="./assets/images/about-me-img.jpg"
            className="about-me-img mg-5-top mg-10-bottom"
            />
            <p className="paragraph text-size-3">
                Hello there!  My name is JT Gutierrez and I am a Full-stack Web Developing Bootcamp student.  I find the technology department
                wonderous and evergrowing knowledge amazing.  I currently work for a credit union as a fraud investigator who specializes in
                debit card fraud.  I am looking for a position where I can use my many years of customer service experience and also use
                the knowledge that I have gained from this Bootcamp.
            </p>
            <p className="paragraph text-size-3 col-8 center-wide">
                I love learning and trying to understand the world around me with hobbies that include:
            </p>

            <ul className="resume-list mg-4-bottom-all mg-10-bottom">
                <li>Learning Musical Instruments</li>
                <li>Cars</li>
                <li>Cooking</li>
                <li>Exercising</li>
            </ul>

            <p className="paragraph text-size-3 col-8 center-wide">
                Thank you for your time!
            </p>
        </MainLayout>
    );
}

export default About;