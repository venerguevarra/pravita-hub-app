import { currentUserApi } from "../api/hubApiClient.ts";
import type { AxiosResponse } from "axios";

class UserService {
    static getInstance(): UserService {
        return new UserService();
    }

    async getCurrentUser(): Promise<AxiosResponse<object>> {
        return currentUserApi.getCurrentUser()
    }
}

export default UserService;
