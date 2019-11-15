import React from 'react';

import '../css/CSILogo.css';

import CSILogoImg from '../images/csi_logo.png';

class CSILogo extends React.Component {
    render () {
        return (
            <div className='text-center logo-container'>
                <a href='https://csivit.com' rel='noopener noreferrer' target='_blank'>
                <img
                src={CSILogoImg}
                alt='csi-logo'
                className='csiLogo p-4 mt-1 img-fluid'
                />
                </a>
            </div>
        );
    }
}

export default CSILogo;
