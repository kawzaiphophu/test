import Swal, { SweetAlertIcon } from 'sweetalert2';

interface Success {
    title?: string;
    text?: string;
    icon?: SweetAlertIcon;
}

const SuccessSwal = ({ title = 'SUCCESS', text = 'Your Progress is Successful', icon = 'success' }: Success): void => {
    Swal.fire(
        title,
        text,
        icon
    );
};

export default SuccessSwal;
