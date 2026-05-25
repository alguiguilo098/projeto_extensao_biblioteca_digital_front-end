import { Button, IconButton, InputBase, Paper } from "@mui/material";

export function SearchBar() {
    return (<Paper
        elevation={1}
        sx={{
            p: 1,
            mb: 2,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 1,
        }}
    >
        <IconButton size="small">✥</IconButton>
        <IconButton size="small">↔</IconButton>
        <IconButton size="small">↕</IconButton>
        <IconButton size="small">⤴</IconButton>
        <IconButton size="small">📄</IconButton>

        <InputBase
            placeholder="Digite os termos de busca..."
            sx={{
                flex: 1,
                px: 2,
                py: 1,
                border: "1px solid #d1d5db",
                borderRadius: 1,
                fontSize: 14,
                bgcolor: "white",
            }}
        />

        <Button
            variant="contained"
            sx={{
                bgcolor: "#ff6f6f",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                    bgcolor: "#ff5a5a",
                    boxShadow: "none",
                },
            }}
        >
            Pesquisar
        </Button>
    </Paper>

    )
}