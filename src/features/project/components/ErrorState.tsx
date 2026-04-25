import { Box, Typography, Button } from "@mui/material";

type Props = {
    onRetry?: () => void;
};

export const ErrorState = ({ onRetry }: Props) => (
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
        <Typography variant="h6" color="error">
            Falha ao carregar os projetos
        </Typography>

        <Typography variant="body2">
            Ocorreu um erro inesperado. Tente novamente.
        </Typography>

        {onRetry && (
            <Button variant="contained" onClick={onRetry}>
                Recarregar
            </Button>
        )}
    </Box>
);
