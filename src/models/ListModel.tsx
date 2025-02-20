import {
    List,
    Datagrid,
    TextField,
    NumberInputLabel,
    NumberInput,
    NumberField,
    Filter,
    TextInput,
    ReferenceField,
    ArrayField,SingleFieldList,
    ReferenceArrayField, ImageField, ArrayInput, ChipField,
} from 'react-admin';

const ListModel = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" label="ID" />
                <TextField source="modelCar" label="Модель автомобиля" />
                <ImageField source="base64ImageSrc" />
                <NumberField source="maxSpeed" label="Максимальная скорость" />
                <NumberField source="fuelEconomy" label="Экономия топлива" />
                <NumberField source="length" label="Длина" />
                <NumberField source="width" label="Ширина" />
                <NumberField source="height" label="Высота" />
                <NumberField source="doorsCount" label="Количество дверей" />
                <NumberField source="seatCount" label="Количество мест" />
                <NumberField source="bagSpace" label="Объем багажника" />
                <NumberField source="maxWeight" label="Максимальный вес" />
                <NumberField source="wheelBase" label="База" />
                <NumberField source="clearance" label="Загрузочная высота" />

                <ArrayField
                    label="Конфигурации"
                    source="configurations"
                >
                    <SingleFieldList>
                        <ChipField source="configuration"/>
                    </SingleFieldList>
                </ArrayField>
                <ArrayField
                    label="Автомобили"
                    source="cars"
                >
                    <SingleFieldList>
                        <ChipField source="id"/>
                    </SingleFieldList>
                </ArrayField>
            </Datagrid>
        </List>
    );
};

export default ListModel;