import React from 'react';
import {Datagrid, List, TextField} from "react-admin";

const ListStatuses = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="status"/>
            </Datagrid>
        </List>
    );
};

export default ListStatuses;