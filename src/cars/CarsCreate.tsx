import {
    Create,
    BooleanInput,
    NumberInput,
    ArrayInput,
    required,
    SimpleForm,
    SimpleFormIterator,
    TextInput,
    ImageInput,
    ImageField,
    ReferenceInput, SelectInput
} from "react-admin";
import React from "react";

const CarsCreate = () => {
    return (
        <Create>
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
                    <SelectInput optionText={c => `${c.id} ${c.configuration}`} />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default CarsCreate;