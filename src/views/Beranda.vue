<template>
	<div class="beranda">
		<div id="carouselExampleIndicators" class="carousel slide mt-4em" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100" src="@/assets/img/education.png" alt="First Slide">
					<div class="carousel-caption d-none d-md-block text-right">
						<h1 id = "animated-example" class = "animated fadeInLeft">
							Pendidikan
						</h1>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="@/assets/img/education.png" alt="Second Slide">
					<div class="carousel-caption d-none d-md-block text-center">
						<h1 id = "animated-example" class = "animated fadeInLeft">
							Hotel
						</h1>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="@/assets/img/education.png" alt="Third Slide">
					<div class="carousel-caption d-none d-md-block text-left">
						<h1 id = "animated-example" class = "animated fadeInLeft">
							Pertanian
						</h1>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
		<main id="main">
			<section id="why-us" class="why-us">
				<div class="container-fluid" data-aos="fade-up">
					<header class="section-header">
						<h3>Sekilas Tentang YKEP</h3>
						<p>Yayasan Kartika Eka Paksi</p>
						<div class="divider-custom">
							<div class="divider-custom-line"></div>
						</div>
					</header>
					<div class="row mt-3">
						<div class="col-md-12">
							<div class="why-us-content text-justify">
								<p>Yayasan   Kartika   Eka   paksi  merupakan  Yayasan  yang  senantiasa  bersemangat  dalam  bekerja,
									memegang  teguh  kejujuran  dalam  berusaha  untuk  mencapai  kemakmuran  guna  meningkatkan
									kesejahteraan   Keluarga   Besar   Angkatan   Darat,   dan  memiliki  daya  tahan  menghadapi  segala
									tantangan   dalam    rangka    mendukung    keberhasilan   tugas   dan   tercapainya   cita-cita   mulia
									TNI Angkatan Darat, yaitu keluhuran nusa dan bangsa serta keprajuritan sejati. Yayasan mempunyai
								maksud   dan   tujuan   di bidang   Sosial,   Keagamaan   dan   kemanusiaan.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section id="about" class="about bg-1">
				<div class="row" data-aos="fade-up">
						<div class="col-lg-5 col-md-6">
							<div class="about-img" data-aos="fade-right" data-aos-delay="100">
								<img src="@/assets/img/ketua-ykep.png" alt="">
							</div>
						</div>
						<div class="col-lg-7 col-md-6 text-sambutan">
							<div class="about-content text-justify" data-aos="fade-left" data-aos-delay="100">
								<p>Puji dan syukur marilah tiada hentinya kita panjatkan kehadirat Tuhan Yang Maha Esa, atas limpahan karunia dan hidayah-Nya, Sehingga kita masih dapat melaksanakan dengan baik tugas dan kewajiban kita semua. Buku "Membangun Negeri, Bersama Yayasan Kartika Eka Paksi" ini merupakan rangkaian kegiatan formal maupun non-formal yang mewarnai perjalanan dinas saya selama pengabdian menjadi KEtua Yayasan Kartika Eka Paksi. Buku ini disusun sebagai pengingat bahwa dalam hidup ini banyak sekali hal yang patut disyukuri sekaligus memberikan gambaran bahwa kegiatan dan pengalaman dalam keseharian kita hendaknya mampu memberikan manfaat yang sebesar-besarnya bagi satuan, masyarakat serta bangsa dan negara. Akhirnya, saya ucapkan terima kasih kepada semua pihak yang telah ikut mambantu proses penyusunan buku ini. Saya berharap adanya berbagai masukan yang konstruktif sehingga kita semua dapat mengambil hikmah dari setiap bagian hidup.</p>
							</div>
						</div>
					</div>
			</section>

			<section id="clients" class="clients">
				<div class="container" data-aos="zoom-in">
					<header class="section-header text-center">
						<h3>Berita Terkini</h3>
						<div class="divider-custom-2">
							<div class="divider-custom-line-2"></div>
						</div>
					</header>
					<div class="row">
						<div class="col-3 text-center">
							<div class="card">
								<img class="card-img-top pict-berita" src="@/assets/img/foto-berita.png" alt="Card image cap">
								<div class="card-body card-berita">
									<center>
										<div class="card head">
											<div class="card-body tag-head">
												Unjani
											</div>
										</div>
									</center>
									<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
									<p class="card-text	tag-footer m-0">
										dalam
										<br>
										unjani.ac.id
									</p>
									<div class="divider-custom-2 m-1">
										<div class="divider-custom-line-2"></div>
									</div>
									<p class="card-text	tag-footer">
										1 November 2021
									</p>
								</div>
							</div>
							<button class="btn btn-sm btn-warning mt-2">continue reading</button>
						</div>
						<div class="col-3 text-center">
							<div class="card">
								<img class="card-img-top pict-berita" src="@/assets/img/foto-berita.png" alt="Card image cap">
								<div class="card-body card-berita">
									<center>
										<div class="card head">
											<div class="card-body tag-head">
												Unjani
											</div>
										</div>
									</center>
									<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
									<p class="card-text	tag-footer m-0">
										dalam
										<br>
										unjani.ac.id
									</p>
									<div class="divider-custom-2 m-1">
										<div class="divider-custom-line-2"></div>
									</div>
									<p class="card-text	tag-footer">
										1 November 2021
									</p>
								</div>
							</div>
							<button class="btn btn-sm btn-warning mt-2">continue reading</button>
						</div>
						<div class="col-3 text-center">
							<div class="card">
								<img class="card-img-top pict-berita" src="@/assets/img/foto-berita.png" alt="Card image cap">
								<div class="card-body card-berita">
									<center>
										<div class="card head">
											<div class="card-body tag-head">
												Unjani
											</div>
										</div>
									</center>
									<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
									<p class="card-text	tag-footer m-0">
										dalam
										<br>
										unjani.ac.id
									</p>
									<div class="divider-custom-2 m-1">
										<div class="divider-custom-line-2"></div>
									</div>
									<p class="card-text	tag-footer">
										1 November 2021
									</p>
								</div>
							</div>
							<button class="btn btn-sm btn-warning mt-2">continue reading</button>
						</div>
						<div class="col-3 text-center">
							<div class="card">
								<img class="card-img-top pict-berita" src="@/assets/img/foto-berita.png" alt="Card image cap">
								<div class="card-body card-berita">
									<center>
										<div class="card head">
											<div class="card-body tag-head">
												Unjani
											</div>
										</div>
									</center>
									<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
									<p class="card-text	tag-footer m-0">
										dalam
										<br>
										unjani.ac.id
									</p>
									<div class="divider-custom-2 m-1">
										<div class="divider-custom-line-2"></div>
									</div>
									<p class="card-text	tag-footer">
										1 November 2021
									</p>
								</div>
							</div>
							<button class="btn btn-sm btn-warning mt-2">continue reading</button>
						</div>
					</div>
				</div>
			</section>

			<section id="testimonials" class="testimonials bg-5 mb-5">
				<div class="container" data-aos="zoom-in">
					<header class="section-header text-center">
						<h3>Video</h3>
						<div class="divider-custom-2">
							<div class="divider-custom-line-2"></div>
						</div>
					</header>
					<div class="row">
						<div class="col-4">
							<iframe width="auto" height="auto" src="https://www.youtube.com/embed/df4HTCBXil0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
						<div class="col-4">
							<iframe width="auto" height="auto" src="https://www.youtube.com/embed/df4HTCBXil0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
						<div class="col-4">
							<iframe width="auto" height="auto" src="https://www.youtube.com/embed/df4HTCBXil0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</section><!-- End Clients Section -->
		</main>
		<footer id="footer" class="section-bg bg-3">
			<div class="footer-top bg-2">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-lg-3">
							<div class="footer-info">
								<img class="img-footer" src="@/assets/img/logo-ykep.png" >
								<br>
								<br>
								<p>Sistem Informasi YAKEP <br>
								Yayasan Kartika Eka Paksi</p>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="footer-links">
								<h4>Peta Situs</h4>
								<ul>
									<li><a href="">Beranda</a></li>
									<li><a href="">Tentang Kami</a></li>
									<li><a href="">Visi Misi</a></li>
									<li><a href="">Berita</a></li>
									<li><a href="">Program</a></li>
									<li><a href="">Kontak</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="footer-links">
								<h4>Tautan Terkait</h4>
								<ul>
									<li><a href="">Unjani</a></li>
									<li><a href="">Aston</a></li>
									<li><a href="">Green Valey Water Park</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="social-links">
								<h4>Kontak Kami</h4>
								<p>
									Jalan Medan Merdeka Timur No. 7,
									RT.2/RW.1, Gambir, Kota Jakarta Pusat,
									Daerah Khusus Ibu Kota 10110<br>
									<strong>Phone:</strong> (021) 23549153<br>
									<strong>Email:</strong> @gmail.com<br>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="copyright">
					<strong>Copyright &copy; 2021.</strong> All Rights Reserved
				</div>
			</div>
		</footer>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  	</div>
</template>

<style scope>
	.animated {
		background-image: url(/css/images/logo.png);
		background-repeat: no-repeat;
		background-position: left top;
		padding-top:95px;
		margin-bottom:60px;
		-webkit-animation-duration: 10s;
		animation-duration: 10s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}

	@-webkit-keyframes fadeInLeft {
		0% {
			opacity: 0;
			-webkit-transform: translateX(-20px);
		}
		100% {
			opacity: 1;
			-webkit-transform: translateX(0);
		}
	}

	@keyframes fadeInLeft {
		0% {
			opacity: 0;
			transform: translateX(-20px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.fadeInLeft {
		-webkit-animation-name: fadeInLeft;
		animation-name: fadeInLeft;
	} 
	animation-name: fadeInDown;
</style>

<script>
	
</script>