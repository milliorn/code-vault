import requests
import time
import asyncio
import aiohttp
import multiprocessing

session = None


def set_global_session():  # Function to set the global session
    global session  # Declare the session as global
    if not session:  # If the session is not set
        session = requests.Session()  # Set the session


def download_site_global(url):  # Function to download a site
    with session.get(url) as response:  # Get the response from the URL
        print(f"Read {len(response.content)} from {url}")  # Print the response


def download_all_sites_global(sites):  # Function to download all the sites
    with multiprocessing.Pool(initializer=set_global_session) as pool:  # Create a pool
        # Map the download site function to the sites
        pool.map(download_site_global, sites)


def download_site(url, session):  # Function to download a site
    with session.get(url) as response:  # Get the response from the URL
        print(f"Read {len(response.content)} from {url}")  # Print the response


def download_all_sites(sites):  # Function to download all the sites
    with requests.Session() as session:  # Create a session
        for url in sites:  # Loop over the sites
            download_site(url, session)  # Download the site


async def download_site(session, url):  # Function to download a site
    async with session.get(url) as response:  # Get the response from the URL
        # Print the response
        print(f"Read {response.content_length} from {url}")


async def download_all_sites(sites):  # Function to download all the sites
    async with aiohttp.ClientSession() as session:  # Create a session
        tasks = []  # List to store tasks
        for url in sites:  # Loop over the sites
            task = asyncio.ensure_future(
                download_site(session, url))  # Create a task
            tasks.append(task)  # Append the task to the list
        # Gather the tasks
        await asyncio.gather(*tasks, return_exceptions=True)

if __name__ == "__main__":  # If the script is run directly
    sites = [  # List of sites
        "https://www.jython.org",
        "http://olympus.realpython.org/dice",
    ] * 80  # Multiply the list by 80
    start_time = time.time()  # Get the start time

    # download_all_sites(sites)  # Download all the sites
    # asyncio.get_event_loop().run_until_complete(download_all_sites(sites))
    download_all_sites_global(sites)  # Download all the sites

    duration = time.time() - start_time  # Calculate the duration

    print(f"Downloaded {len(sites)} in {
          duration} seconds")  # Print the duration
