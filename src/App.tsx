import {
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser, usePermissions, useAuthProvider,
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
import {QueryClientProvider} from "@tanstack/react-query";
import AdminWrapper from "./AdminWrapper";
import {queryClient} from "./queryClient";

export const App = () => {
    // const user = localStorage.getItem("user")
    // console.log(user)
    return (
        <QueryClientProvider client={queryClient}>
            <AdminWrapper/>
        </QueryClientProvider>

        )
};
