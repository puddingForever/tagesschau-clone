import { ReactComponent as TagesschauLogo } from "../../../assets/tagesschau.svg";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    padding-left: 10px;
    font-size: 22px;
  }

  span {
    font-weight: 600;
  }
`;
const NavLogo = () => {
  return (
    <TitleWrapper>
      <TagesschauLogo />
      <p>
        tages<span>schau</span>
      </p>
    </TitleWrapper>
  );
};

export default NavLogo;
