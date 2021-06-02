$(document).ready(function(){
    const element = $("[data-players]")
    const proxied = element.data("proxy") != null
    if (!proxied) {
      $.getJSON(`https://api.mcsrvstat.us/2/${element.data("players")}`, function(data) {
      if (!data.online) {
        element.append("<p class=\"offline\">Server Offline</p>")
        return
      }
      var players = data.players.uuid;
      var heads = {};
      $.each(players, function(name, uuid) {
        heads[name] = `https://crafatar.com/renders/head/${uuid}.png`
      })
      console.log(players);
      $.each(heads, function(name, image) {
          var img = document.createElement("img")
          img.src = image;
          if (element.data("size") != "null") {
            img.style.width = element.data("size")
            img.style.height = "auto"
          }
          img.classList.add("playerhead")
          $(element).append(img)
        })
      })
    } else {
      $.getJSON(`https://api.mcsrvstat.us/2/${element.data("players")}`, function(data) {
      if (!data.online) {
        element.append("<p class=\"offline\">Server Offline</p>")
        return
      }
      var players = data.players.list;
      var heads = {};
      $.each(players, function(index, name) {
        $.getJSON(`https://playerdb.co/api/player/minecraft/${name}`, function(data) {
          console.log(data.data.player.id)
          var img = document.createElement("img")
          img.src = `https://crafatar.com/renders/head/${data.data.player.id}.png`;
          if (element.data("size") != "null") {
            img.style.width = element.data("size")
            img.style.height = "auto"
          }
          img.classList.add("playerhead")
          $(element).append(img)
        })
      })
      })
      }
})