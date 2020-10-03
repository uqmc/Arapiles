# TODO: Add unit testing
# TODO: Upload to Docker Hub
# TODO: Add doc strings
# TODO: Add copyright notices to file headers

import os

from flask import Flask, send_from_directory

from utils import string_to_bool

app = Flask(__name__, static_folder="front/public")

debug_mode = string_to_bool(os.environ["PRODUCTION"])


# TODO: Serve React application in prod mode.
#  Else serve page describing that app is in dev mode.

@app.route("/")
def serve():
    """ Serves React App """
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:path>")
def static_proxy(path):
    """ Static folder serve """
    file_name = path.split("/")[-1]
    dir_name = os.path.join(app.static_folder, "/".join(path.split("/")[:-1]))
    if os.path.isdir(os.path.join(dir_name, file_name)):
        file_name += "/index.html"
    return send_from_directory(dir_name, file_name)


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=3000,
        debug=debug_mode
    )
