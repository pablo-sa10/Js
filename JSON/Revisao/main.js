const url = "http://jsonplaceholder.typicode.com/posts"

const loading = document.getElementById('loading')
const postLoad = document.getElementById('post')


async function getAllPosts(){
    const response = await fetch(url)

    const data = await response.json()

    loading.classList.add("hide")

    data.map((post) => {
        const div = document.createElement("div")
        const title = document.createElement("h1")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title;
        body.innerHTML = post.body;
        link.innerText = "Ler"
        link.setAttribute("href", `/post.html?id=${post.id}`)

        console.log(post.body)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postLoad.appendChild(div)
    })
}

getAllPosts()




