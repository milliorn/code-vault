"""https://docs.aiohttp.org/en/stable/#client-example"""
import asyncio
import aiohttp


async def main():
    """
    Asynchronous function that sends an HTTP GET request to 'http://python.org' 
    using aiohttp library.
    Returns:
      None
    """
    async with aiohttp.ClientSession() as session:
        async with session.get('http://python.org') as response:

            print("Status:", response.status)
            print("Content-type:", response.headers['content-type'])

            html = await response.text()
            print("Body:", html[:15], "...")

asyncio.run(main())
