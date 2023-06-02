import requests

# Replace the URL with your Next.js API endpoint URL
url = 'http://localhost:3000/api/pHData'

# Replace 'pHValue' with the actual pH data you want to send
data = {'pHValue': 7.5}

response = requests.post(url, json=data)
print(response.json())



