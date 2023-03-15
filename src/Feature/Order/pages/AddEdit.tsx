
import { Box, Stack} from '@mui/material';
import OrderForm from '../componets/OrderForm';


export default function AddEdit() {
    return (
        <Stack spacing={4}>
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <OrderForm  />
                </Box>
        </Stack>
    );
}
