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

            {/*<Filter compact={false}>*/}
            {/*    <TextInput label="Поиск по ID" source="id_filter" alwaysOn />*/}
            {/*    <TextInput label="Поиск по модели автомобиля" source="modelCar_filter" alwaysOn />*/}
            {/*    <NumberInputLabel>*/}
            {/*        <NumberInput source="maxSpeed_filter" startAdornment={<NumberInputAdornment value="Максимальная скорость" />} />*/}
            {/*    </NumberInputLabel>*/}
            {/*    <NumberInputLabel>*/}
            {/*        <NumberInput source="fuelEconomy_filter" startAdornment={<NumberInputAdornment value="Экономия топлива" />} />*/}
            {/*    </NumberInputLabel>*/}
            {/*</Filter>*/}
        </List>
    );
};

export default ListModel;