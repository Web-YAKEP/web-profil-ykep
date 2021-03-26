<template>
	<div>
			<section id="clients" class="clients mt-5">
				<div class="container">
					<div class="row">
						<div class="col-8 mx-auto">
							<img class="card-img card-img-berita-detail" :src="img_conttent" alt="Card image">
						</div>
					</div>
				</div>
				<div class="container mt-5" data-aos="zoom-in">
					<header class="section-header">
						<h3>{{ title }}</h3>
					</header>
					<div class="row">
						<div class="col-12 mt-2">
							<span class="badge badge-info">{{ tgl_post }}</span>
						</div>
						<div class="col-12 mx-auto mt-4">
							<p class="text-justify m-0" v-html="content"></p>
						</div>
					</div>
				</div>

			</section>

		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
	</div>
</template>

<script>
const axios = require('axios').default;
export default{
	data(){
		return{
			title:'',
			tgl_post:'',
			content:'',
			img_conttent:''
		}
	},
	mounted(){
		axios
		.get('https://ykep.cloudapp.web.id/api/post/'+this.$route.query.q)
		.then(response => {
			
				console.log(response.data)
				this.title = response.data.title
				this.tgl_post = response.data.published_at
				this.content = response.data.content
				this.img_conttent = response.data.featured_image
		})
		.catch(function(){
			console.log('FAILURE!!');
		}
		);
	}
};
</script>

<style>
	.card-img-berita-detail{
		border-radius: 10px !important;
	}
</style>