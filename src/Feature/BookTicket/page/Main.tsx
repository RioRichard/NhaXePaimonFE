import { Box, Button } from "@mui/material";
import { useState } from "react";
import Step1 from "../components/Step1";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Success from "../components/Success";

export default function Main() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        from_id: '',
        to_id: '',
        departure: null,
        seatId: '',
        seatName: '',
        routeId: "",
        user: null,
        status: "Chưa thanh toán",
        paymentInfo: "Thanh toán tại quầy"
    });
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <Step1 onSubmit={handleSubmit} page={page} setPage={setPage} formData={formData} setFormData={setFormData} />;
            case 1:
                return <Step3 onSubmit={handleSubmit} page={page} setPage={setPage} formData={formData} setFormData={setFormData} />;
            case 2:
                return <Step4 page={page} setPage={setPage} formData={formData} />;
            case 3:
                return <Success></Success>;
                
            // default:
            //     return <Step1 onSubmit={handleSubmit} />;
        }
    };

    function handleSubmit() {
        setPage(page + 1);
    }

    return (
        <>
            <Box>
                {conditionalComponent()}
            </Box>
        </>
    )
}