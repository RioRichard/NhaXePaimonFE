import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export function Step1(){
    return(
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
      </Box>
    );

}