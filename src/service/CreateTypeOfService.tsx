import React from 'react';
import {Create, ImageField, ImageInput, NumberInput, required, SimpleForm, TextInput} from "react-admin";

const CreateTypeOfService = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="typeOfService" />
            </SimpleForm>
        </Create>
    );
};

export default CreateTypeOfService;