import { Avatar, Box, CardHeader, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DashboardCardProps } from '../types';


export default function DashboardCard(props: DashboardCardProps) {
    const { icon, title, count } = props;

   

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar variant="rounded" sx={{ backgroundColor: 'rgba(100,63,219,.15)' }}>
                        {icon}
                    </Avatar>
                }
                titleTypographyProps={{
                    fontSize: 14
                }}
                title={title}
            />
            <CardContent sx={{ padding: '8px 16px' }}>
                <Box display="flex" alignItems="baseline">
                    <Typography fontWeight={550} fontSize={22} sx={{ mr: 1 }}>
                         {count} 
                    </Typography>
                    <Typography>tài sản</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

