import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface InputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const CustomInput: React.FC<InputProps> = ({ label, placeholder, value, onChange, disabled = false }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value); 
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { 
          m: 1, 
          width: '25rem'
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" onChange={handleChange} value={value} disabled={disabled} inputProps={{ readOnly: disabled }} placeholder={placeholder} />
    </Box>
  );
};

export default CustomInput;
