import chalk from "chalk";


const promptQRCode = [
    {
        name: "link",
        description: chalk.green("Digite o link para gerar o QR Code"),


    },

    {
        name: "type",
        description: chalk.green("Escolha o tipo do QR Code (1 - NORMAL, 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        massage: chalk.red("Escolha apenas 1 ou 2"),
        required: true
    },


];



export default promptQRCode;