import requests
from bs4 import BeautifulSoup


# Function to scrape a website
def scrape_site(url, parser='html.parser'):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, parser)
        return soup
    else:
        print(f"Failed to retrieve {url}")
        return None


# Scraping Wikipedia
def scrape_wikipedia():
    url = "https://en.wikipedia.org/wiki/Web_scraping"
    soup = scrape_site(url)

    if soup:
        title = soup.find('h1', {'id': 'firstHeading'}).text
        print(f"Title: {title}")

        first_paragraph = soup.find('p').text
        print(f"First Paragraph: {first_paragraph}\n")

def scrap_flipkart_laptops():
    url = 'https://www.amazon.in/s?k=Laptop'

    # Add headers to mimic a browser request
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Connection': 'keep-alive',
    'Referer': 'https://www.google.com/',
    'Upgrade-Insecure-Requests': '1'
    }

    # Send an HTTP request to the page
    response = requests.get(url, headers=headers)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.content, 'lxml')

        # Find all product containers (Flipkart uses <div> with class '_1AtVbE')
        product_containers = soup.find_all('div', class_='_1AtVbE')

        # Loop through the product containers and extract details
        for container in product_containers:
            # Extract the product title (class '_4rR01T' for laptops)
            title = container.find('div', class_='_4rR01T')

            # Extract the price (class '_30jeq3')
            price = container.find('div', class_='_30jeq3')

            if title and price:
                print(f"Product: {title.text.strip()} - Price: {price.text.strip()}")
    else:
        print(f"Failed to retrieve data. HTTP Status Code: {response.status_code}")

# Main function to run scrapers
def main():
    print("Scraping Wikipedia...\n")
    #scrape_wikipedia()

    print("Scraping Flipkart...\n")
    scrap_flipkart_laptops()

if __name__ == "__main__":
    main()
