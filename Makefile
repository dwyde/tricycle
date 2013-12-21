all:
	python -m tricycle.main

.PHONY: test
test:
	python -m unittest discover
