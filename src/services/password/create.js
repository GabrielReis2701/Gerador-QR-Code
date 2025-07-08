import chalk from "chalk";
import handlePassword from "./handle.js";


async function createPassword() {
    console.log(chalk.green("password generator"));
    const password = await handlePassword();
    console.log(chalk.blue("Generated Password: "), chalk.bold(password));

}

export default createPassword;