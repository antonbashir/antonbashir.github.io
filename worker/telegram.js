async function handle(request, env) {
  const url = 'https://api.telegram.org/bot' + env.BOT_TOKEN;
  const chat = env.CHAT_ID;
  if (request.method === 'POST') {
    await sendMessage(url, chat, await request.text())
  }
}

async function sendMessage(bot_url, chat_id, text,
  parse_mode = '',
  disable_web_page_preview = false,
  disable_notification = false,
  reply_to_message_id = 0) {

  let url = bot_url + '/sendMessage?chat_id=' + chat_id + '&text=' + text

  url = addURLOptions(url, {
    "parse_mode": parse_mode,
    "disable_web_page_preview": disable_web_page_preview,
    "disable_notification": disable_notification,
    "reply_to_message_id": reply_to_message_id
  })

  await fetch(url)
}

function addURLOptions(urlString, options = {}) {
  let url = urlString
  for (const key of Object.keys(options)) {
    if (options[key]) url += '&' + key + '=' + options[key]
  }
  return url
}

export default {
  async fetch(request, env, _) {
    await handle(request, env);
    return new Response();
  },

  async onRequestOptions() {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Max-Age': '86400',
      },
    });
  },

  async onRequest(context) {
    const response = await context.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Max-Age', '86400');
    return response;
  }
}