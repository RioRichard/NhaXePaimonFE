import * as React from 'react';
import RouteList from '../componets/RouteList';
import Stack from '@mui/material/Stack';
import RouteAction from '../componets/RouteAction';
export default function Main() {
    return (
        <Stack >
            <RouteAction></RouteAction>
            <RouteList></RouteList>
        </Stack>

    )
}