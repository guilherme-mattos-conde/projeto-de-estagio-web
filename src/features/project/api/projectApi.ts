import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Project } from "../types/project";

export type PageResponse<T> = {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
};

type GetProjectsParams = {
    page: number;
    size: number;
    sort: string;
};

export const projectApi = createApi({
    reducerPath: "projectApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
    tagTypes: ["Project"],

    endpoints: (builder) => ({
        getProjects: builder.query<PageResponse<Project>, GetProjectsParams>({
            query: (params) => ({
                url: "/projects",
                params,
            }),
            providesTags: ["Project"],
        }),

        createProject: builder.mutation<Project, Partial<Project>>({
            query: (data) => ({
                url: "/projects",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Project"],
        }),

        updateProject: builder.mutation<
            Project,
            { id: number; data: Partial<Project> }
        >({
            query: ({ id, data }) => ({
                url: `/projects/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Project"],
        }),

        deleteProject: builder.mutation<void, number>({
            query: (id) => ({
                url: `/projects/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Project"],
        }),

        updateStatus: builder.mutation<
            Project,
            { id: number; status: Project["status"] }
        >({
            query: ({ id, status }) => ({
                url: `/projects/${id}/status`,
                method: "PATCH",
                body: { status },
            }),
            invalidatesTags: ["Project"],
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
    useUpdateStatusMutation,
} = projectApi;
