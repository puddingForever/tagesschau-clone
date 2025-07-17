import { useState } from "react";
import styled, { keyframes } from "styled-components";

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const spinDown = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(180deg);
    }
`;

const Line = styled.div<{ $isOpen: boolean; $lineIndex: number }>`
  width: 28px;
  height: 2px;
  background-color: #222422;

  opacity: ${(props) => (props.$isOpen && props.$lineIndex === 1 ? 0 : 1)};
  animation: ${(props) =>
    props.$isOpen && props.$lineIndex === 0
      ? ` ${spinDown} 2s linear forwards`
      : "none"};
`;

interface MenuBoxProps {
  isOpen: boolean;
}

const MenuBox = ({ isOpen }: MenuBoxProps) => {
  return (
    <LineWrapper>
      <Line $isOpen={isOpen} $lineIndex={0} />
      <Line $isOpen={isOpen} $lineIndex={1} />
      <Line $isOpen={isOpen} $lineIndex={2} />
    </LineWrapper>
  );
};

const HamburgerContainer = styled.div``;

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickContainerHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <HamburgerContainer onClick={clickContainerHandler}>
      <MenuBox isOpen={isOpen} />
    </HamburgerContainer>
  );
};

export default HamburgerNav;
