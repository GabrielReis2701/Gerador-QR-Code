import qr from 'qrcode-terminal';
import chalk from 'chalk';
async function handle(err,result){
    if(err) {
        console.error("Erro ao processar a entrada:", err);
        return;
    }
    const isSmall = result.type ==2;
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green.bold("QR Code gerado com sucesso!"));
        console.log(chalk.blue(qrcode));
    });
}

export default handle;