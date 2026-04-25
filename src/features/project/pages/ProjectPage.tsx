import {
    useGetProjectsQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} from "../api/projectApi";

import { ProjectTable } from "../components/ProjectTable";
import { ProjectFormModal } from "../components/ProjectFormModal";
import { DeleteProjectModal } from "../components/DeleteProjectModal";
import { EmptyState } from "../components/EmptyState";
import { LoadingState } from "../components/LoadingState";
import { ErrorState } from "../components/ErrorState";

import { useModal } from "@/shared/hooks/useModal";
import { useAlert } from "@/shared/hooks/useAlert";

import AddIcon from "@mui/icons-material/Add";
import { ButtonWithIcon } from "@/shared/components/ButtonWithIcon";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import type { Project } from "../types/project";

export const ProjectPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get("page") ?? 0);
    const rowsPerPage = Number(searchParams.get("size") ?? 10);

    const sortParam = searchParams.get("sort") ?? "updatedAt,desc";
    const [orderBy, order] = sortParam.split(",") as [
        keyof Project,
        "asc" | "desc",
    ];

    const { data, isLoading, isError } = useGetProjectsQuery({
        page,
        size: rowsPerPage,
        sort: `${orderBy},${order}`,
    });

    const [createProject] = useCreateProjectMutation();
    const [updateProject] = useUpdateProjectMutation();
    const [deleteProject] = useDeleteProjectMutation();

    const { openModal, closeModal } = useModal();
    const { success, error } = useAlert();

    const updateParams = (params: Record<string, any>) => {
        setSearchParams({
            page: params.page ?? page,
            size: params.size ?? rowsPerPage,
            sort: params.sort ?? `${orderBy},${order}`,
        });
    };

    const handleSort = (property: keyof Project) => {
        const isAsc = orderBy === property && order === "asc";

        updateParams({
            page: 0,
            sort: `${property},${isAsc ? "desc" : "asc"}`,
        });
    };

    const handlePageChange = (newPage: number) => {
        updateParams({ page: newPage });
    };

    const handleRowsChange = (size: number) => {
        updateParams({
            size,
            page: 0,
        });
    };

    if (isLoading) return <LoadingState />;

    if (isError) return <ErrorState onRetry={() => window.location.reload()} />;

    if (!data || data.content.length === 0)
        return (
            <EmptyState
                onCreate={() =>
                    openModal(
                        <ProjectFormModal
                            onSubmit={async (data) => {
                                await createProject(data);
                                closeModal();
                            }}
                        />,
                    )
                }
            />
        );

    return (
        <Box>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
                <Typography variant="h5">Meus Projetos</Typography>

                <ButtonWithIcon
                    icon={<AddIcon />}
                    label="Adicionar Projeto"
                    onClick={() =>
                        openModal(
                            <ProjectFormModal
                                onSubmit={async (data) => {
                                    try {
                                        await createProject(data).unwrap();
                                        success("Projeto criado!");
                                        closeModal();
                                    } catch (err: any) {
                                        error(
                                            err?.data?.message ||
                                                "Erro ao criar projeto",
                                        );
                                    }
                                }}
                            />,
                        )
                    }
                />
            </Box>

            <ProjectTable
                data={data}
                order={order}
                orderBy={orderBy}
                onSort={handleSort}
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsChange}
                onEdit={(project) =>
                    openModal(
                        <ProjectFormModal
                            initialData={project}
                            onSubmit={async (data) => {
                                try {
                                    await updateProject({
                                        id: project.id,
                                        data,
                                    }).unwrap();

                                    success("Projeto atualizado!");
                                    closeModal();
                                } catch (err: any) {
                                    error(
                                        err?.data?.message ||
                                            "Erro ao atualizar projeto",
                                    );
                                }
                            }}
                        />,
                    )
                }
                onDelete={(project) =>
                    openModal(
                        <DeleteProjectModal
                            onConfirm={async () => {
                                try {
                                    await deleteProject(project.id).unwrap();
                                    success("Projeto excluído!");
                                    closeModal();
                                } catch {
                                    error("Erro ao excluir projeto");
                                }
                            }}
                        />,
                    )
                }
            />
        </Box>
    );
};
