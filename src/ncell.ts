import { Otp } from './resources/otp';
import * as readline from 'readline';

console.clear();

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


(async () => {
    // let otp = new Otp('+9779810059586');
    // var r1 = await otp.generate();
    // console.log(r1.generateOTPResponse.msisdn);

    // // rl.question('Enter OTP ', async (answer) => {
    // var r2 = await otp.validate('');
    // console.log(r2.validateOTPResponse.accessToken);
    //     rl.close();
    //   });
})();