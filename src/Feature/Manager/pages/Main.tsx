import * as React from 'react';
import ManagerList from '../componets/ManagerList';
import Stack from '@mui/material/Stack';
import ManagerAction from '../componets/ManagerAction';
export default function Main() {
    return (
        <Stack >
            <ManagerAction></ManagerAction>
            <ManagerList></ManagerList>
        </Stack>

    )
}