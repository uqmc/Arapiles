# TODO: Add unit testing
# TODO: Upload to Docker Hub
# TODO: Add doc strings
# TODO: Add copyright notices to file headers
# TODO: Add licensing for assets

import os

from flask import Flask, send_from_directory
from flask_restful import Api

from api.ping import PingResource
from utils import string_to_bool

app = Flask(__name__, static_folder="front/public/")
api = Api(app)

debug_mode = string_to_bool(os.environ["PRODUCTION"])


# TODO: Serve React application in prod mode.
#  Else serve page describing that app is in dev mode.

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path != "" and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


api.add_resource(PingResource, "/api/ping")

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=3000,
        debug=debug_mode
    )
