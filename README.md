# https://hsr-hosting.vercel.app/

fetch("https://sg-wiki-api.hoyolab.com/hoyowiki/hsr/wapi/get_entry_page_list", {
    "credentials": "include",
    "headers": {
	"Accept" : "application/json, text/plain, */*",
	"Accept-Language" : "de,en-US;q=0.7,en;q=0.3",
	"Accept-Encoding" : "gzip, deflate, br, zstd",
	"x-rpc-language" : "en-us",
	"x-rpc-wiki_app" : "hsr",
	"Origin" : "https://wiki.hoyolab.com",
	"DNT" : "1",
	"Sec-GPC" : "1",
	"Referer" : "https://wiki.hoyolab.com/",
	"Sec-Fetch-Dest" : "empty",
	"Sec-Fetch-Mode" : "cors",
	"Sec-Fetch-Site" : "same-site",
	"TE" : "trailers"
    },
    "referrer": "https://wiki.hoyolab.com/",
    "body": "{\"filters\":[],\"menu_id\":\"104\",\"page_num\":1,\"page_size\":30,\"use_es\":true}",
    "method": "POST",
    "mode": "cors"
}).then(r => r.json()).then(console.log);

# https://www.npmjs.com/package/typewriter-effect
