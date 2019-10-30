import React from 'react';

import { } from 'react-bootstrap';

import '../css/Home.css';

// Images
import managementIllustration from '../images/management_01.png';
import designIllustration from '../images/design_01.png';
import techIllustration from '../images/tech_01.png';
import videoIllustration from '../images/video_01.png';

class Home extends React.Component {
    render () {
        return (
            <div className='home'>
                <img src={managementIllustration} alt=''/>
                <img src={designIllustration} alt=''/>
                <img src={techIllustration} alt=''/>
                <img src={videoIllustration} alt=''/>
            </div>
        )
    }
}

export default Home;
