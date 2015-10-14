.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'


.PHONY: clean
clean:
	rm -r bundle

.PHONY:babel
babel:

	#--------------------------------------------
	# Compiles js/app.js
	babel js/app.js --out-file js/app.jsx

	#--------------------------------------------
	#Make sure that the `build` directory exists.
	mkdir -p build

	#--------------------------------------------
	# Compiles js/app.jsx
	babel js/app.jsx --out-file build/app.js

.PHONY:js
js:
	babel --watch js/app.js --out-file build/app.js

.PHONY:all
all:
	(make css & make js & make server & wait)
