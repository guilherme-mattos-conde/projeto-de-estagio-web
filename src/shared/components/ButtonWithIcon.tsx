import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

type Props = ButtonProps & {
    icon: ReactNode;
    label: string;
};

export const ButtonWithIcon = ({ icon, label, ...props }: Props) => {
    return (
        <Button
            sx={{ textTransform: "none", borderRadius: "8px" }}
            variant="contained"
            startIcon={icon}
            {...props}
        >
            {label}
        </Button>
    );
};
