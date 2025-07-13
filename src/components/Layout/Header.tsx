import { AiOutlinePlayCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as TagesschauLogo } from "../../assets/tagesschau.svg"
import styled from "styled-components";

const HeaderContainer = styled.nav`
    display : flex;
    justify-content : space-between;
    align-items : center;

    padding: 16px 20px;
    font-size : 1.5rem;
    background-color : white;
    color : #262623;
    position : fixed;
    top : 0;

    width: 100%;
    height : 60px;
    z-index : 101;
`;


const LogoWrapper = styled.div`
    height : 100%;
    display: flex;
    align-items : center;
    justify-content : center;
    

    svg{
       width: 100%;
       height : 140%;
       object-fit : contain;
    }
`

const TitleWrapper = styled.div`

    display : flex;
    align-items: center;
    justify-content : center;


    span{
        font-size : 18px;
        padding-right : 6px;
    }

`;

const HambergerWrapper = styled.div`
    padding-right : 30px;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    
    svg{
       width: 100%;
       height : 110%;
       object-fit : contain;
    }
  
`;


const Header = () => {
    return (
            <HeaderContainer>
                <LogoWrapper>
                    <TagesschauLogo/>
                </LogoWrapper>
                <TitleWrapper>
                    <span>Sendung verpasst?</span>
                    <AiOutlinePlayCircle />
                </TitleWrapper>
                <HambergerWrapper>
                    <GiHamburgerMenu />
                </HambergerWrapper>
            </HeaderContainer>
         ) 
}


export default Header;