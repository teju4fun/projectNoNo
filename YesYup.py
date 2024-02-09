import requests
from bs4 import BeautifulSoup

# Search term for emojis
search_term = "emojis"

# Send request to Google Search
url = f"https://www.google.com/search?q={search_term}"
response = requests.get(url)

# Parse HTML content
soup = BeautifulSoup(response.content, "html.parser")

# Find emojis by their Unicode code points
emojis = soup.find_all("span", class_="Emoji")

# Extract and print emojis
for emoji in emojis:
    print(emoji.text)
