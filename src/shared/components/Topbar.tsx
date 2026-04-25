import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Topbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#fff",
                color: "#000",
				borderBottom: "1px solid #e0e0e0",
				boxShadow: "none",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">CAD Manager</Typography>

                <Box>
                    <IconButton color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
