"""
https://www.tornadoweb.org/en/stable/
"""
import asyncio
import tornado


class MainHandler(tornado.web.RequestHandler):
    """
    This is the main handler class.
    """

    def get(self):
        """
        Handle GET requests.
        """
        self.write("Hello, world")


def make_app():
    """
    Create and return a Tornado web application.
    """
    return tornado.web.Application([
        (r"/", MainHandler),
    ])


async def main():
    """
    This is the main function.
    """
    app = make_app()
    app.listen(8888)
    await asyncio.Event().wait()

if __name__ == "__main__":
    asyncio.run(main())
