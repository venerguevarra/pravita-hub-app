# SystemModulesApi

All URIs are relative to _http://localhost:9001_

| Method                                                | HTTP request                                                                | Description                               |
| ----------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| [**activateModule**](#activatemodule)                 | **POST** /platform-api/system-modules/{systemId}/activate                   | Activate a module                         |
| [**addActionToModule**](#addactiontomodule)           | **POST** /platform-api/system-modules/{systemId}/actions                    | Add an action to a module                 |
| [**createModule**](#createmodule)                     | **POST** /platform-api/system-modules                                       | Create a system module                    |
| [**deactivateModule**](#deactivatemodule)             | **POST** /platform-api/system-modules/{systemId}/deactivate                 | Deactivate a module                       |
| [**getModule**](#getmodule)                           | **GET** /platform-api/system-modules/{systemId}                             | Get a module by systemId                  |
| [**getModules**](#getmodules)                         | **GET** /platform-api/system-modules                                        | Get a page of modules (active + inactive) |
| [**removeActionFromModule**](#removeactionfrommodule) | **DELETE** /platform-api/system-modules/{systemId}/actions/{actionSystemId} | Remove an action from a module            |
| [**updateActionForModule**](#updateactionformodule)   | **PUT** /platform-api/system-modules/{systemId}/actions/{actionSystemId}    | Update an existing action of a module     |
| [**updateModule**](#updatemodule)                     | **PUT** /platform-api/system-modules/{systemId}                             | Update an existing module                 |

# **activateModule**

> any activateModule()

Activate a previously deactivated module by systemId.

### Example

```typescript
import { SystemModulesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let systemId: string; //Module systemId (default to undefined)

const { status, data } = await apiInstance.activateModule(systemId);
```

### Parameters

| Name         | Type         | Description     | Notes                 |
| ------------ | ------------ | --------------- | --------------------- |
| **systemId** | [**string**] | Module systemId | defaults to undefined |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Module activated | -                |
| **404**     | Module not found | -                |
| **403**     | Forbidden        | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addActionToModule**

> any addActionToModule(moduleActionDto)

Assign a new action to the module identified by systemId.

### Example

```typescript
import { SystemModulesApi, Configuration, ModuleActionDto } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let systemId: string; //Module systemId (default to undefined)
let moduleActionDto: ModuleActionDto; //Module action to add

const { status, data } = await apiInstance.addActionToModule(systemId, moduleActionDto);
```

### Parameters

| Name                | Type                | Description          | Notes                 |
| ------------------- | ------------------- | -------------------- | --------------------- |
| **moduleActionDto** | **ModuleActionDto** | Module action to add |                       |
| **systemId**        | [**string**]        | Module systemId      | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | Action added successfully | -                |
| **400**     | Bad request               | -                |
| **404**     | Module not found          | -                |
| **500**     | Internal server error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createModule**

> Module createModule(moduleDto)

Create a new system module.

### Example

```typescript
import { SystemModulesApi, Configuration, ModuleDto } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let moduleDto: ModuleDto; //Module payload

const { status, data } = await apiInstance.createModule(moduleDto);
```

### Parameters

| Name          | Type          | Description    | Notes |
| ------------- | ------------- | -------------- | ----- |
| **moduleDto** | **ModuleDto** | Module payload |       |

### Return type

**Module**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **201**     | Module created   | -                |
| **400**     | Validation error | -                |
| **403**     | Forbidden        | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateModule**

> any deactivateModule()

Deactivate a module by systemId.

### Example

```typescript
import { SystemModulesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let systemId: string; //Module systemId (default to undefined)

const { status, data } = await apiInstance.deactivateModule(systemId);
```

### Parameters

| Name         | Type         | Description     | Notes                 |
| ------------ | ------------ | --------------- | --------------------- |
| **systemId** | [**string**] | Module systemId | defaults to undefined |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Module deactivated | -                |
| **404**     | Module not found   | -                |
| **403**     | Forbidden          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModule**

> ModuleDto getModule()

Get a single module by its systemId.

### Example

```typescript
import { SystemModulesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let systemId: string; //Module systemId (default to undefined)

const { status, data } = await apiInstance.getModule(systemId);
```

### Parameters

| Name         | Type         | Description     | Notes                 |
| ------------ | ------------ | --------------- | --------------------- |
| **systemId** | [**string**] | Module systemId | defaults to undefined |

### Return type

**ModuleDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | Module found          | -                |
| **404**     | Module not found      | -                |
| **403**     | Forbidden             | -                |
| **401**     | Unauthorized          | -                |
| **500**     | Internal server error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModules**

> Array<Module> getModules()

List modules with pagination.

### Example

```typescript
import { SystemModulesApi, Configuration, PageDto } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let pageRequest: PageDto; //Pageable (default to undefined)

const { status, data } = await apiInstance.getModules(pageRequest);
```

### Parameters

| Name            | Type        | Description | Notes                 |
| --------------- | ----------- | ----------- | --------------------- |
| **pageRequest** | **PageDto** | Pageable    | defaults to undefined |

### Return type

**Array<Module>**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description     | Response headers |
| ----------- | --------------- | ---------------- |
| **200**     | Page of modules | -                |
| **403**     | Forbidden       | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeActionFromModule**

> any removeActionFromModule()

Remove an existing action from the module identified by systemId.

### Example

```typescript
import { SystemModulesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let systemId: string; //Module systemId (default to undefined)
let actionSystemId: string; //Module action systemId (default to undefined)

const { status, data } = await apiInstance.removeActionFromModule(systemId, actionSystemId);
```

### Parameters

| Name               | Type         | Description            | Notes                 |
| ------------------ | ------------ | ---------------------- | --------------------- |
| **systemId**       | [**string**] | Module systemId        | defaults to undefined |
| **actionSystemId** | [**string**] | Module action systemId | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Action removed successfully | -                |
| **404**     | Module or action not found  | -                |
| **500**     | Internal server error       | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateActionForModule**

> any updateActionForModule(moduleActionDto)

Update an existing module action identified by systemId within the given module.

### Example

```typescript
import { SystemModulesApi, Configuration, ModuleActionDto } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let systemId: string; //Module systemId (default to undefined)
let actionSystemId: string; //Module action systemId (default to undefined)
let moduleActionDto: ModuleActionDto; //Module action data to update

const { status, data } = await apiInstance.updateActionForModule(systemId, actionSystemId, moduleActionDto);
```

### Parameters

| Name                | Type                | Description                  | Notes                 |
| ------------------- | ------------------- | ---------------------------- | --------------------- |
| **moduleActionDto** | **ModuleActionDto** | Module action data to update |                       |
| **systemId**        | [**string**]        | Module systemId              | defaults to undefined |
| **actionSystemId**  | [**string**]        | Module action systemId       | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Action updated successfully | -                |
| **400**     | Bad request                 | -                |
| **404**     | Module or action not found  | -                |
| **500**     | Internal server error       | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateModule**

> any updateModule(moduleDto)

Updates an existing module identified by its systemId.

### Example

```typescript
import { SystemModulesApi, Configuration, ModuleDto } from "./api";

const configuration = new Configuration();
const apiInstance = new SystemModulesApi(configuration);

let systemId: string; //Module systemId (default to undefined)
let moduleDto: ModuleDto; //Module payload

const { status, data } = await apiInstance.updateModule(systemId, moduleDto);
```

### Parameters

| Name          | Type          | Description     | Notes                 |
| ------------- | ------------- | --------------- | --------------------- |
| **moduleDto** | **ModuleDto** | Module payload  |                       |
| **systemId**  | [**string**]  | Module systemId | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Module updated successfully | -                |
| **400**     | Validation error            | -                |
| **401**     | Unauthorized                | -                |
| **403**     | Forbidden                   | -                |
| **404**     | Module not found            | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
