import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  id?: string
}

const CustomInput: React.FC<InputProps> = ({ label, placeholder, value, onChange, disabled = false, id }) => {
  const handleChange = (inputValue: string) => {
    onChange && onChange(inputValue);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          width: '100%'
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
        sx={{
          width: '100%',
          m: 1,
          paddingRight: 2,
          '& input:focus': {

          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
