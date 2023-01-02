import 'zx/globals'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

cd(path.join(ROOT, 'SCOW'))
await $`buf generate`
fs.copySync(
  path.join(ROOT, 'SCOW', 'libs', 'protos', 'generated'),
  path.join(ROOT, 'src', 'protos', 'generated')
)
