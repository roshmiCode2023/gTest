import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-900 hover:border-gray-700 hover:text-gray-700`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://www.karlcrowellinsurance.com/wp-content/uploads/2014/05/Blurred-Background-Light.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-white opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;


const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

//const Subheading = tw.span`tracking-wider text-sm`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-pink-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;


const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-1/2 sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-pink-800 text-gray-900 hover:bg-pink-500`}
  }
  .secondaryAction {
     ${tw`mt-4 sm:mt-0 sm:ml-4 bg-pink-800 text-gray-900 hover:bg-pink-500 hover:text-gray-800`}
  }
`;


export default (features = null) => {
	
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/components/innerPages/AboutUsPage">
        For Refugees
      </NavLink>
      <NavLink href="/components/innerPages/ContactUsPage">
        For Volunteers
      </NavLink>
      <NavLink href="/components/innerPages/SignupPage">
        Sign-up
      </NavLink>
      <NavLink href="#">
        Language
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/components/innerPages/LoginPage">
        Log in
      </PrimaryLink>
    </NavLinks>
  ];

  const primaryActionUrl = "/components/innerPages/SignupPage";
  const primaryActionText = "I need help";
  const secondaryActionUrl = "/components/innerPages/SignupPage";
  const secondaryActionText = "I can offer help";
  
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              A Place of Support and Services
          </Heading>
		  <Paragraph>
		  We are here to connect people who need services with people who can provide them. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
		  Our focus is on displaced and refugee women and children and we have collected resources in:
		  </Paragraph>
		   <FeatureList>
                  <Feature key={1}>
                    <FeatureIcon />
                    <FeatureText>Mental Health</FeatureText>
                  </Feature>
				  <Feature key={2}>
                    <FeatureIcon />
                    <FeatureText>Physical Health</FeatureText>
                  </Feature>
				  <Feature key={3}>
                    <FeatureIcon />
                    <FeatureText>General Wellness</FeatureText>
                  </Feature>
              </FeatureList>		
		    <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
        </Content>
      </HeroContainer>
    </Container>
  );
};
