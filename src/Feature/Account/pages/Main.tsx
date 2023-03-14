import * as React from 'react';
import AccountList from '../componets/AccountList';
import Stack from '@mui/material/Stack';
import AccontAction from '../componets/AccountAction';
export default function Main() {
    return (
        <Stack >
            <AccontAction></AccontAction>
            <AccountList></AccountList>
        </Stack>

    )
}