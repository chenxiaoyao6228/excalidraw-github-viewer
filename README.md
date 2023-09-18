# Excalidraw-github-preview

View your Excalidraw files from GitHub.

## Usage

Open the following URL in your browser: `https://chenxiaoyao6228.github.io//excalidraw-github-viewer/?` + the URL of your Excalidraw file on GitHub. 

For example, to view the Excalidraw file at `https://github.com/chenxiaoyao6228/cloudimg/blob/main/_Gragh/process.excalidraw`

the link should be: https://chenxiaoyao6228.github.io//excalidraw-github-viewer/?https://github.com/chenxiaoyao6228/cloudimg/blob/main/_Gragh/process.excalidraw

For anyone who wants to embed the Excalidraw file in your website, you can try it this way:

```html
<iframe width="100%" height="600" src="https://chenxiaoyao6228.github.io//excalidraw-github-viewer/?https://github.com/chenxiaoyao6228/cloudimg/blob/main/_Gragh/process.excalidraw" />
```

## How it works

The logic is quite simple, Github provides a raw file link for each file, for example, the raw file link for this file is: https://raw.githubusercontent.com/chenxiaoyao6228/excalidraw-github-viewer/main/README.md, all you have to do it the fetch the raw `.excalidraw` file and render it with Excalidraw app.