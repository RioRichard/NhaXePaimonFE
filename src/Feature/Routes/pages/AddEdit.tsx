
import { Box, Stack} from '@mui/material';
import RouteForm from '../componets/RouteForm';


export default function AddEdit() {
    return (
        <Stack spacing={4}>
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <RouteForm  />
                </Box>
        </Stack>
    );
}
