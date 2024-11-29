import asyncio


async def py34_coro():
    """Generator-based coroutine"""
    # Using await instead of yield from
    s = await stuff()
    return s


async def py35_coro():
    """Native coroutine, modern syntax"""
    s = await stuff()
    return s


async def stuff():
    return 0x10, 0x20, 0x30


def gen():
    yield 0x10, 0x20, 0x30


async def mygen(u: int = 10):
    """Yield powers of 2."""
    i = 0
    while i < u:
        yield 2 ** i
        i += 1

    await asyncio.sleep(0.1)


async def main():
    """Run the coroutines"""
    coros = [py34_coro(), py35_coro()]
    for i, coro in enumerate(asyncio.as_completed(coros), 1):
        result = await coro  # Use await instead of yield from
        print(f"Coro {i}: {result}")

    g = gen()  # Create a generator
    print(next(g))  # Print the next value from the generator

    g = [i async for i in mygen()]
    f = [j async for j in mygen() if not (j // 3 % 5)]

    return g, f

# Run the main function using asyncio.run()
if __name__ == "__main__":
    asyncio.run(main())

    g, f = asyncio.run(main())
    print(f"Generated: {g}")
