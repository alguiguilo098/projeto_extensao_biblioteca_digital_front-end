"use client";

import { Logo } from "@/componets/Logo";
import {localhostserver} from "../env"
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function CadastroPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const router = useRouter();
    async function handleSubmit() {
        // Aqui você pode adicionar a lógica para enviar os dados de cadastro para o backend
      const response = await fetch(
        localhostserver + "/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      if (response.ok) {
        router.push("/LoginPage");
      } else {
        alert("Erro ao criar conta. Tente novamente.");
      }
    }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #FFE5E5 0%, #FFF5F5 50%, #FFFFFF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          elevation={10}
          sx={{
            borderRadius: 6,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Logo
                height={120}
                width={120}
                justifyContent="center"
              />
            </Box>

            <Typography
              variant="h4"
              sx={{ mb: 1, color: "#222", fontWeight: "bold", textAlign: "center" }}
            >
              Criar Conta
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, color: "#666", textAlign: "center" }}
            >
              Preencha os dados para continuar
            </Typography>

            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 3 }}
            />

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
            />

            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 4 }}
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleSubmit}
              sx={{
                py: 1.5,
                borderRadius: 3,
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "none",
                background: "linear-gradient(90deg, #FF6467, #FF8A8D)",
                boxShadow: "0 8px 20px rgba(255,100,103,0.3)",
                "&:hover": {
                  background: "linear-gradient(90deg, #ff5255, #ff7477)",
                  transform: "translateY(-2px)",
                },
                transition: "0.3s",
              }}
            >
              Registrar
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 3, color: "#777" }}
            >
              Já possui uma conta?{" "}
              <span
                style={{
                  color: "#FF6467",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/LoginPage")}
              >
                Entrar
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}