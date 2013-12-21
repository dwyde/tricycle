import json


class ExercisesToJSON(json.JSONEncoder):
	""" A JSON encoder that knows how to handle `Exercise` objects. """
	
	def default(self, obj):
		""" Called by Python's JSON encoder; e.g., `json.dumps()`. """
		try:
			return obj.to_json()
		except AttributeError:
			return super(ExercisesToJSON, self).default(obj)


def serialize_exercises(*exercises):
	return json.dumps(exercises, cls=ExercisesToJSON)
