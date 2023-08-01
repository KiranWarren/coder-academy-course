from flask import Flask
import json
from datetime import datetime
from random import randint

app = Flask(__name__)

@app.route("/")
def homepage():
    return """<p>Hi, welcome to my API! Here are the endpoints that are available:</p>
        <ul>
            <li>Current TimeL /time</li>
            <li>Educator Info: /educators</li>
        </ul>"""

@app.route("/time")
def current_time():
    time_dict = {"current time": str(datetime.now().strftime('%H:%M'))}
    return json.dumps(time_dict)

@app.route("/educators")
def educators():
    educator_dict = {
        "educators": [
            {
                "Name": "Oliver",
                "Specialty": "Automated testing"
            },
            {
                "Name:": "Jairo",
                "Specialty": "Discrete maths"
            }
        ]
    }
    return json.dumps(educator_dict)

@app.route("/coinflip")
def flip():
    result = "heads"
    if randint(1,2) == 1:
        result = "tails"
    coin_flip = {
        "result": result
    }
    return json.dumps(coin_flip)