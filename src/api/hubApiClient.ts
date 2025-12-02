import { Configuration } from "./hub-api/configuration";
import { AuthenticationApi, TenantsApi, RolesApi, SystemModulesApi } from "./hub-api/api";

import { axiosInstance } from "../http";
import { pravitaAdminApiBaseUrl } from "../env";

const configuration: Configuration = new Configuration({
    basePath: pravitaAdminApiBaseUrl,
});

export const authenticationApi: AuthenticationApi = new AuthenticationApi(
    configuration,
    configuration.basePath,
    axiosInstance,
);

export const tenantsApi: TenantsApi = new TenantsApi(configuration, configuration.basePath, axiosInstance);

export const rolesApi: RolesApi = new RolesApi(configuration, configuration.basePath, axiosInstance);

export const systemModulesApi: SystemModulesApi = new SystemModulesApi(
    configuration,
    configuration.basePath,
    axiosInstance,
);
