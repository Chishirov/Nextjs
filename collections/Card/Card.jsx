
import React from 'react';
import {
  StyledCardBoxContainer,
  StyledCardTitle,
  StyledImageContainer,
  StyledTextContainer,
  StyledCardDescription,
} from "./elements";
import Image from 'next/image';

export const Card = ({ activeSelection, changeActiveSelection, ...card }) => {
  const isActive = card.title === activeSelection;

  const description = card.description.split('*');

  return (
    <StyledCardBoxContainer isactive={isActive} onClick={() => changeActiveSelection(card.title)}>
      <StyledImageContainer>
        <Image src={card.image.src} alt={card.image.alt} height={60} width={60} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledCardTitle>{card.title}</StyledCardTitle>
        <StyledCardDescription>
          {description.map((text, index) => (
            <React.Fragment key={index}>
              {index % 2 === 1 ? <b>{text}</b> : text}
            </React.Fragment>
          ))}
        </StyledCardDescription>
      </StyledTextContainer>
    </StyledCardBoxContainer>
  );
};

