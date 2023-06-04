# 🌎 Globetrotter

### your personalized AI-trip planner

## TL;DR
Stressed about your upcoming vacation? Reading 20 travel blogs to create a massive itinerary? Globetrotter is here. An AI-travel planner using embedded search that finetunes a travel experience based on your preferences, location, price range and more. Sit back and relax as Globetrotter creates the perfect travel experience.

## Inspiration
We drew inspiration from the many days of working on huge google docs and sheets and trying to hit all our spots when we were on vacation. This made the process of planning more stressful and we instead wanted to outsource the planning to an AI. We also didn’t find any possible competitors or existing applications that worked on this problem space.

## What it does
Globetrotter contains data from the wikivoyage website. It searches across the space of information in the wikivoyage website using a prompt that is generated based on the user’s choices in a submitted form. This then creates an itinerary that is sent to the frontend which creates a UI that includes a breakdown of events, images generated with stable diffusion, and a map with all the locations. 

## How we built it
We first looked at useful sites that we could use LanceDB to create embeddings on. We started with Wikivoyage and we were pleasantly surprised by its capabilities. We then worked on creating the code for LanceDB to select embeddings and then generate a prompt after finetuning the parameters within LanceDB until we got an optimal output that we could then parse on the frontend. We used chakra ui, mapbox, and  React to create our responsive frontend. We used a Flask server to render requests between the Python scripts and React frontend. 

## Challenges we ran into
We ran into challenges integrating the frontend and backend because we hadn’t used many of these tools before. We also were struggling a bit to use the Google Maps API. The nested structure of Wikivoyage also makes this process much harder.

## Accomplishments that we're proud of
This is the first time we have used these technologies and worked with LLMs in a project of this scale and we are proud of its functionality.

## What's next for Globetrotter
We would want to expand the database of information out there and also create more interactivity between the user. Some features we're thinking of include export to google maps, giving ideas for airline and transportation information, and more in-depth planning skills.

## Details
Made at Amplitude's AI x Product Hackathon
This project was made at the Amplitude 2023 AI Hackathon in San Francisco. The event and development was sponsored by New Relic, LanceDB, Fennel & Continual.

## To run

In the project directory, you can run:

### `npm start`

Use OpenAI API Key
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
