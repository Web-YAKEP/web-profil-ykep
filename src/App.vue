<template>
  <div id="nav">
    
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center"><a href="" class="logo"><img src="@/assets/img/logo-ykep.png" alt="" class="img-fluid"></a><div class="mr-auto text-head-yayasan">YAYASAN KARTIKA EKA PAKSI</div>
      <nav class="main-nav d-none d-lg-block">
        <ul>

          <li v-on:click="setActive('beranda')" :class="{ active: isActive('beranda') }" ><router-link class="a" to="/">Beranda</router-link></li>
          <li class="drop-down" :class="{ active: isActive('kegiatan'),active: isActive('pengurus')}"><a href="">Tentang Kami</a>
            <ul>
              <!-- <li v-on:click="setActive('kegiatan')" :class="{ active: isActive('kegiatan') }"><router-link class="a" to="/about/kegiatan">Kegiatan Yayasan</router-link></li>
              --><li v-on:click="setActive('pengurus')" :class="{ active: isActive('pengurus') }"><router-link class="a" to="/about/pengurus">Pengurus</router-link></li>
              <li v-on:click="setActive('struktur')" :class="{ active: isActive('struktur') }"><router-link class="a" to="/about/struktur">Struktur</router-link></li>
              <li v-on:click="setActive('sejarah')" :class="{ active: isActive('sejarah') }"><router-link class="a" to="/about/sejarah">Sejarah</router-link></li>
            </ul>
          </li>
          <li v-on:click="setActive('visimisi')" :class="{ active: isActive('visimisi') }"><router-link class="a" to="/visimisi">Visi Misi</router-link></li>
          <li v-on:click="setActive('program')" :class="{ active: isActive('program') }"><router-link class="a" to="/program">Program</router-link></li>
          <li v-on:click="setActive('berita')" :class="{ active: isActive('berita') }"><router-link class="a" to="/berita">Berita</router-link></li>
          <li v-on:click="setActive('kontak')" :class="{ active: isActive('kontak') }"><router-link class="a" to="/contact">Kontak</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</div>
<router-view/>
</template>

<style>
  .text-head-yayasan{
    padding-left:10px;
    font-weight: 600;
  }
  .main-nav .active > a, .main-nav .active > a:hover, .main-nav .active li:hover > a{
    color: #fff !important;
    background: #425e4f;
    padding: 10px;
    border-radius: 5px;
  }
  .main-nav a:hover{
    color: #009f65 !important;
  }
  .main-nav a {
      color: #425e4f !important;
  }
  #why-us {
    padding: 60px 125px;
  }

  @media screen and (max-width: 600px) {
    #why-us {
     padding: 34px 30px !important;
   }
 }
</style>

<script>
  export default {
    data() {
      return { activeItem: 'beranda' }
    },
    mounted(){
      if ($('.main-nav').length) {
        var $mobile_nav = $('.main-nav').clone().prop({
          class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
          $('body').toggleClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass('active');
        });

        $(document).click(function(e) {
          var container = $(".mobile-nav, .mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
              $('.mobile-nav-overly').fadeOut();
            }
          }
        });
      } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
      }
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem // no need for Vue.set()
      }
    }
  };
</script>
