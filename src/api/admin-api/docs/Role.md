# Role


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**systemId** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**createdDate** | **string** |  | [optional] [default to undefined]
**updatedDate** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**users** | [**Set&lt;User&gt;**](User.md) |  | [optional] [default to undefined]
**modules** | [**Set&lt;Module&gt;**](Module.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Role } from './api';

const instance: Role = {
    id,
    systemId,
    isActive,
    createdDate,
    updatedDate,
    createdBy,
    updatedBy,
    code,
    name,
    description,
    users,
    modules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
