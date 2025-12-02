# TenantsApi

All URIs are relative to _http://localhost:9001_

| Method                                    | HTTP request                                       | Description                        |
| ----------------------------------------- | -------------------------------------------------- | ---------------------------------- |
| [**activateTenant**](#activatetenant)     | **POST** /tenant-api/tenants/{systemId}/activate   | Activate a tenant                  |
| [**createTenant**](#createtenant)         | **POST** /tenant-api/tenants                       | Create a tenant                    |
| [**deactivateTenant**](#deactivatetenant) | **POST** /tenant-api/tenants/{systemId}/deactivate | Deactivate a tenant                |
| [**getActiveUsers**](#getactiveusers)     | **GET** /tenant-api/tenants                        | List active tenants                |
| [**getAllUsers**](#getallusers)           | **GET** /tenant-api/tenants/actions/list           | List all users (active + inactive) |
| [**getTenant**](#gettenant)               | **GET** /tenant-api/tenants/{systemId}             | Get tenant by systemId             |
| [**updateTenant**](#updatetenant)         | **PUT** /tenant-api/tenants/{systemId}             | Update an existing tenant          |

# **activateTenant**

> any activateTenant()

Activate a tenant by its systemId.

### Example

```typescript
import { TenantsApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let systemId: string; //Tenant systemId (default to undefined)

const { status, data } = await apiInstance.activateTenant(systemId);
```

### Parameters

| Name         | Type         | Description     | Notes                 |
| ------------ | ------------ | --------------- | --------------------- |
| **systemId** | [**string**] | Tenant systemId | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Tenant activated | -                |
| **404**     | Tenant not found | -                |
| **403**     | Forbidden        | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTenant**

> TenantDto createTenant(tenantDto)

Create a new tenant.

### Example

```typescript
import { TenantsApi, Configuration, TenantDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let tenantDto: TenantDto; //

const { status, data } = await apiInstance.createTenant(tenantDto);
```

### Parameters

| Name          | Type          | Description | Notes |
| ------------- | ------------- | ----------- | ----- |
| **tenantDto** | **TenantDto** |             |       |

### Return type

**TenantDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Tenant created   | -                |
| **400**     | Validation error | -                |
| **403**     | Forbidden        | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateTenant**

> any deactivateTenant()

Deactivate a tenant by its systemId.

### Example

```typescript
import { TenantsApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let systemId: string; //Tenant systemId (default to undefined)

const { status, data } = await apiInstance.deactivateTenant(systemId);
```

### Parameters

| Name         | Type         | Description     | Notes                 |
| ------------ | ------------ | --------------- | --------------------- |
| **systemId** | [**string**] | Tenant systemId | defaults to undefined |

### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Tenant deactivated | -                |
| **404**     | Tenant not found   | -                |
| **403**     | Forbidden          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveUsers**

> TenantDto getActiveUsers()

### Example

```typescript
import { TenantsApi, Configuration, PageDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let pageRequest: PageDto; // (default to undefined)

const { status, data } = await apiInstance.getActiveUsers(pageRequest);
```

### Parameters

| Name            | Type        | Description | Notes                 |
| --------------- | ----------- | ----------- | --------------------- |
| **pageRequest** | **PageDto** |             | defaults to undefined |

### Return type

**TenantDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description     | Response headers |
| ----------- | --------------- | ---------------- |
| **200**     | Page of tenants | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllUsers**

> TenantDto getAllUsers()

### Example

```typescript
import { TenantsApi, Configuration, PageDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let pageRequest: PageDto; // (default to undefined)

const { status, data } = await apiInstance.getAllUsers(pageRequest);
```

### Parameters

| Name            | Type        | Description | Notes                 |
| --------------- | ----------- | ----------- | --------------------- |
| **pageRequest** | **PageDto** |             | defaults to undefined |

### Return type

**TenantDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | Page of users | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenant**

> TenantDto getTenant()

Retrieve a tenant by its systemId.

### Example

```typescript
import { TenantsApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let systemId: string; //Tenant systemId (default to undefined)

const { status, data } = await apiInstance.getTenant(systemId);
```

### Parameters

| Name         | Type         | Description     | Notes                 |
| ------------ | ------------ | --------------- | --------------------- |
| **systemId** | [**string**] | Tenant systemId | defaults to undefined |

### Return type

**TenantDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Tenant found     | -                |
| **404**     | Tenant not found | -                |
| **403**     | Forbidden        | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTenant**

> TenantDto updateTenant(tenantDto)

Update an existing tenant identified by its systemId.

### Example

```typescript
import { TenantsApi, Configuration, TenantDto } from "./api";

const configuration = new Configuration();
const apiInstance = new TenantsApi(configuration);

let systemId: string; //Tenant systemId (default to undefined)
let tenantDto: TenantDto; //

const { status, data } = await apiInstance.updateTenant(systemId, tenantDto);
```

### Parameters

| Name          | Type          | Description     | Notes                 |
| ------------- | ------------- | --------------- | --------------------- |
| **tenantDto** | **TenantDto** |                 |                       |
| **systemId**  | [**string**]  | Tenant systemId | defaults to undefined |

### Return type

**TenantDto**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Tenant updated   | -                |
| **400**     | Validation error | -                |
| **404**     | Tenant not found | -                |
| **403**     | Forbidden        | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
