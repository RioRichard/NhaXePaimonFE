import { FormHelperText, InputLabel, RadioGroup } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface RadioFieldProps {
    name: any;
    label: string;
    children: React.ReactNode;
    defaultValue?: string;
}

export function RadioField(props: RadioFieldProps) {
    const { control } = useFormContext();
    const { name, label, children, defaultValue } = props;

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue || ''}
            render={({ field, fieldState: { invalid, error } }) => (
                <>
                    <InputLabel error={invalid}>{label}</InputLabel>
                    <RadioGroup {...field}>
                        {children}
                    </RadioGroup>
                    <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                </>
            )}
        />
    );
}
