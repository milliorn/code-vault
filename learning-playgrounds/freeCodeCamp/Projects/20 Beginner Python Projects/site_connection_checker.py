import urllib.request as urlib


def site_checker(url):
    print("Checking connectivity ")
    response = None
    try:
        response = urlib.urlopen(url)
        print("Connected to", url, "successfully")
        print("The response code was: ", response.getcode())
    except Exception as ex:
        print(ex)
    finally:
        if response is not None:
            response.close()


input_url = input("Enter the url you wish to check connectivity: ")
site_checker(input_url)
