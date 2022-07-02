export class NcellApp{
    public BASE_URL: string;
    public HEADERS: object;
    public CONNECTION_TYPE: string;
    public LANGUAGE_CODE: string;
    public DEVICE_TYPE: string;
    public DEVICE_MODEL: string;
    
    constructor(){
        this.BASE_URL = 'https://sca.ncell.axiata.com/adl/et/telco/selfcare/ncell/api/v1.0';
        this.HEADERS = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Connection': 'Keep-Alive',
            'User-Agent': 'okhttp/3.12.6',
        };
        this.CONNECTION_TYPE = 'wifi';
        this.LANGUAGE_CODE = '1';
        this.DEVICE_TYPE = 'android';
        this.DEVICE_MODEL = 'Realme GT Neo 2';
    }
}