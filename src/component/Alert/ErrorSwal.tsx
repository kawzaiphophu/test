import Swal, { SweetAlertIcon } from 'sweetalert2';

interface Success {
    title?: string;
    text?: string;
    icon?: SweetAlertIcon;
}

const ErrorSwal = ({ title = 'Error!', text = 'Failed to delete the item. Please try again later.', icon = 'error' }: Success): void => {
    Swal.fire(
        title,
        text,
        icon
    );
};

export default ErrorSwal;


