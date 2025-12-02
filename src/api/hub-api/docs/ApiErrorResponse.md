# ApiErrorResponse

## Properties

| Name       | Type                                                     | Description | Notes                             |
| ---------- | -------------------------------------------------------- | ----------- | --------------------------------- |
| **status** | **string**                                               |             | [optional] [default to undefined] |
| **errors** | [**Set&lt;ValidationMessage&gt;**](ValidationMessage.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { ApiErrorResponse } from "./api";

const instance: ApiErrorResponse = {
    status,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
