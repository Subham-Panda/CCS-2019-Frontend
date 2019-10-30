import React from 'react';

import { Container, Row } from 'react-bootstrap';

import '../css/Home.css';

// Components
import HomeIllustration from '../components/HomeIllustration';

// Images
import CSILogo from '../images/csi_logo.png';

import managementIllustration from '../images/management_01.png';
import designIllustration from '../images/design_01.png';
import techIllustration from '../images/tech_01.png';
import videoIllustration from '../images/video_01.png';

class Home extends React.Component {
    render () {
        return (
            <Container fluid='true' className='home img-fluid text-center'>
                <img
                src={CSILogo}
                alt='csi-logo'
                className='csiLogo mt-3 p-4'
                />

                <Container fluid='true' className='textContainer'>
                    <div className='titleText text-uppercase m-auto pb-3'>
                        Core Committee Selections
                    </div>

                    <div className='taglineText m-auto'>
                        Be a part of CSI where skilled designers, developers and tech enthusiasts engage in a lot of projects and hackathons, to help push technology forward.
                    </div>

                    <div className='subtitleText pt-4'>
                        Choose a domain
                    </div>
                </Container>

                <Row className='illustrations m-auto'>
                    <HomeIllustration imgSrc={ managementIllustration } domain='management'/>
                    <HomeIllustration imgSrc={ designIllustration } domain='design'/>
                    <HomeIllustration imgSrc={ techIllustration } domain='tech'/>
                    <HomeIllustration imgSrc={ videoIllustration } domain='video'/>
                </Row>
            </Container>
        );
    }
}

export default Home;
