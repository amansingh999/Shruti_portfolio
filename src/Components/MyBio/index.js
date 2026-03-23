import React from "react";
import styled from "styled-components";
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Img, ResumeButton, Span, SubTitle, TextLoop, Title } from "./BioStyledComponent";
import { Bio } from "../../Data/MyAllData";
import Typewriter from 'typewriter-effect';
import BgAnimation from "../BgAnimation";

export const MyBio = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg><BgAnimation /></HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am {Bio.name}</Title>
                        <TextLoop>I am a <Span>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            //for effect
                            />
                        </Span></TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        {/* <ResumeButton href={Bio.resume} target="_blank">Check Resume</ResumeButton> */}
                    </HeroLeftContainer>
                    {/* <HeroRightContainer>
                        <Img />
                    </HeroRightContainer> */}
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};