import type { UserRegistrationDto } from "../api/hub-api/__openapi-generated";
import { registrationApi, userActivationCodeApi } from "../api/hubApiClient.ts";
import type { AxiosResponse } from "axios";

class UserRegistrationService {
    static getInstance(): UserRegistrationService {
        return new UserRegistrationService();
    }

    async registerUser(userData: UserRegistrationDto): Promise<AxiosResponse<object>> {
        console.log("~~ Registering user:", userData);
        return registrationApi.register({
            userRegistrationDto: userData,
        });
    }

    async resendActivationCode(email: string): Promise<AxiosResponse<object>> {
        console.log("~~ Resending activation code:", email);
        return userActivationCodeApi.resend({
            userResendActivationCodeEmailDto: { email },
        });
    }

    async verifyEmail(email: string, code: string): Promise<AxiosResponse<object>> {
        console.log("~~ Resending activation code:", email);
        return userActivationCodeApi.activate({
            userCodeActivationDto: { email, code },
        });
    }
}

export default UserRegistrationService;
