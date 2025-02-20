import React from 'react';
import {
    Create,
    ImageField,
    ImageInput,
    NumberInput,
    ReferenceInput,
    required, SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";

const CreateService = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="service" />
                <ImageInput source="photoOfService" label="Фото" validate={[required()]}>
                    <ImageField source="src"/>
                </ImageInput>
                <NumberInput source="rating" />
                <NumberInput source="priceOfService" />
                <ReferenceInput source="typeOfService" reference="typeofservices">
                    <SelectInput optionText="typeOfService" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default CreateService;