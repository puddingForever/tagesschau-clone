import styled from "styled-components";
import HamburgerNav from "./HamburgerNav";
import NavLogo from "./NavLogo";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 20px;
  font-size: 1.5rem;
  background-color: white;
  color: #262623;
  position: fixed;
  top: 0;

  width: 100%;
  height: 60px;
  z-index: 101;
`;

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 100%;
    object-fit: contain;
  }
`;

const HambergerWrapper = styled.div`
  padding-right: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 110%;
    object-fit: contain;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <NavLogo />
      </LogoWrapper>
      <HambergerWrapper>
        <HamburgerNav />
      </HambergerWrapper>
    </HeaderContainer>
  );
};

export default Header;
