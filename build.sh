#!/bin/bash
grunt Linux64_v0.12.0 && cp nwjs/nwjs-v0.12.0-linux-x64/libffmpegsumo.so  dist/Linux64_v0.12.0/ && ./dist/Linux64_v0.12.0/nw ./dist/Linux64_v0.12.0/app.nw/
