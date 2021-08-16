import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ModalComponent } from 'components/ModalComponent';
import { addUserAsync } from 'store/user-slice';
import { useStyles } from './styles';
import { FieldsModal } from '../FieldsModal';

export const MembersHeader = () => {
    const classes = useStyles();
    const [isOpen, seIsOpen] = useState(false);

    const toggleModal = () => {
        seIsOpen(!isOpen);
    };

    return (
        <div className="members-header">
            <Typography variant="h5" className={classes.header}>
                Members
            </Typography>
            <Typography variant="body2" className={classes.subTitle}>
                List of members where you can get list of members
            </Typography>
            <Typography>
                <Button className={classes.btn} onClick={toggleModal}>
                    <AddCircleIcon style={{ fontSize: 40 }} className="plus-icon" />
                    ADD NEW USER
                </Button>
            </Typography>
            {isOpen && (
                <ModalComponent open={isOpen} close={toggleModal}>
                    <FieldsModal
                        id={null}
                        header="Create user"
                        handleCloseModal={toggleModal}
                        submit={addUserAsync}
                    />
                </ModalComponent>
            )}
        </div>
    );
};
