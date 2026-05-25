import { Box, TextField, Button } from "@mui/material";

export default function ChatBar() {
  return (
    <Box
      sx={{
        bottom: 0,
        left: 0,
        width: "50%",
        bgcolor: "background.paper",
        borderTop: "1px solid #e0e0e0",
        boxShadow: 3,
        p: 2,
        display: "flex",
        gap: 2,
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        placeholder="Digite sua mensagem..."
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
        }}
      />

      <Button
        variant="contained"
        sx={{
          borderRadius: "20px",
          px: 3,
          backgroundColor: "#FF6467",
          textTransform: "none",
        }}
      >
        Enviar
      </Button>
    </Box>
  );
}
