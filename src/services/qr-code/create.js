import prompt from "prompt";
import schemaQRCode from "../../prompts-schemas/prompt-shema-qr-code.js";
import handle from "./handle.js";

async function createQRCode() {

    prompt.get(schemaQRCode, handle);
    prompt.start();
}
export default createQRCode;