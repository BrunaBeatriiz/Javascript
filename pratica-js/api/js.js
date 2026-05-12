const containerPost = document.getElementById("containerPost");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const form = document.getElementById("postForm");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts () {
    try{
        const response = await fetch(API_URL);
        const data = await response.json();

        containerPost.innerHTML = "";

        data.slice(0, 5).forEach((post) => {
            const div = document.createElement("div");
            div.classList.add("post");
            div.innerHTML = `
            <h3>${post.title.toUpperCase()}</h3>
            <p>${post.body}</p>`;
            containerPost.appendChild(div);
        });
    }catch(error){
        console.log("Erro ao buscar posts:", error);
        containerPost.innerHTML = "<p>Erro ao carregar os posts</p>";
    }
}

getPosts();

form.addEventListener("submit", async (event) => {
    event.preventDefault();


    const newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    };

    try{
        const response = await fetch (API_URL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newPost)    
        });

        const createdPost = await response.json();
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
        <h3>${createdPost.title.toUpperCase()}</h3>
        <p>${createdPost.body}</p>
        `;
        containerPost.prepend(div); // aparece no topo

        console.log("Post criado", createdPost);

        alert("Post criado com sucesso!");
        form.reset();
        getPosts();
    }catch(error){
        console.error("Erro ao criar post:", error);
        alert("erro ao criar o post!")
    }
});


async function updatePost () {
    const updatePost = {
        title: "titulo atualizado",
        body: "conteudo atualizado",
        userId: 1
    };

    try{
        const response = await fetch (`${API_URL}/1`,{
            method: "PUT",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatePost)
        });

        const updatePostResponse = await response.json();
        console.log("Post atualizado:", updatePostResponse);
        alert("Post atualizado! (simulado)");

        const postDiv = containerPost.querySelector(".post");
        if(postDiv){
            postDiv.querySelector("h3").innerText = updatePostResponse.title.toUpperCase();
            postDiv.querySelector("p").innerText = updatePostResponse.body;
        }

    } catch (error){
        console.error("Erro ao atualizar post:", error);
        alert("erro ao atualizar o post!")
    }
};

updatePost();

async function deletePost(id){

    try{
        const response = await fetch (`${API_URL}/${id}`,{
            method:"DELETE",
        });
        if(response.ok){
            console.log(`Post ${id} deletado!`);
            alert("Post deletado (simulado)");

            const postDiv = containerPost.querySelector(".post");
            if(postDiv){
                containerPost.removeChild(postDiv);
            }else{
                throw new Error("Falha ao deletar o post");
            }
        }
    }catch(error){
        console.error("Erro ao deletar post:", error);
        alert("erro ao deletar")
    }
}

deletePost(1);