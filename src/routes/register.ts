import axios from "axios";

import { NcellApp } from "../models/ncellapp";
import { formatNumber } from "../utils/misc";
import { genDeviceId, genReqId, genTransId } from "../utils/generators";

// const Response = require('./models/response');
// const {
//     BASE_URL,
//     DEVICE_MODEL,
//     HEADERS,
//     DEVICE_TYPE,
//     CONNECTION_TYPE,
//     LANGUAGE
// } = require('./models/constants');

class Register extends NcellApp {
  private _mssidn: string;
  private _number: string;
  private _deviceId: string;
  private _token: string;

  constructor(number: string) {
    super();
    this._number = number;
    this._mssidn = formatNumber(number);
    this._deviceId = genDeviceId();
    this._token = "";
  }

  get mssidn(): string {
    return this._mssidn;
  }

  get number(): string {
    return this._number;
  }

  get deviceId(): string {
    return this._deviceId;
  }

  get token(): string {
    return this._mssidn;
  }

  async generateOtp() {
    let uri: string = this.BASE_URL + "/user/otp/generate";
    let requestHeader: object = this._getRequestHeaders();
    let postData: object = {
      generateOTPRequest: {
        msisdn: this.mssidn,
        deviceId: this.deviceId,
        action: "LOGIN",
      },
      requestHeader,
    };

    try {
      return (await axios.post(uri, postData, { headers: { ...this.HEADERS } })).data;
    } catch {
        throw new Error('Error generating new otp.');
    }
  }

  // async validateOtp(otp){
  //     let uri = BASE_URL + '/user/otp/validate';
  //     let requestHeader = this._getRequestHeaders();
  //     let postData = {
  //         validateOTPRequest: {
  //             msisdn: this.mssidn,
  //             deviceId: headers.deviceId,
  //             otpDetail: {
  //                 action: "LOGIN",
  //                 otp: otp
  //             }
  //         },
  //         requestHeader
  //     };

  //     try{
  //         let res = await axios.post(uri, postData, {headers: HEADERS});

  //         var tokenObj = {
  //             number: this.mssidn,
  //             deviceId: this._deviceId,
  //             accessToken: res.data.validateOTPResponse.accessToken,
  //             refreshToken: res.data.validateOTPResponse.refreshToken
  //         };

  //         this.token = utils.base64Encode(JSON.stringify(tokenObj));
  //         return new Response(res);
  //     }
  //     catch (err) {
  //         throw new Error('Error validating otp.');
  //     };
  // };

  _getRequestHeaders(action = "LOGIN"): object {
    return {
      requestId: genReqId(),
      timestamp: genTransId(),
      channel: "sca",
      deviceType: this.DEVICE_TYPE,
      deviceId: this._deviceId,
      clientip: "N/A",
      action: "LOGIN",
      connectionType: this.CONNECTION_TYPE,
      msisdn: this.mssidn,
      deviceModel: this.DEVICE_MODEL,
      location: "N/A",
      primaryMsisdn: this.mssidn,
      languageCode: this.LANGUAGE_CODE,
    };
  }
}

module.exports = Register;
