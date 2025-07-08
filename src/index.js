import prompt from 'prompt';
import ShemaMainPrompt from './prompts-schemas/prompt-schema-main.js'; 
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';
(async function main(){
    prompt.get(ShemaMainPrompt, async (err, choose)=> {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
        if(err) return console.error("Erro ao escolher a ferramenta", err);


        });
    prompt.start();
    console.log("Bem-vindo ao gerador de QR Codes e Passwords!");
})();