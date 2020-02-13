import React, {useState, useEffect} from 'react';
import { StyledDiv } from './styles';
import Container from '@material-ui/core/Container';
import styles from './styles.module.css';
import HeaderMenu from '../HeaderMenu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { menuItems, menuItems2, bankingMenu, resourceMenu } from './menulistdata';
import logo from '../../assets/images/logo.jpg';
import Button from '../Button';

function Header() {    
    const [scroll, setScroll] = useState(0);    
    useEffect(()=>{        
        window.addEventListener('scroll', (event)=>{
            setScroll(window.scrollY)            
        });
    }, [scroll]);
    
    return(
        <StyledDiv scroll = {scroll}>
            <Container maxWidth="lg" style={{display:'flex' }}>
                <Container maxWidth="xl" className={styles.container}>
                    <img src={logo} alt="Logo" width={150} height={40}/>
                    <MenuItem>                   
                        <Typography variant="inherit">How It Works</Typography>
                    </MenuItem>
                    <HeaderMenu title = {'Loans'} menuitems = {menuItems}/>
                    <HeaderMenu title = {'Credit Cards'} menuitems = {menuItems2}/>
                    <HeaderMenu title = {'Banking'} menuitems = {bankingMenu}/>
                    <HeaderMenu title = {'More Resources'} menuitems = {resourceMenu}/>
                </Container>
                <Container maxWidth="xs" style={{display:'flex', alignItems:'center'}}>
                    <Button outlined = {false} title={'Get Started'}/>
                    <Button outlined = {true} title={'Login'}/>
                </Container>
            </Container>
        </StyledDiv>
    )
}

export default Header;