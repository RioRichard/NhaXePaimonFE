import * as React from 'react';
import BaseList from '../componets/BaseList';
import Stack from '@mui/material/Stack';
import BaseAction from '../componets/BaseAction';
export default function Main() {
    return (
        <Stack >
            <BaseAction></BaseAction>
            <BaseList></BaseList>
        </Stack>

    )
}