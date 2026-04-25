import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/shared/components/Sidebar";
import { Topbar } from "@/shared/components/Topbar";

export const AppLayout = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Topbar />
            <Sidebar />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};
