import React from 'react';
import Button from '@mui/material/Button';
import "./buttons.css";

interface ButtonsProps {
    text?: string;
    style?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    onClick?: () => void;
    isDisabled?: boolean;
    fullWidth?: boolean;
}
interface ButtonStyle {
    bgColor?: string | null;
    textColor?: string | null;
    borderColor?: string | null;
}

const CustomButton: React.FC<ButtonsProps> = ({
    text = "Button",
    style = 'contained',
    size = "large",
    color = "primary",
    onClick,
    isDisabled = false,
    fullWidth = false
}) => {

    const getButtonStyles = (): {
        normal: ButtonStyle;
        hover: ButtonStyle;
        focus: ButtonStyle;
        disabled: ButtonStyle;
    } | null => {
        const styles = {
            'contained': {
                'primary': {
                    normal: {
                        bgColor: '#F39B49',
                        textColor: '#FFFFFF',
                        borderColor: 'none'
                    },
                    hover: {
                        bgColor: '#CF7827',
                        textColor: '#FFFFFF'
                    },
                    focus: {
                        bgColor: '#F39B49',
                        textColor: '#FFFFFF'
                    },
                    disabled: {
                        bgColor: '#DEDEDE',
                        textColor: '#90908E',
                    }
                },
                'secondary': {
                    normal: {
                        bgColor: '#FFE8D2',
                        textColor: '#F39B49',
                        borderColor: 'none'
                    },
                    hover: {
                        bgColor: '#E69142',
                        textColor: '#FFFFFF'
                    },
                    focus: {
                        bgColor: '#FFAD62',
                        textColor: '#FFFFFF'
                    },
                    disabled: {
                        bgColor: '#FFE8D2',
                        textColor: '#F39B49',
                    }
                }
            },
            'outlined': {
                'primary': {
                    normal: {
                        bgColor: '#FFFAF6',
                        textColor: '#F39B49',
                        borderColor: '1px solid #F39B49'
                    },
                    hover: {
                        bgColor: 'rgba(255, 237, 220, 0.4)',
                        textColor: '#CF7827',
                        borderColor: '1px solid #CF7827'
                    },
                    focus: {
                        bgColor: '#FFFFFF',
                        textColor: '#F39B49',
                        borderColor: '1px solid #F39B49'
                    },
                    disabled: {
                        bgColor: '#EFEFEF',
                        textColor: '#CCCCCB',
                        borderColor: '1px solid #CCCCCB'
                    }
                },
                'secondary': {
                    normal: {
                        bgColor: '#FFFAF6',
                        textColor: '#F39B49',
                        borderColor: '1px solid #E8B98F'
                    },
                    hover: {
                        bgColor: 'rgba(255, 237, 220, 0.4)',
                        textColor: '#CF7827',
                        borderColor: '1px solid #D19A68'
                    },
                    focus: {
                        bgColor: '#FFFFFF',
                        textColor: '#F39B49',
                        borderColor: '1px solid #E8B98F'
                    },
                    disabled: {
                        bgColor: '#EFEFEF',
                        textColor: '#CCCCCB',
                        borderColor: '1px solid #CCCCCB'
                    }
                }
            },
            'text': {
                'primary': {
                    normal: {
                        textColor: '#F39B49',
                    },
                    hover: {
                        bgColor: 'rgba(255, 237, 220, 0.4)',
                        textColor: '#F39B49'
                    },
                    focus: {
                        textColor: '#F39B49'
                    },
                    disabled: {
                        textColor: '#90908E',
                    }
                },
                'secondary': {
                    normal: {
                        textColor: '#D7955A',
                    },
                    hover: {
                        bgColor: 'rgba(255, 237, 220, 0.4)',
                        textColor: '#D7955A'
                    },
                    focus: {
                        textColor: '#D7955A'
                    },
                    disabled: {
                        textColor: '#90908E',
                    }
                }
            }
        };

        return styles[style][color];
    };
    const buttonStyles = getButtonStyles();
    if (!buttonStyles) {
        return null;
    }
    const { normal, hover, focus, disabled: disabledStyle } = buttonStyles;


    return (
        <Button
            sx={{
                backgroundColor: normal.bgColor,
                color: normal.textColor,
                border: normal.borderColor,
                display: 'flex',
                '&:hover': {
                    bgcolor: hover.bgColor,
                    color: hover.textColor
                },
                '&:focus': {
                    bgcolor: focus.bgColor,
                    color: focus.textColor
                },
                '&:disabled': {
                    bgcolor: disabledStyle.bgColor,
                    color: disabledStyle.textColor
                }
            }}
            className={`btn-${size}`}
            variant={style === 'text' ? 'text' : 'contained'}
            size={size}
            onClick={onClick}
            disabled={isDisabled}
            fullWidth={fullWidth}
        >
            {text}
        </Button>
    );
}

export default CustomButton;
