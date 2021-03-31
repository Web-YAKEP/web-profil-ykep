<template>
	<div class="beranda">
		<div id="carouselExampleIndicators" class="carousel slide mt-8em" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100" src="@/assets/img/baner-home-1.jpg" alt="First Slide">
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="@/assets/img/baner-home-2.jpg" alt="Second Slide">
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="@/assets/img/baner-home-3.jpg" alt="Third Slide">
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
		<div class="wrap">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-10 mx-auto">
						<header class="section-header">
							<h3>Sekilas Tentang YKEP</h3>
							<p>Yayasan Kartika Eka Paksi</p>
							<div class="divider-custom">
								<div class="divider-custom-line"></div>
							</div>
						</header>
						<div class="row mt-3">
							<div class="col-md-12">
								<div class="text-justify">
									<p class="m-0">
										Yayasan Kartika Eka paksi merupakan Yayasan yang senantiasa bersemangat dalam bekerja,
										memegang teguh kejujuran dalam berusaha untuk mencapai kemakmuran guna meningkatkan
										kesejahteraan Keluarga Besar Angkatan Darat, dan memiliki daya tahan menghadapi segala
										tantangan dalam rangka mendukung keberhasilan tugas dan tercapainya cita-cita mulia
										TNI Angkatan Darat, yaitu keluhuran nusa dan bangsa serta keprajuritan sejati. Yayasan mempunyai
										maksud dan tujuan di bidang Sosial, Keagamaan dan kemanusiaan.
									</p>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>
		<div class="wrap pt-0">
			<div class="container">
				<header class="section-header text-center">
					<h4>Video Sambutan Ketua</h4>
					<div class="divider-custom-3">
						<div class="divider-custom-line-3"></div>
					</div>
				</header>
				<div class="row">
					<div class="col-md-12 col-lg-6 mx-auto">	
						<div class="embed-responsive mx-auto embed-responsive-16by9">
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dkQousb_lvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
					</div>	
				</div>
			</div>
		</div>
		<div class="wrap bg-1 p-0">
			<div class="container-fluid">	
				<div class="row">
					<div class="col-lg-3 col-sm-12 p-0">
						<div class="sambutan-img text-center">
							<p class="mb-0 text-white text-nama-ketua"><i>Tatang Sulaiman, S.Sos, M.Si. <br> Ketua Pengurus YAKEP </i></p>
							<img src="@/assets/img/ketua-ykep.webp" alt="" class="w-100">
						</div>
					</div>
					<div class="col-lg-8 col-sm-12 align-self-center padding-sambuatn-sm">	
							<p class="m-0 text-white text-center mx-auto text-sambuatn">	
							Puji syukur marilah kita panjatkan kehadirat Yang Maha Esa atas limpahan karunia dan hidayahnya, sehingga kita masih dapat melaksanakan dengan baik tugas dan kewajiban kita semua. Sistem Informasi/Web Yayasan Kartika Eka Paksi merupakan sarana komunikasi informasi, sosialisasi dan promosi YKEP dalam menjalankan amanah, perputaran roda organisasi untuk mewujudkan tujuan sesuai visi dan misi, mensejahterakan keluarga besar angkatan darat ikut serta mencerdaskan bangsa dan keluarga besar angkatan darat melalui pendidikan di Universitas Jenderal Ahmad Yani.
							<br><br>Saya berharap adanya masukan yang konstruktif sehingga kita dapat mengambil hikmah dari setiap hidup kita.
							<br><br>Akhirnya saya mengucapkan terimakasih atas kerjasama dan partisipasinya dalam mengembangkan Yayasan Kartika EKa Paksi.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap">
			<div class="container">
				<header class="section-header text-center">
					<h3>Kegiatan Yayasan</h3>
					<div class="divider-custom-3">
						<div class="divider-custom-line-3"></div>
					</div>
				</header>
				<div class="row">
					<div class="col-md-12 col-lg-6 text-center">
						<div class="row">
							<div class="col-md-6 col-lg-5 mx-auto">
								<div class="card border-0">
									<img class="card-img" src="@/assets/img/icon-kegiatan-pendidikan.png" alt="Card image">
								</div>
							</div>	
						</div>
						<div class="row mt-3 justify-content-md-center">
							<div class="col-lg-4 col-sm-12">
								<div class="card text-center border-0 card-pendidikan-list" v-on:click="openModalPendidikan('UNJANI CIMAHI')">
									<img class="img-pendidikan-logo" src="@/assets/img/logo-unjani.png" alt="Card image cap">
									<div class="card-body">
										<p class="card-text mb-0">UNJANI CIMAHI</p>
										<div class="divider-custom-2 mt-2">
											<div class="divider-custom-line-2"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-sm-12">
								<div class="card text-center border-0 card-pendidikan-list" v-on:click="openModalPendidikan('STIKES CIMAHI')">
									<img class="img-pendidikan-logo" src="@/assets/img/logo-stikes.png" alt="Card image cap">
									<div class="card-body">
										<p class="card-text mb-0">STIKES CIMAHI</p>
										<div class="divider-custom-2 mt-2">
											<div class="divider-custom-line-2"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-sm-12">
								<div class="card text-center border-0 card-pendidikan-list" v-on:click="openModalPendidikan('UNJANI JOGJA')">
									<img class="img-pendidikan-logo" src="@/assets/img/logo-unjani-jogja.webp" alt="Card image cap">
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
					<div class="col-md-12 col-lg-6 text-center">
						<div class="row">
							<div class="col-md-6 col-lg-5  mx-auto">
								<div class="card text-white border-0" style="align-items: center;">
									<img class="card-img w-88" src="@/assets/img/icon-bidang-usaha-investasi.png" alt="Card image">
								</div>
							</div>
						</div>
						<div class="row justify-content-md-center mt-4 mx-auto">
							<div class="col-lg-3 col-sm-12 mb-4 card-pt-list" v-on:click="openModalPt('BUMY')">
								<img class="card-img img-card-pt" src="@/assets/img/icon-kegiatan-BUMY.png" alt="Card image">
							</div>
							<div class="col-lg-3 col-sm-12 card-pt-list" v-on:click="openModalPt('MITRA')">
								<img class="card-img img-card-pt" src="@/assets/img/icon-kegiatan-MITRA.png" alt="Card image">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container mt-5">
				<div class="row mx-auto row-bidang">
					<div class="col-lg-4 col-md-12 card-bidang-list text-center">
						<img class="w-45 btn-sosial" src="@/assets/img/tombol-kegiatan-bidang-sosial.png" alt="Card image">
						<img class="card-img-bidang w-75" src="@/assets/img/bg-gambar-kegiatan-sosial.png" alt="Card image"  v-on:click="openModalBidang('Bidang Sosial')">
					</div>
					<div class="col-lg-4 col-md-12 mb-5 card-bidang-list text-center margin-list-sosial">
						
						<img class="w-45 btn-agama" src="@/assets/img/tombol-kegiatan-bidang-keagamaan.png" alt="Card image">
						<img class="card-img-bidang w-75" src="@/assets/img/bg-gambar-kegiatan-keagamaan.png" alt="Card image"  v-on:click="openModalBidang('Bidang Keagamaan')">
					</div>
					<div class="col-lg-4 col-md-12 card-bidang-list text-center">
						
						<img class="w-45 btn-sosial" src="@/assets/img/tombol-kegiatan-bidang-kemanusiaan.png" alt="Card image">
						<img class="card-img-bidang w-75" src="@/assets/img/bg-gambar-kegiatan-kemanusiaan.png" alt="Card image" v-on:click="openModalBidang('Bidang Kemanusiaan')">
					</div>
				</div>
			</div>
		</div>
		<div class="wrap">
			<div class="container berita-beranda">
				<header class="section-header text-center">
					<h3>Berita Terkini</h3>
					<div class="divider-custom-3">
						<div class="divider-custom-line-3"></div>
					</div>
				</header>
				<vueper-slides
				class="no-shadow"
				:visible-slides="4"
				slide-multiple
				:gap="4"
				:slide-ratio="1 / 4"
				:dragging-distance="200"
				:breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }">
					<vueper-slide  v-for="(item,i) in data_berita" :key="i">
						<template v-slot:content>
							<div class="row">
								<div class="col-12">
									<div class="card text-white card-container-berita">
										<div class="over-bg">
											<img class="card-img card-img-berita" :src="item.thumbnail" alt="Card image">
										</div>
										<div class="card-img-overlay">
											<div class="card head berita mx-auto">
												<div class="card-body tag-head text-center">
													{{ item.kategori }}
												</div>
											</div>
											<p class="judul-berita text-center" v-html="item.judul"></p>
											<div class="tgl-berita">
												<div class="divider-custom-2-white m-1">
													<div class="divider-custom-line-2-white"></div>
												</div>
												<p class="card-text	tag-footer">
													{{ item.tgl }}
												</p>
											</div>
										</div>
										<div class="card-footer text-center">
											<button v-if="item.redirect_link" class="btn btn-outline-primary btn-sm d-inline mr-1" v-on:click="goLink(item.redirect_link)"><i class="fa fa-link"></i> Buka Tautan</button>
											<button v-else-if="item.file" class="btn btn-outline-info btn-sm d-inline mr-1" v-on:click="openModalPDF(item.file)"><i class="fa fa-eye"></i> Baca Dokumen</button>
											<button v-else class="btn btn-outline-success btn-sm d-inline" v-on:click="bacaBerita(item.id)">Lanjut Baca <i class="fa fa-arrow-circle-right"></i></button>
										</div>
									</div>
								</div>
							</div>
						</template>
					</vueper-slide>
				</vueper-slides>
			</div>
		</div>

			<section id="clients" class="clients pt-0">
				<div class="container" data-aos="zoom-in">
					<header class="section-header text-center">
						<h3>Video</h3>
						<div class="divider-custom-3">
							<div class="divider-custom-line-3"></div>
						</div>
					</header>
					<div class="row">
						<div class="col-12">
							<div class="embed-responsive embed-responsive-16by9">
							<iframe  class="embed-responsive-item" src="https://www.youtube.com/embed/1pRN7skH3YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
		<div class="modal"  id="pendidikanModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Kegiatan Pendidikan</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-12">
								<div class="card mx-auto pl-2">
									<div class="card-body">
										<div class="row">
											<div class="col-2 p-0">
												<div class="card">
													<img :src="modalsrcpend" class="img-pt-fluid">
												</div>
											</div>
											<div class="col-10">
												<div class="text-head-pt">
													<h5 class="mb-2"><b>{{ modalfor }}</b></h5>
													<p class="mb-1">
														{{ modalalamatpend }}
														<br>
													</p>
													<a v-on:click="profilPendidikan(modalfor)" class="btn btn-info btn-sm text-white">Lihat Profil</a>
												</div>	
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal"  id="PtModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Kegiatan Bidang Usaha & Investasi ({{ modalfor }})</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div v-for="databumy of databumys">
							<div class="row mb-4">
								<div class="col-12">
									<div class="card mx-auto pl-2">
										<div class="card-body">
											<div class="row">
												<div class="col-2 p-0">
													<div class="card">
														<img :src="databumy.img" class="img-pt-fluid">
													</div>
												</div>
												<div class="col-10">
													<div class="text-head-pt">
														<h5 class="mb-2"><b>{{ databumy.nama }}</b></h5>
														<p class="mb-1">
															{{ databumy.alamat }}
															<br>
															<b>Bidang Usaha :</b> {{ databumy.bidang }}
														</p>
														<button v-on:click="profilPT(databumy)" class="btn btn-info btn-sm text-white">Lihat Profil</button>
													</div>	
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal"  id="bidangModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Kegiatan {{ modalfor }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div v-for="databidang of databidangs">
							<div class="row mb-4">
								<div class="col-12 text-left">
									<div class="card mx-auto pl-2">
										<div class="card-body">
											<p class="mb-2">{{ databidang.kegiatan }}</p>
											<div class="row" v-for="listKegiatan of databidang.listKegiatans">
												<div class="col-1 text-right pr-0">
													<p class="m-0">{{ listKegiatan.point }}.</p>
												</div>	
												<div class="col-11 text-left">	
													<p class="m-0">{{ listKegiatan.text }}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal"  id="openPDF" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title"></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="example1"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	@media screen and (max-width: 800px) {
		.padding-sambuatn-sm{
			padding-top: 30px;
			padding-bottom: 30px;
		}
		.sambutan-img{
			padding-top: 30px;
		}
		.sambutan-img .w-100{
			width: 	60% !important;
		}
		.text-nama-ketua {
			left: 25% !important;
			font-size: 11px !important;
		}
		.img-pendidikan-logo{
			width: 	20% !important;
		}
		.img-card-pt{
			width: 	35% !important;
		}
		.vueperslides__bullets:not(.vueperslides__bullets--outside) {
			color: #20362a;
		}
		#pendidikanModal .modal-dialog {
			max-width: 100% !important;
			max-height: 100% !important;
			top: 30% !important;
		}
		#PtModal .modal-dialog {
			max-width: 100% !important;
			top: 10% !important;
		}
		#bidangModal .modal-dialog {
			max-width: 100% !important;
			top: 10% !important;
		}
		.margin-list-sosial{
			margin-top: 2em;
		}
	}
	.w-45{
		width: 45%;
	}
	.w-88{
		width: 88% !important;
	}
	.text-sambuatn{
		width: 	80%;
		font-size: 	14px;
	}
	.text-nama-ketua{
		position: absolute;
		bottom: 20px;
		left: 25px;
		background-image: linear-gradient(to right, rgb(42 71 69), rgb(42 71 69 / 2%));
		font-size: 14px;
		padding: 5px 20px;
		font-weight: 500;
	}
	.btn-agama{
		position: absolute;
		left: 28%;
		top: 10%;
	}
	.btn-sosial{
		position: absolute;
		bottom: 15%;
		left: 28%;
	}
	.card-img-bidang{
		width: 70%;
	}
	.row-bidang{
		justify-content: center;
	}
	.berita-beranda .vueperslides__parallax-wrapper {
		height: 28em;
	}
	.berita-beranda .vueperslide {
		margin-top: 1em;
		margin-left: 1%;
		margin-right: 2% !important	;
	}
	#carouselExampleIndicators2 .carousel-inner{
		padding-bottom: 5px;
		padding-left: 2px;
		padding-right: 2px;
	}
	.embed-responsive {
		border-radius: 20px;
	}
	#openPDF .modal-dialog {
		max-width: 90%;
	}
	#openPDF .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#pendidikanModal .modal-dialog {
		max-width: 50%;
		max-height: 50%;
	}
	#pendidikanModal .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#pendidikanModal .modal-dialog .modal-content .modal-body .card{
		border-radius: 15px;
		border: none;
		box-shadow: 0 0 5px rgb(0 0 0 / 20%);
	}
	#pendidikanModal .modal-dialog .modal-content .modal-header{
		border-bottom: none;
		padding-left: 3em;
	}
	#PtModal .modal-dialog {
		max-width: 50%;
	}
	#PtModal .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#PtModal .modal-dialog .modal-content .modal-body .card{
		border-radius: 15px;
		border: none;
		box-shadow: 0 0 5px rgb(0 0 0 / 20%);
	}
	#PtModal .modal-dialog .modal-content .modal-header{
		border-bottom: none;
		padding-left: 3em;
	}
	#bidangModal .modal-dialog {
		max-width: 50%;
	}
	#bidangModal .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#bidangModal .modal-dialog .modal-content .modal-body .card{
		border-radius: 15px;
		border: none;
		box-shadow: 0 0 5px rgb(0 0 0 / 20%);
	}
	#bidangModal .modal-dialog .modal-content .modal-header{
		border-bottom: none;
		padding-left: 3em;
	}
	.card-footer{
		background-color: transparent !important;
		border: none !important;
	}
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
		width: 55%;
		padding: 0px !important;
		align-self: center;
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
		background: #38c0a6 !important;
		color: #fff !important;
	}
	@media screen and (max-width: 600px) {
		#footer{
			text-align: center;
		}
	}
