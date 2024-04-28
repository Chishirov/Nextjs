import React from 'react';
import { useState } from 'react';
import { Card } from '../../collections'
import {
  StyledCardContainer,
  StyledContainer,
  StyledDescription,
  StyledImageContainer,
  StyledSectionContainer,
  StyledTitle,
} from './elements';

import Image from 'next/image';


const cardProps = [
  {
    title: 'Brief',
    description: 'Complete <b>brief</b> <b>writing or simple</b> <b>guidance</b> on what to include, we`ve got you covered. ',
    image: { src: "/img/workbench.svg", alt: "workbench icon", },
    isMobileOnly: true,
    linkText: 'Link to brief generator??'
  },
  {
    title: 'Search',
    description: 'In-depth agency search covering; <b>criteria</b> <b>matching</b>, door knocking and due-dilligence vetting.',
    image: { src: "/img/presentation.svg", alt: "workbench icon", },
  },
  {
    title: 'Pitch',
    description: 'Comprehensive <b>pitch</b> <b>management</b> including comms, diary management and pitch hosting.',
    image: { src: "/img/talking.svg", alt: "workbench icon", },
  }
];


export const AgencySection = ({ title, description, image }) => {
  const [activeSelection, setActiveSelection] = useState('');

  const changeActiveSelection = (value) => setActiveSelection(value);

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledSectionContainer>
        <StyledImageContainer>
          <Image src={image.src} alt='video image' layout="fill" objectFit="cover" />
        </StyledImageContainer>
        <StyledCardContainer>
          {cardProps.map((card) => (
            <Card
              {...card}
              key={card.title}
              activeSelection={activeSelection}
              changeActiveSelection={changeActiveSelection}
              isMobileOnly={card.isMobileOnly}
            />
          ))}
        </StyledCardContainer>
      </StyledSectionContainer>
    </StyledContainer>
  );
};


