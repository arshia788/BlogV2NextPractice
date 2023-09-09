'use client';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ToastProvider({ children }) {
    return (
        <div>
            {children}
            <ToastContainer


            />
        </div>
    )
}
