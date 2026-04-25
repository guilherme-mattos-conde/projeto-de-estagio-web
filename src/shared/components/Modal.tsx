import { Box } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClose: () => void;
};

export const Modal = ({ children, onClose }: Props) => {
    return (
        <>
            <Box
                onClick={onClose}
                sx={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1400,
                }}
            />

            <Box
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#fff",
                    padding: 3,
                    borderRadius: 2,
                    zIndex: 1500,
                    minWidth: 300,
                }}
            >
                {children}
            </Box>
        </>
    );
};
