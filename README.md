# Schengen Visa Calculator and Visa API

## Overview

Paul's Schengen Visa Calculator is an easy-to-use visa calculator that allows users to calculate the number of days they have spent in the Schengen Area within a 180-day period. Tourists from many countries are allows 90 days of visa-free travel within the Schengen Zone within a rolling 180-day period. This means that counting back 180 days, you are allowed to have spent 90 within the Schengen Zone.

The rolling 180-day window can make calculations confusing. Existing calculators are also not user friendly or intuitive. For example, some official calculators from the EU and elsewhere allow users to input dates more than 180 days - days that are NOT counted towards your visa. This easily leads to miscalculations and requires you to count back 180 days yourself.

This visa calculator improves usability by:

- ensuring you do NOT input ineligible dates but cutting off selection dates more than 180 days earlier
- only allows you to input FUTURE dates if you check the box on the home page

## Visa Info for Americans and Travel Advisories

The site also offers users the ability to search for visa regulations for Americans and travel advisories. Data has been scraped from the [US Department of State](https://travel.state.gov/content/travel.html) website to explain some travel information (currency limits, blank passport pages requires, etc.) and travel warnings and safety advisories.

## API

The data scraped from the US Department of State website has been made accessible in the form of easy to access APIs. There are APIs available for visa information and travel requirmenets (for American citizens, but other information is relevant to all nationalities) and safety warnings/travel advisories.

To query the API simply go to the following production endpoints:

- Visa Information: `https://calculatevisa.com/.netlify/functions/visaInfo`
- Safety Information: `https://calculatevisa.com/.netlify/functions/safetyInfo`

Likewise using `curl`, for production these can be accessed:

`curl https://calculatevisa.com/.netlify/functions/visaInfo`
`curl https://calculatevisa.com/.netlify/functions/safetyInfo`

## Tech Stack

The frontend of the project was built using **React** and the calculation functionality was written in basic **JavaScript**. Web scraping was done using **Python** with a combination of **Selenium** and **BeautifulSoup**. The APIs are accessible via **Netlify's serverless functions** for ease and accessibility.

## Disclaimer and Notices

This application is for informational purposes only. It is the user's responsibility to ensure accuracy of their visa status, safety guidelines, and travel advisories from relevant authorities. Information provided on this app can change anytime, thus Paul's Schengen Visa Calculator does not guarantee the accuracy of any of the information contained on [calculatevisa.com](https://calculatevisa.com). Users are using this wholly at their own risk.

Additionally, the content for travel advisories have not yet been formatted correctly. This is in our workflow, but for the moment the API is only accessible as one long paragraph. We will address this in the future, but for now we apologize for the inconvenience.
