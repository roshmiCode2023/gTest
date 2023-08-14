import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import tw from "twin.macro";
//import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import DesignIllustration from "images/mainPageMedical.jpg";
import DesignIllustration2 from "images/mainPageMedical2.jpg";

//const Subheading = tw.span`uppercase tracking-wider text-sm`;



const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-pink-800 text-gray-900 hocus:bg-pink-500 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;

export default ({
  features = null,
  heading = "For Refugees",
}) => {
 
  const primaryButtonUrl = "/components/innerPages/SignupPage";
  const primaryButtonText = "Sign Me Up";
  return (
     <AnimationRevealPage >
	  <Hero/>
	   <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
			  <span tw="text-pink-800">{heading}</span>
            </Heading>
            <Paragraph>
              Our goal is to help you find the services you need while you are in transition.  All our providers offer their services on a sliding scale or free of charge. You can search for someone to work with virtually or in person. If we don't have anyone in your area we can help you locate an agency or organization that may be able to help. 
            </Paragraph>
            <PrimaryButton><a href={primaryButtonUrl}>{primaryButtonText}</a></PrimaryButton>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
		<TwoColumn>
          <LeftColumn>
		   <Heading>
			  <span tw="text-pink-800">For Volunteers</span>
            </Heading>
            <Paragraph>
             Are you a medical or para-medical professional looking to help displaced women and children? Can you provide these services virtually (where appropriate) or in person? We are connecting caring and like-minded professionals who can provide medical and mental health care to create a community of support. Let us know what you have to offer, where you are located, and we will do provide the connection. Welcome aboard!
            </Paragraph>
            <PrimaryButton href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
          </LeftColumn>
          <RightColumn>
             <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration2} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
	  <Footer />
	   </AnimationRevealPage>
  );
};
