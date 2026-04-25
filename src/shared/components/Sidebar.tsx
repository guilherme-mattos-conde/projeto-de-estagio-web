import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />

            <List>
                <ListItemButton component={Link} to="/">
                    <ListItemText primary="Meus Projetos" />
                </ListItemButton>
            </List>
        </Drawer>
    );
};
