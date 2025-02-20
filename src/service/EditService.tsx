import React from 'react';
import {
    Edit,
    ImageField,
    ImageInput,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";

const EditService = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="service" />
                <ImageInput source="updatedPhotoOfService" label="Фото" validate={[required()]}>
                    <ImageField source="src"/>
                </ImageInput>
                <NumberInput source="rating" />
                <NumberInput source="priceOfService" />
                <ReferenceInput source="typeOfService" reference="typeofservices">
                    <SelectInput optionText="typeOfService" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};

export default EditService;