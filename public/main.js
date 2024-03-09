fetch('/api/whoami')
  .then((res) => res.json())
  .then((json) =>        
    document.getElementsByTagName('code')[0].innerHTML = JSON.stringify(json.body))
  .catch(err => console.log(err))
