<template>
	<div class="beranda">
			<section id="clients" class="clients mt-5">
				<div class="container" data-aos="zoom-in">
					<div class="row">
						<div class="col-8 mx-auto text-center mb-4">
							<img :src="imgPt" class="border-5">
						</div>
					</div>
					<header class="section-header text-center">
						<h3 v-html="namaPt"></h3>
						<div class="divider-custom-3">
							<div class="divider-custom-line-3"></div>
						</div>
					</header>
					<div class="row">
						<div class="col-8 mx-auto">
							<p class="m-0 text-justify" v-html="deskripsi">
							</p>
						</div>
					</div>
				</div>

			</section>

		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
	</div>
</template>

<script>
export default {
	data(){
		return{
			namaPt:'',
			imgPt:'',
			deskripsi:''
		}
	},
	mounted(){
		this.getDetail(this.$route.query.nama)
	},
	methods:{
		getDetail(q){
			if(q == 'PT. WAHANA BHAKTI UTAMA'){
				this.namaPt	= q
				this.imgPt = require('@/assets/img/bumy/pt-wahana-bhakti-utama.png')
				this.deskripsi = 'Perusahaan ini tergolong paling tua di lingkungan BUMY. Sesuai dengan akta pendiriannya, perseroan ini bernama “PT. Perusahaan Pengangkutan, Veem dan Ekspedisi Marabunta” atau disingkat PT. Marabunta. Didirikan dengan Akta Nomor 46 tanggal 17  Januari 1956 yang dibuat Notaris Eliza Pondang, dan dimuat dalam Berita Negara RI Nomor 91 tanggal 13 Nopember 1956.'
			}
		}
	}
};
</script>

<style>
	.border-5 {
		border-radius: 20px;
    	padding: 0px;	
    }
</style>