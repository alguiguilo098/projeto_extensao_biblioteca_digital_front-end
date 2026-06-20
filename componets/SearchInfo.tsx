import { Paper, Typography } from "@mui/material";

interface SearchInfoProps {
  total: number;
  termo: string;
}
export default function SearchInfo({ total, termo }: SearchInfoProps) {
  return (
    <Paper elevation={3} sx={{ borderRadius: 4, bgcolor: "grey.100", mt: 2 ,width: "48%",}}>
      <Typography variant="body2" align="center" sx={{ p: 2,fontSize: 26, color: "text.secondary" }}>
        {total} resultados para "{termo}"
      </Typography>
    </Paper>
  );
}