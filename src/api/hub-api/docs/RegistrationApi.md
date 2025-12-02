# RegistrationApi

All URIs are relative to _http://localhost:9001_

| Method                    | HTTP request       | Description          |
| ------------------------- | ------------------ | -------------------- |
| [**register**](#register) | **POST** /register | Self-register a user |

# **register**

> UserDto register(userRegistrationDto)

### Example

```typescript
import { RegistrationApi, Configuration, UserRegistrationDto } from "./api";

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let userRegistrationDto: UserRegistrationDto; //Registration payload

const { status, data } = await apiInstance.register(userRegistrationDto);
```

### Parameters

| Name                    | Type                    | Description          | Notes |
| ----------------------- | ----------------------- | -------------------- | ----- |
| **userRegistrationDto** | **UserRegistrationDto** | Registration payload |       |

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
| **201**     | User created          | -                |
| **400**     | Validation error      | -                |
| **409**     | Conflict (duplicate)  | -                |
| **500**     | Internal server error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
