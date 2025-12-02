# RolesApi

All URIs are relative to _http://localhost:9001_

| Method                                              | HTTP request                                      | Description                |
| --------------------------------------------------- | ------------------------------------------------- | -------------------------- |
| [**assignModulesToRole**](#assignmodulestorole)     | **POST** /platform-api/roles/{systemId}/modules   | Assign modules to a role   |
| [**createRole**](#createrole)                       | **POST** /platform-api/roles                      | Create a new role          |
| [**deleteRole**](#deleterole)                       | **DELETE** /platform-api/roles/{systemId}         | Delete a role by system ID |
| [**getAllRoles**](#getallroles)                     | **GET** /platform-api/roles                       | Get all roles              |
| [**getRole**](#getrole)                             | **GET** /platform-api/roles/{systemId}            | Get a role by system ID    |
| [**removeModulesFromRole**](#removemodulesfromrole) | **DELETE** /platform-api/roles/{systemId}/modules | Remove modules from a role |
| [**updateRole**](#updaterole)                       | **PUT** /platform-api/roles/{systemId}            | Update an existing role    |

# **assignModulesToRole**

> RoleDto assignModulesToRole(modulesIdListDto)

Adds the provided modules (by system ID) to the role.

### Example

```typescript
import { RolesApi, Configuration, ModulesIdListDto } from "./api";

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let systemId: string; //The role\'s system identifier (UUID) (default to undefined)
let modulesIdListDto: ModulesIdListDto; //List of module UUIDs to add

const { status, data } = await apiInstance.assignModulesToRole(systemId, modulesIdListDto);
```

### Parameters

| Name                 | Type                 | Description                              | Notes                 |
| -------------------- | -------------------- | ---------------------------------------- | --------------------- |
| **modulesIdListDto** | **ModulesIdListDto** | List of module UUIDs to add              |                       |
| **systemId**         | [**string**]         | The role\&#39;s system identifier (UUID) | defaults to undefined |

### Return type

**RoleDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                          | Response headers |
| ----------- | ------------------------------------ | ---------------- |
| **200**     | Modules assigned                     | -                |
| **404**     | Role or one of the modules not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRole**

> RoleDto createRole(roleDto)

Validates the payload and creates a new role.

### Example

```typescript
import { RolesApi, Configuration, RoleDto } from "./api";

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleDto: RoleDto; //Role payload

const { status, data } = await apiInstance.createRole(roleDto);
```

### Parameters

| Name        | Type        | Description  | Notes |
| ----------- | ----------- | ------------ | ----- |
| **roleDto** | **RoleDto** | Role payload |       |

### Return type

**RoleDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Role created     | -                |
| **400**     | Validation error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRole**

> object deleteRole()

Soft-deactivates a role. Returns 204 if successful.

### Example

```typescript
import { RolesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let systemId: string; //The role\'s system identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.deleteRole(systemId);
```

### Parameters

| Name         | Type         | Description                              | Notes                 |
| ------------ | ------------ | ---------------------------------------- | --------------------- |
| **systemId** | [**string**] | The role\&#39;s system identifier (UUID) | defaults to undefined |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **204**     | Role deleted (deactivated) | -                |
| **404**     | Role not found             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllRoles**

> Array<RoleDto> getAllRoles()

Fetches a list of all roles.

### Example

```typescript
import { RolesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

const { status, data } = await apiInstance.getAllRoles();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<RoleDto>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description     | Response headers |
| ----------- | --------------- | ---------------- |
| **200**     | Roles retrieved | -                |
| **204**     | No roles found  | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRole**

> RoleDto getRole()

Returns the role if it exists, otherwise a 404.

### Example

```typescript
import { RolesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let systemId: string; //The role\'s system identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.getRole(systemId);
```

### Parameters

| Name         | Type         | Description                              | Notes                 |
| ------------ | ------------ | ---------------------------------------- | --------------------- |
| **systemId** | [**string**] | The role\&#39;s system identifier (UUID) | defaults to undefined |

### Return type

**RoleDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | Role found     | -                |
| **404**     | Role not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeModulesFromRole**

> RoleDto removeModulesFromRole(modulesIdListDto)

Removes the provided modules from the role.

### Example

```typescript
import { RolesApi, Configuration, ModulesIdListDto } from "./api";

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let systemId: string; //The role\'s system identifier (UUID) (default to undefined)
let modulesIdListDto: ModulesIdListDto; //List of module UUIDs to remove

const { status, data } = await apiInstance.removeModulesFromRole(systemId, modulesIdListDto);
```

### Parameters

| Name                 | Type                 | Description                              | Notes                 |
| -------------------- | -------------------- | ---------------------------------------- | --------------------- |
| **modulesIdListDto** | **ModulesIdListDto** | List of module UUIDs to remove           |                       |
| **systemId**         | [**string**]         | The role\&#39;s system identifier (UUID) | defaults to undefined |

### Return type

**RoleDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                          | Response headers |
| ----------- | ------------------------------------ | ---------------- |
| **200**     | Modules removed                      | -                |
| **404**     | Role or one of the modules not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRole**

> RoleDto updateRole(roleDto)

Validates and updates fields of an existing role.

### Example

```typescript
import { RolesApi, Configuration, RoleDto } from "./api";

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let systemId: string; //The role\'s system identifier (UUID) (default to undefined)
let roleDto: RoleDto; //Updated role payload

const { status, data } = await apiInstance.updateRole(systemId, roleDto);
```

### Parameters

| Name         | Type         | Description                              | Notes                 |
| ------------ | ------------ | ---------------------------------------- | --------------------- |
| **roleDto**  | **RoleDto**  | Updated role payload                     |                       |
| **systemId** | [**string**] | The role\&#39;s system identifier (UUID) | defaults to undefined |

### Return type

**RoleDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Role updated     | -                |
| **400**     | Validation error | -                |
| **404**     | Role not found   | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
