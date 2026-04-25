import { Box, Typography, Button } from "@mui/material";

type Props = {
    onCreate: () => void;
};

export const EmptyState = ({ onCreate }: Props) => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            gap: 2,
            textAlign: "center",
        }}
    >
        <Typography variant="h6">Você ainda não tem nenhum projeto</Typography>

        <Typography variant="body2">
            Comece criando seu primeiro projeto 🚀
        </Typography>

        <Button variant="contained" onClick={onCreate}>
            Adicionar Projeto
        </Button>
    </Box>
);
