import {Edit, ImageField, ImageInput, NumberInput, required, SimpleForm, TextInput} from "react-admin";
import React from "react";

const EditModel = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="modelCar" />
                <ImageInput source="updatedBase64ImageSrc" label="Фото" >
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
        </Edit>
    );
};

export default EditModel;