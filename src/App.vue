<template>
  <div id="nav">
    
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center"><a href="" class="logo"><img src="@/assets/img/logo-ykep.png" alt="" class="img-fluid"></a><div class="mr-auto text-head-yayasan">YAYASAN KARTIKA EKA PAKSI</div>
      <nav class="main-nav d-none d-lg-block">
        <ul>

          <li v-on:click="setActive('beranda')" :class="{ active: isActive('beranda') }" ><router-link class="a" to="/">Beranda</router-link></li>
          <li class="drop-down" :class="{ active: isActive('pengurus') ||  isActive('struktur') || isActive('sejarah')}"><a href="">Tentang Kami</a>
            <ul>
              <li v-on:click="setActive('pengurus')" :class="{ active: isActive('pengurus') }"><router-link class="a" to="/about/pengurus">Pengurus</router-link></li>
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

<footer id="footer" class="section-bg bg-3 mt-5">
  <div class="footer-top bg-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="footer-info text-center">
            <img class="img-footer" src="@/assets/img/logo-ykep.png" >
            <br>
            <br>
            <p>Yayasan Kartika Eka Paksi</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pl-5">
          <div class="footer-links">
            <h4>Peta Situs</h4>
            <ul>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Beranda</a></li>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Tentang Kami</a></li>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Visi Misi</a></li>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Berita</a></li>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Program</a></li>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Kontak</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="footer-links">
            <h4>Tautan Terkait</h4>
            <ul>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Unjani</a></li>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Aston</a></li>
              <li><i class="fa fa-chevron-right "></i>  <a href="">Green Valey Water Park</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="social-links">
            <h4>Kontak Kami</h4>
            <div class="row">
              <div class="col-2 text-right pr-0">
                <i class="fa fa-home text-white" style="font-size: 24px;" aria-hidden="true"></i>
              </div>
              <div class="col-10">
                <p class="text-left mb-3">
                  Jalan Medan Merdeka Tim No. 7,
              RT.2/RW.1, Gambir, Kota Jakarta Pusat,
              Daerah Khusus Ibu Kota 10110
                </p>  
              </div>
            </div>
             <div class="row">
              <div class="col-2 text-right pr-0">
                <i class="fa fa-phone text-white" style="font-size: 24px;" aria-hidden="true"></i>
              </div>
              <div class="col-10">
                <p class="text-left mb-3">
                 (021) 23549153
                </p>  
              </div>
            </div>
             <div class="row">
              <div class="col-2 text-right pr-0">
                <i class="fa fa-envelope text-white" style="font-size: 24px;" aria-hidden="true"></i>
              </div>
              <div class="col-10">
                <p class="text-left m-0">
                  abcdefgh@gmail.com
                </p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="copyright">
      <strong>Copyright &copy; 2021 Sistem Informasi YKEP</strong>, All Rights Reserved.
    </div>
  </div>
</footer>
</template>

<style>
  .text-head-yayasan{
    padding-left:10px;
    font-weight: 600;
  }
  .main-nav .active > a, .main-nav .active > a:hover{
    color: #fff !important;
    background: #425e4f;
    padding: 10px;
  }
  .main-nav a:hover, .main-nav li:hover > a{
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
        this.activeItem = menuItem
      }
    }
  };
</script>
