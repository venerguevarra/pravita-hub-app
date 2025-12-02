# TenantRolesApi

All URIs are relative to _http://localhost:9001_

| Method                                            | HTTP request                                                        | Description                         |
| ------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------- |
| [**activateTenantRole**](#activatetenantrole)     | **POST** /tenant-api/tenants/{tenantId}/roles/{systemId}/activate   | Activate a tenant role              |
| [**createTenantRole**](#createtenantrole)         | **POST** /tenant-api/tenants/{tenantId}/roles                       | Create a tenant role                |
| [**deactivateTenantRole**](#deactivatetenantrole) | **POST** /tenant-api/tenants/{tenantId}/roles/{systemId}/deactivate | Deactivate a tenant role            |
| [**getTenantRole**](#gettenantrole)               | **GET** /tenant-api/tenants/{tenantId}/roles/{systemId}             | Get a tenant role by systemId       |
| [**getTenantRoles**](#gettenantroles)             | **GET** /tenant-api/tenants/{tenantId}/roles                        | Get a page of tenant roles (active) |
| [**updateTenantRole**](#updatetenantrole)         | **PUT** /tenant-api/tenants/{tenantId}/roles/{systemId}             | Update an existing tenant role      |

# **activateTenantRole**

> any activateTenantRole()

Activate a tenant role by its systemId.

### Example

```typescript
import { TenantRolesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRolesApi(configuration);

let tenantId: string; //Tenant systemId (default to undefined)
let systemId: string; //TenantRole systemId (default to undefined)

const { status, data } = await apiInstance.activateTenantRole(tenantId, systemId);
```

### Parameters

| Name         | Type         | Description         | Notes                 |
| ------------ | ------------ | ------------------- | --------------------- |
| **tenantId** | [**string**] | Tenant systemId     | defaults to undefined |
| **systemId** | [**string**] | TenantRole systemId | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | Tenant role activated | -                |
| **404**     | Tenant role not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTenantRole**

> TenantRoleDto createTenantRole(tenantRoleDto)

Create a new tenant role.

### Example

```typescript
import { TenantRolesApi, Configuration, TenantRoleDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRolesApi(configuration);

let tenantId: string; //Tenant systemId (default to undefined)
let tenantRoleDto: TenantRoleDto; //

const { status, data } = await apiInstance.createTenantRole(tenantId, tenantRoleDto);
```

### Parameters

| Name              | Type              | Description     | Notes                 |
| ----------------- | ----------------- | --------------- | --------------------- |
| **tenantRoleDto** | **TenantRoleDto** |                 |                       |
| **tenantId**      | [**string**]      | Tenant systemId | defaults to undefined |

### Return type

**TenantRoleDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Tenant role created | -                |
| **400**     | Validation error    | -                |
| **403**     | Forbidden           | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateTenantRole**

> any deactivateTenantRole()

Deactivate a tenant role by its systemId.

### Example

```typescript
import { TenantRolesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRolesApi(configuration);

let tenantId: string; //Tenant systemId (default to undefined)
let systemId: string; //TenantRole systemId (default to undefined)

const { status, data } = await apiInstance.deactivateTenantRole(tenantId, systemId);
```

### Parameters

| Name         | Type         | Description         | Notes                 |
| ------------ | ------------ | ------------------- | --------------------- |
| **tenantId** | [**string**] | Tenant systemId     | defaults to undefined |
| **systemId** | [**string**] | TenantRole systemId | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | Tenant role deactivated | -                |
| **404**     | Tenant role not found   | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantRole**

> TenantRoleDto getTenantRole()

Retrieve a tenant role by its systemId.

### Example

```typescript
import { TenantRolesApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRolesApi(configuration);

let tenantId: string; //Tenant systemId (default to undefined)
let systemId: string; //TenantRole systemId (default to undefined)

const { status, data } = await apiInstance.getTenantRole(tenantId, systemId);
```

### Parameters

| Name         | Type         | Description         | Notes                 |
| ------------ | ------------ | ------------------- | --------------------- |
| **tenantId** | [**string**] | Tenant systemId     | defaults to undefined |
| **systemId** | [**string**] | TenantRole systemId | defaults to undefined |

### Return type

**TenantRoleDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | Tenant role found     | -                |
| **404**     | Tenant role not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantRoles**

> Array<TenantRoleDto> getTenantRoles()

List active tenant roles with pagination.

### Example

```typescript
import { TenantRolesApi, Configuration, PageDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRolesApi(configuration);

let tenantId: string; //Tenant systemId (default to undefined)
let pageRequest: PageDto; //Pageable (default to undefined)

const { status, data } = await apiInstance.getTenantRoles(tenantId, pageRequest);
```

### Parameters

| Name            | Type         | Description     | Notes                 |
| --------------- | ------------ | --------------- | --------------------- |
| **tenantId**    | [**string**] | Tenant systemId | defaults to undefined |
| **pageRequest** | **PageDto**  | Pageable        | defaults to undefined |

### Return type

**Array<TenantRoleDto>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | Tenant roles retrieved | -                |
| **403**     | Forbidden              | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTenantRole**

> TenantRoleDto updateTenantRole(tenantRoleDto)

Update an existing tenant role identified by its systemId.

### Example

```typescript
import { TenantRolesApi, Configuration, TenantRoleDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantRolesApi(configuration);

let tenantId: string; //Tenant systemId (default to undefined)
let systemId: string; //TenantRole systemId (default to undefined)
let tenantRoleDto: TenantRoleDto; //

const { status, data } = await apiInstance.updateTenantRole(tenantId, systemId, tenantRoleDto);
```

### Parameters

| Name              | Type              | Description         | Notes                 |
| ----------------- | ----------------- | ------------------- | --------------------- |
| **tenantRoleDto** | **TenantRoleDto** |                     |                       |
| **tenantId**      | [**string**]      | Tenant systemId     | defaults to undefined |
| **systemId**      | [**string**]      | TenantRole systemId | defaults to undefined |

### Return type

**TenantRoleDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | Tenant role updated   | -                |
| **400**     | Validation error      | -                |
| **404**     | Tenant role not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
