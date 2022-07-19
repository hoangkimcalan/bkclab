import React from 'react'
import Footer from './Footer';
import HomeContainer from './HomeContainer';
import InformationContainer from './InformationContainer';
import KeyMembers from './KeyMembers';
import ProjectContainer from './ProjectContainer';
import SulutionsContainer from './SulutionsContainer';

function MainContainer() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center bg-white">
        <HomeContainer />
        <SulutionsContainer />
        <KeyMembers />
        <ProjectContainer />
        <InformationContainer />
    </section>
  )
}

export default MainContainer;