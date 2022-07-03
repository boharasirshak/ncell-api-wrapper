import { ResponseHeader } from "./base";

export interface GenerateOtpResponse {
  responseHeader: ResponseHeader;
  generateOTPResponse: {
    msisdn: string;
    subscriberStatus: string;
  };
};

export interface ValidateOtpResponse {
  validateOTPResponse: {
    msisdn: string;
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
  };
  responseHeader: ResponseHeader;
}
