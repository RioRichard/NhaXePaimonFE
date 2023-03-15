
import { Box, Stack} from '@mui/material';
import DiscountForm from '../componets/DiscountForm';


export default function AddEdit() {
    return (
        <Stack spacing={4}>
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <DiscountForm  />
                </Box>
        </Stack>
    );
}
