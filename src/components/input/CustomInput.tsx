import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (value: string) => void;
  disabled?: boolean;
  id?: string;
}

export default function CustomInput({ label, value, onChange, disabled = false, id, placeholder }: InputProps) {
  const handleChange = (inputValue: string) => {
    onChange && onChange(inputValue);
  };
  const isError = value !== null && value?.trim() === '';

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        error={isError}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event.target.value);
        }}
        value={value}
        disabled={disabled}
        inputProps={{ readOnly: disabled }}
        fullWidth
        sx={TextFieldSx}
      />
    </Box>
  );
};

const TextFieldSx = {
  '& label.Mui-focused': {
    display: 'none'
  },
  '& .MuiOutlinedInput-root': {
    color: '#484847',
    border: 'solid 1px #DEDEDE',

    ':hover': {
      backgroundColor: '#F7F7F7',
      color: '#484847',
      border: 'solid 1px #B8B8B6 ',

    },
    ':focus-within': {
      color: '#484847',
      bgcolor: '#FFFFFF',
      border: 'solid 1px #F39B49 ',
    }
  },
  '& .MuiOutlinedInput-root.Mui-disabled': {
    ':hover': {
      border: '1px solid #909090 !important',
      boxShadow: 'none'
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}

// const InputSxz = {
//   '& label.Mui-focused': {
//     color: '#DEDEDE',
//   },
//   '& .MuiOutlinedInput-input': {
//     color: '#484847'
//   },
//   '& .MuiTextField-root .MuiInputBase-input': {
//     color: '#484847',
//   },
//   '& input:valid + fieldset': {
//     color: '#484847',
//     border: 'solid 1px #DEDEDE',
//   },
//   '& input:valid:hover ': {
//     backgroundColor: '#F7F7F7',
//     color: '#484847',
//     border: 'solid 1px #B8B8B6 ',

//   },
//   '& input:valid:focus ': {
//     color: '#484847',
//     bgcolor: '#FFFFFF',
//     border: 'solid 1px #F39B49 ',
//   },
//   '& input:invalid + fieldset': {
//     backgroundColor: '#FFFFFF',
//     color: '#484847',
//     border: 'solid 1px #E53935',
//   },
//   '& input:invalid:hover + fieldset': {
//     bgcolor: '#EFEFEF',
//     color: '#A1A19F',
//     border: 'solid 1px #CCCCCB ',
//   },

// };
