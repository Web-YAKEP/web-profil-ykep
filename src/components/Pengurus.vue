<template>
	<div class="pengurus">
		<div class="container-fluid pl-0 pr-0 header-banner">
			<img src="@/assets/img/baner-pengurus.jpg" class="w-100" alt="">
		</div>
		<div class="wrap">
			<div class="container">
				<div v-for="pengurusItem of pengurusItems">
					<div class="row mb-4">
						<div class="col-md-12 col-lg-6 mx-auto">
							<div class="card card-pengurus">
								<div class="row">
									<div class="col-4">
										<img :src="pengurusItem.img" class="img-pengurus">
									</div>
									<div class="col-8 align-self-center bungkus-nama-pengurus">
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
									<div class="col-12 text-center"><img :src="data_firstModal.img" class="img-modal-pengurus" alt=""></div>
									<button class="btn btn-sm btn-info mx-auto mt-3" v-on:click="openPDFPengurus(data_firstModal.link_profil)">Lihat Profil Lengkap</button>
								</div>
								<p class="pl-4 mb-3"><b>{{ data_firstModal.nama }}</b></p>
								<p class="pl-4 mb-3">
								<span class="pl-3">PANGKAT / CORPS :</span><br>
								<span class="pl-3">NRP / NIP :</span><br>
								<span class="pl-3">Tempat Tanggal Lahir :</span><br>
								<span class="pl-3">TMT TNI :</span><br>
								<span class="pl-3">KATEGORI PERS :</span><br>
								<span class="pl-3">TMT KATEGORI :</span><br>
								<span class="pl-3">SUKU BANGSA :</span><br>
								<span class="pl-3">AGAMA :</span><br>
								<span class="pl-3">GOl. DARAH :</span><br>
								<span class="pl-3">SUMBER PERWIRA :</span><br>
								<span class="pl-3">TMT PERWIRA :</span><br>
								<span class="pl-3">JABATAN :</span><br>
								<span class="pl-3">TMT JABATAN :</span><br>
								<span class="pl-3">KESATUAN :</span><br>
								</p>
								<p class="pl-4 mb-3">
								Riwayat Pendidikan Terakhir  <br>
								<span class="pl-3"></span>
								</p>
								<p class="pl-4 mb-3">
								Pendidikan Militer <br>
								<span class="pl-3" v-for="modal_pendidikan in modal_pendidikans" v-if="modal_pendidikans.length"><br></span> 	
								</p>
								<p class="pl-4 mb-3">
								Jabatan dan Dasar Penunjukan <br>
								<span class="pl-3">{{ modal_dasarPengurus }}</span>
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
		<div class="modal" id="myModal2" data-backdrop="static">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Profil Lengkap</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div><div class="container"></div>
					<div class="modal-body">
						<div id="pdfPengurus"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	@media screen and (max-width: 600px) {
		#pengurusModal .modal-dialog {
			max-width: 100% !important;
			top: 10%;
		}
		.bungkus-nama-pengurus{
			padding-top: 10px;
			padding-bottom: 10px;
		}
		.nama-pengurus {
			font-size: 15px !important;
			margin-bottom: auto;
		}
		.jabatan-pengurus {
			line-height: 12px !important;
			font-size: 10px;
			margin-bottom: auto;
			margin-top: 2px;
		}
		.text-btn-pengurus {
			font-size: 10px !important;
		}
		.text-btn-pengurus  {
		    font-size: 12px;
		}
	}
	.img-modal-pengurus .fa{
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
	}
	.card-pengurus .card-body{
		padding: 0px;
	}
	.img-pengurus{
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
    	width: 100%;
    	object-fit: cover;
	}
	.nama-pengurus{
		font-size: 19px;
	}
	.jabatan-pengurus{
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
				data_firstModal: [],
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
					link_profil : 'https://drive.google.com/file/d/19w41jVAoy_pDAj-t0AKOWNPxfgqgvhY9/preview',
					img : require('@/assets/img/ketua-ykep.webp'),
					jabatan : 'Ketua Pengurus Yayasan',
					instansi : 'YKEP',
					ttl : 'Bandung, 1 April 1962',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: 'Keputusan KSAD sebagai Pembina Yayasan',
					pendidikan: ['S1 : Universitas Jenderal Achmad Yani','S2 : Universitas Jenderal Achmad Yani','S3 : Universitas Gadjah Mada'],
					perjalnanKarir: ['KAPUSPEN TNI 10-09-2015','PANGDAM ISKANDAR MUDA 16-09-2016','PANGDAM IV/ DIPONEGORO 31-03-2017','WAKASAD 27-10-2017','KETUA PENGURUS YKEP 29-09-2020 - Sekarang']
				},
				{
					nama : 'Moch. Bambang Taufik',
					link_profil : 'https://drive.google.com/file/d/1PhrseTgzugFfM3KvZEsry741fsxWBFoX/preview',
					img : require('@/assets/img/wakil-ketua.webp'),
					jabatan : 'Wakil Ketua Yayasan',
					instansi : 'YKEP',
					ttl : 'Kab. Bandung, 09 November 1961',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: [],
					perjalnanKarir: ['IROPS IRUM 27-08-2013','WAASPAM KASAD 02-05-2014','KASDAM XVI/PTM 24-04-2015','KAS KOSTRAD 24-12-2019']
				},
				{
					nama : 'Arifin, S.E., M.M.',
					link_profil : 'https://drive.google.com/file/d/16x8zFOJPuU4EhrHpoggdPBaPyW2zINI0/preview',
					img : require('@/assets/img/sekertaris.webp'),
					jabatan : 'Sekertaris',
					instansi : 'YKEP',
					ttl : 'Garut, 11 April 1962',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: ['S1 : Universitas Krishna Dwipayana','S2 : Universitas Krishna Dwipayana'],
					perjalnanKarir: []
				},
				{
					nama : 'Dr. Drs. Yudi Sutrasna, M.M.',
					link_profil : 'https://drive.google.com/file/d/1k0fr9wtMmy1f2AorG0ufGpMDDoeAbhE-/preview',
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
					nama : "Safiul",
					link_profil : 'https://drive.google.com/file/d/1OWc3dzgKqva0qz9qgyrznPtLEJk-oLJy/preview',
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
					nama : "Benny Indra Pujihastono, S.I.P",
					link_profil : 'https://drive.google.com/file/d/1Mh0Sj5Od-8bKrIkHlh1dcmSUI9iRdmGf/preview',
					img : require('@/assets/img/kabid-pendidikan.webp'),
					jabatan : 'Kepala Bidang Pendidikan',
					instansi : 'YKEP',
					ttl : 'Ungaran, 02 Desember 1961',
					kewarganegaraan : 'Warga Negara Indonesia, berdomisili di Indonesia',
					dasarPenunjukan: '',
					pendidikan: ['S1: Universitas Jendral Achmad Yani','S2: sedang dilaksanakan di Universitas Jendral Achmad Yani'],
					perjalnanKarir: []
				},
				{
					nama : "Abdul Karim",
					link_profil : 'https://drive.google.com/file/d/1-Gt1GvDtDPyKHGws-rCDuBDV-70I-fwS/preview',
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
				this.data_firstModal = item;
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
			},
			openPDFPengurus(linkpdf){
				$('#myModal2').modal('show')
				PDFObject.embed(linkpdf, "#pdfPengurus", {forcePDFJS: true,height: "30em"})
			}
		}
	};
</script>