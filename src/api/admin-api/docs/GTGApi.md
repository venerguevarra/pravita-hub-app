# GTGApi

All URIs are relative to *http://localhost:9001*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gtg**](#gtg) | **GET** /gtg | |

# **gtg**
> StatusDto gtg()


### Example

```typescript
import {
    GTGApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GTGApi(configuration);

const { status, data } = await apiInstance.gtg();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StatusDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

