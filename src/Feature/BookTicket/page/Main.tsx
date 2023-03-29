import { Box, Button } from "@mui/material";
import { useState } from "react";
import Step1 from "../components/Step1";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

export default function Main() {
    const [page, setPage] = useState(0);
    console.log(page);
    const [formData, setFormData] = useState({
        from_id: '',
        to_id: '',
        departure: null
    });
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <Step1 onSubmit={handleSubmit} page={page} setPage={setPage} formData={formData} setFormData={setFormData}/>;
            case 1:
                return <Step3 onSubmit={handleSubmit} page={page} setPage={setPage} formData={formData} setFormData={setFormData}/>;
            case 2:
                return <Step4 onSubmit={handleSubmit}/>;
            // default:
            //     return <Step1 onSubmit={handleSubmit} />;
        }
    };

    function handleSubmit() {
        console.log("holyshit dudime");
        
        setPage(page + 1);
    }
    console.log(formData);
    
    return (
        <>
            <Box>
                {conditionalComponent()}
                <Button onClick={handleSubmit}>
                    {page === 0 || page === 1 ? "Next" : "Submit"}
                </Button>
            </Box>
        </>
    )
}