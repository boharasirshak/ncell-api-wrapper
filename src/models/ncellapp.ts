import { 
    genDeviceId, 
    genReqId, 
    genTransId 
} from "../utils/generators";
import { formatNumber } from "../utils/misc";

interface RequestHeaders {
    requestId: string;
    timestamp: string;
    channel: string;
    deviceType: string;
    deviceId: string;
    clientip: string;
    action: string;
    connectionType: string;
    msisdn: string;
    deviceModel: string;
    location: string;
    primaryMsisdn: string;
    languageCode: string;
    [key: string]: string;
  }
  

export class NcellApp{
    public baseUrl: string;
    public deviceType: string;
    public baseHeaders: object;
    public deviceModel: string;
    public languageCode: string;
    public connectionType: string;

    private _deviceId: string;
    private _mssidn: string;
    private _number: string;
    
    constructor(number: string){
        this.baseUrl = 'https://sca.ncell.axiata.com/adl/et/telco/selfcare/ncell/api/v1.0';
        this.baseHeaders = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Connection': 'Keep-Alive',
            'User-Agent': 'okhttp/3.12.6',
        };
        this.connectionType = 'wifi';
        this.languageCode = '1';
        this.deviceType = 'android';
        this.deviceModel = 'Realme GT Neo 2';

        this._number = number;
        this._deviceId = genDeviceId();
        this._mssidn = formatNumber(number);
    }

    get mssidn(): string {
        return this._mssidn;
    }

    get number(): string {
      return this._number;
    }

    get token(): string {
      return this._mssidn;
    }

    get deviceId(): string {
        return this._deviceId;
    }

    getRequestHeaders(mssidn: string, action = "LOGIN"): RequestHeaders {
        return <RequestHeaders>{
          requestId: genReqId(),
          timestamp: genTransId(),
          channel: "sca",
          deviceType: this.deviceType,
          deviceId: this.deviceId,
          clientip: "N/A",
          action: "LOGIN",
          connectionType: this.connectionType,
          msisdn: mssidn,
          deviceModel: this.deviceModel,
          location: "N/A",
          primaryMsisdn: mssidn,
          languageCode: this.languageCode,
        };
      }
}