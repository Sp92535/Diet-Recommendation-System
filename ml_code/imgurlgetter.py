from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_service = Service(executable_path="/home/zeno/Desktop/ZZZ/SNS/ml_code/chromedriver")
special_characters = ['"', '*', '(', ')', '+', '-', ':', '/', '&', '?', '=',';']
def get_img(names):
    driver = webdriver.Chrome(service=chrome_service,options=chrome_options)   #add options
    urls=[]
    for name in names:
        for i in special_characters:
            name = name.replace(i,"")

        driver.get(f"https://google.com/search?tbm=isch&q={name}+food")
        thumbnails = driver.find_element(By.XPATH, "//img[contains(concat(' ', normalize-space(@class), ' '), ' ') and not(contains(concat(' ', normalize-space(@class), ' '), '  ')) and not(contains(@alt, 'Google')) and not(contains(@alt, 'India')) and string-length(normalize-space(@alt)) > 0]")
        # thumbnails = driver.find_element(By.XPATH, "//img[contains(concat(' ', translate(normalize-space(@class), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), ' '), ' ') and not(contains(concat(' ', translate(normalize-space(@class), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), ' '), '  ')) and not(contains(translate(@alt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'google')) and not(contains(translate(@alt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'day')) and string-length(normalize-space(@alt)) > 0]")
        # driver.get(url)
        # time.sleep(10)
        urls.append(thumbnails.get_attribute('src'))
    driver.quit()
    return urls