import './style.css'
import './react/App'

const requireAll = (r) => r.keys().forEach(r)

// include blocks
requireAll(require.context('./js/', true, /animation\.js$/))
requireAll(require.context('./js/', true, /script\.js$/))
