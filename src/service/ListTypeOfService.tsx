import React from 'react';
import {Datagrid, List, TextField} from "react-admin";

const ListTypeOfService = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="typeOfService"/>
            </Datagrid>
        </List>
    );
};

export default ListTypeOfService;