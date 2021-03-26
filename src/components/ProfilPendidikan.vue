<template>
	<div class="beranda">
			<section id="clients" class="clients mt-5">
				<div class="container" data-aos="zoom-in">
					<div class="row">
						<div class="col-8 mx-auto text-center mb-4">
							<img :src="img" class="border-5">
						</div>
					</div>
					<header class="section-header text-center">
						<h3 v-html="nama"></h3>
						<div class="divider-custom-3">
							<div class="divider-custom-line-3"></div>
						</div>
					</header>
					<div class="row">
						<div class="col-8 mx-auto">
							<p class="m-0 text-justify" v-html="deskripsi">
							</p>
							<br>
							<a class="btn btn-outline-info btn-sm d-inline" style="float: right !important;" :href="url" target="_blank">Buka Situs  <i class="fa fa-arrow-circle-right"></i></a>
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
			nama:'',
			img:'',
			deskripsi:'',
			url: ''
		}
	},
	mounted(){
		this.getDetail(this.$route.query.nama)
	},
	methods:{
		getDetail(q){
			if(q == 'UNJANI CIMAHI'){
				this.nama	= q
				this.img = require('@/assets/img/foto-mahasiswa-unjani.png')
				this.deskripsi = 'Universitas Jenderal Achmad Yani (Unjani) Cimahi merupakan penyatuan dari 4 (empat) sekolah tinggi, yaitu Sekolah Tinggi Teknologi Jenderal Achmad Yani (STTA), Sekolah Tinggi Ilmu Ekonomi Jenderal Achmad Yani (STIEA), Sekolah Tinggi Matematika dan Ilmu Pengetahuan Alam (STMIPA), dan Sekolah Tinggi Teknik Industri Bandung (STTIB).'
				this.url = 'https://www.unjani.ac.id/'
			}else if(q == 'STIKES CIMAHI'){
				this.nama	= q
				this.img = require('@/assets/img/kampus-stikes-cimahi.jpg')
				this.deskripsi = 'Sekolah Tinggi Ilmu Kesehatan (STIKes) Jenderal Achmad Yani Cimahi merupakan perguruan tinggi hasil pengembangan dari Akademi Perawat (Akper) Jenderal Achmad Yani, yang didirikan oleh Yayasan Kartika Eka Paksi pada tahun 1984.<br><br>Berangkat dari tujuan pendirian perguruan tinggi sebagai bentuk kontribusinya dalam berpartisipasi meningkatkan sumber daya manusia Keluarga Besar TNI Angkatan Darat dan masyarakat umum lainnya, Yayasan Kartika Eka Paksi merasa terpanggil untuk mendirikan lembaga pendidikan tinggi kesehatan. Hal ini selaras dengan kebijakan pembangunan kesehatan di Indonesia yang diarahkan untuk mencapai derajat kesehatan masyarakat yang optimal.'
				this.url = 'http://stikesayani.ac.id/'
			}else if(q == 'UNJANI JOGJA'){
				this.nama	= q
				this.img = require('@/assets/img/kampus-unjani-jogja.jpg')
				this.deskripsi = 'Universitas Jenderal Achmad Yani (Unjani) Yogyakarta diresmikan pendiriannya oleh Kepala Staf Angkatan Darat Jenderal TNI Mulyono selaku Ketua Pembina Yayasan Kartika Eka Paksi pada hari Senin, tanggal 26 Maret 2018. Unjani Yogyakarta merupakan hasil penyatuan dari dua perguruan  tinggi di Yogyakarta yang berada di bawah Yayasan Kartika Eka Paksi, yaitu Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Jenderal Achmad Yani dengan Sekolah Tinggi Ilmu Kesehatan (STIKes) Jenderal Achmad Yani. Kedua perguruan tinggi yang merupakan cikal bakal Unjani Yogyakarta ini memiliki latar belakang disiplin ilmu dan sejarah yang berbeda.<br><br>STMIK Jenderal Achmad Yani merupakan pengembangan dari “Akademi  Komputer Kartika Yani” (AKKY) yang didirikan Yayasan Kartika Eka Paksi pada 2 Januari 1996.52 Pendirian AKKY ditujukan untuk menghasilkan tenaga profesional madya yang berwawasan luas, bertaqwa kepada Tuhan Yang Maha Esa, berkepribadian luhur dan selalu memperhatikan masalah bangsa dan negara Indonesia berdasarkan Pancasila. Di samping itu juga untuk menghasilkan tenaga profesional madya yang berkemampuan tinggi dalam pemahaman perkembangan dan penerapan ilmu dan teknologi, memiliki keterampilan tinggi dalam penerapan manajemen informatika dan/atau komputer dalam berbagai bidang.'
				this.url = 'https://unjaya.ac.id/'
			}
		}
	}
};
</script>