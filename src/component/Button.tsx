import * as React from 'react';
import Button from '@mui/material/Button';
import "../css/buttons.css"
interface ButtonsProps {
    Text: string;
    Style: 'contained' | 'outlined' | 'text'; 
    Size: 'small' | 'medium' | 'large'; 
    Color: 'primary' | 'secondary';
}

const Buttons: React.FC<ButtonsProps> = ({ Text, Style, Size, Color }) => {
    let textColor: string;
    let bgColor: string;
    let borderColor: string;
    
    if (Style === 'contained') {
        bgColor = Color === 'primary' ? '#F39B49' : '#FFE8D2';
        textColor = Color === 'primary' ? '#FFFFFF' : '#F39B49';
        borderColor = 'none';
    } else if (Style === 'outlined') {
        bgColor = '#FFFAF6';
        textColor = Color === 'primary' ? '#F39B49' : '#F39B49'; 
        borderColor = Color === 'primary' ? '#F39B49' : '#E8B98F';
    } else { 
        bgColor = 'transparent';
        textColor = Color === 'primary' ? '#F39B49' : '#D7955A';
        borderColor = 'none';
    }

    return (
       <>
         <Button 
            sx={{
                display:'flex'
            }}
            className={`btn-${Size}`}
            variant={Style === 'text' ? 'text' : 'contained'}
            size={Size}
            style={{ backgroundColor: bgColor, color: textColor, border: borderColor }}>
              {Text}
        </Button>
       </>
    );
}

export default Buttons;
