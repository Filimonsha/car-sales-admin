import React from 'react';
import {BooleanField, Datagrid, List, NumberField, ReferenceField, required, TextField, TextInput} from "react-admin";

const ListBrand = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="carName"/>
            </Datagrid>
        </List>
    );
};

export default ListBrand;