import { MenuItem, Select } from '@material-ui/core';
import { UserRole } from 'types/api/auth';
import { useStyles } from './styles';

interface SelectRoleProps {
    setFieldValue: (field: string, value: unknown) => void;
    value: string;
}

export const SelectRole: React.FC<SelectRoleProps> = ({ setFieldValue, value }) => {
    const classes = useStyles();

    const handleSelect = (
        event: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
        }>,
    ) => {
        setFieldValue('role', event.target.value);
    };

    return (
        <Select
            id="role"
            value={value}
            variant="outlined"
            color="primary"
            className={classes.select}
            onChange={handleSelect}
        >
            <MenuItem id="status" value={UserRole.admin}>
                Admin
            </MenuItem>
            <MenuItem id="status" value={UserRole.contributor}>
                Contributor
            </MenuItem>
            <MenuItem id="status" value={UserRole.default}>
                Default
            </MenuItem>
        </Select>
    );
};
