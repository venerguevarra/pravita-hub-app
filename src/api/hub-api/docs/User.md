# User

## Properties

| Name                   | Type                                                     | Description | Notes                             |
| ---------------------- | -------------------------------------------------------- | ----------- | --------------------------------- |
| **id**                 | **number**                                               |             | [optional] [default to undefined] |
| **systemId**           | **string**                                               |             | [optional] [default to undefined] |
| **isActive**           | **boolean**                                              |             | [optional] [default to undefined] |
| **createdDate**        | **string**                                               |             | [optional] [default to undefined] |
| **updatedDate**        | **string**                                               |             | [optional] [default to undefined] |
| **createdBy**          | **string**                                               |             | [optional] [default to undefined] |
| **updatedBy**          | **string**                                               |             | [optional] [default to undefined] |
| **email**              | **string**                                               |             | [optional] [default to undefined] |
| **passwordHash**       | **string**                                               |             | [optional] [default to undefined] |
| **roles**              | [**Set&lt;Role&gt;**](Role.md)                           |             | [optional] [default to undefined] |
| **personalInfo**       | [**PersonalInfo**](PersonalInfo.md)                      |             | [optional] [default to undefined] |
| **tenants**            | [**Set&lt;Tenant&gt;**](Tenant.md)                       |             | [optional] [default to undefined] |
| **userTenantRoles**    | [**Set&lt;UserTenantRole&gt;**](UserTenantRole.md)       |             | [optional] [default to undefined] |
| **membershipVersions** | [**Set&lt;MembershipVersion&gt;**](MembershipVersion.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { User } from "./api";

const instance: User = {
    id,
    systemId,
    isActive,
    createdDate,
    updatedDate,
    createdBy,
    updatedBy,
    email,
    passwordHash,
    roles,
    personalInfo,
    tenants,
    userTenantRoles,
    membershipVersions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
