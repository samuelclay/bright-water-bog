thumbnails:
	mkdir -p ./images/thumbnails
	bash -c 'for img in ./images/*.jpg; do convert "$$img" -resize 1000x1000\> -auto-orient "./images/thumbnails/$$(basename "$$img")"; done'
serve:
	jekyll serve --config _config.yml,_config_dev.yml
