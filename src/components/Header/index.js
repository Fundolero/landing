import React, {useState, useEffect} from 'react';
import { StyledDiv } from './styles';


function Header() {    
    const [scroll, setScroll] = useState(0);    

    useEffect(()=>{        
        window.addEventListener('scroll', (event)=>{
            setScroll(window.scrollY)            
        });
    }, [scroll]);

    return(
        <StyledDiv scroll = {scroll}/>
    )
}

export default Header;