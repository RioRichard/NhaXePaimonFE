import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface PasswordFieldProps {
    name: any;
    label: string;
}

export function PasswordField(props: PasswordFieldProps) {
    const { control } = useFormContext();
    const { name, label } = props;

    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl sx={{ width: '100%', mb: 2 }} variant="standard" error={!!error}>
                    <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={value || ''}
                        onChange={(value) => onChange(value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} onMouseDown={handleMouseDownPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        aria-describedby="component-error-password"
                    />
                    <FormHelperText id="component-error-password">{error && error?.message}</FormHelperText>
                </FormControl>
            )}
        />
    );
}
