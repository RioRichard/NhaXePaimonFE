import * as React from 'react';
import OrderList from '../componets/OrderList';
import Stack from '@mui/material/Stack';
import OrderAction from '../componets/OrderAction';
export default function Main() {
    return (
        <Stack >
            <OrderAction></OrderAction>
            <OrderList></OrderList>
        </Stack>

    )
}