</style>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
const axios = require('axios').default;
export default{
	components: { VueperSlides, VueperSlide },
	data(){
		return{
			modalfor: '',
			modalalamatpend: '',
			modalurlpend:'',
			modalsrcpend:'',
			databumys: [],
			databidangs: [],
			data_berita: []
		}
	},
	mounted(){
		this.get_berita()
	},
	methods:{
		goLink(link){
			window.open(link, '_blank');
		},
		get_berita(){
			axios
			.get('https://ykep.cloudapp.web.id/api/post?page=1')
			.then(response => {
				this.data_berita = []
				for (var i = 0; i <= (response.data.posts).length - 1; i++) {
					this.data_berita.push({
						id: response.data.posts[i].id,
						kategori: response.data.posts[i].category.name,
						judul: response.data.posts[i].title,
						tgl: response.data.posts[i].published_at,
						file: response.data.posts[i].pdf,
						redirect_link: response.data.posts[i].redirect_link,
						narasi:'',
						img_narasi:'',
						thumbnail: response.data.posts[i].featured_image
					})
				}
			})
			.catch(function(){
				console.log('FAILURE!!');
			}
			);
		},
		openModalPDF(link){
			$('#openPDF').modal('show')
			console.log(link)
			PDFObject.embed(link, "#example1", {forcePDFJS: true,height: "30em"})
		},
		bacaBerita(id){
			this.$router.push({ path: '/baca-berita', query: { q: id } })
		},
		profilPT(item){
			$('#PtModal').modal('toggle')
			this.$router.push({ path: '/profil-pt', query: { nama: item.nama }})
		},
		profilPendidikan(nama){
			$('#pendidikanModal').modal('toggle')
			this.$router.push({ path: '/profil-pendidikan', query: { nama: nama }})
		},
		openModalPendidikan(el){
			this.modalfor = el;
			if(el == 'UNJANI CIMAHI'){
				this.modalalamatpend = "Jl. Terusan Jend. Sudirman, Cibeber, Kec. Cimahi Sel., Kota Cimahi, Jawa Barat 40531"
				this.modalurlpend = 'https://www.unjani.ac.id/'
				this.modalsrcpend = require('@/assets/img/kampus-unjani-cimahi.jpg')
			}else if(el == 'STIKES CIMAHI'){
				this.modalalamatpend = "Jl. Terusan Jenderal Sudirman Cimahi - 40633"
				this.modalurlpend = 'http://stikesayani.ac.id/'
				this.modalsrcpend = require('@/assets/img/kampus-stikes-cimahi.jpg')
			}else if(el == 'UNJANI JOGJA'){
				this.modalalamatpend = "Jl. Ringroad Barat, Gamping Kidul, Ambarketawang, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55294"
				this.modalurlpend = 'https://unjaya.ac.id/'
				this.modalsrcpend = require('@/assets/img/kampus-unjani-jogja.jpg')
			}
			
			$('#pendidikanModal').modal('show')
		},
		openModalPt(el){
			this.modalfor = el;
			$('#PtModal').modal('show')
			if (el == 'BUMY') {
				this.databumys = [
					{
						img: require('@/assets/img/bumy/pt-wahana-bhakti-utama.png'),					
						nama: 'PT. WAHANA BHAKTI UTAMA',					
						alamat: 'JL. Dr. Saharjo No. 45 Jakarta Selatan',					
						bidang: 'WAREHOUSE / PERGUDANGAN'					
					},
					{
						img: require('@/assets/img/bumy/pt-tri-usaha bhakti.jpg'),					
						nama: 'PT. TRI USAHA BHAKTI',					
						alamat: 'Perkantoran Mitra Matraman Blok B-25 Jl. Matraman Raya No.148 Jakarta Timur',					
						bidang: 'TAMBANG PASIR KWARSA'					
					},
					{
						img: require('@/assets/img/bumy/pt-marabunta.jpg'),					
						nama: 'PT. MARABUNTA',					
						alamat: 'JL. Taman Pulogebang Blok B RT.08 RW.13 Kel. Cakung Timur Kec. Cakung, Jakarta Timur',					
						bidang: 'EKSPEDISI'					
					},
					{
						img: require('@/assets/img/bumy/pt-cakrawala-bangun-persada.jpg'),					
						nama: 'PT. CAKRAWALA BANGUN PERSADA',					
						alamat: 'Jl. A. Yani Kp. Babakan Bogor Rt.002 Rw. 06 Desa Dawuan Barat Kec. Cikampek, Kab. Karawang 41373',
						bidang: 'PRODUKSI SEMEN MORTAR'					
					},
					{
						img: require('@/assets/img/bumy/pt-bhakti-wira-husada.jpg'),					
						nama: 'PT. BHAKTI WIRA HUSADA',					
						alamat: 'JL. Tebet Utara I No. 20, Jakarta Selatan',					
						bidang: 'PERDAGANGAN OBAT-OBATAN/BAHAN KIMIA DAN PENGADAAN ALAT-ALAT KESEHATAN'					
					},
					{
						img:  require('@/assets/img/bumy/pt-graha-kartika-anugerah.jpg'),					
						nama: 'PT. GRAHA KARTIKA ANUGERAH',					
						alamat: 'JL. Jenderal Sudirman Kav. 52-53, Jakarta Selatan (Kartika Towers (Aston Kartika Grogol Hotel & Conference Center, Kartika office dan Kartika Mall) Jl. Kyai Tapa No. 101. Grogol, Jakarta Barat)',					
						bidang: 'Perhotelan, pengelolaan property, perkantoran, perjalanan wisata, konsultan pariwisata dan jasa impresariat'					
					},
					{
						img:  '',					
						nama: 'PT. SAHARA MULTI HIJAU',					
						alamat: 'Jl. Ipik Gandamanah, Ciseureuh, Kec. Purwakarta, Kabupaten Purwakarta',					
						bidang: 'Perumahan, Pembangunan Perumahan, Persewaan dan Konstruksi'					
					},
					{
						img:  '',					
						nama: 'PT. NIRMALA ANUGERAH SEJAHTERA',					
						alamat: 'Jl. Ipik Gandamanah No.41 , Ciseureuh, Kec. Purwakarta, Kabupaten Purwakarta',					
						bidang: 'Mengelola daya tarik wisata alam, wisata budaya dan wisata buatan; pertunjukkan hiburan, usaha Jasa makanan, perkemahan, usaha seni pertunjukkan dan olahraga air'					
					},
					{
						img:  '',					
						nama: 'SRIWIJAYA SPORT CENTER',					
						alamat: 'Jl. Merdeka No. 9 Kel. 19 Ilir, Kec. Bukit Kecil, Kota Palembang',					
						bidang: 'Usaha penginapan (hotel),  Sport, Food & Beverage,  SPA dan Sauna, Jasa Perpakiran, Ball Room dan gerai ATM'					
					},
					{
						img: require('@/assets/img/bumy/pt-safira.jpg'),					
						nama: 'PT. SAFIRA',					
						alamat: 'JL. Raya Pelabuhan Ratu Km.129 Desa Mangunjaya Kec. Bantargadung Kab. Sukabumi Jawa Barat',					
						bidang: 'PERKEBUNAN DAN PERTAMBANGAN'					
					}
				]
			} else if (el == 'MITRA'){
				this.databumys = [
					{
						img: require('@/assets/img/mitra/pt-indotruba-tengah.jpg'),					
						nama: 'PT. INDOTRUBA TENGAH',					
						alamat: 'PLAZA OFFICE TOWER LANTAI 36 JL. M.H. Thamrin Kav.28-30, Jakarta Pusat',					
						bidang: 'PERKEBUNAN KELAPA SAWIT'					
					},
					{
						img: require('@/assets/img/mitra/Sumber-Mas-Group.jpg'),					
						nama: 'PT. SUMBER MAS INDAH PLYWOOD',					
						alamat: 'JL. Gunung Sahari No.128 D Jakarta Pusat',					
						bidang: 'PENGOLAHAN KAYU'					
					},
					{
						img: require('@/assets/img/mitra/Sumber-Mas-Group.jpg'),					
						nama: 'PT. SUMBER MAS TIMBER',					
						alamat: 'JL. Gunung Sahari No.128 D Jakarta Pusat',					
						bidang: 'PENGOLAHAN KAYU'					
					},
					{
						img: '',					
						nama: 'PT. MERANTI SAKTI INDONESIA',					
						alamat: 'JL. Gunung Sahari No.128 D Jakarta Pusat',
						bidang: 'PENGOLAHAN KAYU'					
					},
					{
						img: '',					
						nama: 'PT. MERANTI SAKTI INDAH PLYWOOD',					
						alamat: 'JL. Gunung Sahari No.128 D Jakarta Pusat',					
						bidang: 'PENGOLAHAN KAYU'					
					},
					{
						img: '',					
						nama: 'PT. KAYAN RIVER PLYWOOD',					
						alamat: 'JL. Gunung Sahari No.128 D Jakarta Pusat',					
						bidang: 'PENGOLAHAN KAYU'					
					},
					{
						img: '',					
						nama: 'PT. KHARISMA ARYA PAKSI',					
						alamat: 'JL. Gunung Sahari No.128 D Jakarta Pusat',					
						bidang: 'PERHOTELAN'					
					},
					{
						img: '',					
						nama: 'PT. KARTIKA AIRLINES',					
						alamat: 'JL. Raya Bogor Km.28 Kompleks Deta Marina',					
						bidang: 'TRANSPORTASI'					
					},
					{
						img:  require('@/assets/img/mitra/pt-indotruba-timur.jpg'),					
						nama: 'PT. INDOTRUBA TIMUR',					
						alamat: 'GEDUNG INDOFOOD INFO MAS GROUP LANTAI 22 JL. Jenderal Sudirman Kav. 76-78, Jakarta Pusat',					
						bidang: 'PERKEBUNAN KELAPA SAWIT'					
					},
				]
			}
		},
		openModalBidang(el){
			this.modalfor = el;
			$('#bidangModal').modal('show')
			if(el == 'Bidang Sosial'){
				this.databidangs = [
					{		
						point: '1',
						kegiatan: 'Memberikan bantuan untuk meningkatkan kecerdasan msayarakat khususnya KBAD melalui lembaga formal dan non formal dalam bentuk:',
						listKegiatans:[
							{
								point:'a',
								text:'Menyelenggarakan pendidikan Perguruan Tinggi di lingkungan Yayasan.'
							},
							{
								point:'b',
								text:'Memberikan bantuan beasiswa, biaya pendidikan dan bantuan lainnya kepada anak-anak Prajurit TNI AD yang gugur dan meninggal dunia, korban latihan dan operasi militer.'
							},
							{
								point:'c',
								text:'Memberikan bantuan beasiswa, biaya pendidikan dan bantuan lainnya kepada KBAD bagi yang berprestasi dan atau yang kurang mampu.'
							},
							{
								point:'d',
								text:'Memberikan bantuan uang kuliah bagi Prajurit TNI AD dan PNS TNI AD atau rekomendasi TNI AD.'
							},
							{
								point:'e',
								text:'Memberikan bantuan sarana dan prasarana pendidikan.'
							}
						]
					},
					{	
						point: '2',
						kegiatan: 'Memberikan bantuan untuk meningkatkan kesejahteraan KBAD dan masyarakat umum melalui lembaga formal dan non formal dalam bentuk:',
						listKegiatans:[
							{
								point:'a',
								text:'Santunan kepda para ahli waris Prajurit TNI AD yang gugur dan meninggal dunia, korban latihan dan operasi militer.'
							},
							{
								point:'b',
								text:'Bantuan pembangunan/rehabilitasi rumah dinas tidak layak huni.'
							},
							{
								point:'c',
								text:'Bantuan sarana angkutan.'
							},
							{
								point:'d',
								text:'Bantuan sarana dan prasarana kesejahteraan.'
							},
							{
								point:'e',
								text:'Bantuan bagi atlit yang berprestasi.'
							},
							{
								point:'f',
								text:'Bantuan kegiatan sosial lainnya yang tidak bertentangan dengan tujuan Yayasan.'
							}
						]
					}
				]
			}else if(el == 'Bidang Keagamaan'){
				this.databidangs = [
					{		
						point: '1',
						kegiatan: 'Memberikan bantuan dalam bidang keagamaan kepada KBAD khususnya, masyarakat pada umumnya sesuai kemampuan dan persyaratan yang ditetapkan Yayasan dalam bentuk:',
						listKegiatans:[
							{
								point:'a',
								text:'Dukungan untuk Umroh bagi yang beragama Islam, Ziarah Rohani bagi yang beragama Nasrani, Hindu dan Budha.'
							},
							{
								point:'b',
								text:'Dukungan hewan qurban pada hari raya Idul Adha dan bingkisan hari-hari besar keagamaan kepada KBAD.'
							},
							{
								point:'c',
								text:'Dukungan untuk pembangunan/rehabilitasi tempat-tempat ibadah yang digunakan oleh KBAD.'
							},
							{
								point:'d',
								text:'Bantuan kegiatan keagamaan lainnya yang tidak bertentangan dengan tujuan Yayasan.'
							}
						]
					}
				]
			}else if(el == 'Bidang Kemanusiaan'){
				this.databidangs = [
					{		
						point: '1',
						kegiatan: 'Memberikan bantuan kemanusiaan kepada masyarakat khususnya KBAD sesuai kemampuan dan persyaratan yang ditetapkan Yayasan dalam bentuk:',
						listKegiatans:[
							{
								point:'a',
								text:'Bantuan kepada korban bencana alam.'
							},
							{
								point:'b',
								text:'Bantuan kepada korban Operasi Militer Perang dan Operasi Militer Selain Perang (OMP dan OMSP).'
							},
							{
								point:'c',
								text:'Bantun kegiatan kemanusiaan lainnya yang tidak bertentangan dengan tujuan Yayasan.'
							}
						]
					}
				]
			}
		}
	}
};
</script>