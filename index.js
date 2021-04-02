import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style.css'
import './react/App'

const requireAll = (r) => r.keys().forEach(r)

// include js blocks
requireAll(require.context('./js/', true, /animation\.js$/))
requireAll(require.context('./js/', true, /script\.js$/))
