import { readFile, writeFile } from 'node:fs/promises'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createServer } from 'vite'

const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true }
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.vue')
  const markup = await renderToString(createSSRApp(App))
  const tokenValues = {
    '--ink': '#0f1424',
    '--panel': '#151a30',
    '--panel-2': '#191f39',
    '--line': 'rgba(147, 158, 204, .17)',
    '--text': '#ebe8df',
    '--muted': '#9ca4c1',
    '--faint': '#6e7697',
    '--brass': '#d1a248',
    '--teal': '#5b958a',
    '--clay': '#bd765f',
    '--blue': '#718ac0',
    '--serif': "'Fraunces', Georgia, serif",
    '--sans': "'Public Sans', Arial, sans-serif"
  }

  let css = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')
  for (const [token, value] of Object.entries(tokenValues)) {
    css = css.replaceAll(`var(${token})`, value)
  }

  const preview = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta name="argus-preview-version" content="dark-studio-v5-renderer-safe" />
    <title>ARGUS AI Studio — Dark Studio V5</title>
    <style>${css}</style>
  </head>
  <body>
    ${markup}
  </body>
</html>`

  const output = new URL('../../portfolio-preview.html', import.meta.url)
  await writeFile(output, preview)
  console.log(output.pathname)
} finally {
  await vite.close()
}
