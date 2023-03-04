import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface InputFieldProps {
    name: any;
    label?: string;
    type?: string;
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    multiple?: boolean;
    placeholder?: string;
    defaultValue?: string;
    hidden?: boolean;
    value?:any;
}

export function InputField(props: InputFieldProps) {
    const { control } = useFormContext();
    const { name, label, type, disabled, multiline, rows, multiple, placeholder, defaultValue, hidden, value } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                    {(type === 'file' || type === 'date') && (
                        <>
                            <br />
                            <Typography color={error && 'error'}>{label}</Typography>
                        </>
                    )}

                    <TextField
                        sx={{ mb: 2, display: hidden ? 'none' : 'block' }}
                        label={type === 'file' || type === 'date' ? '' : label}
                        value={value || defaultValue || ''}
                        onChange={(value) => onChange(value)}
                        fullWidth
                        error={!!error}
                        helperText={error?.message}
                        type={type}
                        variant="standard"
                        disabled={disabled}
                        placeholder={placeholder}
                        multiline={multiline}
                        rows={rows}
                        inputProps={{
                            multiple: multiple
                        }}
                    />
                </>
            )}
        />
    );
}
