import React from 'react';
import {
    BooleanField,
    BooleanInput,
    Datagrid,
    List, NumberField,
    NumberInput, ReferenceArrayField, ReferenceField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput
} from "react-admin";

const ListConfiguration = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="configuration" />
                <BooleanField source="showPriceFrom" />
                <NumberField source="priceCar" />
                <NumberField source="acceleration" />
                <NumberField source="battery" optional />
                <NumberField source="powerCar" />
                <NumberField source="range" optional />
                <TextField source="gearBox" optional />
                <TextField source="exteriorColor" />
                <TextField source="interiorColor" />
                <NumberField source="maxTorque" optional />
                <NumberField source="maxPower" />
                <TextField source="breakType" />
                <TextField source="typeSuspension" />

                <ReferenceField source="engineType" reference="engine-types">
                    {/*<TextField optionText="engineType" />*/}
                </ReferenceField>
                <ReferenceField source="model" reference="models">
                    {/*<TextField optionText="modelCar" />*/}
                </ReferenceField>
                <ReferenceField source="driveType" reference="drive-types">
                    {/*<TextField optionText="driveType" />*/}
                </ReferenceField>
                <ReferenceArrayField source="exteriorColors" reference="colors">
                </ReferenceArrayField>
                <ReferenceArrayField source="interiorColors" reference="colors">
                </ReferenceArrayField>
            </Datagrid>
        </List>
    );
};

export default ListConfiguration;