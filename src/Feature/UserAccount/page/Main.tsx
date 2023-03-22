import * as React from 'react';
import UserInformationForm from '../components/UserInformationForm';
import HistoryPaymentForm from '../components/HistoryPaymentForm';
import Stack from '@mui/material/Stack';
export default function Main() {
    return (
        <Stack >
            <UserInformationForm></UserInformationForm>
            <HistoryPaymentForm></HistoryPaymentForm>
        </Stack>

    )
}