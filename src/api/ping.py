from flask_restful import Resource


class PingResource(Resource):
    @staticmethod
    def get():
        query_response = "Pong!"
        return {"Response": query_response}
