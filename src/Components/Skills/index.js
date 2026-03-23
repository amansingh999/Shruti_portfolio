import React from "react";
import { Container, Desc, Skill, SkillImage, SkillItem, SkillList, SkillsContainer, SkillTitle, Title, Wrapper } from "./SkillStyledComponent";
import { skills } from "../../Data/MyAllData";

export const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of my skills on which I have been working on for the past 2.5 years.
                </Desc>
                <SkillsContainer>
                    {skills.map((skill) => (
                        <Skill>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item) => (
                                    <SkillItem>
                                        <SkillImage src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}

                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};