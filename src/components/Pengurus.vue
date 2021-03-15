<template>
	<div class="pengurus">
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
					<div class="row">
						<div class="col-12">
							<div class="card mx-auto card-pengurus">
								<div class="card-body">
									<div >
										<img src="@/assets/img/ketua-ykep.png" class="img-pengurus">
									</div>
									<div class="text-pengurus">
										<h5 class="nama-pengurus"><b>Tatang Sulaiman</b></h5>
										<p class="jabatan-pengurus">
											Ketua Pengurus 
											<br>
											YKEP
										</p>
										<p class="text-btn-pengurus mb-0 btn-pengurus" v-on:cick="openModalPengurus()">
											BACA SELENGKAPNYA <a class="text-danger"><i class="fa fa-chevron-circle-right"></i></a>
										</p>
									</div>
								</div>
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
	.card-pengurus{
		border-radius: 15px;
		width: 37em;
		display:  inherit !important;
	}
	.card-pengurus .card-body{
		display: flex;
		padding: 0px;
	}
	.img-pengurus{
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
		width: 15em;
		opacity: 100;
		padding: 0px !important;
	}
	.nama-pengurus{
		margin-bottom: 5px;
	}
	.jabatan-pengurus{
		margin-bottom: 12px;
	}
	.text-pengurus{
		padding-left: 1em;
		padding-top: 2em;
	}
	.text-btn-pengurus{
		font-size: 14px;
	}
	.text-btn-pengurus a{
		font-size: 17px;
	}
	.btn-pengurus:hover{
		cursor: pointer;
	}
</style>

<script>
	export default {
		methods:{
			openModalPengurus(){
				console.log('a')
			}
		}
	};
</script>