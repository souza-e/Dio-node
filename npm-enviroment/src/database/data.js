async function connectToDatabase(user, password) {

    if (user === "admin" && password === "admin") {
        console.log("Conectado ao banco de dados com sucesso!");
    } else {
        console.log("Usuário ou senha incorretos. Não foi possível conectar ao banco de dados.");
    }

}

export default connectToDatabase;