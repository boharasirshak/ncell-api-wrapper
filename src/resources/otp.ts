import axios from "axios";

import { NcellApp } from "../models/ncellapp";
import { GenerateOtpResponse, ValidateOtpResponse } from "../models/otp";

export class Otp extends NcellApp {
  private _token = "";

  constructor(number: string) {
    super(number);
  }

  async generate() {
    let uri = this.baseUrl + "/user/otp/generate";
    let requestHeader = this.getRequestHeaders(this.mssidn);
    let postData = {
      generateOTPRequest: {
        msisdn: this.mssidn,
        deviceId: this.deviceId,
        action: "LOGIN",
      },
      requestHeader,
    };

    try {
      return (
        await axios.post<GenerateOtpResponse>(uri, postData, {
          headers: { ...this.baseHeaders },
        })
      ).data;
    } catch (err) {
      throw new Error("Error generating new otp.");
    }
  }

  async validate(otp: string) {
    let uri = this.baseUrl + "/user/otp/validate";
    let requestHeader = this.getRequestHeaders(this.mssidn);
    let postData = {
      validateOTPRequest: {
        msisdn: this.mssidn,
        deviceId: requestHeader.deviceId,
        otpDetail: {
          action: "LOGIN",
          otp: otp,
        },
      },
      requestHeader,
    };

    try {
      return (
        await axios.post<ValidateOtpResponse>(uri, postData, {
          headers: { ...this.baseHeaders },
        })
      ).data;
    } catch (err) {
      throw new Error("Error validating otp.");
    }
  }
}
