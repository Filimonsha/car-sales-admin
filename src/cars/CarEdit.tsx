import {
    BooleanField,
    BooleanInput,
    Edit,
    NumberInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";
import React from "react";

const CarEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <BooleanInput source="showOnMain" />
                <NumberInput source="rating" />
                <BooleanInput source="onStock" />
                <TextInput source="manufactureCountry" />
                <NumberInput source="yearOfProduction" optional />
                <ReferenceInput source="brand" reference="brands">
                    <SelectInput optionText="carName" />
                </ReferenceInput>
                <ReferenceInput source="model" reference="models">
                    <SelectInput optionText="modelCar" />
                </ReferenceInput>
                <ReferenceInput source="status" reference="statuses">
                    <SelectInput optionText="status" />
                </ReferenceInput>
                <ReferenceInput source="configuration" reference="configuration">
                    <SelectInput optionText="configuration" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};

export default CarEdit;