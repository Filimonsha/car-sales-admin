import React from 'react';
import {Create, required, SimpleForm, TextInput} from "react-admin";

const CreateColor = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="colorName" validate={[required()]}/>
                <TextInput source="colorValue" validate={[required()]}/>
            </SimpleForm>
        </Create>
    );
};

export default CreateColor;