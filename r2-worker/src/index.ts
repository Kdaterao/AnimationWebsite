
//this is the default codee that shows all of the capabilities for a clouflare worker 
interface Env {
  animationbucket: R2Bucket;
}




export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);

    switch (request.method) {
      case "PUT":
        await env.animationbucket.put(key, request.body);
        return new Response(`Put ${key} successfully!`);

      case "GET":
        console.log('requested key:' + key);
        const object = await env.animationbucket.get(key);

        if (object === null) {
          return new Response("Error", { status: 404 });
        };

       const headers = new Headers();
       object.writeHttpMetadata(headers);
       headers.set("Access-Control-Allow-Origin", "*");

       return new Response(object.body, { headers });

      default:
        return new Response("Method Not Allowed", {
          status: 405,
          headers: {
            Allow: "PUT, GET, DELETE",
          },
        });
    }
  },
};