import React from 'react';
import {Create, ImageField, ImageInput, NumberInput, required, SimpleForm, TextInput} from "react-admin";

const CreateModel = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="modelCar" />
                <ImageInput source="base64ImageSrc" label="Фото" validate={[required()]}>
                    <ImageField source="src"/>
                </ImageInput>
                <ImageInput multiple source="galleryImages" validate={[required()]}>
                    <ImageField source="src"/>
                </ImageInput>
                <NumberInput source="maxSpeed" />
                <NumberInput source="fuelEconomy" />
                <NumberInput source="length" />
                <NumberInput source="width" />
                <NumberInput source="height" />
                <NumberInput source="doorsCount" />
                <NumberInput source="seatCount" />
                <NumberInput source="bagSpace" />
                <NumberInput source="maxWeight" />
                <NumberInput source="wheelBase" />
                <NumberInput source="clearance" />
            </SimpleForm>
        </Create>
    );
};

export default CreateModel;