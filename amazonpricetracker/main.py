from selenium import webdriver  # pip install selenium
from selenium.webdriver.chrome.options import Options
from notifypy import Notify  # pip install notifypy

# Set up notification
notification = Notify()
notification.title = "Cool Title"
notification.message = "Extracting data from Amazon"
notification.send()

# Configure Chrome options
options = Options()
options.add_argument("--headless")
options.add_argument(f"user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")

# Initialize the driver
driver = webdriver.Chrome(options=options)

# Read product URLs from file
with open("products.txt") as f:
    products = f.readlines()

# Loop through each product URL and save the page source
for i, products in enumerate(products, start=1):
    driver.get(products.strip())  # Use .strip() to remove any newline characters
    page_source = driver.page_source
    with open(f"data/{i}.html", "w", encoding="utf-8") as f:  # Write mode with encoding
        f.write(page_source)

# Close the driver after all pages are processed
driver.quit()