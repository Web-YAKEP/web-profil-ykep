import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/Beranda.vue'
import About from '../views/Tentang.vue'
import AboutPengurus from '../components/Pengurus.vue'
import AboutStruktur from '../components/Struktur.vue'
import AboutSejarah from '../components/Sejarah.vue'
import Visimisi from '../components/VisiMisi.vue'
import Program from '../components/Program.vue'
import Berita from '../components/Berita.vue'
import Kontak from '../components/Kontak.vue'
import ProfilPT from '../components/ProfilPT.vue'
import ProfilPendidikan from '../components/ProfilPendidikan.vue'
import BacaBerita from '../components/BacaBerita.vue'

const routes = [
  {
    path: '/',
    name: 'beranda',
    component: Beranda
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    children: [
      {
        path: 'pengurus',
        name: 'aboutpengurus',
        component: AboutPengurus,         
      },
      {
        path: 'struktur',
        name: 'aboutstruktur',
        component: AboutStruktur,         
      },
      {
        path: 'sejarah',
        name: 'aboutsejarah',
        component: AboutSejarah,         
      }        
    ],
    props: true
  },
  {
    path: '/profil-pt',
    name: 'profil-pt',
    component: ProfilPT
  },
  {
    path: '/profil-pendidikan',
    name: 'profil-pendidikan',
    component: ProfilPendidikan 
  },
  {
    path: '/baca-berita',
    name: 'bacaberita',
    component: BacaBerita
  },
  {
    path: '/visimisi',
    name: 'visimisi',
    component: Visimisi
  },
  {
    path: '/program',
    name: 'program',
    component: Program
  },
  {
    path: '/berita',
    name: 'berita',
    component: Berita
  },
  {
    path: '/contact',
    name: 'kontak',
    component: Kontak
  }
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/About.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
