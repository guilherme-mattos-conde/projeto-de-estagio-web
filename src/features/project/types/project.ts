export type ProjectStatus = 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED';

export type Project = {
    id: number;
    name: string;
    clientName: string;
    city: string;
    state: string;
    createdAt: string;
	updatedAt: string;
    sheetsCount: number;
    status: ProjectStatus;
};
