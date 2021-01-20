async function getpfp(githublink){

  let data = await fetch(githublink).then(response => {if(response.ok){
    return response
  }else{alert('404 USERNAME NOT FOUND');
}})

  let parsedData = await data.json();
  let avatar = parsedData.avatar_url;
  return avatar;
}

const username = document.getElementById('username');

username.addEventListener("keydown", 
function(e){
  if(e.code === "Enter"){
    console.log('listened')
    let name = document.getElementById('username').value
    if(name !== null){
      getpfp('https://api.github.com/users/' + name).then(response => {
      document.getElementById('pfp').src = response;
    })} else {console.log ('no user image today :(')}


    document.getElementById('username').value = "";
    document.getElementById("buttoni").onclick = () => {window.open('https://github.com/' + name, '_blank'); return false;}
  }
})

