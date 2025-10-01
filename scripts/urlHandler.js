const url = new URL(process.env.BASE_URL);
url.pathname = '/api/logs';
url.searchParams.append('token', process.env.API_TOKEN);
console.log(`Accessing logs at: ${url.toString()}`);