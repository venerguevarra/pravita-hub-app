# JWTDecoderApi

All URIs are relative to _http://localhost:9001_

| Method                | HTTP request              | Description |
| --------------------- | ------------------------- | ----------- |
| [**decode**](#decode) | **GET** /api/token/decode |             |

# **decode**

> { [key: string]: any; } decode()

### Example

```typescript
import { JWTDecoderApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new JWTDecoderApi(configuration);

const { status, data } = await apiInstance.decode();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**{ [key: string]: any; }**

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
