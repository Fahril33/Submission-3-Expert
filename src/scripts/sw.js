import 'regenerator-runtime'
import CacheHelper from './utils/cache-helper'

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/48.png',
  './icons/72.png',
  './icons/96.png',
  './icons/128.png',
  './icons/192.png',
  './icons/384.png',
  './icons/512.png',
  './index.html',
  './logo_white.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js'
]

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...')
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))

  // TODO: Caching App Shell Resource
})

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...')
  console.log('Deleting Old Caches ...')
  event.waitUntil(CacheHelper.deleteOldCache())

  // TODO: Delete old caches
})

self.addEventListener('fetch', (event) => {
//   console.log(event.request)
  console.log('Apply stale while revalidate')
  event.respondWith(CacheHelper.revalidateCache(event.request))

  // event.respondWith(fetch(event.request))
  // TODO: Add/get fetch request to/from caches
})
