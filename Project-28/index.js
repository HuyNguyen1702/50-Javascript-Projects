const APIURL = "https://api.github.com/users/";
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(userName) {
  try {
    const { data } = await axios(APIURL + userName);
    createCardUser(data);
    getRepos(userName);
  } catch (err) {
    if(err.response.status == 404){
        createErrorCard('No profile with this user name founded');
    }
  }
}

async function getRepos(userName){
    try {
        const { data } = await axios(APIURL + userName + '/repos?sort=created');
        addReposToCard(data);
    } catch (err) {
        createErrorCard('Problem fetching repos');
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const user = search.value;

    if(user){
        getUser(user);
        search.value = '';
    }
})

function createCardUser(user){
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
        <li>${user.followers} Followers</li>
        <li>${user.following} Following</li>
        <li>${user.public_repos} Repos</li>
      </ul>

      <div id="repos">           
      </div>
    </div>
  </div>
    `

    main.innerHTML = cardHTML;
}

function addReposToCard(repos){ 
    const reposEl = document.getElementById('repos');
    
    repos.slice(0,5).forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    })
}

function createErrorCard(msg){
    const cardHTML = `
        <div class='card'>
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML;
}