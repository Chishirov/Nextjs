import React, { useEffect, useState } from "react";
import {
  StyledCardBoxContainer,
  StyledCardTitle,
  StyledImageContainer,
  StyledTextContainer,
  StyledCardDescription,
} from "./elements";
import Image from "next/image";

export const Card = ({ activeSelection, changeActiveSelection, ...card }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = card.title === activeSelection;

  return (
    <StyledCardBoxContainer
      isactive={isActive}
      onClick={() => changeActiveSelection(card.title)}
    >
      <StyledImageContainer>
        <Image
          src={card.image.src}
          alt={card.image.alt}
          height={60}
          width={60}
        />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledCardTitle>{card.title}</StyledCardTitle>
        {isMobile && (
          <b
            style={{
              color: "red",
              fontWeight: "bold",
              transform: "rotate(15deg)",
              position: "absolute",
              right: "15px",
            }}
          >
            {card.linkText}
          </b>
        )}

        <StyledCardDescription
          dangerouslySetInnerHTML={{ __html: card.description }}
        />
      </StyledTextContainer>
    </StyledCardBoxContainer>
  );
};
