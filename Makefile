all:
	python -m exercises.main

.PHONY: test
test:
	python -m unittest discover
