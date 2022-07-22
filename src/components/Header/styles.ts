import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme['gray-100']};

            border-top: 3px solid transparent; //to allow this icon to be center aligned it brings this border on top even though it won´t even show on screen
            border-bottom: 3px solid transparent; //making this border transparent it avoids the icond to move when you hover it - it would move up if this new component had to be implemented on screen
            
            &:hover {
                border-bottom: 3px solid ${(props) => props.theme['green-500']};
            }

            &.active {
                color: ${(props) => props.theme['green-500']};
            }
        }
    }
`;