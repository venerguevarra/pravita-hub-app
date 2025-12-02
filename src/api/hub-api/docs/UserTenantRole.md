# UserTenantRole

## Properties

| Name            | Type                            | Description | Notes                             |
| --------------- | ------------------------------- | ----------- | --------------------------------- |
| **id**          | **number**                      |             | [optional] [default to undefined] |
| **systemId**    | **string**                      |             | [optional] [default to undefined] |
| **isActive**    | **boolean**                     |             | [optional] [default to undefined] |
| **createdDate** | **string**                      |             | [optional] [default to undefined] |
| **updatedDate** | **string**                      |             | [optional] [default to undefined] |
| **createdBy**   | **string**                      |             | [optional] [default to undefined] |
| **updatedBy**   | **string**                      |             | [optional] [default to undefined] |
| **user**        | [**User**](User.md)             |             | [optional] [default to undefined] |
| **tenantRole**  | [**TenantRole**](TenantRole.md) |             | [optional] [default to undefined] |
| **primaryRole** | **boolean**                     |             | [optional] [default to undefined] |

## Example

```typescript
import { UserTenantRole } from "./api";

const instance: UserTenantRole = {
    id,
    systemId,
    isActive,
    createdDate,
    updatedDate,
    createdBy,
    updatedBy,
    user,
    tenantRole,
    primaryRole,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
