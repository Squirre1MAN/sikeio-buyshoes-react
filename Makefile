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

.PHONY:js
js:
	babel --watch js --out-dir build

.PHONY:all
all:
	(make css & make js & make server & wait)
