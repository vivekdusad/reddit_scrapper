import selenium
import time
from selenium import webdriver
baseUrl = "https://www.reddit.com"

from webdriver_manager.chrome import ChromeDriverManager
titles =[]
driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get("https://www.reddit.com/r/stories/")
time.sleep(2)

TITLEDEV = driver.find_elements_by_class_name("_1qeIAgB0cPwnLhDF9XSiJM")

for div in TITLEDEV:
    titles.append(div.text.strip())