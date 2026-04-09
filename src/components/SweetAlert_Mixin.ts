import Swal, { type SweetAlertIcon } from "sweetalert2";

export function globalMixin(icon: SweetAlertIcon, title: string, message?:string):void{
    Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    }).fire({
        icon: icon,
        title: title,
        text: message ?? '',
    });

}