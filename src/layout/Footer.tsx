import React from "react";
import { Container, Grid, Box, Typography,Stack } from "@mui/material";
import { textAlign } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
export default function Footer() {
    return (
        <Box sx={{ borderTop: '1px solid grey' }}>
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{ marginTop: '5px' }}>
                    <Grid item xs={4}>
                        <Box sx={{ }}>
                            <Stack direction="row" spacing={2}>
                                <DirectionsBusIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '50px' }} />
                                <Typography
                                    variant="h1"
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    PAIMON
                                </Typography>
                            </Stack>
                            <Typography
                                    variant="h1"
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        ml:'75px'
                                    }}
                                >
                                    Kono Dio Da
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ borderLeft: '1px solid grey', borderRight: '1px solid grey' }}>
                            <Typography sx={{ color: '#0e9694', mb:'10px' }} variant="h2" component="h2">
                                Sản Phẩm Của Nhóm Paimom
                            </Typography>
                            <Typography variant="h4" sx={{ textAlign: 'left ', marginLeft: '30px', fontWeight: 'normal', }}>
                                Các thành viên: Lê Phạm Quốc Thái, Trương Thiên Bảo, Phùng Ngọc Thành, Phạm Trần Anh Khôi, Vũ Tuấn Khoa
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ color: '#0e9694',mb:'10px' }} variant="h2" component="h2">
                            Liên Kết
                        </Typography>
                        <GitHubIcon></GitHubIcon>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}