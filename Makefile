check: lint test

lint:
	./node_modules/.bin/jshint *.js lib test

test:
	node $(NODE_OPTS) --require should --test

.PHONY: check lint test
