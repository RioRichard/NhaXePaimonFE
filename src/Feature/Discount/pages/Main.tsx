import * as React from 'react';
import DiscountList from '../componets/DiscountList';
import Stack from '@mui/material/Stack';
import DiscountAction from '../componets/DiscountAction';
export default function Main() {
    return (
        <Stack >
            <DiscountAction></DiscountAction>
            <DiscountList></DiscountList>
        </Stack>

    )
}