<template>
	<div class="struktur">
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
			<section id="about" class="about bg-1">
				<div class="row" data-aos="fade-up">
					<div class="col-4">
						<div class="text-center judul-struktur mt-2">
							<h5>STRUKTUR ORGANISASI YAYASAN</h5>
							<div class="divider-custom-2">
								<div class="divider-custom-line-2"></div>
							</div>
						</div>
					</div>
					<div class="col-8">
						<div class="container mt-5">
							<h1 class="level-1 rectangle">Pembina</h1>
							<ol class="level-2-5-1-wrapper text-center">
								<li>
									<h2 class="level-2-5-1 rectangle">Pengurus</h2>
								</li>
							</ol>
							<ol class="level-2-wrapper text-center">
								<li>
									<h2 class="level-2 rectangle">Pengawas</h2>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="row" data-aos="fade-up">
					<div class="col-4">
						<div class="text-center judul-struktur mt-2">
							<h5>STRUKTUR ORGANISASI PEMBINA</h5>
							<div class="divider-custom-2">
								<div class="divider-custom-line-2"></div>
							</div>
						</div>
					</div>
					<div class="col-8">
						<div class="container mt-5">
							<h1 class="level-1 rectangle">Ketua Pembina</h1>
							<ol class="level-2-5-wrapper text-center">
								<li>
									<h2 class="level-2-5 rectangle">Sekertaris</h2>
								</li>
							</ol>
							<ol class="level-2-wrapper text-center">
								<li>
									<h2 class="level-2 rectangle">Anggota</h2>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="row" data-aos="fade-up">
					<div class="col-4">
						<div class="text-center judul-struktur mt-2">
							<h5>STRUKTUR ORGANISASI PEMBINA</h5>
							<div class="divider-custom-2">
								<div class="divider-custom-line-2"></div>
							</div>
						</div>
					</div>
					<div class="col-8">
						<div class="container mt-5">
							<h1 class="level-1 rectangle">Ketua Pengawas</h1>
							<ol class="level-2-wrapper text-center">
								<li>
									<h2 class="level-2 rectangle">Anggota</h2>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="row" data-aos="fade-up">
					<div class="col-12">
						<div class="text-center judul-struktur mt-2">
							<h5>STRUKTUR ORGANISASI KEPENGURUSAN YAYASAN</h5>
							<div class="divider-custom-2">
								<div class="divider-custom-line-2"></div>
							</div>
						</div>
					</div>
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

<style>
	.judul-struktur{
		color: #ffffff;
	}

	:root {
	--level-1: #ffffff;
	--level-2: #ffffff;
	--level-3: #7b9fe0;
	--level-4: #f27c8d;
	--black: black;
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
	padding: 7px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}


/* LEVEL-1 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-1 {
	width: 35%;
	margin: 0 auto 40px;
	background: var(--level-1);
}

.level-1::before {
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 2px;
	height: 20px;
	background: var(--black);
}


/* LEVEL-2 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-2-wrapper {
	position: relative;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
}

.level-2-wrapper::before {
	content: "";
	position: absolute;
	top: -20px;
	left: 16.5%;
  	width: 66.7%;
	height: 0px;
	background: var(--black);
}

.level-2-wrapper::after {
	display: none;
	content: "";
	position: absolute;
	left: -20px;
	bottom: -20px;
	width: calc(100% + 20px);
	height: 2px;
	background: var(--black);
}

.level-2-wrapper li {
	position: relative;
}

.level-2-wrapper > li::before {
	content: "";
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 2px;
	height: 20px;
	background: var(--black);
}

.level-2 {
	width: 20%;
	margin: 0 auto 40px;
	background: var(--level-2);
}

.level-2::before {
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 0px;
	height: 30px;
	background: var(--black);
}

.level-2::after {
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

/*-----------------------*/
/* LEVEL-2 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-2-5-1-wrapper {
	position: relative;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	left: -25%;
}

.level-2-5-1-wrapper::before {
	content: "";
	position: absolute;
	top: 27px;
	left: 50%;
    width: 25%;
	height: 2px;
	background: var(--black);
}

.level-2-5-1-wrapper::after {
	display: none;
	content: "";
	position: absolute;
	left: -20px;
	bottom: -20px;
	width: calc(100% + 20px);
	height: 2px;
	background: var(--black);
}

.level-2-5-1-wrapper li {
	position: relative;
}

.level-2-5-1-wrapper > li::before {
	content: "";
    position: absolute;
    bottom: 68%;
    left: 75%;
    transform: translateX(-50%);
    width: 2px;
    height: 60px;
    background: var(--black);
}

.level-2-5-1 {
	width: 20%;
	margin: 0 auto 40px;
	background: var(--level-2);
}

.level-2-5-1::before {
	content: "";
    position: absolute;
    top: 56%;
    left: 175%;
    transform: translateX(-50%);
    width: 2px;
    height: 61px;
    background: var(--black);
}

.level-2-5-1::after {
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
/*------------------------*/

/*-----------------------*/
/* LEVEL-2 STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.level-2-5-wrapper {
	position: relative;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	left: 25%;
}

.level-2-5-wrapper::before {
	content: "";
	position: absolute;
	top: 27px;
	left: 24.5%;
    width: 25%;
	height: 2px;
	background: var(--black);
}

.level-2-5-wrapper::after {
	display: none;
	content: "";
	position: absolute;
	left: -20px;
	bottom: -20px;
	width: calc(100% + 20px);
	height: 2px;
	background: var(--black);
}

.level-2-5-wrapper li {
	position: relative;
}

.level-2-5-wrapper > li::before {
	content: "";
    position: absolute;
    bottom: 68%;
    left: 25%;
    transform: translateX(-50%);
    width: 2px;
    height: 60px;
    background: var(--black);
}

.level-2-5 {
	width: 20%;
	margin: 0 auto 40px;
	background: var(--level-2);
}

.level-2-5::before {
	content: "";
    position: absolute;
    top: 56%;
    left: -75%;
    transform: translateX(-50%);
    width: 2px;
    height: 61px;
    background: var(--black);
}

.level-2-5::after {
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
/*------------------------*/

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