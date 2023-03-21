$(document).ready(function() {
    console.log('teste')

    const gitProfile = 'https://api.github.com/users/rafaelranery';

    const avatar = document.querySelector('#image');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repo = document.querySelector('#repo');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const linkToGit = document.querySelector('#git-link');


    fetch(gitProfile)
        .then(function(r) {
            return r.json()
        })
        .then(function(jsonProfile) {
            avatar.src = jsonProfile.avatar_url;
            name.innerText = jsonProfile.name;
            username.innerText = jsonProfile.login;
            followers.innerText = jsonProfile.followers;
            following.innerText = jsonProfile.following;
            repo.innerText = jsonProfile.public_repos;
            linkToGit.href = jsonProfile.html_url;
        })
})