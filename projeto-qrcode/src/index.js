import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import chalk from "chalk";
import createQrCode from "./services/qrc-code/create.js";

async function main() {

    prompt.get(mainPrompt, async (err, result) => {
        if (result.select == 1) 
            await createQrCode();
        
        if (result.select == 2) console.log(chalk.blue("Escolheu o PASSWORD"));

    });
    prompt.start();
}

main();