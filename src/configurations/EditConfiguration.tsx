import React from 'react';
import {
    BooleanInput,
    Edit,
    NumberInput,
    ReferenceArrayInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    SelectArrayInput
} from "react-admin";

const EditConfiguration = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="configuration" />
                <BooleanInput source="showPriceFrom" />
                <NumberInput source="priceCar" />
                <NumberInput source="acceleration" />
                <NumberInput source="battery" optional />
                <NumberInput source="powerCar" />
                <NumberInput source="range" optional />
                <TextInput source="gearBox" optional />
                <TextInput source="exteriorColor" />
                <TextInput source="interiorColor" />
                <NumberInput source="maxTorque" optional />
                <NumberInput source="maxPower" />
                <TextInput source="breakType" />
                <TextInput source="typeSuspension" />
                <ReferenceInput source="engineType" reference="engine-types">
                    <SelectInput optionText="engineType" />
                </ReferenceInput>
                <ReferenceInput source="model" reference="models">
                    <SelectInput optionText="modelCar" />
                </ReferenceInput>
                <ReferenceInput source="driveType" reference="drive-types">
                    <SelectInput optionText="driveType" />
                </ReferenceInput>
                <ReferenceArrayInput source="exteriorColors" reference="colors" >
                    <SelectArrayInput optionText="colorName" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="interiorColors" reference="colors" >
                    <SelectArrayInput optionText="colorName" />
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default EditConfiguration;