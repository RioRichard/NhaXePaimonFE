
import { Box, Stack} from '@mui/material';
import AccountForm from '../componets/AccountForm';


export default function AddEdit() {
    return (
        <Stack spacing={4}>
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <AccountForm  />
                </Box>
        </Stack>
    );
}
