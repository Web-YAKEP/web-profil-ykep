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
					<div class="carousel-caption d-none d-md-block text-right">
						<h1 id = "animated-example" class = "animated fadeInLeft">
							Hotel
						</h1>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="@/assets/img/education.png" alt="Third Slide">
					<div class="carousel-caption d-none d-md-block text-right">
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
					<div class="col-lg-4 col-sm-12">
						<div class="about-img" data-aos="fade-right" data-aos-delay="100">
							<img src="@/assets/img/ketua-ykep.png" alt="">
						</div>
					</div>
					<div class="col-lg-8 col-sm-12 text-sambutan">
						<div class="about-content text-justify" data-aos="fade-left" data-aos-delay="100">
							<p>Puji dan syukur marilah tiada hentinya kita panjatkan kehadirat Tuhan Yang Maha Esa, atas limpahan karunia dan hidayah-Nya, Sehingga kita masih dapat melaksanakan dengan baik tugas dan kewajiban kita semua. Buku "Membangun Negeri, Bersama Yayasan Kartika Eka Paksi" ini merupakan rangkaian kegiatan formal maupun non-formal yang mewarnai perjalanan dinas saya selama pengabdian menjadi KEtua Yayasan Kartika Eka Paksi. Buku ini disusun sebagai pengingat bahwa dalam hidup ini banyak sekali hal yang patut disyukuri sekaligus memberikan gambaran bahwa kegiatan dan pengalaman dalam keseharian kita hendaknya mampu memberikan manfaat yang sebesar-besarnya bagi satuan, masyarakat serta bangsa dan negara. Akhirnya, saya ucapkan terima kasih kepada semua pihak yang telah ikut mambantu proses penyusunan buku ini. Saya berharap adanya berbagai masukan yang konstruktif sehingga kita semua dapat mengambil hikmah dari setiap bagian hidup.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="clients" class="clients">
				<div class="container" data-aos="zoom-in">
					<header class="section-header text-center">
						<h3>Kegiatan Yayasan</h3>
						<div class="divider-custom-3">
							<div class="divider-custom-line-3"></div>
						</div>
					</header>
					<div class="row">
						<div class="col text-center">
							<div class="row">
								<!-- <div class="card kegiatan-parent">
									<img class="card-img-top pict-berita" src="@/assets/img/kegiatan-pendidikan.png" alt="Card image cap">
								</div> -->
								<div class="col-4 mx-auto">
									<div class="card text-white">
										<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
										<div class="card-img-overlay">
											<h5 class="cap-card-kegiatan mt-5">PENDIDIKAN</h5>
										</div>
									</div>
								</div>	
							</div>
							<div class="row mt-3 justify-content-md-center">
								<div class="col-4">
									<div class="card text-center border-0 card-pendidikan-list" v-on:click="openModalPendidikan('unjanicimahi')">
										<img class="card-img-top img-pendidikan-logo" src="@/assets/img/logo-unjani.png" alt="Card image cap">
										<div class="card-body">
											<p class="card-text mb-0">UNJANI CIMAHI</p>
											<div class="divider-custom-2 mt-2">
												<div class="divider-custom-line-2"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-4">
									<div class="card text-center border-0 card-pendidikan-list" v-on:click="openModalPendidikan('stikescimahi')">
										<img class="card-img-top img-pendidikan-logo" src="@/assets/img/logo-stikes.png" alt="Card image cap">
										<div class="card-body">
											<p class="card-text mb-0">STIKES CIMAHI</p>
											<div class="divider-custom-2 mt-2">
												<div class="divider-custom-line-2"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-4">
									<div class="card text-center border-0 card-pendidikan-list" v-on:click="openModalPendidikan('unjanijojga')">
										<img class="card-img-top img-pendidikan-logo" src="@/assets/img/logo-unjani-jogja.png" alt="Card image cap">
										<div class="card-body">
											<p class="card-text mb-0">UNJANI JOGJA</p>
											<div class="divider-custom-2 mt-2">
												<div class="divider-custom-line-2"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col text-center">
							<div class="row">
								<div class="col-4 mx-auto">
									<div class="card text-white">
										<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
										<div class="card-img-overlay">
											<h5 class="cap-card-kegiatan mt-5">PT</h5>
										</div>
									</div>
								</div>
							</div>
							<div class="row justify-content-md-center mt-3">
								<div class="col-3">
									<div class="card bg-1 text-white card-pt-list" v-on:click="openModalPt('bumy')">
										<div class="card-body">
											<h5 class="card-title mt-4 mb-4">BUMY</h5>
										</div>
									</div>
								</div>
								<div class="col-3">
									<div class="card bg-1 text-white card-pt-list" v-on:click="openModalPt('mitra')">
										<div class="card-body">
											<h5 class="card-title mt-4 mb-4">MITRA</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container mt-5">
					<ol class="level-2-kegiatan-wrapper text-center">
						<li>
							<h5 class="level-2-kegiatan rectangle card-bidang-list bg-1">Bidang <br>Sosial</h5>
						</li>
						<li>
							<h5 class="level-2-kegiatan rectangle card-bidang-list bg-1">Bidang <br>Keagamaan</h5>
						</li>
						<li>
							<h5 class="level-2-kegiatan rectangle card-bidang-list bg-1">Bidang <br>Kemanusiaan</h5>
						</li>
					</ol>
				</div>
			</section>

			<section id="clients" class="clients">
				<div class="container" data-aos="zoom-in">
					<header class="section-header text-center">
						<h3>Berita Terkini</h3>
						<div class="divider-custom-3">
							<div class="divider-custom-line-3"></div>
						</div>
					</header>
					<div class="row mt-3">
						<div class="col-12">
							<div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<div class="row">
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="carousel-item">
										<div class="row">
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani Jogja
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani Jogja
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani Jogja
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																Unjani Jogja
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="carousel-item">
										<div class="row">
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																STIKES Cimahi
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																STIKES Cimahi
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																STIKES Cimahi
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-12 text-center">
												<div class="card text-white">
													<img class="card-img" src="@/assets/img/foto-berita.png" alt="Card image">
													<div class="card-img-overlay">
														<div class="card head text-center">
															<div class="card-body tag-head">
																STIKES Cimahi
															</div>
														</div>
														<p class="card-text tag-judul-berita">WISUDA UNJANI 2021 BERJALAN KHIDMAD SESUAI PROTOKOLER DI TENGAH PANDEMI</p>
														<p class="card-text	tag-footer mb-0 mt-f-3">
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
													<div class="card-footer">
														<button class="btn btn-sm btn-info d-inline mr-1"><i class="fa fa-eye"></i></button>
														<button class="btn btn-sm btn-success d-inline mr-4"><i class="fa fa-download"></i></button>
														<button class="btn btn-sm btn-warning d-inline">Selengkapnya <i class="fa fa-arrow-circle-right"></i></button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-6">
						</div>
						<div class="col-6 text-right">
							<a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
								<i class="fa fa-arrow-left"></i>
							</a>
							<a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
								<i class="fa fa-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="testimonials" class="testimonials bg-5 mb-5">
				<div class="container" data-aos="zoom-in">
					<header class="section-header text-center">
						<h3 class="text-white">Video</h3>
						<div class="divider-custom-3">
							<div class="divider-custom-line-3"></div>
						</div>
					</header>
					<div class="row mt-3">
						<div class="col-12">
							<div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<div class="row text-center">
											<div class="col-lg-4 col-sm-12 pt-3 pb-3">
												<iframe width="auto" height="100%" src="https://www.youtube.com/embed/df4HTCBXil0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											</div>
											<div class="col-lg-4 col-sm-12 pt-3 pb-3">
												<iframe width="auto" height="100%" src="https://www.youtube.com/embed/df4HTCBXil0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											</div>
											<div class="col-lg-4 col-sm-12 pt-3 pb-3">
												<iframe width="auto" height="100%" src="https://www.youtube.com/embed/df4HTCBXil0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											</div>
										</div>
									</div>
									<div class="carousel-item">
										<div class="row text-center">
											<div class="col-lg-4 col-sm-12 pt-3 pb-3">
												<iframe  width="auto" height="100%" src="https://www.youtube.com/embed/1pRN7skH3YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											</div>
											<div class="col-lg-4 col-sm-12 pt-3 pb-3">
												<iframe  width="auto" height="100%" src="https://www.youtube.com/embed/1pRN7skH3YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											</div>
											<div class="col-lg-4 col-sm-12 pt-3 pb-3">
												<iframe  width="auto" height="100%" src="https://www.youtube.com/embed/1pRN7skH3YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-6">
						</div>
						<div class="col-6 mt-2 text-right">
							<a class="btn btn-light mb-3 mr-1" href="#carouselExampleIndicators3" role="button" data-slide="prev">
								<i class="fa fa-arrow-left"></i>
							</a>
							<a class="btn btn-light mb-3 " href="#carouselExampleIndicators3" role="button" data-slide="next">
								<i class="fa fa-arrow-right"></i>
							</a>
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
		<div class="modal"  id="myModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Modal title</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p>Modal body text goes here.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary">Save changes</button>
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.card-pendidikan-list:hover{
	transform: scale(1.1);
	cursor: pointer;
}
.card-pt-list:hover{
	transform: scale(1.1);
	cursor: pointer;
}
.card-bidang-list:hover{
	transform: scale(1.1);
	cursor: pointer;
}
.cap-card-kegiatan{
	font-weight: 450;
}
.img-pendidikan-logo{
	width: 55% !important;
	padding: 0px !important;
	align-self: center;
}
#about .about-img img {
	width: 90%;
	/*border: 8px solid #fff;*/
	transition: .5s;
}
#about .about-img img:hover {
	width: 90%;
	transform: scale(1.1);
}
.card{
	border-color: #fff;
}
.card-img {
	max-width: 100% !important;
	padding: 0px !important;
}
#footer{
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.back-to-top {
	background: #fcf103 !important;
	color: #132019 !important;
}
@media screen and (max-width: 600px) {
	#about .about-img img {
		width: 100%;
		padding: 50px 118px;
	}
	#about .about-img img:hover {
		width: 100%;
		transform: scale(1.1) !important;
	}
	#footer{
		text-align: center;
	}
}
#about .about-content {
	padding-top: 14px !important;
}
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

