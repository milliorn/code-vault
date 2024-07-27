import requests
import pprint


def get_ip():
    response = requests.get('https://api64.ipify.org?format=json').json()
    return response["ip"]


def get_location():
    ip_address = get_ip()
    response = requests.get(f'https://ipapi.co/{ip_address}/json/').json()
    location_data = {
        "ip": ip_address,
        "version": response.get("version"),
        "city": response.get("city"),
        "region": response.get("region"),
        "region code": response.get("region_code"),
        "country name": response.get("country_name"),
        "country": response.get("country_code_iso3"),
        "continent": response.get("continent_code"),
        "zip": response.get("postal"),
        "latitude": response.get("latitude"),
        "longitude": response.get("longitude"),
        "timezone": response.get("timezone"),
    }
    return location_data


pprint.pprint(get_location())
