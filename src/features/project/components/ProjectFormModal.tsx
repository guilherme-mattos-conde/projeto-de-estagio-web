import {
    Box,
    Button,
    TextField,
    Typography
} from '@mui/material';

import { useForm } from 'react-hook-form';
import type { Project } from '../types/project.ts';
import { useAlert } from '@/shared/hooks/useAlert.ts';

type Props = {
    initialData?: Project;
    onSubmit: (data: Partial<Project>) => Promise<void>;
};

type FormData = {
    name: string;
    clientName: string;
    city: string;
    state: string;
};

export const ProjectFormModal = ({ initialData, onSubmit }: Props) => {
    const { error } = useAlert();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: initialData
            ? {
                name: initialData.name,
                clientName: initialData.clientName,
                city: initialData.city,
                state: initialData.state,
            }
            : {},
    });

    const submit = async (data: FormData) => {
        try {
            await onSubmit(data);
        } catch {
            error('Erro ao salvar o projeto');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(submit)} sx={{ width: 400 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                {initialData ? 'Editar projeto' : 'Criar projeto'}
            </Typography>

            <TextField
                label="Nome do projeto"
                fullWidth
                margin="normal"
                {...register('name', {
                    required: 'Campo obrigatório',
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
            />

            <TextField
                label="Cliente"
                fullWidth
                margin="normal"
                {...register('clientName', {
                    required: 'Campo obrigatório',
                })}
                error={!!errors.clientName}
                helperText={errors.clientName?.message}
            />

            <TextField
                label="Cidade"
                fullWidth
                margin="normal"
                {...register('city', {
                    required: 'Campo obrigatório',
                })}
                error={!!errors.city}
                helperText={errors.city?.message}
            />

            <TextField
                label="Estado"
                fullWidth
                margin="normal"
                {...register('state', {
                    required: 'Campo obrigatório',
                    minLength: {
                        value: 2,
                        message: 'Deve ter 2 caracteres',
                    },
                    maxLength: {
                        value: 2,
                        message: 'Deve ter 2 caracteres',
                    },
                })}
                error={!!errors.state}
                helperText={errors.state?.message}
            />

            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
            >
                Salvar
            </Button>
        </Box>
    );
};
