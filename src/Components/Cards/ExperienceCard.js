import React from "react";
import { Body, Card, Company, Date, Description, Image, ItemWrapper, Role, Skill, Skills, Span, Top } from "./ExperienceCardStyle";

export const ExperienceCard = ({ experience }) => {
    return (
        <>
            <Card>
                <Top>
                    {/* <Image src={experience.img} /> */}
                    <Body>
                        <Role>{experience.role}</Role>
                        <Company>{experience.company}</Company>
                        <Date>{experience.date}</Date>
                    </Body>
                </Top>
                <Description>
                    {experience.desc && <Span>{experience.desc}</Span>}

                    {experience.skills &&
                        <>
                            <br />
                            <Skills>
                                <b>Skills:</b>
                                <ItemWrapper>
                                    {experience.skills?.map((item, i) => (
                                        <Skill>{item}</Skill>
                                    ))}
                                </ItemWrapper>
                            </Skills>
                        </>

                    }
                </Description>
            </Card>
        </>
    );
};