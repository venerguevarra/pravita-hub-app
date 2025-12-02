# UsersApi

All URIs are relative to _http://localhost:9001_

| Method                                      | HTTP request                                        | Description                        |
| ------------------------------------------- | --------------------------------------------------- | ---------------------------------- |
| [**activateUser**](#activateuser)           | **POST** /platform-api/users/activate               | Activate a user                    |
| [**deactivateUser**](#deactivateuser)       | **POST** /platform-api/users/deactivate             | Deactivate a user                  |
| [**getActiveUsers1**](#getactiveusers1)     | **GET** /platform-api/users                         | List active users                  |
| [**getAllUsers1**](#getallusers1)           | **GET** /platform-api/users/actions/list            | List all users (active + inactive) |
| [**getUserByEmail**](#getuserbyemail)       | **GET** /platform-api/users/actions/search-by-email | Search user by email               |
| [**getUserBySystemId**](#getuserbysystemid) | **GET** /platform-api/users/{systemId}              | Fetch a user by system id          |

# **activateUser**

> UserDto activateUser(userActivationDto)

Activates a user account using the provided activation details.

### Example

```typescript
import { UsersApi, Configuration, UserActivationDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userActivationDto: UserActivationDto; //Activation payload

const { status, data } = await apiInstance.activateUser(userActivationDto);
```

### Parameters

| Name                  | Type                  | Description        | Notes |
| --------------------- | --------------------- | ------------------ | ----- |
| **userActivationDto** | **UserActivationDto** | Activation payload |       |

### Return type

**UserDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | User activated        | -                |
| **400**     | Validation error      | -                |
| **404**     | User not found        | -                |
| **500**     | Internal server error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateUser**

> UserDto deactivateUser(userActivationDto)

Deactivates a user account using the provided activation details.

### Example

```typescript
import { UsersApi, Configuration, UserActivationDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userActivationDto: UserActivationDto; //Deactivation payload

const { status, data } = await apiInstance.deactivateUser(userActivationDto);
```

### Parameters

| Name                  | Type                  | Description          | Notes |
| --------------------- | --------------------- | -------------------- | ----- |
| **userActivationDto** | **UserActivationDto** | Deactivation payload |       |

### Return type

**UserDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | User activated        | -                |
| **400**     | Validation error      | -                |
| **404**     | User not found        | -                |
| **500**     | Internal server error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveUsers1**

> UserDto getActiveUsers1()

### Example

```typescript
import { UsersApi, Configuration, PageDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let pageRequest: PageDto; // (default to undefined)

const { status, data } = await apiInstance.getActiveUsers1(pageRequest);
```

### Parameters

| Name            | Type        | Description | Notes                 |
| --------------- | ----------- | ----------- | --------------------- |
| **pageRequest** | **PageDto** |             | defaults to undefined |

### Return type

**UserDto**

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

# **getAllUsers1**

> UserDto getAllUsers1()

### Example

```typescript
import { UsersApi, Configuration, PageDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let pageRequest: PageDto; // (default to undefined)

const { status, data } = await apiInstance.getAllUsers1(pageRequest);
```

### Parameters

| Name            | Type        | Description | Notes                 |
| --------------- | ----------- | ----------- | --------------------- |
| **pageRequest** | **PageDto** |             | defaults to undefined |

### Return type

**UserDto**

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

# **getUserByEmail**

> UserDto getUserByEmail()

### Example

```typescript
import { UsersApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let email: string; //Email to search (default to undefined)

const { status, data } = await apiInstance.getUserByEmail(email);
```

### Parameters

| Name      | Type         | Description     | Notes                 |
| --------- | ------------ | --------------- | --------------------- |
| **email** | [**string**] | Email to search | defaults to undefined |

### Return type

**UserDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | User found     | -                |
| **404**     | User not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserBySystemId**

> UserDto getUserBySystemId()

### Example

```typescript
import { UsersApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let systemId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserBySystemId(systemId);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **systemId** | [**string**] |             | defaults to undefined |

### Return type

**UserDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | User found     | -                |
| **404**     | User not found | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
