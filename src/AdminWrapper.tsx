import React, {useEffect} from 'react';
import {Layout} from "./Layout";
import {dataProvider} from "./dataProvider";
import {Admin, EditGuesser, ListGuesser, Resource, ShowGuesser, usePermissions} from "react-admin";
import ListEngineTypes from "./engine-types/ListEngineTypes";
import CreateEngineTypes from "./engine-types/CreateEngineTypes";
import ListDriveTypes from "./drive-types/ListDriveTypes";
import CreateDriveTypes from "./drive-types/CreateDriveTypes";
import ListStatuses from "./statuses/ListStatuses";
import CreateStatus from "./statuses/CreateStatus";
import ListColor from "./colors/ListColor";
import CreateColor from "./colors/CreateColor";
import CreateModel from "./models/CreateModel";
import ListModel from "./models/ListModel";
import ShowModel from "./models/ShowModel";
import EditModel from "./models/EditModel";
import ListConfiguration from "./configurations/ListConfiguration";
import CreateConfiguration from "./configurations/CreateConfiguration";
import EditConfiguration from "./configurations/EditConfiguration";
import ListBrand from "./brands/ListBrand";
import CreateBrand from "./brands/CreateBrand";
import CarList from "./cars/CarList";
import CarsCreate from "./cars/CarsCreate";
import CarEdit from "./cars/CarEdit";
import authProvider from "./authProvider";
import ShowLog from "./logs/ShowLog";
import CreateTypeOfService from "./service/CreateTypeOfService";
import ListTypeOfService from "./service/ListTypeOfService";
import ListService from "./service/ListService";
import CreateService from "./service/CreateService";
import ShowService from "./service/ShowService";
import EditService from "./service/EditService";

const AdminWrapper = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <Admin
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
                name="typeofservices"
                options={{ label: 'Types of service' }}
                list={ListTypeOfService}
                create={CreateTypeOfService}
                edit={EditGuesser}
                show={ShowGuesser}
            />
            <Resource
                name="services"
                list={ListService}
                create={CreateService}
                edit={EditService}
                show={ShowService}
            />
            {
                user && user.username === "Admin" &&
                <Resource name="logs"
                          list={ListGuesser}
                          show={ShowLog}
                />
            }
        </Admin>
    );
};

export default AdminWrapper;