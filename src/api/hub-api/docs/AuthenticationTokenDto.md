# AuthenticationTokenDto

## Properties

| Name                 | Type       | Description | Notes                             |
| -------------------- | ---------- | ----------- | --------------------------------- |
| **accessToken**      | **string** |             | [optional] [default to undefined] |
| **tokenType**        | **string** |             | [optional] [default to undefined] |
| **accessExpiresAt**  | **number** |             | [optional] [default to undefined] |
| **refreshToken**     | **string** |             | [optional] [default to undefined] |
| **refreshExpiresAt** | **number** |             | [optional] [default to undefined] |

## Example

```typescript
import { AuthenticationTokenDto } from "./api";

const instance: AuthenticationTokenDto = {
    accessToken,
    tokenType,
    accessExpiresAt,
    refreshToken,
    refreshExpiresAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
