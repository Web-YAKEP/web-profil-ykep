<template>
	<div class="kegiatan">
		<main id="main">
			<section id="about" class="about">
				<div class="container-fluid p-0" data-aos="fade-up">
					<div class="row">
						<div class="col-12">
							<img src="@/assets/img/education.png" class="img-fluid" alt="">
						</div>
					</div>
				</div>
			</section>
			<section id="clients" class="clients">
				<div class="container" data-aos="zoom-in">
					<header class="section-header text-center">
						<h3>Kegiatan Yayasan</h3>
						<div class="divider-custom-2">
							<div class="divider-custom-line-2"></div>
						</div>
					</header>
					<div class="row">
						<div class="col text-center">
							<div class="row">
								<div class="card kegiatan-parent">
									<img class="card-img-top pict-berita" src="@/assets/img/kegiatan-pendidikan.png" alt="Card image cap">
								</div>	
							</div>
							<div class="row mt-4">
								<div class="col-4">
									<img class="card-img-top pict-berita" src="@/assets/img/logo-unjani.png" alt="Card image cap">
									<div class="mt-2">
										<h5>UNJANI CIMAHI</h5>
										<div class="divider-custom-2">
											<div class="divider-custom-line-2"></div>
										</div>
									</div>
								</div>
								<div class="col-4">
									<img class="card-img-top pict-berita" src="@/assets/img/logo-stikes.png" alt="Card image cap">
									<div class="mt-2">
										<h5>STIKES CIMAHI</h5>
										<div class="divider-custom-2">
											<div class="divider-custom-line-2"></div>
										</div>
									</div>
								</div>
								<div class="col-4">
									<img class="card-img-top pict-berita" src="@/assets/img/logo-unjani-jogja.png" alt="Card image cap">
									<div class="mt-2">
										<h5>UNJANI JOGJA</h5>
										<div class="divider-custom-2">
											<div class="divider-custom-line-2"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col text-center">
							<div class="row">
								<div class="card kegiatan-parent">
									<img class="card-img-top pict-berita" src="@/assets/img/kegiatan-pt.png" alt="Card image cap">
								</div>
							</div>
							<div class="row">
								<div class="col">
									<div class="card card-sub-pt bg-1">
										<div class="text">
											BUMY
										</div>
									</div>
								</div>
								<div class="col">
									<div class="card card-sub-pt bg-1">
										<div class="text">
											MITRA
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
							<h2 class="level-2-kegiatan rectangle">Bidang <br>Sosial</h2>
						</li>
						<li>
							<h2 class="level-2-kegiatan rectangle">Bidang Keagamaan</h2>
						</li>
						<li>
							<h2 class="level-2-kegiatan rectangle">Bidang Kemanusiaan</h2>
						</li>
					</ol>
				</div>
			</section>
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
<script>

</script>

<style>
.kegiatan-parent{
	width: 15em;
}
#clients img{
	opacity: 1 !important;
}
.card-sub-pt{
	width: 11em;
	height: 11em;
}
.card-sub-pt .text{
	color: #ffffff;
	margin-top: 4em;
	font-weight: 600;
}

:root {
	--level-2-kegiatan: #2e4a49;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
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
	left: 16.5%;
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