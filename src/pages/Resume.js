import React from 'react';
import MainLayout from './layouts/MainLayout';

const Resume = function() {
    return (
        <MainLayout title="Resume">
            <p className="paragraph text-size-3 mg-4-bottom">
                I am currently proficient in the following technologies:
            </p>
            <ul className="resume-list mg-4-bottom-all mg-4-bottom">
                <li>Linux CLI</li>
                <li>JavaScript</li>
                <li>Express.js</li>
                <li>CSS</li>
                <li>React</li>
                <li>HTML</li>
                <li>GraphQL</li>
                <li>Sequelize</li>
                <li>Handlebars</li>
                <li>JQuery</li>
                <li>MySQL</li>
                <li>Swift</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>Mongoose</li>
                <li>Node.js</li>
                <li>Git</li>
            </ul>
        </MainLayout>
    );
}

export default Resume;