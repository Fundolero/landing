import React from 'react';
import { StyledDiv } from './styles.js';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Bussinessblock from '../../components/Bussinessblock';
import Galleryblock from '../../components/Galleryblock';
import Optionblock from '../../components/Optionblock';
import Bussinessoption from '../../components/Bussinessoption';
import Footer from '../../components/Footer';

function Landingpapge() {
    return (
        <StyledDiv>
            <Header />
            <Banner />
            <Bussinessblock />
            <Galleryblock />
            <Optionblock />
            <Bussinessoption />
            <Footer />
        </StyledDiv>
    )
}

export default Landingpapge;