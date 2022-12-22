<template>
	<div class="berita">
		<div class="container-fluid pl-0 pr-0 header-banner">
			<img src="@/assets/img/baner-berita.jpg" class="w-100" alt="">
		</div>
		<div class="wrap">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="text-center">
							<div class="d-inline-block">
								<div class="btn-toolbar mx-auto" role="toolbar" aria-label="Toolbar with button groups">
									<div class="btn-group mr-4 mb-4" role="group" aria-label="Third group">
										<button type="button" class="btn btn-berita active-btn" v-on:click="get_berita()">Semua Berita</button>
									</div>
									<div class="btn-group mr-4 mb-4" role="group" aria-label="Third group">
										<button type="button" class="btn btn-berita" v-on:click="filter_by('Pendidikan')">Pendidikan</button>
									</div>
									<div class="btn-group mr-4 mb-4" role="group" aria-label="Third group">
										<button type="button" class="btn btn-berita" v-on:click="filter_by('BUMY')">BUMY</button>
									</div>
									<div class="btn-group mr-4 mb-4" role="group" aria-label="Third group">
										<button type="button" class="btn btn-berita" v-on:click="filter_by('Mitra')">MITRA</button>
									</div>
									<div class="btn-group mr-4 mb-4" role="group" aria-label="Third group">
										<button type="button" class="btn btn-berita" v-on:click="filter_by('Sosial')">Sosial & Agama</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap pt-0">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-sm-12 text-center mb-4"  v-for="item in data_berita">
						<div class="card text-white card-container-berita">
							<div class="over-bg">
								<img class="card-img card-img-berita" :src="item.thumbnail" alt="Card image">
							</div>
							<div class="card-img-overlay">
								<div class="card head berita mx-auto">
									<div class="card-body tag-head">
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
							<div class="card-footer">
								<button v-if="item.redirect_link" class="btn btn-outline-primary btn-sm d-inline mr-1" v-on:click="goLink(item.redirect_link)"><i class="fa fa-link"></i> Buka Tautan</button>
								<button v-else-if="item.file" class="btn btn-outline-info btn-sm d-inline mr-1" v-on:click="openModalPDF(item.file)"><i class="fa fa-eye"></i> Baca Dokumen</button>
								<button v-else class="btn btn-outline-success btn-sm d-inline" v-on:click="bacaBerita(item.id)">Lanjut Baca <i class="fa fa-arrow-circle-right"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
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
	.judul-berita{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 160px;
	}
	.tgl-berita{
		position: absolute;
		bottom: 20px;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
	}
	@media screen and (max-width: 600px){
		.card .berita {
			margin-top: 1em !important;
		}
		#openPDF .modal-dialog {
			max-width: 100% !important;
			top: 10%;
		}
	}
	.p-10{
		padding:0em 10em !important;
	}
	.btn-berita{
		background-color: transparent;
		border: solid 1px #37bea9 !important;
		color: #37bea9;
	}
	.active-btn{
		background-color: #37bea9 !important;
		color: #ffffff;
	}
	.btn-berita:hover{
		background-color: #37bea9;
		color: #ffffff;
	}
	.card-container-berita{
		border: none !important;
		box-shadow: 0 0 5px rgb(0 0 0 / 40%);
		border-radius: 10px !important;
	}
	.card-img-berita{
		border-top-left-radius: 10px !important;
		border-top-right-radius: 10px !important;
		border-bottom-left-radius: 0px !important;
		border-bottom-right-radius: 0px !important;
		object-fit: cover;
		height: 285px;
	}

	.over-bg{
		height: 292px;
	}

	.over-bg:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 82%;
		background: rgb(0 159 101 / 68%);
		opacity: 1;
		left: 0;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
	.card-img-overlay{
		bottom:63px !important;
	}
</style>

<script>
	const axios = require('axios').default;
	export default {
		data(){
			return{
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
				.get('https://admin.ykep.org/api/post')
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
			filter_by(key){
				axios
				.get('https://admin.ykep.org/api/post')
				.then(response => {
					this.data_berita = []
					for (var i = 0; i <= (response.data.posts).length - 1; i++) {
						if(response.data.posts[i].category.name == key){
							this.data_berita.push({
								id: response.data.posts[i].id,
								kategori: response.data.posts[i].category.name,
								judul: response.data.posts[i].title,
								tgl: response.data.posts[i].published_at,
								file: response.data.posts[i].embed_video,
								narasi:'',
								img_narasi:'',
								thumbnail: response.data.posts[i].featured_image
							})
						}
					}
				})
				.catch(function(){
					console.log('FAILURE!!');
				}
				);
			},
			bacaBerita(id){
				this.$router.push({ path: '/baca-berita', query: { q: id } })
			},
			openModalPDF(link){
				$('#openPDF').modal('show')
				PDFObject.embed(link, "#example1", {forcePDFJS: true,height: "30em"})	
			}
		}
	};
</script>