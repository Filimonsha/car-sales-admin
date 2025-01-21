import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser,
} from "react-admin";
import {Layout} from "./Layout";
import {dataProvider} from "./dataProvider";
import {authProvider} from "./authProvider";
import CarsCreate from "./cars/CarsCreate";

import ShowModel from "./models/ShowModel";
import ListModel from "./models/ListModel";
import CreateEngineTypes from "./engine-types/CreateEngineTypes";
import CreateDriveTypes from "./drive-types/CreateDriveTypes";
import CreateStatus from "./statuses/CreateStatus";
import CreateConfiguration from "./configurations/CreateConfiguration";
import CreateModel from "./models/CreateModel";
import CarList from "./cars/CarList";
import EditModel from "./models/EditModel";
import CarEdit from "./cars/CarEdit";
import EditConfiguration from "./configurations/EditConfiguration";
import CreateColor from "./colors/CreateColor";
import ListBrand from "./brands/ListBrand";
import ListColor from "./colors/ListColor";
import ListConfiguration from "./configurations/ListConfiguration";
import ListDriveTypes from "./drive-types/ListDriveTypes";
import ListEngineTypes from "./engine-types/ListEngineTypes";
import ListStatuses from "./statuses/ListStatuses";
import CreateBrand from "./brands/CreateBrand";

export const App = () => {

    return <Admin
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource
            name="engine-types"
            list={ListEngineTypes}
            create={CreateEngineTypes}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="drive-types"
            list={ListDriveTypes}
            create={CreateDriveTypes}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="statuses"
            list={ListStatuses}
            create={CreateStatus}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="colors"
            list={ListColor}
            edit={EditGuesser}
            show={ShowGuesser}
            create={CreateColor}
        />
        <Resource
            name="models"
            create={CreateModel}
            list={ListModel}
            show={ShowModel}
            edit={EditModel}
        />
        <Resource
            name="configuration"
            list={ListConfiguration}
            create={CreateConfiguration}
            edit={EditConfiguration}
            show={ShowGuesser}
        />
        <Resource
            name="brands"
            list={ListBrand}
            create={CreateBrand}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="cars"
            list={CarList}
            create={CarsCreate}
            edit={CarEdit}
            show={ShowGuesser}
        />
        <Resource
            name="configurations"

        />
    </Admin>
};
