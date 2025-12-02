# UserRolesApi

All URIs are relative to _http://localhost:9001_

| Method                          | HTTP request                                        | Description              |
| ------------------------------- | --------------------------------------------------- | ------------------------ |
| [**assignRoles**](#assignroles) | **POST** /platform-api/users/actions/assign-roles   | Assign roles to a user   |
| [**removeRoles**](#removeroles) | **DELETE** /platform-api/users/actions/remove-roles | Remove roles from a user |

# **assignRoles**

> UserDto assignRoles(userRoleAssignmentDto)

### Example

```typescript
import { UserRolesApi, Configuration, UserRoleAssignmentDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UserRolesApi(configuration);

let userRoleAssignmentDto: UserRoleAssignmentDto; //Role assignment payload

const { status, data } = await apiInstance.assignRoles(userRoleAssignmentDto);
```

### Parameters

| Name                      | Type                      | Description             | Notes |
| ------------------------- | ------------------------- | ----------------------- | ----- |
| **userRoleAssignmentDto** | **UserRoleAssignmentDto** | Role assignment payload |       |

### Return type

**UserDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                      | Response headers |
| ----------- | -------------------------------- | ---------------- |
| **200**     | User updated                     | -                |
| **400**     | Validation error                 | -                |
| **404**     | User or related entity not found | -                |
| **500**     | Internal server error            | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeRoles**

> UserDto removeRoles(userRoleAssignmentDto)

### Example

```typescript
import { UserRolesApi, Configuration, UserRoleAssignmentDto } from "./api";

const configuration = new Configuration();
const apiInstance = new UserRolesApi(configuration);

let userRoleAssignmentDto: UserRoleAssignmentDto; //Role assignment payload

const { status, data } = await apiInstance.removeRoles(userRoleAssignmentDto);
```

### Parameters

| Name                      | Type                      | Description             | Notes |
| ------------------------- | ------------------------- | ----------------------- | ----- |
| **userRoleAssignmentDto** | **UserRoleAssignmentDto** | Role assignment payload |       |

### Return type

**UserDto**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                      | Response headers |
| ----------- | -------------------------------- | ---------------- |
| **200**     | User updated                     | -                |
| **400**     | Validation error                 | -                |
| **404**     | User or related entity not found | -                |
| **500**     | Internal server error            | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
