import {
    Show,
    TextField,
    ReferenceField,
    Labeled,
    NumberField,
    ImageField,
    SimpleShowLayout,
    useRecordContext
} from "react-admin";
import {useEffect} from "react";

const ShowModelLayout = () => {
    return (
        <SimpleShowLayout>
            <TextField source="id"/>
            <Labeled label="Главное фото">
                <ImageField source="base64ImageSrc" alt="Model image"/>
            </Labeled>
            <Labeled label="Фото галлереи">
                    {/*{*/}
                    {/*    record?.galleryImages.map(image => <ImageField source={image} src={image} alt="Model image"/>)*/}
                    {/*}*/}
                <ImageField source="galleryImages" src="src" alt="Model image"/>
                {/*{renderBase64ImageSrc()}*/}
            </Labeled>

            <Labeled label="Модель автомобиля"><TextField source="modelCar"/></Labeled>
            <Labeled label="Максимальная скорость"><NumberField source="maxSpeed"/></Labeled>
            <Labeled label="Экономия топлива"><NumberField source="fuelEconomy"/></Labeled>
            <Labeled label="Длина"><NumberField source="length"/></Labeled>
            <Labeled label="Ширина"><NumberField source="width"/></Labeled>
            <Labeled label="Высота"><NumberField source="height"/></Labeled>
            <Labeled label="Количество дверей"><NumberField source="doorsCount"/></Labeled>
            <Labeled label="Количество мест"><NumberField source="seatCount"/></Labeled>
            <Labeled label="Объем багажника"><NumberField source="bagSpace"/></Labeled>
            <Labeled label="Максимальный вес"><NumberField source="maxWeight"/></Labeled>
            <Labeled label="База"><NumberField source="wheelBase"/></Labeled>
            <Labeled label="Загрузочная высота"><NumberField source="clearance"/></Labeled>
        </SimpleShowLayout>
    );
}

const ShowModel = () => {

    return (
        <Show>
            <ShowModelLayout/>
        </Show>
    );
};

export default ShowModel;