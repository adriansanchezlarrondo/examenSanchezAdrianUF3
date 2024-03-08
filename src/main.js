import './scss/index.scss'
import { Home } from './vistas/home'

document.querySelector('main').innerHTML = Home.template
Home.script()