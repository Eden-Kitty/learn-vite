// const files = import.meta.globEager('./modules/*.js')
// const modules = {}

// for (const key in files) {
//   if (Object.prototype.hasOwnProperty.call(files, key)) {
//     modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key].default
//   }
// }

// alert(JSON.stringify(modules))
import Home from './modules/home'
import Gpo from './modules/gpo'
export default [...Home, ...Gpo]
