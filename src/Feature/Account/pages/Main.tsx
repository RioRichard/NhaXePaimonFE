import * as React from 'react';
import AccountList from '../componets/AccountList';
import Stack from '@mui/material/Stack';
import AccountAction from '../componets/AccountAction';
export default function Main() {
    return (
        <Stack >
            <AccountAction></AccountAction>
            <AccountList></AccountList>
        </Stack>

    )
}