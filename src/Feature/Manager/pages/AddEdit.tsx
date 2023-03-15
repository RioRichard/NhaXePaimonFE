

import { Box, Stack} from '@mui/material';
import ManagerForm from '../componets/ManagerForm';


export default function AddEdit() {
    return (
        <Stack spacing={4}>
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <ManagerForm  />
                </Box>
        </Stack>
    );
}
