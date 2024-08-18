"""https://docs.aiohttp.org/en/stable/#server-example"""
from aiohttp import web


async def handle(request):
    """
    Handle the incoming request.

    Args:
      request: The incoming request object.

    Returns:
      web.Response: The response object with the greeting message.
    """
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name
    return web.Response(text=text)

app = web.Application()
app.add_routes([web.get('/', handle),
                web.get('/{name}', handle)])

if __name__ == '__main__':
    web.run_app(app)
