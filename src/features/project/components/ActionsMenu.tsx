import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

type Props = {
    onEdit: () => void;
    onDelete: () => void;
};

export const ActionsMenu = ({ onEdit, onDelete }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    return (
        <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MoreVertIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem
                    onClick={() => {
                        setAnchorEl(null);
                        onEdit();
                    }}
                >
                    Editar
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        setAnchorEl(null);
                        onDelete();
                    }}
                >
                    Excluir
                </MenuItem>
            </Menu>
        </>
    );
};
