import { toast, Bounce } from 'react-toastify';

export const SuccessToast = (msg = "Success Message",
    position = "top-right",
    delay = 4000) => {
    toast.success(msg, {
        position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}


/**
 * To do ErrorToast function implement
 * @param {*} msg 
 * @param {*} position 
 * @param {*} delay 
 */

export const ErrorToast = (msg = "Error Message",
    position = "top-right",
    delay = 4000) => {
    toast.error(msg, {
        position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

/**
 * To do infoToast function implement
 * @param {*} msg 
 * @param {*} position 
 * @param {*} delay 
 */

export const InfoToast = (msg = "Error Message",
    position = "top-right",
    delay = 4000) => {
    toast.info(msg, {
        position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

