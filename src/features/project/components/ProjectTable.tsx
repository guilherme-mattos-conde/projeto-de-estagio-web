import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableSortLabel,
    Paper,
    TablePagination,
} from "@mui/material";

import { formatDate } from "@/shared/utils/formatDate";
import type { Project } from "../types/project";
import { ActionsMenu } from "./ActionsMenu";
import { StatusSelect } from "./StatusSelect";

type Props = {
    data:
        | {
              content: Project[];
              totalElements: number;
              number: number;
          }
        | undefined;

    order: "asc" | "desc";
    orderBy: keyof Project;
    onSort: (property: keyof Project) => void;

    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (size: number) => void;

    onEdit: (project: Project) => void;
    onDelete: (project: Project) => void;
};

export const ProjectTable = ({
    data,
    order,
    orderBy,
    onSort,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    onEdit,
    onDelete,
}: Props) => {
    if (!data) return null;

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        {[
                            ["name", "NOME DO PROJETO"],
                            ["clientName", "CLIENTE"],
                            ["city", "LOCAL"],
                            ["updatedAt", "DATA DE MODIFICAÇÃO"],
                            ["sheetsCount", "PRANCHAS"],
                            ["status", "STATUS"],
                        ].map(([key, label]) => (
                            <TableCell key={key}>
                                <TableSortLabel
                                    active={orderBy === key}
                                    direction={order}
                                    onClick={() => onSort(key as keyof Project)}
                                >
                                    {label}
                                </TableSortLabel>
                            </TableCell>
                        ))}

                        <TableCell />
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.content.map((p) => (
                        <TableRow key={p.id}>
                            <TableCell>{p.name}</TableCell>
                            <TableCell>{p.clientName}</TableCell>

                            <TableCell>
                                {p.city} - {p.state}
                            </TableCell>

                            <TableCell>{formatDate(p.updatedAt)}</TableCell>

                            <TableCell>{p.sheetsCount}</TableCell>

                            <TableCell>
                                <StatusSelect
                                    projectId={p.id}
                                    currentStatus={p.status}
                                />
                            </TableCell>

                            <TableCell>
                                <ActionsMenu
                                    onEdit={() => onEdit(p)}
                                    onDelete={() => onDelete(p)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <TablePagination
                component="div"
                count={data.totalElements}
                page={data.number}
                rowsPerPage={rowsPerPage}
                onPageChange={(_, newPage) => onPageChange(newPage)}
                onRowsPerPageChange={(e) =>
                    onRowsPerPageChange(parseInt(e.target.value, 10))
                }
                labelRowsPerPage="Projetos por página"
                labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} de ${count} projetos`
                }
            />
        </Paper>
    );
};
