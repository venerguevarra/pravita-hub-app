# TenantRoleModulesApi

All URIs are relative to _http://localhost:9001_

| Method                                                          | HTTP request                                                     | Description                              |
| --------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| [**addModuleToTenantRole**](#addmoduletotenantrole)             | **POST** /tenant-api/tenants/{tenantId}/roles/{roleId}           | Assign module to tenant role             |
| [**addModulesToTenantRole**](#addmodulestotenantrole)           | **POST** /tenant-api/tenants/{tenantId}/roles/{roleId}/modules   | Assign multiple modules to tenant role   |
| [**removeModuleFromTenantRole**](#removemodulefromtenantrole)   | **DELETE** /tenant-api/tenants/{tenantId}/roles/{roleId}         | Remove module from tenant role           |
| [**removeModulesFromTenantRole**](#removemodulesfromtenantrole) | **DELETE** /tenant-api/tenants/{tenantId}/roles/{roleId}/modules | Remove multiple modules from tenant role |

# **addModuleToTenantRole**

> RoleDto addModuleToTenantRole(idDto)

Adds a single module to the specified tenant role.

### Example

```typescript
import { TenantRoleModulesApi, Configuration, IdDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRoleModulesApi(configuration);

let tenantId: string; //Tenant systemId (UUID) (default to undefined)
let roleId: string; //Role systemId (UUID) (default to undefined)
let idDto: IdDto; //

const { status, data } = await apiInstance.addModuleToTenantRole(tenantId, roleId, idDto);
```

### Parameters

| Name         | Type         | Description            | Notes                 |
| ------------ | ------------ | ---------------------- | --------------------- |
| **idDto**    | **IdDto**    |                        |                       |
| **tenantId** | [**string**] | Tenant systemId (UUID) | defaults to undefined |
| **roleId**   | [**string**] | Role systemId (UUID)   | defaults to undefined |

### Return type

**RoleDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | Module assigned              | -                |
| **400**     | Invalid payload              | -                |
| **403**     | Forbidden                    | -                |
| **404**     | Tenant/role/module not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addModulesToTenantRole**

> RoleDto addModulesToTenantRole(idsDto)

Adds multiple modules to the specified tenant role.

### Example

```typescript
import { TenantRoleModulesApi, Configuration, IdsDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRoleModulesApi(configuration);

let tenantId: string; //Tenant systemId (UUID) (default to undefined)
let roleId: string; //Role systemId (UUID) (default to undefined)
let idsDto: IdsDto; //

const { status, data } = await apiInstance.addModulesToTenantRole(tenantId, roleId, idsDto);
```

### Parameters

| Name         | Type         | Description            | Notes                 |
| ------------ | ------------ | ---------------------- | --------------------- |
| **idsDto**   | **IdsDto**   |                        |                       |
| **tenantId** | [**string**] | Tenant systemId (UUID) | defaults to undefined |
| **roleId**   | [**string**] | Role systemId (UUID)   | defaults to undefined |

### Return type

**RoleDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | Modules assigned             | -                |
| **400**     | Invalid payload              | -                |
| **403**     | Forbidden                    | -                |
| **404**     | Tenant/role/module not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeModuleFromTenantRole**

> RoleDto removeModuleFromTenantRole(idDto)

Removes a single module from the specified tenant role.

### Example

```typescript
import { TenantRoleModulesApi, Configuration, IdDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRoleModulesApi(configuration);

let tenantId: string; //Tenant systemId (UUID) (default to undefined)
let roleId: string; //Role systemId (UUID) (default to undefined)
let idDto: IdDto; //

const { status, data } = await apiInstance.removeModuleFromTenantRole(tenantId, roleId, idDto);
```

### Parameters

| Name         | Type         | Description            | Notes                 |
| ------------ | ------------ | ---------------------- | --------------------- |
| **idDto**    | **IdDto**    |                        |                       |
| **tenantId** | [**string**] | Tenant systemId (UUID) | defaults to undefined |
| **roleId**   | [**string**] | Role systemId (UUID)   | defaults to undefined |

### Return type

**RoleDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                  | Response headers |
| ----------- | -------------------------------------------- | ---------------- |
| **200**     | Module removed                               | -                |
| **400**     | Invalid payload                              | -                |
| **403**     | Forbidden                                    | -                |
| **404**     | Tenant/role/module not found or not assigned | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeModulesFromTenantRole**

> RoleDto removeModulesFromTenantRole(idsDto)

Removes multiple modules from the specified tenant role.

### Example

```typescript
import { TenantRoleModulesApi, Configuration, IdsDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRoleModulesApi(configuration);

let tenantId: string; //Tenant systemId (UUID) (default to undefined)
let roleId: string; //Role systemId (UUID) (default to undefined)
let idsDto: IdsDto; //

const { status, data } = await apiInstance.removeModulesFromTenantRole(tenantId, roleId, idsDto);
```

### Parameters

| Name         | Type         | Description            | Notes                 |
| ------------ | ------------ | ---------------------- | --------------------- |
| **idsDto**   | **IdsDto**   |                        |                       |
| **tenantId** | [**string**] | Tenant systemId (UUID) | defaults to undefined |
| **roleId**   | [**string**] | Role systemId (UUID)   | defaults to undefined |

### Return type

**RoleDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                  | Response headers |
| ----------- | -------------------------------------------- | ---------------- |
| **200**     | Modules removed                              | -                |
| **400**     | Invalid payload                              | -                |
| **403**     | Forbidden                                    | -                |
| **404**     | Tenant/role/module not found or not assigned | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
