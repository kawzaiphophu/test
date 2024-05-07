export default interface InputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    id?:string
  }