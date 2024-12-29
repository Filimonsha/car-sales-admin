import React from 'react';
import {Datagrid, List, required, TextField, TextInput} from "react-admin";

const ListDriveTypes = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="driveType"/>
            </Datagrid>
        </List>
    );
};

export default ListDriveTypes;