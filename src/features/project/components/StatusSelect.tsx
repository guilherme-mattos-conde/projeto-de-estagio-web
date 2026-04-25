import { Select, MenuItem } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

import { useUpdateStatusMutation } from "../api/projectApi";
import type { ProjectStatus } from "../types/project";

type Props = {
    projectId: number;
    currentStatus: ProjectStatus;
};

const statusMap: Record<
    ProjectStatus,
    { label: string; bg: string; color: string }
> = {
    IN_PROGRESS: {
        label: "Em andamento",
        bg: "#e3f2fd",
        color: "#1976d2",
    },
    REVIEW: {
        label: "Em revisão",
        bg: "#fff3e0",
        color: "#ed6c02",
    },
    COMPLETED: {
        label: "Concluído",
        bg: "#e8f5e9",
        color: "#2e7d32",
    },
};

export const StatusSelect = ({ projectId, currentStatus }: Props) => {
    const [updateStatus] = useUpdateStatusMutation();

    const handleChange = async (value: ProjectStatus) => {
        await updateStatus({
            id: projectId,
            status: value,
        });
    };

    const current = statusMap[currentStatus];

    return (
        <Select
            value={currentStatus}
            onChange={(e: SelectChangeEvent) =>
                handleChange(e.target.value as ProjectStatus)
            }
            size="small"
            variant="standard"
            disableUnderline
            sx={{
                fontSize: 12,
                fontWeight: 600,
                borderRadius: "16px",
                px: 1.5,
                py: 0.3,
                backgroundColor: current.bg,
                color: current.color,
                minWidth: 120,

                "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 8px",
                },

                "&:hover": {
                    opacity: 0.85,
                },
            }}
        >
            {Object.entries(statusMap).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                    {value.label}
                </MenuItem>
            ))}
        </Select>
    );
};
