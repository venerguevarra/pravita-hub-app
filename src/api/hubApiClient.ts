import { Configuration } from "./hub-api/__openapi-generated/configuration";
import {
    AuthenticationApi,
    TenantsApi,
    RolesApi,
    SystemModulesApi,
    RegistrationApi,
    UserActivationCodeApi,
    CurrentUserApi,
} from "./hub-api/__openapi-generated/api";

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

export const registrationApi: RegistrationApi = new RegistrationApi(
    configuration,
    configuration.basePath,
    axiosInstance,
);

export const userActivationCodeApi: UserActivationCodeApi = new UserActivationCodeApi(
    configuration,
    configuration.basePath,
    axiosInstance,
);

export const currentUserApi: CurrentUserApi = new CurrentUserApi(configuration, configuration.basePath, axiosInstance);

export const tenantsApi: TenantsApi = new TenantsApi(configuration, configuration.basePath, axiosInstance);

export const rolesApi: RolesApi = new RolesApi(configuration, configuration.basePath, axiosInstance);

export const systemModulesApi: SystemModulesApi = new SystemModulesApi(
    configuration,
    configuration.basePath,
    axiosInstance,
);
