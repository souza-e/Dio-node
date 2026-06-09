import prompt from "prompt";
//import promptQRCode from '../prompts/prompt-qrcode.js';
import promptQrCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";





async function createQrCode() {

    prompt.get(promptQrCode, handle);

    prompt.start();
}

export default createQrCode;