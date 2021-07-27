import React from 'react';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';

export const LoginPage: React.FC = () => {
    return (
        <form onSubmit={() => {}}>
            <TextField id="name" name="name" label="Name" fullWidth />
            <TextField id="email" name="email" label="Email" fullWidth />
            <TextField id="password" name="password" label="Password" fullWidth type="password" />
            <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                fullWidth
                type="password"
            />
            <Button type="submit" fullWidth color="primary">
                Submit
            </Button>
        </form>
    );
};
