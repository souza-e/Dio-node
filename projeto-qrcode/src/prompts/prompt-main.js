import chalk from "chalk";

const mainprompt = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta(1- QRCODE ou (2- PASSWORD") ,
        pattern: /^[1,2]+$/,//regex é uma expressão regular para validar a entrada do usuário, nesse caso, apenas números 1 ou 2
        message: chalk.red("escolha apenas entre 1 e 2")   ,
        required: true

    }


];

export default mainprompt;