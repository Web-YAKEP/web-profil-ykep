<template>
	<div>
		<div class="container-fluid pl-0 pr-0 header-banner">
			<img src="@/assets/img/baner-kontak.jpg" class="w-100" alt="">
		</div>
		<div class="wrap section-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-4">
						<div class="box">
							<div class="icon" style="background: #2a4745"><i class="fa fa-home text-white" aria-hidden="true"></i></div>
							<p class="description text-center">Jalan Medan Merdeka Timur No. 7,
								RT.2/RW.1, Gambir, Kota Jakarta Pusat,
								Daerah Khusus Ibu Kota 10110
							</p>
						</div>
					</div>
					<div class="col-md-6 col-lg-4">
						<div class="box">
							<div class="icon" style="background: #2a4745"><i class="fa fa-phone text-white" aria-hidden="true"></i></div>
							<p class="description text-center">(021) 3840424
								<br><br><br>
							</p>
						</div>
					</div>
					<div class="col-md-6 col-lg-4">
						<div class="box">
							<div class="icon" style="background: #2a4745"><i class="fa fa-envelope text-white" aria-hidden="true"></i></div>
							<p class="description text-center">yayasankartikaekapaksi@gmail.com
								<br><br><br>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap section-bg pt-0">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-8 mx-auto">
						<div class="card card-tanya">
							<div class="card-header text-center">
								<h5 class="mb-0 pt-1 pb-1">Pengaduan</h5>
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
										<select class="form-control" v-model="kategori" v-on:change="validation(kategori,'kategori')">
											<option value="">Pilih Kategori</option>
											<option value="Plagiasi">Plagiasi</option>
											<option value="Pornografi">Pornografi</option>
											<option value="Sara">Sara</option>
											<option value="Bias Gender">Bias Gender</option>
											<option value="Kekerasan">Kekerasan</option>
											<option value="Salah Tulis/Editorial">Salah Tulis/Editorial</option>
											<option value="Salah Cetak">Salah Cetak</option>
											<option value="Lain-lain">Lain-lain</option>
										</select>
										<small id="kategoriHelp" class="form-text text-danger" >Silahkan Pilih Kategori!</small>
									</div>
									<div class="form-group">
										<label for="nama">Nama</label>
										<input type="text" class="form-control" v-model="nama"  v-on:change="validation(nama,'nama')">
										<small id="namaHelp" class="form-text text-danger">Silahkan Masukan Nama!</small>
									</div>
									<div class="form-group">
										<label for="email">Email</label>
										<input type="email" class="form-control"  v-model="email"  v-on:change="validation(email,'email')">
										<small id="emailHelp" class="form-text text-danger">Silahkan Masukan Email!</small>
									</div>
									<div class="form-group">
										<label for="nohp">No. Handphone</label>
										<input type="number" class="form-control"  v-model="nohp"  v-on:change="validation(nohp,'nohp')">
										<small id="nohpHelp" class="form-text text-danger">Silahkan Masukan No HP!</small>
									</div>
									<div class="form-group">
										<label for="pesan">Pesan</label>
										<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="pesan"  v-on:change="validation(pesan,'pesan')"></textarea>
										<small id="pesanHelp" class="form-text text-danger">Silahkan Masukan Pesan!</small>
									</div>
									<button type="submit" class="btn btn-success pull-right">Kirim</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap section-bg pt-0">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Jalan%20Medan%20Merdeka%20Timur%20No.%207,%20%09%09%09%09%09%09%09%09%09RT.2/RW.1,%20Gambir,%20Kota%20Jakarta%20Pusat,%20%09%09%09%09%09%09%09%09%09Daerah%20Khusus%20Ibu%20Kota&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://yt2.org"></a><br></div></div>
					</div>
				</div>
			</div>
		</div>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
	</div>
</template>

<script>
	const axios = require('axios').default;
	export default{
		data(){
			return{
				kategori:'',
				pesan:'',
				nama:'',
				email:'',
				nohp:''
			}
		},
		mounted(){
			$('#kategoriHelp').hide()
			$('#pesanHelp').hide()
			$('#namaHelp').hide()
			$('#emailHelp').hide()
			$('#nohpHelp').hide()
			$('#alert').hide()
			this.pesan = ''
			this.kategori = ''
			this.nama = ''
			this.email = ''
			this.nohp = ''
		},
		methods:{
			submit(){
				if(this.validation(this.kategori,'kategori') & this.validation(this.nama,'nama') & this.validation(this.email,'email') & this.validation(this.nohp,'nohp') & this.validation(this.pesan,'pesan')){
					const formData = new FormData();
					formData.append('category', this.kategori);
					formData.append('name', this.nama);
					formData.append('email', this.email);
					formData.append('phone', this.nohp);
					formData.append('message', this.pesan);
					axios.post('https://admin.ykep.org/entry/services/insert/question', formData)
					.then(response => { 
						if(response.status = 'success'){
							$('#alert').show()
							this.pesan = ''
							this.kategori = ''
							this.nama = ''
							this.email = ''
							this.nohp = ''
						}else{
							alert('Oops! Terjadi kesalahan saat mengirim data!')	
						}
						
					})
					.catch(error => { 
						alert('Oops! Terjadi kesalahan saat mengirim data!')
					});
				}
			},
			validation(val,el){
				$('#alert').hide()
				if(val == ''){
					$('#'+el+'Help').show()
					return false
				}else{
					$('#'+el+'Help').hide()
					return true
				}
			}
		}
	};
</script>

<style>
	.mapouter{
		width: 100% !important;
		height: 100% !important;
	}
	.gmap_canvas{
		width: 100% !important;
		height: 100% !important;	
	}

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
	.mapouter{position:relative;text-align:right;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;
	}
</style>