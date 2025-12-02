# AuthenticationApi

All URIs are relative to _http://localhost:9001_

| Method                            | HTTP request                | Description                                    |
| --------------------------------- | --------------------------- | ---------------------------------------------- |
| [**login**](#login)               | **POST** /auth/authenticate |                                                |
| [**refreshToken**](#refreshtoken) | **POST** /auth/refresh      | Refresh access token using refreshToken cookie |

# **login**

> object login(authenticationDto)

### Example

```typescript
import { AuthenticationApi, Configuration, AuthenticationDto } from "./api";

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let authenticationDto: AuthenticationDto; //

const { status, data } = await apiInstance.login(authenticationDto);
```

### Parameters

| Name                  | Type                  | Description | Notes |
| --------------------- | --------------------- | ----------- | ----- |
| **authenticationDto** | **AuthenticationDto** |             |       |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: _/_

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshToken**

> AuthenticationTokenDto refreshToken()

### Example

```typescript
import { AuthenticationApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let refreshToken: string; // (optional) (default to undefined)
let refreshToken2: string; // (optional) (default to undefined)
let xRefreshToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.refreshToken(refreshToken, refreshToken2, xRefreshToken);
```

### Parameters

| Name              | Type         | Description | Notes                            |
| ----------------- | ------------ | ----------- | -------------------------------- |
| **refreshToken**  | [**string**] |             | (optional) defaults to undefined |
| **refreshToken2** | [**string**] |             | (optional) defaults to undefined |
| **xRefreshToken** | [**string**] |             | (optional) defaults to undefined |

### Return type

**AuthenticationTokenDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
