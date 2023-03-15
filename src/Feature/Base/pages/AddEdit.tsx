
import { Box, Stack} from '@mui/material';
import BaseForm from '../componets/BaseForm';


export default function AddEdit() {
    return (
        <Stack spacing={4}>
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <BaseForm  />
                </Box>
        </Stack>
    );
}
