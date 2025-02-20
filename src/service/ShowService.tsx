import React from 'react';
import {ImageField, NumberField, Show, SimpleShowLayout, TextField} from "react-admin";

const ShowService = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <ImageField source="photoOfService" alt="Model image"/>
                <TextField source="id" label="ID" />
                <TextField source="service" />
                <NumberField source="rating" />
                <NumberField source="priceOfService" />
            </SimpleShowLayout>
        </Show>
    );
};

export default ShowService;