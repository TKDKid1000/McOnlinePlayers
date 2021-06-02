# McOnlinePlayers
A simple script to allow tracking of online minecraft players in an html page.

## Usage
Simply dowload the onlineplayers.js script, or use this repository as a sort of cdn. Include [onlineplayers.js](https://raw.githubusercontent.com/TKDKid1000/McOnlinePlayers/main/onlineplayers.js) in your html head. You also will need jquery, I recommend getting it from Google's hosted cdn `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`, but any other way is ok too.

Then just add the code from [index.html](https://raw.githubusercontent.com/TKDKid1000/McOnlinePlayers/main/index.html)'s body tag, and your player tracker will be online!

### Bungeecord/Waterfall note
Due to how the mojang api and things works, you need to specify the `data-proxy` tag inside the div element.

#### Not Working?
There is 1 slight issue here, on a fresh, unproxied server, you don't have to do anything. But for proxies (and if you disabled it on a normal server), you must set `enable-query` to `true` in server.properties/config.yml.

## License
This code is licensed under the MIT License, all I ask is that you keep the copyright info and it's all yours!
