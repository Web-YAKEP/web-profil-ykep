<template>
	<div>
		<div class="container-fluid pl-0 pr-0 header-banner">
			<img src="@/assets/img/baner-galeri.jpg" class="w-100" alt="">
		</div>
		<div class="container mt-5">
			<header class="section-header text-center">
				<h3>Foto</h3>
				<div class="divider-custom-3">
					<div class="divider-custom-line-3"></div>
				</div>
			</header>
			<div class="row">
				<div class="col-md-12 col-lg-3 mb-4" v-for="item in data_foto">	
					<div class="img_wrap-foto-galery text-center mx-auto">
						<img class="w-100 img_foto" :src="item.thumbnail" alt="Card image cap">
						<p class="img_desc pt-5" v-on:click="zoomImg(item.picture)" v-html="item.description"></p>
					</div>
				</div>
			</div>
		</div>

		<div class="container mt-5 mb-5 container-video">
			<header class="section-header text-center">
				<h3>Video</h3>
				<div class="divider-custom-3">
					<div class="divider-custom-line-3"></div>
				</div>
			</header>
			<div class="row">
				<div class="col-md-12 col-lg-4 mb-4" v-for="item in data_video">
					<div class="card">
						<div class="card-img-top" v-on:click="playVideo(item.youtube_id)">
							<span class="play_btn"><i class="fa fa-play-circle-o" aria-hidden="true"></i></span>
							<img :src="item.cover" class="w-100 img-buat-video">
						</div>
						<div class="card-body">
							<p class="card-text" v-html="item.title"></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="modal"  id="imgModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title"></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<img :src="imageInZoom" class="w-100">
					</div>
				</div>
			</div>
		</div>

		<div class="modal"  id="videoModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title"></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<iframe width="100%" height="360px" 
							:src="videoInPlay" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
						</iframe>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style>
	@media screen and (max-width: 600px){
		#imgModal .modal-dialog {
			top: 10% !important;
		}
		#videoModal .modal-dialog {
			top: 10% !important;
		}
	}
	#imgModal .modal-dialog {
		max-width: 40%;
		max-height: 40%;
	}
	#imgModal .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#imgModal .modal-dialog .modal-content .modal-body .card{
		border-radius: 15px;
		border: none;
		box-shadow: 0 0 5px rgb(0 0 0 / 20%);
	}
	#imgModal .modal-dialog .modal-content .modal-header{
		border-bottom: none;
	}
	#videoModal .modal-dialog {
		max-width: 40%;
		max-height: 40%;
	}
	#videoModal .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#videoModal .modal-dialog .modal-content .modal-body .card{
		border-radius: 15px;
		border: none;
		box-shadow: 0 0 5px rgb(0 0 0 / 20%);
	}
	#videoModal .modal-dialog .modal-content .modal-header{
		border-bottom: none;
	}
	.img_wrap-foto-galery {
		position: relative;
		height: 200px;
		width: 257px;
	}

	.img_desc {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin:auto;
		background: rgb(7 157 132 / 79%);
		color: #fff;
		visibility: hidden;
		opacity: 0;
		transition: opacity .2s, visibility .2s;
	}

	.img_wrap-foto-galery:hover .img_desc {
		visibility: visible;
		opacity: 1;
	}

	.img_foto{
		object-fit: cover;
		height: 100%;
	}

	.img-buat-video{
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
	.frame-video-galery{
		position: relative;
		overflow: hidden;
		height: 240px;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
	.container-video .card-body{
		padding : 20px 15px;
	}
	.container-video .card-body p{
		font-weight: 400;
		font-size: 14px;
	}
	.container-video .card{
		border-radius: 15px !important;
		border: none;
	    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
	}
	.play_btn{
		position: absolute;
		top: 25%;
		bottom: auto;
		left: 0;
		right: 0;
		text-align: center;
	}
	.play_btn i{
		font-size: 50px;
		background-color: #38c0a699;
		padding: 11px;
		border-radius: 10px;
		color: #fff;
	}
</style>

<script>
const axios = require('axios').default;
export default{
	data(){
		return{
			data_foto: [],
			data_video: [],
			imageInZoom: '',
			videoInPlay: '',
		}
	},
	mounted(){
		this.loadFoto()
		this.loadVideo()
	},
	methods:{
		zoomImg(img){
			$('#imgModal').modal('show')
			this.imageInZoom = img
		},
		playVideo(url){
			$('#videoModal').modal('show')
			this.videoInPlay = url
		},
		loadFoto(){
			axios
			.get('https://admin.ykep.org/entry/services/index/photo')
			.then(response => {
				this.data_foto = []
				if(response.data.status == 'success'){
					for (var i = 0; i <= (response.data.results).length -1; i++) {
						this.data_foto.push({
							id: response.data.results[i].id,
							title: response.data.results[i].title,
							description: response.data.results[i].description+'<br><i class="fa fa-search-plus" aria-hidden="true"></i>',
							thumbnail: response.data.results[i].thumbnail,
							picture: response.data.results[i].picture,
							created_at: response.data.results[i].created_at
						})
					}
				}
			})
			.catch(function(){
				console.log('FAILURE!!');
			}
			);
		},
		loadVideo(){
			axios
			.get('https://admin.ykep.org/entry/services/index/video')
			.then(response => {
				this.data_video = []
				if(response.data.status == 'success'){
					for (var i = 0; i <= (response.data.results).length -1; i++) {
						this.data_video.push({
							id: response.data.results[i].id,
							title: response.data.results[i].title,
							description: response.data.results[i].description,
							cover: response.data.results[i].cover,
							youtube_id: response.data.results[i].youtube_id,
							created_at: response.data.results[i].created_at
						})
					}
				}
			})
			.catch(function(){
				console.log('FAILURE!!');
			}
			);
		}
	}
};
</script>