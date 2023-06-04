import pickle
import openai

query_file = open("query.pkl", "rb")
qa = pickle.load(query_file)
query_file.close()

openai.api_key = ""

query = "Create a 2 day trip in Paris for a couple that likes nature in bullet list."
print(qa.run(query)) 

query = "Create a 3-day itinerary for a group of teens that are going to go from New Jersey to New York and then spend two days in New York and are sporty people who want to attend free events in a bulleted list."
print(qa.run(query))