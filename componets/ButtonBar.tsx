import { Button } from "@mui/material";

interface ButtonBarProps {
    onClick?: () => void;
}

export function ButtonBar({ onClick }: ButtonBarProps) {
    return (
        <Button
            fullWidth
            variant="contained"
            onClick={onClick}

            sx={{
                backgroundColor: '#ff6b6b',
                height: 44,
                borderRadius: 1,
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: '#ff5a5a',
                    boxShadow: 'none',
                },
            }}
        >
            Pesquisar
        </Button>
    )
}