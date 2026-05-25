"use client";
import { Logo } from "@/componets/Logo";
import { Box, Button, Container, TextField } from "@mui/material";

export default function LoginPage() {
    return (
        <div>
            <Box sx={{ width: 800, height:400 ,py:40, mx: "auto", mt: 4 }}>
                <Logo height={150} width={150} justifyContent="center" />
                <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
                <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
                <TextField label="Password" variant="outlined" fullWidth sx={{ mb: 2 }} type="password" />
                <Button sx={{ backgroundColor: "#FF6467" }} variant="contained" color="primary" fullWidth>
                    Registrar
                </Button>
            </Box>
        </div>
    )
}