from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_google_search():
    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')  # Run in headless mode if needed
    driver = webdriver.Chrome(options=options)
    driver.maximize_window()

    print("Navigating to Google...")
    driver.get('https://www.google.com')

    try:
        print("Waiting for search box to be present...")
        search_box = WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.NAME, "q"))
        )
        print("Search box found!")
        search_text = "LambdaTest"
        search_box.send_keys(search_text)
        search_box.submit()

        print("Waiting for LambdaTest link...")
        lt_link = WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.XPATH, "//h3[contains(text(),'LambdaTest')]"))
        )
        lt_link.click()

        time.sleep(5)  # Adjust this if necessary

        print(f"Actual page title: {driver.title}")
        expected_title_part = "LambdaTest"
        assert expected_title_part in driver.title, f"Expected title to contain '{expected_title_part}', but got '{driver.title}'"
        
        print("TearDown initiated")
    except Exception as e:
        print(f"An error occurred: {e}")
        import traceback
        traceback.print_exc()
    finally:
        driver.quit()
