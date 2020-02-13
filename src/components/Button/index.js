import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 36,
        width: 120,
        margin:'0 40px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },

  });

export default function HeaderButton(props) {
  const classes = useStyles();
  
  return (
    <div >     
      <label htmlFor="contained-button-file">
        <Button         
            classes={!props.outlined?{
                    root: classes.root, 
                    label: classes.label,
                }
                :
                {               
                    label: classes.label,
                }
            }
            variant={props.outlined?'outlined':'text'}       
        >
          {props.title}
        </Button>
      </label>           
    </div>
  );
}
