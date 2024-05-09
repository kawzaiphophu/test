import Swal, { SweetAlertResult } from 'sweetalert2';

interface ConfirmationProps {
    title: string;
    text: string;
    confirmButtonColor?: string;
    cancelButtonColor?: string;
    confirmButtonText?: string;
}
const ConfirmSwal = ({
    title,
    text,
    confirmButtonColor = '#d33',
    cancelButtonColor = '#3085d6',
    confirmButtonText = 'Yes.'
}: ConfirmationProps): Promise<SweetAlertResult> => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: confirmButtonText
    });
};

export default ConfirmSwal;
