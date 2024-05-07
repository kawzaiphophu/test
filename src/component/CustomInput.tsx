import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputProps from '../types/InputProps';

const CustomInput: React.FC<InputProps> = ({ label, placeholder, value, onChange, disabled = false ,id}) => {
  const handleChange = (inputValue: string) => {
  onChange && onChange(inputValue);
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
      <TextField 
        id={id} 
        label={label} 
        variant="outlined" 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value);
          }}
        value={value} 
        disabled={disabled} 
        inputProps={{ readOnly: disabled }} 
        placeholder={placeholder} 
      />
    </Box>
  );
};

export default CustomInput;
