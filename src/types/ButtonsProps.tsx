export default interface ButtonsProps {
    text?: string;
    style?: 'contained' | 'outlined' | 'text'; 
    size?: 'small' | 'medium' | 'large'; 
    color?: 'primary' | 'secondary';
    onClick?: () => void;
    disabled?: boolean;
}