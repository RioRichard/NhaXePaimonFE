import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DashboardWidgetProps } from '../types';

const useStyles = makeStyles(theme => ({
    root: {
        
    }
}));

function DashboardWidget({ title, children }: DashboardWidgetProps) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h3">{title}</Typography>
            <Box mt={2}>{children}</Box>
        </Paper>
    );
}

export default DashboardWidget;
