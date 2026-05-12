const API_URL = "http://localhost:3000/usuarios";
const containerUsuarios = document.getElementById("containerUsuarios");
const form = document.getElementById("usuarioForm");

async function getUsuarios() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        containerUsuarios.innerHTML = "";
        data.forEach(u => {
            const div = document.createElement("div");
            div.textContent = `${u.nome} - ${u.email}`;
            containerUsuarios.appendChild(div);
        });
    } catch (err) {
        console.error("Erro ao buscar usuários:", err);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email })
        });
        const novoUsuario = await res.json();
        console.log("Usuário criado:", novoUsuario);

        form.reset();
        getUsuarios(); // Atualiza a lista
    } catch (err) {
        console.error("Erro ao criar usuário:", err);
    }
});

// Carregar lista ao iniciar
getUsuarios();
