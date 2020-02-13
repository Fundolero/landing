import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    z-index: 10;
    background-color: hsla(0,0%,100%,.99);    
    box-shadow: ${prop => prop.scroll === 0 ? '' : '1px 1px 8px hsla(0,0%,40%,.3)'};
    position: fixed;
    top: 0;
    
`;



