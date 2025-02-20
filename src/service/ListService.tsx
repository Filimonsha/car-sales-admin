import React from 'react';
import {ArrayField, ChipField, Datagrid, ImageField, List, NumberField, SingleFieldList, TextField} from "react-admin";

const ListService = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" label="ID" />
                <TextField source="service" />
                <ImageField source="photoOfService" />
                <NumberField source="rating" />
                <NumberField source="priceOfService" />
            </Datagrid>
        </List>
    );
};

export default ListService;