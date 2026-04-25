import { Box, Button, Typography } from "@mui/material";

type Props = {
    onConfirm: () => void;
};

export const DeleteProjectModal = ({ onConfirm }: Props) => {
    return (
        <Box sx={{ width: 300 }}>
            <Typography sx={{ mb: 2 }}>
                Tem certeza que deseja excluir o projeto?
            </Typography>

            <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={onConfirm}
            >
                Excluir
            </Button>
        </Box>
    );
};
