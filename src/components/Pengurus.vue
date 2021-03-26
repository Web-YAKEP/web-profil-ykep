<template>
	<div class="pengurus">
		<section id="about" class="about mt-5">
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-12">
						<img src="@/assets/img/baner-pengurus.jpg" class="img-fluid header-page" alt="">
					</div>
				</div>
			</div>
		</section>
		<section id="clients" class="clients">
			<div class="container" data-aos="zoom-in">
				<div v-for="pengurusItem of pengurusItems">
					<div class="row mb-4">
						<div class="col-12 padding-card-pengurus">
							<div class="card mx-auto card-pengurus">
								<div class="card-body pr-4">
									<div class="row">
										<div class="col-5">
											<img :src="pengurusItem.img" class="img-pengurus">
										</div>
										<div class="col-7 text-pengurus pl-0">
											<h5 class="nama-pengurus"><b>{{ pengurusItem.nama }}</b></h5>
											<p class="jabatan-pengurus">
												{{ pengurusItem.jabatan }}
												<br>
												{{ pengurusItem.instansi }}
											</p>
											<p class="text-btn-pengurus mb-0 btn-pengurus" v-on:click="openModalPengurus(pengurusItem)">
												BACA SELENGKAPNYA <a class="text-danger"><i class="fa fa-chevron-circle-right"></i></a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
		<div class="modal"  id="pengurusModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">{{ modal_jabatanPengurus }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-12">	
							 <div class="row mx-auto mb-3">
							 <div class="col-12 text-center"><img :src="modal_imgPengurus" class="img-modal-pengurus" alt=""></div>
							 </div>
								<p class="pl-4 mb-3"><b>{{ modal_namaPengurus }}</b></p>
								<p class="pl-4 mb-3">
								Lahir <br>
								<span class="pl-3">{{ modal_ttlPengurus }}</span>
								</p>
								<p class="pl-4 mb-3">
								Kewarganegaraan dan Domisili <br>
								<span class="pl-3">{{ modal_domisiliPengurus }}</span>
								</p>
								<p class="pl-4 mb-3">
								Jabatan dan Dasar Penunjukan <br>
								<span class="pl-3">{{ modal_dasarPengurus }}</span>
								</p>
								<p class="pl-4 mb-3">
								Pendidikan <br>
								<span class="pl-3" v-for="modal_pendidikan in modal_pendidikans" v-if="modal_pendidikans.length">{{ modal_pendidikan }}<br></span> 	
								</p>
								<p class="pl-4 mb-3">
								Perjalanan Karir <br>
								<span class="pl-3" v-for="modal_karir in modal_karirs" v-if="modal_karirs.length">{{ modal_karir }} <br></span> 
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	
	@media screen and (max-width: 600px) {
		.card-pengurus{
		    min-width: 100% !important;
		}
		#pengurusModal .modal-dialog {
			max-width: 100% !important;
		}
	}
	.img-modal-pengurus{
		width: 25%;
	}
	#pengurusModal .modal-dialog {
		max-width: 45%;
	}
	#pengurusModal .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#pengurusModal .modal-dialog .modal-content .modal-header{
		border-bottom: none;
		padding-left: 3em;
	}
	#pengurusModal .modal-dialog .modal-content .modal-header h5{
		font-weight: 500;
	}
	.card-pengurus{
		border-radius: 15px !important;
		border: none;
	    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
	    max-width: 45%;
	}
	.card-pengurus .card-body{
		padding: 0px;
	}
	.img-pengurus{
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
		width: 100%;
		opacity: 100;
		padding: 0px !important;
	}
	.nama-pengurus{
		margin-bottom: 5px;
		font-size: 19px;
	}
	.jabatan-pengurus{
		margin-bottom: 12px;
		line-height: 21px;
		font-weight: 500;
	}
	.text-pengurus{
		padding: 1em 0em;
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
		data(){
			return{
				modal_namaPengurus: '',
				modal_imgPengurus: '',
				modal_jabatanPengurus: '',
				modal_ttlPengurus:'',
				modal_domisiliPengurus:'',
				modal_dasarPengurus:'',
				modal_pendidikans:[],
				modal_karirs:[],
				pengurusItems: [
				{
					nama : 'Tatang Sulaiman, S.Sos., M.Si.',
					img : require('@/assets/img/ketua-ykep.webp'),
					jabatan : 'Ketua Pengurus Yayasan',
					instansi : 'YKEP',
					ttl : 'Bandung, 1 April 1962',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: 'Keputusan KSAD sebagai Pembina Yayasan',
					pendidikan: ['S1 : Universitas','S2 : Universitas','S3 : Universitas'],
					perjalnanKarir: ['Kapuspen TNI','Pangdam Iskandar Muda','Pangdam Diponegoro','WAKASAD']
				},
				{
					nama : 'Moch. Bambang Taufik',
					img : require('@/assets/img/wakil-ketua.webp'),
					jabatan : 'Wakil Ketua Yayasan',
					instansi : 'YKEP',
					ttl : '',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: [],
					perjalnanKarir: []
				},
				{
					nama : 'Arifin',
					img : require('@/assets/img/sekertaris.webp'),
					jabatan : 'Sekertaris',
					instansi : 'YKEP',
					ttl : '',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: [],
					perjalnanKarir: []
				},
				{
					nama : 'Yudi Sutrasna',
					img : require('@/assets/img/bendahara.webp'),
					jabatan : 'Bendahara',
					instansi : 'YKEP',
					ttl : '',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: [],
					perjalnanKarir: []
				},
				{
					nama : "Safi'ul",
					img : require('@/assets/img/kabid-usaha.webp'),
					jabatan : 'Kepala Bidang Usaha & Investasi',
					instansi : 'YKEP',
					ttl : '',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: [],
					perjalnanKarir: []
				},
				{
					nama : "Benny Indra P",
					img : require('@/assets/img/kabid-pendidikan.webp'),
					jabatan : 'Kepala Bidang Pendidikan',
					instansi : 'YKEP',
					ttl : '',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: [],
					perjalnanKarir: []
				},
				{
					nama : "Abdul Karim",
					img : require('@/assets/img/kabid-kesejahteraan.webp'),
					jabatan : 'Kepala Bidang Kesejahteraan &',
					instansi : 'Hubungan Kelembagaan YKEP',
					ttl : '',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: [],
					perjalnanKarir: []
				},
				]
			}
		},
		methods:{
			openModalPengurus(item){
				this.modal_namaPengurus = item.nama
				this.modal_imgPengurus = item.img
				if(item.nama == 'Abdul Karim'){
					this.modal_jabatanPengurus = 'Kepala Bidang Kesejahteraan & Hubungan Kelembagaan'	
				}else{
					this.modal_jabatanPengurus = item.jabatan
				}
				this.modal_ttlPengurus = item.ttl
				this.modal_domisiliPengurus = item.kewarganegaraan
				this.modal_dasarPengurus = item.dasarPenunjukan
				this.modal_pendidikans = item.pendidikan
				this.modal_karirs = item.perjalnanKarir
				$('#pengurusModal').modal('show')
			}
		}
	};
</script>