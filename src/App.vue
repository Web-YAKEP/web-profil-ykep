<template>
  <div id="nav">
   <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center"><a href="index.html" class="logo"><img src="@/assets/img/logo-ykep.png" alt="" class="img-fluid"></a><div class="mr-auto" style="padding-left:10px;">Yayasan Kartika Eka Paksi</div>
      <nav class="main-nav d-none d-lg-block">
        <ul>

          <li v-on:click="setActive('beranda')" :class="{ active: isActive('beranda') }" ><router-link class="a" to="/">Beranda</router-link></li>
          <li class="drop-down" :class="{ active: isActive('kegiatan'),active: isActive('pengurus')}"><a href="">Tentang Kami</a>
            <ul>
              <li v-on:click="setActive('kegiatan')" :class="{ active: isActive('kegiatan') }"><router-link class="a" to="/about/kegiatan">Kegiatan Yayasan</router-link></li>
              <li v-on:click="setActive('pengurus')" :class="{ active: isActive('pengurus') }"><router-link class="a" to="/about/pengurus">Pengurus</router-link></li>
              <li v-on:click="setActive('struktur')" :class="{ active: isActive('struktur') }"><router-link class="a" to="/about/struktur">Struktur</router-link></li>
              <li v-on:click="setActive('sejarah')" :class="{ active: isActive('sejarah') }"><router-link class="a" to="/about/sejarah">Sejarah</router-link></li>
            </ul>
          </li>
          <li v-on:click="setActive('visimisi')" :class="{ active: isActive('visimisi') }"><router-link class="a" to="/visimisi">Visi Misi</router-link></li>
          <li v-on:click="setActive('berita')" :class="{ active: isActive('berita') }"><router-link class="a" to="/berita">Berita</router-link></li>
          <li v-on:click="setActive('program')" :class="{ active: isActive('program') }"><router-link class="a" to="/program">Program</router-link></li>
          <li v-on:click="setActive('kontak')" :class="{ active: isActive('kontak') }"><router-link class="a" to="/contact">Kontak</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
  </div>
  <router-view/>
</template>

<script>
  export default {
    data() {
      return { activeItem: 'beranda' }
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem // no need for Vue.set()
      }
    }
  }
</script>

<style>

</style>
