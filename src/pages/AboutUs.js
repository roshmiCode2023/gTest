import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("http://4.bp.blogspot.com/-z8zGXPU1zZs/TuXs_b7_Q4I/AAAAAAAACxM/_Ntl0K8dhSg/s1600/map-of-new-york-city-area.gif");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-pink-800 text-gray-900 hover:bg-pink-500`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-pink-800 text-gray-900 hover:bg-pink-500 hover:text-gray-800`}
  }
`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-3/4 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="/components/innerPages/ContactUsPage">For Volunteers</NavLink>
      <NavLink href="#">Language</NavLink>
      <NavLink href="/components/innerPages/LoginPage">Login</NavLink>
    </NavLinks>
  ],
  heading = (
    <>
      What are you looking for today?
      <wbr />
      <br />
      <span tw="text-pink-800">Health on the go.</span>
    </>
  ),
  description = "Our goal is to help you find the services you need while you are in transition.  All our providers offer their services on a sliding scale or free of charge. You can search for someone to work with virtually or in person. If we don't have anyone in your area we can help you locate an agency or organization that may be able to help.",
  primaryActionUrl = "/components/innerPages/SignupPage",
  primaryActionText = "Sign Up",
  secondaryActionUrl = "#",
  secondaryActionText = "Search Health Services"
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
			<Form>
				<Input type="service" placeholder="Service Type" />
				<Input type="zip" placeholder="Zip Code" />
              </Form>
			 <Paragraph> </Paragraph> 
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
	  <Footer />
    </Container>
  );
};
