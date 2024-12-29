import {Datagrid, List, TextField} from "react-admin";
import React from "react";

const ListEngineTypes = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="engineType"/>
            </Datagrid>
        </List>
    );
};

export default ListEngineTypes;