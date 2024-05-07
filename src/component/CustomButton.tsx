import React from 'react';
import Button from '@mui/material/Button';
import "../css/buttons.css";
import ButtonsProps from '../types/ButtonsProps';

const CustomButton: React.FC<ButtonsProps> = ({ text = "Button", style = 'contained', size = "large", color = "primary", onClick ,disabled=false}) => {
    let textColor: string;
    let bgColor: string;
    let borderColor: string;
    
    if (style === 'contained') {
        bgColor = color === 'primary' ? '#F39B49' : '#FFE8D2';
        textColor = color === 'primary' ? '#FFFFFF' : '#F39B49';
        borderColor = 'none';
    } else if (style === 'outlined') {
        bgColor = '#FFFAF6';
        textColor = color === 'primary' ? '#F39B49' : '#F39B49'; 
        borderColor = color === 'primary' ? '1px solid #F39B49' : '1px solid #E8B98F';
    } else { 
        bgColor = 'transparent';
        textColor = color === 'primary' ? '#F39B49' : '#D7955A';
        borderColor = 'none';
    }

    return (
       <>
         <Button 
            sx={{
                display:'flex'
            }}
            className={`btn-${size}`}
            variant={style === 'text' ? 'text' : 'contained'}
            size={size}
            style={{ backgroundColor: bgColor, color: textColor, border: borderColor }}
            onClick={onClick}
            disabled={disabled}
         >
              {text}
        </Button>
       </>
    );
}

export default CustomButton;
