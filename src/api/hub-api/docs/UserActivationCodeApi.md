# UserActivationCodeApi

All URIs are relative to _http://localhost:9001_

| Method                    | HTTP request                            | Description                                 |
| ------------------------- | --------------------------------------- | ------------------------------------------- |
| [**activate**](#activate) | **POST** /user-activation-code/activate | Verify activation code and activate account |
| [**resend**](#resend)     | **POST** /user-activation-code/resend   | Resend activation code by email             |

# **activate**

> object activate(userCodeActivationDto)

Checks the 6-character code (case-insensitive) and activates the user if valid and unexpired.

### Example

```typescript
import { UserActivationCodeApi, Configuration, UserCodeActivationDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UserActivationCodeApi(configuration);

let userCodeActivationDto: UserCodeActivationDto; //Email + 6-character activation code

const { status, data } = await apiInstance.activate(userCodeActivationDto);
```

### Parameters

| Name                      | Type                      | Description                         | Notes |
| ------------------------- | ------------------------- | ----------------------------------- | ----- |
| **userCodeActivationDto** | **UserCodeActivationDto** | Email + 6-character activation code |       |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: _/_

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | Account activated       | -                |
| **400**     | Invalid code format     | -                |
| **401**     | Invalid or expired code | -                |
| **404**     | User not found          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend**

> object resend(userResendActivationCodeEmailDto)

Invalidates any previously unused code for the user, issues a fresh code, and emails it.

### Example

```typescript
import { UserActivationCodeApi, Configuration, UserResendActivationCodeEmailDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UserActivationCodeApi(configuration);

let userResendActivationCodeEmailDto: UserResendActivationCodeEmailDto; //User email payload

const { status, data } = await apiInstance.resend(userResendActivationCodeEmailDto);
```

### Parameters

| Name                                 | Type                                 | Description        | Notes |
| ------------------------------------ | ------------------------------------ | ------------------ | ----- |
| **userResendActivationCodeEmailDto** | **UserResendActivationCodeEmailDto** | User email payload |       |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: _/_

### HTTP response details

| Status code | Description                      | Response headers |
| ----------- | -------------------------------- | ---------------- |
| **202**     | New code issued and email queued | -                |
| **400**     | Invalid input                    | -                |
| **404**     | User not found                   | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
