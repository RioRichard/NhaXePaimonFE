
import { Typography, Container } from '@mui/material';

export default function TermOfUsePage() {
    return (
        <Container maxWidth="lg" >
            <Typography variant="h1" sx={{ mb: 2, lineHeight: "70px", fontStyle: "bold", }}>
                Điều khoản sử dụng
            </Typography>
            <Typography variant="h1" sx={{ mb: 2, lineHeight: "70px" }}>
                Đây là trang Điều khoản sử dụng. Sau khi suy nghĩ, bàn bạc đầy đủ sẽ viết thêm  vào. XIN CẢM ƠN
            </Typography>
        </Container>
    )
}