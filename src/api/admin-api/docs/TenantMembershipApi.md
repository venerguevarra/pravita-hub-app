# TenantMembershipApi

All URIs are relative to *http://localhost:9001*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**add**](#add) | **POST** /tenant-api/tenants/{tenantId}/members/{userId} | Add user to tenant|
|[**getTenantUsers**](#gettenantusers) | **GET** /tenant-api/tenants/{tenantId}/members | List active users|
|[**remove**](#remove) | **DELETE** /tenant-api/tenants/{tenantId}/members/{userId} | Remove user from tenant|

# **add**
> object add()


### Example

```typescript
import {
    TenantMembershipApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantMembershipApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.add(
    tenantId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenantUsers**
> UserDto getTenantUsers()


### Example

```typescript
import {
    TenantMembershipApi,
    Configuration,
    PageDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantMembershipApi(configuration);

let tenantId: string; // (default to undefined)
let pageRequest: PageDto; // (default to undefined)

const { status, data } = await apiInstance.getTenantUsers(
    tenantId,
    pageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **pageRequest** | **PageDto** |  | defaults to undefined|


### Return type

**UserDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page of users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove**
> object remove()


### Example

```typescript
import {
    TenantMembershipApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantMembershipApi(configuration);

let tenantId: string; // (default to undefined)
let userId: string; // (default to undefined)
let hardDelete: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.remove(
    tenantId,
    userId,
    hardDelete
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **hardDelete** | [**boolean**] |  | (optional) defaults to false|


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

