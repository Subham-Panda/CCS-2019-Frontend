import React from 'react';

import { Container, Row } from 'react-bootstrap';

import '../css/Home.css';

import API from '../API';

// Components
import HomeIllustration from '../components/HomeIllustration';
import CSILogo from '../components/CSILogo';

// Images
import managementIllustration from '../images/managementIllustration.png';
import designIllustration from '../images/designIllustration.png';
import techIllustration from '../images/techIllustration.png';
import videoIllustration from '../images/videoIllustration.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tech: 'notAttempted',
            design: 'notAttempted',
            management: 'notAttempted',
            video: 'notAttempted'
        }
    }

    currentStatus = (domainName) => {
        if (this.state[domainName] === 'notAttempted'){
            return '';
        } else if (this.state[domainName] === 'ended') {
            console.log(domainName);
            return 'ended';
        } else if (this.state[domainName] === 'progress') {
            return 'inProgress';
        }
    }

    componentDidMount () {
        API.get('/quiz/domains')
        .then((response) => {
            if (response.data.success) {
                this.setState({
                    tech: response.data.tech,
                    design: response.data.design,
                    management: response.data.management,
                    video: response.data.video,
                });
            }
        })
    }

    render () {
        return (
            <Container fluid='true' className='home text-center d-flex flex-column justify-content-center'>
                <CSILogo />

                <Row className='textContainer m-auto'>
                    <div className='titleText text-uppercase m-auto pb-1'>
                        Core Committee Selections
                    </div>

                    <div className='taglineText m-auto'>
                        Be a part of CSI where skilled designers, developers and tech enthusiasts engage in a lot of projects and hackathons, to help push technology forward.
                    </div>

                    <div className='subtitleText pt-2 m-auto'>
                        Choose a domain
                    </div>
                </Row>

                <Row className='illustrations mx-auto'>
                    <HomeIllustration imgSrc={managementIllustration} domain='management' classes={this.currentStatus('management')}/>
                    <HomeIllustration imgSrc={designIllustration} domain='design' classes={this.currentStatus('design')}/>
                    <HomeIllustration imgSrc={techIllustration} domain='tech' classes={this.currentStatus('tech')}/>
                    <HomeIllustration imgSrc={videoIllustration} domain='video' classes={this.currentStatus('video')}/>
                </Row>
            </Container>
        );
    }
}

export default Home;
