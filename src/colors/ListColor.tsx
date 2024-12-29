import React from 'react';
import {Datagrid, List, TextField} from "react-admin";

const ListColor = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="colorName"/>
                <TextField source="colorValue"/>
            </Datagrid>
        </List>
    );
};

export default ListColor;