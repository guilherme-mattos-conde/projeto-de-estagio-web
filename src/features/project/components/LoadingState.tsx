import { Box, CircularProgress, Typography } from "@mui/material";

export const LoadingState = () => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            gap: 2,
        }}
    >
        <CircularProgress />
        <Typography>Carregando projetos...</Typography>
    </Box>
);