:root {
	--level-2-kegiatan: #2e4a49;
}

ol {
	list-style: none;
}

.container {
	max-width: 1000px;
	padding: 0 10px;
	margin: 0 auto;
}

.rectangle {
	position: relative;
	padding: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}


/* LEVEL-2 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-2-kegiatan-wrapper {
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}

.level-2-kegiatan-wrapper::before {
	content: "";
	position: absolute;
	top: -20px;
	left: 16.6%;
	width: 66.7%;
	height: 2px;
	background: var(--black);
}

.level-2-kegiatan-wrapper::after {
	display: none;
	content: "";
	position: absolute;
	left: -20px;
	bottom: -20px;
	width: calc(100% + 20px);
	height: 2px;
	background: var(--black);
}

.level-2-kegiatan-wrapper li {
	position: relative;
}

.level-2-kegiatan-wrapper > li::before {
	content: "";
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 2px;
	height: 20px;
	background: var(--black);
}

.level-2-kegiatan {
	width: 70%;
	margin: 0 auto 40px;
	background: var(--level-2-kegiatan);
	color: #ffffff;
}

.level-2-kegiatan::before {
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 2px;
	height: 0px;
	background: var(--black);
}

.level-2-kegiatan::after {
	display: none;
	content: "";
	position: absolute;
	top: 50%;
	left: 0%;
	transform: translate(-100%, -50%);
	width: 20px;
	height: 2px;
	background: var(--black);
}



/* MQ STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 700px) {
	.rectangle {
		padding: 20px 10px;
	}

	.level-1,
	.level-2 {
		width: 100%;
	}

	.level-1 {
		margin-bottom: 20px;
	}

	.level-1::before,
	.level-2-wrapper > li::before {
		display: none;
	}

	.level-2-wrapper,
	.level-2-wrapper::after,
	.level-2::after {
		display: block;
	}

	.level-2-wrapper {
		width: 90%;
		margin-left: 10%;
	}

	.level-2-wrapper::before {
		left: -20px;
		width: 2px;
		height: calc(100% + 40px);
	}

	.level-2-wrapper > li:not(:first-child) {
		margin-top: 50px;
	}
}
</style>

<script>
export default{
	methods:{
		openModalPendidikan(){
		}
	}
};
</script>