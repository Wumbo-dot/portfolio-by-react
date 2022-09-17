import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Import components
import Header from './components/Header/Header.jsx';
import Project from './components/Project/Project.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';

import Pages from './pages';

import { FadeIn } from './providers/FadeInContext';

// Import config files
import projectList from './config/project-list.json';

import './global-styles/visibility.css';
import './global-styles/base.css';
import './global-styles/frost.css';
import './global-styles/anims.css';

const App = () => {

    // on page load mount
    useEffect(() => {
        projectList = projectList.map(item => {
            item.id = uuidv4();
            return item;
        })
    }, []);

    const [navPage, setNavPage] = useState('aboutMe');
    const [projects, setProjects] = useState(projectList);

    const getRenderedPage = () => {
        switch (navPage) {
            case 'aboutMe':
                return <Pages.AboutPage/>
            case 'projects':
                return <Pages.ProjectsPage projects={projects}/>
            case 'resume':
                return <Pages.ResumePage/>
            case 'contact':
                return <Pages.ContactPage/>
            default:
            
                return <Pages.AboutPage/>
        }
    }

    return (
        <>
        <div className="wrapper">
            <Header/>
            <Navigation onChange={setNavPage} state={navPage}/>
            <main>
                {getRenderedPage()}
            </main>
        </div>
        <Footer/>
        </>
    );
}

export default App;