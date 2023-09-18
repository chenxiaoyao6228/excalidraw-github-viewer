#!/usr/bin/env sh

npm run build

cd  build

git init

git add -A

git commit -m 'deploy-to-github'

git remote add origin  git@github.com:chenxiaoyao6228/excalidraw-github-viewer.git

git push origin master:gh-pages -f

cd -

rm -rf build