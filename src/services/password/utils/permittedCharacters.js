async function permittedCharacters() {
    let permittedCharacters = [];
    if(process.env.UPPERCASE_LETTERS === "true") {
        await permittedCharacters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if(process.env.LOWERCASE_LETTERS === "true") {
        await permittedCharacters.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if(process.env.NUMBERS === "true") {
        await permittedCharacters.push(..."0123456789");
    }
    if(process.env.SPECIAL_CHARACTERS === "true") {
        await permittedCharacters.push(..."!@#$%^&*()_+[]{}|;:,.<>?`~");
    }

    return permittedCharacters;
}

export default permittedCharacters;