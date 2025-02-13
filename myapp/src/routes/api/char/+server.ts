import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();

    const response = await fetch('https://sg-wiki-api.hoyolab.com/hoyowiki/hsr/wapi/get_entry_page_list', {
        method: 'POST',
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ko-KR,ko;q=0.6",
            "content-type": "application/json;charset=UTF-8",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Brave\";v=\"133\", \"Chromium\";v=\"133\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "sec-gpc": "1",
            "x-rpc-language": "ko-kr",
            "x-rpc-wiki_app": "hsr",
            "cookie": "ltoken_v2=...; ltuid_v2=...; cookie_token_v2=...; account_mid_v2=...; account_id_v2=...;", // 쿠키는 보안 문제로 저장 X
            "Referer": "https://wiki.hoyolab.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: JSON.stringify({
            filters: [],
            menu_id: "104",
            page_num: 1,
            page_size: 30,
            use_es: true
        })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
};