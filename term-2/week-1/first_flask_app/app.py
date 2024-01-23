from flask import Flask, abort
import json
from datetime import datetime
from random import randint

app = Flask(__name__)

@app.route("/")
def homepage():
    return """<p>Hi, welcome to my API! Here are the endpoints that are available:</p>
        <ul>
            <li>Current Time: /time</li>
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

@app.route("/some_value/<some_value>")
def some_page(some_value):
    return f"<p>You gave the value '{some_value}' in the route</p>"

@app.route("/calculator/<int:int_1>/<string:operator>/<int:int_2>")
def calculator(operator, int_1, int_2):
    match operator:
        case "add":
            result = int_1 + int_2
            operation = f"{int_1} plus {int_2}"
            display_dict = {
                "operation": operation,
                "result": result
            }
            return json.dumps(display_dict)
        case "subtract":
            result = int_1 - int_2
            operation = f"{int_1} minus {int_2}"
            display_dict = {
                "operation": operation,
                "result": result
            }
            return json.dumps(display_dict)
        case "divide":
            result = int_1 / int_2
            operation = f"{int_1} divided by {int_2}"
            display_dict = {
                "operation": operation,
                "result": result
            }
            return json.dumps(display_dict)
        case "multiply":
            result = int_1 * int_2
            operation = f"{int_1} multiplied by {int_2}"
            display_dict = {
                "operation": operation,
                "result": result
            }
            return json.dumps(display_dict)
        case _:
            abort(404)