import { currentUserApi } from "../api/hubApiClient.ts";
import type { CurrentUserDto } from "../api/hub-api/__openapi-generated";

class UserService {
    static getInstance(): UserService {
        return new UserService();
    }

    async getCurrentUser(): Promise<CurrentUserDto> {
        const user = await currentUserApi.getCurrentUser();
        return user.data;
    }
}

export default UserService;
