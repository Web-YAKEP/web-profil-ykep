<template>
	<div>
		<section id="about" class="about mt-5">
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-12">
						<img src="@/assets/img/baner-kontak.jpg" class="img-fluid header-page" alt="">
					</div>
				</div>
			</div>
		</section>
		<section id="services" class="services section-bg">
			<div class="container" data-aos="fade-up">
				<div class="row">
					<div class="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay="100">
						<div class="box">
							<div class="icon" style="background: #2a4745"><i class="fa fa-home text-white" aria-hidden="true"></i></div>
							<p class="description text-center">Jalan Medan Merdeka Timur No. 7,
								RT.2/RW.1, Gambir, Kota Jakarta Pusat,
								Daerah Khusus Ibu Kota 10110
							</p>
						</div>
					</div>
					<div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
						<div class="box">
							<div class="icon" style="background: #2a4745"><i class="fa fa-phone text-white" aria-hidden="true"></i></div>
							<p class="description text-center">(021) 23549153
								<br><br><br>
							</p>
						</div>
					</div>

					<div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
						<div class="box">
							<div class="icon" style="background: #2a4745"><i class="fa fa-envelope text-white" aria-hidden="true"></i></div>
							<p class="description text-center">@gmail.com
								<br><br><br>
							</p>
						</div>
					</div>
				</div>

			</div>
		</section>

		<section id="services" class="services section-bg">
			<div class="container" data-aos="fade-up">
				<div class="row">
					<div class="card w-50 card-tanya">
						<div class="card-header text-center">
							<h5 class="mb-0 pt-1 pb-1">Tanyakan Sesuatu</h5>
						</div>
						<div id="alert" class="card-body mb-0 pb-0">
							<div class="alert alert-info alert-dismissible fade show" role="alert">
								<strong>Selamat!</strong> Pesan anda berhasil di kirim.
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>	
						</div>
						<div class="card-body">
							<form @submit.prevent="submit">
								<div class="form-group">	
									<label for="kategori">Kategori</label>
									<select class="form-control" v-model="kategori">
									<option value="">Pilih Kategori</option>
									<option value="Kategori 1">Kategori 1</option>
									<option value="Kategori 2">Kategori 2</option>
								</select>
								<small id="kategoriHelp" class="form-text text-danger" >Silahkan Pilih Kategori!</small>
								</div>
								<div class="form-group">
									<label for="pesan">Pesan</label>
									<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="pesan"></textarea>
									<small id="pesanHelp" class="form-text text-danger">Silahkan Masukan Pesan!</small>
								</div>
								<button type="submit" class="btn btn-success pull-right">Kirim</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="services" class="services section-bg">
			<div class="container" data-aos="fade-up">
				<div class="row">
					<div class="mapouter"><div class="gmap_canvas"><iframe width="1080" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Jalan%20Medan%20Merdeka%20Timur%20No.%207,%20%09%09%09%09%09%09%09%09%09RT.2/RW.1,%20Gambir,%20Kota%20Jakarta%20Pusat,%20%09%09%09%09%09%09%09%09%09Daerah%20Khusus%20Ibu%20Kota&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://yt2.org"></a><br></div></div>
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
				kategori:'',
				pesan:''
			}
		},
		mounted(){
			$('#kategoriHelp').hide()
			$('#pesanHelp').hide()
			$('#alert').hide()
			this.pesan = ''
			this.kategori = ''
		},
		methods:{
			submit(){
				
				if(this.kategori != '' && this.pesan != ''){
					const formData = new FormData();
					formData.append('category', this.kategori);
					formData.append('message', this.pesan);
					axios.post('https://ykep.cloudapp.web.id/entry/services/insert/question', formData)
					.then(response => { 
						console.log(response)
						$('#alert').show()
						this.pesan = ''
						this.kategori = ''
					})
					.catch(error => { 
						alert('Oops! Terjadi kesalahan saat mengirim data!')
					});
				}else if(this.kategori == ''){
					$('#alert').hide()
						$('#kategoriHelp').show()
						$('#kategoriHelp').focus()
						if(this.pesan == ''){
							$('#pesanHelp').show()
						}else{
							$('#pesanHelp').hide()
						}
				}else if(this.pesan == ''){
					$('#alert').hide()
						$('#pesanHelp').show()
						$('#kategoriHelp').focus()
						if(this.kategori == ''){
							$('#kategoriHelp').show()
						}else{
							$('#kategoriHelp').hide()
						}
				}
			}
		}
	};
</script>

<style scope>
	.card-tanya {
		margin: 0 auto;
		float: none;
		margin-bottom: 10px;
		border: none !important;
		border-radius: 11px !important;
		box-shadow: 0 0 7px rgb(0 0 0 / 30%);
	}
	.card-tanya .card-header{
		background-color: transparent;
	}
	.card-tanya .card-header h5{
		font-weight: 700
	}
	.mapouter{position:relative;text-align:right;height:500px;width:1080px;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1080px;
	}
</style>