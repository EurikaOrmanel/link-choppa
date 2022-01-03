# Link Chopper

## Overview:
A simple link-shortner application.

##Usage(locally)
`$npm install && npm test `


##Homepage:
Click [here](https://linkchoppa.herokuapp.com/)


|Endpoint | Description | Method | Params |
|---------|-------------|--------|--------|
|/        | Home   | GET    |
|/url/append   | Create new shortened url | POST | {url:url to be shortened goes here} |
| /url/all | Get all shortened urls | GET |    |
| /url/update/slug goes here| PATCH |  {url: new url goes here} |
|/slug goes here | visit a shortned link | GET |   |
|/slug goes herer | delete a shortened url | |

##Note
all end points return HTTP status code 404 when it encounters error.
