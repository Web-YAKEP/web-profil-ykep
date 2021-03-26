<template>
	<div class="sejarah">
		<section id="about" class="about mt-5">
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-12">
						<img src="@/assets/img/baner-sejarah.jpg" class="img-fluid header-page" alt="">
					</div>
				</div>
			</div>
		</section>
		<section id="clients" class="clients pb-0">
			<div class="container">
				<div class="line-border"></div>
				<vueper-slides
				class="no-shadow"
				:visible-slides="3"
				:slide-ratio="1 / 4"
				:dragging-distance="70">
					<vueper-slide v-for="(step,i) in steps1" :key="i">
						<template v-slot:content>
							<div class="row">
								<div class="col" v-on:click="showDesk(stepin)" v-for="stepin in step">
									<div class="circle m-0 mx-auto">
										<p v-html="stepin.dateLabel"></p>
									</div>
									<div class="text-timeline text-center mt-2">
										<p class="text m-0" v-html="stepin.title"></p>
									</div>
								</div>
							</div>
						</template>
					</vueper-slide>
				</vueper-slides>
			</div>
		</section>
		<section id="why-us" class="why-us pt-0 display-sejarah">
			<div class="container-fluid bg-1 scrolabel-sejarah" data-aos="fade-up">
				<div class="row">
					<div class="col-lg-5 col-md-6 p-0">
						<div class="about-img" data-aos="fade-right" data-aos-delay="100">
							<img :src="showImg" alt="" class="img-desk-sejarah">
						</div>
					</div>
					<div class="col-lg-7 col-md-6 text-sambutan pl-0 pt-5">
						<header class="section-header">
							<h4 v-html="showTitle" class="text-white"></h4>
							<div class="divider-custom">
								<div class="divider-custom-line-white"></div>
							</div>
						</header>
						<div class="text-justify mt-3" data-aos="fade-left" data-aos-delay="100">
							<p class="text-white" v-html="showImgDesk"></p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
	</div>
</template>

<script>
	import { VueperSlides, VueperSlide } from 'vueperslides'
	import 'vueperslides/dist/vueperslides.css'
	
	export default{
		components: { VueperSlides, VueperSlide },
		data(){
			return{
				
				showTitle: '',
				showDeskription: '',
				showImg: '',
				showImgDesk: '',
				steps1: [
				[
						{ 
							dateLabel: 'Kilas<br>Balik<br> 1',
							title: 'Kilas Balik 1', 
							titleDesk: 'Kilas Balik 1', 
							desk: '' ,
							img: '', 
							imgDesk: 'Sejarah membuktikan bahwa keberhasilan TNI Angkatan Darat dalam mengemban tugas mengawal negara ini tidak pernah terlepas dari kerjasama antara TNI dan rakyat. Dengan kata lain, TNI senantiasa berusaha untuk menjadi yang terdepan dalam memahami kehendak rakyat.<br><br>Sejak awal didirikan, TNI telah menghadapi situasi serba sulit. Kelengkapan yang diperlukan untuk mengemban tugas ketentaraan tidak pernah bisa mencukupi kebutuhan yang memadahi, karena anggaran yang tersedia sangat terbatas. Sebagai ilustrasi betapa minimnya anggaran belanja untuk tentara dapat kita lihat data berikut ini: pada tahun 1950, 1,5 miliar rupiah; pada tahun 1952, 3,5 miliar rupiah; dan pada tahun 1954, 5,5 miliar rupiah. Pada bidang lain, kita mengetahui bahwa pendapatan negara sangat menurun sekali sampai belasan miliar rupiah, ditambah lagi dengan nilai rupiah yang semakin hari makin merosot. Anggaran yang disediakan untuk tentara, praktis hanya cukup untuk membiayai atase militer dan perjalanan ke luar negeri. Akibat dari kurangnya anggaran yang tersedia itu, maka pembelian alat-alat yang sederhana sekalipun untuk ketentaraan tidak memungkinkan lagi.<sup>1</sup>',
							footnote: '<sup>1</sup>	 Jenderal A.H. Nasution, Tentara Nasional Indonesia III, Seruling Masa, Jakarta, 1971, Hal. 129-130.'
						},
						{ dateLabel: 'Kilas<br>Balik<br> 2', 
						title: 'Kilas Balik 2',
						titleDesk: 'Kilas Balik 2', 
						desk: '' ,
						img: '', 
						imgDesk: 'Kondisi tersebut tentunya berpengaruh pada bidang lain, utamanya kesejahteraan prajurit diantaranya tempat tinggal. Asrama semakin terasa sekali kekurangannya, lebih dari setengah tentara tidak berasrama. Padahal peningkatan kenaikan kebutuhan asrama sangatlah mendesak seiring semakin bertambahnya jumlah keluarga tentara. Meningkatnya jumlah keluarga tentara membuat semakin tidak dapat mendekati kebutuhan pemondokan dan perawatan keluarga tentara, karena kemampuan membangun “asrama” semakin jauh, seperti anggaran belanja yang jauh tidak mencukupi.<sup>2</sup><br><br>Namun demikian, dalam mengemban tugas perjuangan menjaga kedaulatan negara, TNI sangat beruntung karena menyatunya TNI dengan Rakyat untuk saling bahu membahu dalam membentengi negara dari berbagai ancaman. Meski rakyat demikian tulus dalam mendukung, TNI pada akhirnya tidak bisa terus menerus membebani rakyat. Oleh karena itu, dalam memenuhi panggilan tugasnya, para komandan pasukan harus berupaya untuk mendanai operasi secara swadaya<sup>3</sup> dan meningkatkan kesejahteraan prajuritnya dengan memainkan peran di bidang ekonomi.',
						footnote: '<sup>2</sup>	 Ibid.<br><sup>3</sup>	Yayasan Kartika Eka Paksi, Restrukturisasi Yayasan Kartika Eka Paksi dan Unit-Unit Usahanya, Jakarta, 2002, Hal. 3.'
						},
						{ dateLabel: 'Kilas<br>Balik<br> 3', 
						title: 'Kilas Balik 3',
						titleDesk: 'Kilas Balik 3', 
						desk: '' ,
						img: '', 
						imgDesk: 'Peranan TNI di bidang ekonomi ini dimulai pada masa “darurat”, di mana beberapa prajurit pada masa demokrasi parlementer (1949-1959) mendapatkan tugas untuk mengambil alih (nasionalisasi) perusahaan asing (Belanda).  Penugaskaryaan ini dalam rangka pengamanan  terhadap usaha penguasaan perusahaan oleh para buruh yang kebanyakan tergabung dalam Sentral Organisasi Buruh Seluruh Indonesia (SOBSI) yang berafiliasi pada Partai Komunis Indonesia (PKI). TNI merasa berkewajiban menyelamatkan kekayaan negara dari penguasaan PKI. Untuk melawan SOBSI, Pimpinan Angkatan Darat Jenderal Achmad Yani mendukung keberadaan Sentral Organisasi Kekaryaan Swadiri Indonesia (SOKSI) yang dipimpin oleh Mayor Suhardiman. SOKSI terutama dimaksudkan untuk meredam segala kegiatan PKI melalui SOBSI-nya.<sup>4</sup><br><br>Dalam perkembangannya, para perwira Angkatan Darat banyak ditugaskan  di berbagai sektor usaha negara  yang dianggap akan dapat  memenuhi kebutuhan, baik di Badan Usaha Milik Negara (BUMN) maupun Badan Usaha Milik Daerah (BUMD) seperti Permina (Pertamina sekarang), Badan Urusan Logistik (Bulog), dll., yang semuanya bermuara pada upaya untuk meningkatkan kesejahteraan prajurit.<br><br>Dalam tingkatan yang berbeda, kondisi ini juga terjadi setelah Indonesia bangkit untuk membangun negeri melalui Pembangunan Jangka Panjang. Memang benar bahwa pemerintah mempunyai anggaran untuk kegiatan operasional militer maupun kesejahteraan prajurit, namun demikian jumlah yang disediakan dirasa tidak pernah mencukupi kebutuhan yang memadai. Karenanya, pimpinan TNI Angkatan Darat merasa perlu mendirikan suatu institusi guna memenuhi kebutuhan tersebut.',
						footnote: '<sup>4</sup>	 Indria samego, dkk., BILA ABRI MENGHENDAKI, Desakan Kuat Reformasi Atas Konsep Dwifungsi ABRI”, Mizan Pustaka, Jakarta, 1997, Hal. 119.'
						}
				],
				[
					
						{ 
							dateLabel: '1971', 
							title: '',
							titleDesk: '', 
							desk: '' ,
							img: '', 
							imgDesk: '<i>“Jangan ada prajurit yang terlantar, jangan ada prajurit yang kariernya tak terkendalikan dan jangan ada prajurit yang tersia-sia sebagai sampah, setelah ia menginjak masa lepas tugasnya”.</i>Demikian penegasan Kepala Staf Angkatan Darat Jenderal TNI Umar Wirahadikusumah pada peresmian Induk Administrasi Angkatan Darat (Inminad) bulan Januari 1971.<sup>5</sup><br><br>Penegasan Kasad Jenderal Umar Wirahadikusumah  tersebut tentunya dilatar belakangi situasi dan kondisi TNI Angkatan Darat  yang  pada  masa itu benar-benar perlu mendapatkan perhatian serius, utamanya dalam bidang kesejahteraan. Dengan tujuan untuk keperluan peningkatan kesejahteraan prajurit inilah, kemudian didirikan suatu institusi yang diharapkan dapat menjadi solusi.',
							footnote: '<sup>5</sup>	 Drs. H. Triyoso, dkk., Perjalanan Sejarah Pendidikan Universitas Jenderal Achmad Yani, stensilan, Unjani Cimahi, 2000, Hal. 11.'
						},
						{ 
							dateLabel: '1972', 
							title: '',
							titleDesk: '', 
							desk: '' ,
							img: '', 
							imgDesk: 'Pada tahun 1972, Jenderal Umar Wirahadikusumah dalam kedudukannya sebagai Kasad kemudian mendirikan sebuah yayasan yang diberi nama “<b>Yayasan Kartika Eka Paksi (YKEP)</b>. Pendirian Yayasan ini dikukuhkan melalui Akta Nomor 41 tanggal 10 Agustus 1972, yang dibuat Notaris Abdul Latief, S.H.<br><br>YKEP sendiri bukan merupakan sebuah institusi yang       semata-mata mengelola unit-unit usaha, akan tetapi mempunyai misi yang lebih luas. Dalam Anggaran Dasar disebutkan bahwa maksud   dan tujuan didirikan YKEP adalah untuk “meningkatkan kesejahteraan Warga Angkatan Darat dalam arti yang seluas-luasnya,<sup>6</sup> yaitu: setiap anggota Angkatan Darat  beserta keluarga (anak dan isteri), baik yang masih dalam dinas aktif, yang berstatus purnawirawan maupun keluarga (anak dan isteri) yang ditinggalkan karena kepala keluarganya meninggal dunia.<sup>7</sup><br><br>Pada awal pendiriannya, YKEP dikelola oleh Dewan Pengurus yang  terdiri  dari  sedikit-dikitnya  6 (enam)  orang anggota Pengurus, yaitu: Ketua Dewan Pengurus adalah Kasad Jenderal TNI Umar  Wirahadikusumah,<sup>8</sup> dibantu  oleh  seorang  Sekretaris,  seorang Bendahara dan beberapa  anggota Pengurus lainnya. Untuk menjalankan roda organisasi, Yayasan berkantor di Markas Besar TNI Angkatan Darat Jalan Veteran No.5, RT.3/RW.2, Gambir, Kecamatan Gambir, Jakarta Pusat, Daerah Khusus Ibukota Jakarta.',
							footnote: '<sup>6</sup> 	Akta Notaris Abdul Latief, S.H. Nomor 41 tanggal 10 Agustus 1972 pasal 3, yang merupakan Anggaran Dasar YKEP.<br><sup>7</sup> 	Surat Keputusan Ketua Dewan Pengurus Nomor: 043/YKEP/VIII/1974 tentang Anggaran Rumah Tangga Yayasan Kartika Eka Paksi.<br><sup>8</sup>  	Sesuai yang termaktub dalam Akta Notaris Abdul Latief, SH Nomor 41 tanggal 10 Agustus 1972 disebutkan bahwa: Ketua adalah beliau yang bertanggung jawab atas kesejahteraan keseluruhan Warga Angkatan Darat sebagai kesatuan.'
						},
						{ 
							dateLabel: '1973', 
							title: '',
							titleDesk: '', 
							desk: '' ,
							img: '', 
							imgDesk: 'Seiring dengan pergantian pucuk pimpinan TNI Angkatan Darat pada tahun 1973, dari Jenderal TNI Umar Wirahadikusumah kepada Jenderal TNI Surono Reksodimejo, maka Kasad yang baru menggantikan sebagai Ketua Dewan Pengurus YKEP. ',
							footnote: ''
						}
					
				],
				[
					{ dateLabel: '1974', 
						title: 'Perkembangan Organisasi',
						titleDesk: 'Perkembangan Organisasi.', 
						desk: '' ,
						img: '', 
						imgDesk: 'Pada tahun 1974, saat Jenderal TNI Makmun Murod menjabat Kasad menggantikan Jenderal TNI Surono Reksodimejo, organisasi YKEP mengalami perubahan, disesuaikan dengan tuntutan perkembangan yang terjadi agar tugas organisasi dapat terselenggara secara efektif dan efisien. Anggaran Dasar sebagai landasan legalitas dan operasional organisasi kemudian dilengkapi dengan Anggaran Rumah Tangga (ART)<sup>9</sup> sebagai peraturan yang digunakan dalam pelaksanaan kegiatan.<br><br>Mengacu kepada pasal 6 (enam) Anggaran Rumah Tangga yang telah ditetapkan, maka Ketua Dewan Pengurus menunjuk salah seorang anggota sebagai Ketua Harian untuk memimpin kegiatan sehari-hari dengan dibantu Sekretaris Yayasan. Adapun yang ditunjuk sebagai Ketua Harian adalah Letjen TNI (Purn) R.H. Hidayat.<sup>10</sup> Sesuai dengan Anggaran Rumah Tangga tersebut, maka struktur organisasi mengalami perubahan.<sup>11</sup>',
						footnote: '<sup>9</sup> 	Surat Keputusan Ketua Dewan Pengurus YKEP Nomor: 048/YKEP/VIII/1974 tanggal 24 Agustus 1974 tentang Anggaran Rumah Tangga YKEP.<br><sup>10</sup>	Lampiran Surat Keputusan Ketua Dewan Pengurus Nomor : 048/YKEP/VIII/1974 taggal 24 Agustus 1974 tentang Anggaran Rumah Tangga Yayasan Kartika Eka Paksi.<br><sup>11</sup>	Surat Keputusan Ketua Dewan Pengurus Nomor : 048/YKEP/VIII/1974 taggal 24 Agustus 1974 tentang Anggaran Rumah Tangga Yayasan Kartika Eka Paksi.'
					},
					{ dateLabel: '1974', 
						title: ' Didirikan UNJANI',
						titleDesk: ' Didirikan UNJANI', 
						desk: '' ,
						img: '', 
						imgDesk: 'Seiring dengan berjalannya waktu, pada tahun 1970 pemerintah Indonesia mengeluarkan peraturan mengenai larangan bagi lembaga/instansi pemerintah mengelola lembaga pendidikan. Karenanya, pada tahun 1972 pengelolaan SIMTA diserahkan kepada Yayasan Pendidikan Ikatan Keluarga Besar Pindad (YPIP), sebuah yayasan  milik  Pindad  yang  bertujuan  melanjutkan  dharma bhakti di bidang sosial, khususnya pendidikan.<sup>40</sup>  Bersamaan dengan alih kelola dari Lemdikinmil kepada YPIP, SIMTA mengalami perubahan bentuk dari akademi kedinasan menjadi akademi swasta dengan nama Akademi Industri Logam (AIL). Kampus AIL berlokasi di areal instalasi industri Kopindad dengan lahan seluas 15.266 m².<br><br>Perkembangan selanjutnya, sejak tanggal 26 September 1983  AIL dikelola oleh Yayasan Sadhana Bhakti. Hal ini disebabkan dibubarkannya  YPIP  menyusul  peralihan  status  Pindad dari instansi pemerintah menjadi Badan Usaha Milik Negara (BUMN) sejak 12 Maret 1982.  Selanjutnya, sejak tanggal 19 Agustus 1985 AIL diserahkan kepada Yayasan Kartika Eka Paksi (YKEP).<sup>41</sup><br><br>Sebagai pengelola AIL yang baru, YKEP kemudian berupaya meningkatkan status AIL menjadi sekolah tinggi dengan nama Sekolah Tinggi Teknik Industri Bandung (STTIB). Upaya peningkatan status melalui perubahan bentuk dan nama dari AIL menjadi STTIB kemudian disetujui oleh Menteri Pendidikan dan Kebudayaan RI dengan Keputusan Mendikbud RI Nomor : 0654/O/1985 tanggal 30 Desember 1985. Selanjutnya, berdasarkan Keputusan Mendikbud RI Nomor: 0388/O/1986  tanggal   22  Mei  1986,  diadakan  penetapan   kembali penyesuaian jalur jurusan (program studi) yang dinyatakan berstatus terdaftar dengan jenjang program S-1 pada STTIB menjadi: Jurusan Teknik   dan   Manajemen   Industri   (TMI)    dengan    program   studi Manajemen  Industri   dan Teknik  Industri,  Jurusan  Teknik  Metalurgi (TME) dengan program studi Teknik Metalurgi, dan Jurusan Teknik Mesin (TMS) dengan program studi Teknik Mesin. Pada tanggal 2 Maret 1992, STTIB disatukan ke dalam Unjani Cimahi.<br><br>Kampus Unjani Cimahi terletak di dua tempat, yaitu kampus utama yang berkedudukan di kota Cimahi dan kampus kedua di kota Bandung. Kampus Cimahi berlokasi di Jalan Terusan Jenderal Soedirman, Cimahi dengan areal seluas 21,5 Ha dan bangunan seluas 28,972 M2. Sedangkan Kampus Bandung berlokasi di Jalan Terusan Gatot Subroto memiliki lahan seluas 6,4 Ha dengan bangunan seluas 10,97 M<sup>2</sup><br><br>Saat ini Unjani Cimahi memiliki 8 (delapan) fakultas yang terdiri dari 23 program studi (Prodi), yaitu Fakultas Teknologi Manufaktur 4 Prodi, Fakultas Teknik 4 Prodi, Fakultas Sains dan Informatika 2 Prodi, Fakultas  Farmasi  2  Prodi,  Fakultas  Kedokteran  4  Prodi,   Fakultas Ekonomi  dan  Bisnis  2  Prodi,  Fakultas Ilmu Sosial dan Ilmu Politik 4 Prodi, dan Fakultas Psikologi 1 Prodi. Secara institusi, Unjani Cimahi telah mendapatkan pengakuan dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) dengan peringkat akreditasi “B”.<br><br>Hingga tahun 2019 Unjani Cimahi memiliki 11.033 mahasiswa berstatus aktif yang didukung oleh 460 dosen dan 337 orang non dosen, dan telah meluluskan sebanyak 39.046 alumni.<sup>42</sup>',
						footnote: '<sup>39</sup> 	Surat Keputusan Menteri/Panglima Angkatan Darat nomor: KEP/787/8/1966 tanggal 6 Agustus 1966.<br><sup>40</sup>	YPIP didirikan berdasarkan Akta Notaris Komar Andasasmita, SH Nomor 108 tanggal 30 Desember 1972.<br><sup>41</sup>	Akta Notaris Komar Andasasmita, SH  Nomor 10 tanggal 7 Agustus 1985.'
					},
					{ dateLabel: '1980', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Perkembangan selanjutnya, Kasad Jenderal TNI Makmun Murod digantikan oleh Jenderal TNI Poniman (1980-1983). Pada masa ini, Anggaran Dasar Yayasan diadakan perubahan kembali. Perubahan ini didasarkan kepada saran-saran Dewan Pengurus Yayasan pada rapat-rapat tanggal 22 Agustus 1981, dan 21 Januari 1982, serta 3 Maret 1982.12 Perubahan Anggaran Dasar kemudian diikuti  dengan perubahan   Anggaran   Rumah   Tangga  Yayasan.13  Sesuai Anggaran Dasar yang baru ini, terdapat perubahan yang signifikan dalam hal maksud dan tujuan Yayasan serta adanya Pelindung dan Anggota Kehormatan dalam kepengurusan Yayasan.<br><br>Perubahan maksud dan tujuan Yayasan tersebut semula “Meningkatkan kesejahteraan Warga Angkatan Darat dalam arti seluas-luasnya”, menjadi: “Turut serta dalam memelihara/meningkatkan kesejahteraan Keluarga Besar TNI Angkatan Darat, termasuk para purnawirawan dan warakawurinya”.<br><br>Sesuai perubahan Anggaran Dasar tersebut, maka yang dimaksud dengan Pelindung adalah sesepuh, yang karena kedudukannya  pernah  menjabat  sebagai  Kepala Staf Angkatan Darat, terpilih/ditunjuk dan bersedia duduk dalam kepengurusan Yayasan untuk sewaktu-waktu memberi nasehat/pendapat/bimbingan dalam hal-hal yang berkaitan dengan jalannya Yayasan.<br><br>Sedangkan Anggota Kehormatan dimaksudkan sebagai sesepuh, yang karena kedudukannya pernah menjabat sebagai Kepala Staf Angkatan Darat maupun pejabat teras Tentara Nasional Indonesia  Angkatan Darat, terpilih/ditunjuk dan bersedia sewaktu-waktu untuk dimohonkan kehadirannya dalam memberi saran/pandangan jalannya Yayasan.<br><br>Mengacu kepada  AD/ART yang baru tersebut, Yayasan diurus oleh suatu Dewan Pengurus yang terdiri dari sedikit-dikitnya 7 (tujuh) orang anggota dengan susunan sebagai berikut: Ketua Dewan Pengurus, Ketua Harian, Sekretaris, Bendahara dan beberapa anggota pengurus lainnya, Pelindung dan beberapa anggota kehormatan lainnya. Untuk jabatan Ketua Harian tetap dipercayakan kepada Letjen TNI (Purn) R.H. Hidayat.<br><br>Seiring dengan perubahan AD/ART, kedudukan Yayasan juga berpindah tempat dari Mabesad ke Wisma Kartika Eka Paksi, Komplek Balai Kartini Jalan Jenderal Gatot Subroto Nomor 37 Jakarta Selatan.',
						footnote: '<sup>12</sup>   	Perubahan Anggaran Dasar YKEP dikukuhkan dalam Akte Notaris Abdul Latief Nomor 42 tanggal 21 April 1982.<br><sup<13</sup> 	Surat Keputusan Ketua Dewan Pengurus YKEP Nomor: 0014/Ykep/IV/1982, tanggal 24 April 1982 tentang  perubahan Surat Keputusan Ketua Dewan Pengurus YKEP Nomor: 048/YKEP/VIII/1974, tanggal 24 Agustus 1974 tentang Anggaran Rumah Tangga YKEP.<br><sup>*</sup>	Surat Keputusan Ketua Dewan Pengurus YKEP Nomor: 0014/Ykep/IV/1982, tanggal 24 April 1982 tentang  perubahan Surat Keputusan Ketua Dewan Pengurus YKEP Nomor: 048/YKEP/VIII/1974, tanggal 24 Agustus 1974 tentang Anggaran Rumah Tangga YKEP.'
					}
				],
				[
					{ dateLabel: '1983', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Pada tahun 1983, Kasad Jenderal Poniman digantikan oleh Jenderal Rudini (1983-1986). Pada masa ini, organisasi YKEP mengalami dua kali perubahan. Pada perubahan pertama tahun 1983, susunan pengurus terdiri dari: Ketua, Ketua Harian, Sekretaris, Bendahara, Anggota, Ketua Bidang Usaha dan Rencana, Ketua Bidang Pendidikan dan Latihan/Kayek dan Penasehat Hukum, Ketua Bidang Pengawas, serta Ketua Bidang Kesejahteraan.<sup>14</sup><br>Sedangkan pada perubahan kedua tahun 1984, susunan pengurus menjadi: Ketua Umum, Ketua I yang mewakili Ketua Umum, Ketua  II  bertindak  sebagai  Ketua   Harian,   Sekretaris,  Bendahara, <br<br>Pelindung adalah mantan Kasad, Anggota Kehormatan adalah sesepuh yang pernah menjabat sebagai pimpinan TNI Angkatan Darat, dan anggota lainnya.<sup>15</sup>',
						footnote: '<sup>14</sup>   	Akta Notaris Moendjiati Soegito, SH Jakarta Nomor: 29 tanggal 23 April 1983, dan Surat Keputusan Dewan Pengurus YKEP Nomor : 0039/YKEP/IV/1983 tanggal 23 April 1983.<sup>15</sup>  	Akta Notaris Abdul Latief, SH No. 99 tanggal 21 November 1984.'
					},
					{ dateLabel: '1988', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Setelah berjalan empat tahun tepatnya tahun 1988, organisasi mengalami perubahan kembali. Kala itu Kasad Jenderal TNI Edi Sudrajat berupaya untuk meningkatkan efektivitas sasaran kegiatan Yayasan dengan jalan melibatkan Staf Umum TNI Angkatan Darat dalam kegiatan pembinaan dan pengawasan. Sebagai realisasinya, diadakanlah  perubahan  Anggaran  Dasar  Yayasan.16   Mengacu kepada  Anggaran  Dasar  yang  baru  ini, terdapat dua hal perubahan mendasar, yaitu terkait maksud dan tujuan serta susunan kepengurusan Yayasan.<br><br>Perubahan pada pasal maksud dan tujuan Yayasan dicantumkan tambahan unsur “upaya mencerdaskan bangsa”, sehingga menjadi “meningkatkan kesejahteraan Keluarga Besar Tentara Nasional Indonesia Angkatan Darat dan upaya mencerdaskan bangsa”. Dalam pasal maksud dan tujuan ini secara tegas dicantumkan pula bahwa yang dimaksud dengan keluarga besar TNI Angkatan Darat adalah: anggota aktif beserta keluarganya, purnawirawan TNI Angkatan Darat beserta keluarganya, Warakawuri TNI Angkatan Darat beserta keluarganya, dan Veteran Republik Indonesia yang bersumber dari TNI Angkatan Darat beserta keluarganya.<br><br>Sedangkan perubahan pada susunan kepengurusan merujuk bahwa Yayasan Kartika Eka Paksi dikelola oleh kepengurusan yang diketuai oleh Ketua Umum Yayasan dengan pengorganisasian meliputi 4 (empat) kelompok, yaitu: Kelompok Pimpinan, Kelompok Pembantu Pimpinan, Kelompok Pelaksana Harian dan Kelompok Pelaksana Usaha.<br><br>Kelompok Pimpinan adalah penanggung jawab atas semua kegiatan yang dilaksanakan Yayasan untuk mencapai tujuan yang telah ditentukan, terdiri dari Ketua Umum dan Wakil Ketua Umum yang dijabat oleh Kasad dan Wakasad. Di dalam mengemban tanggung jawabnya, Kelompok Pimpinan dibantu oleh Penasehat dan Anggota Kehormatan. Penasehat dijabat mantan Kasad atau sesepuh yang  terpilih/ditunjuk  untuk  dapat memberi nasehat/pendapat/bimbingan dalam hal-hal yang berkaitan dengan operasional Yayasan. Sedangkan Anggota Kehormatan dijabat oleh mantan Wakasad, Irjenad, Asisten Kasad, Pangkotama serta Kabalakpus di lingkungan TNI Angkatan Darat, yang terpilih/ditunjuk dan bersedia sewaktu-waktu untuk dimohonkan kehadirannya dalam memberikan saran/pandangan mengenai jalannya Yayasan.<br><br>Untuk Kelompok Pembantu Pimpinan merupakan staf pembantu pimpinan yang menyelenggarakan segala usaha, pekerjaan dan kegiatan staf dalam perencanaan, pelaksanaan, pengendalian dan pengawasan secara umum serta pembinaan perbendaharaan, yang terdiri dari Pembina, Pengawas dan Bendahara. Pembina bertugas pokok merumuskan kebijaksanaan umum dalam bidang usaha dan perencanaan, kesejahteraan dan hukum serta bidang lainnya sesuai kebutuhan Yayasan. Adapun lingkup tugas Pengawas adalah berkenaan dengan pengawasan dan pemeriksaan umum maupun perbendaharaan Yayasan. Sedangkan Bendahara bertugas menyelenggarakan pembinaan administratif kekayaan dan perbendaharaan yang meliputi uang dan barang milik Yayasan.<br><br>Adapun Kelompok Pelaksana Harian merupakan staf pelaksana di lingkungan Yayasan yang mempunyai tugas dan kewajiban menyelenggarakan kegiatan staf pelaksana untuk mencapai tujuan Yayasan. Susunan pejabat Pelaksana Harian terdiri dari Ketua Pelaksana Harian, Ketua Bidang yang disusun sesuai kebutuhan, serta Sekretaris Yayasan yang bertugas menyelenggarakan pembinaan administrasi personel, peralatan, ketatalaksanaan dan urusan dalam Yayasan.<br><br>Sedangkan kelompok Pelaksana Usaha bertugas menyelenggarakan kegiatan usaha, pembinaan, pengembangan dan pelayanan jasa untuk mencapai tujuan Yayasan. Kelompok Pelaksana Usaha Yayasan dalam kegiatan sehari-hari berkoordinasi atau berkonsultasi dengan Ketua Harian.<br><br>Pada masa ini terjadi perpindahan kantor Yayasan dari Wisma Kartika ke kediaman Kasad di Jalan Denpasar Jakarta Selatan yang kala itu tidak ditempati.<sup>17</sup>',
						footnote: '<sup>16</sup>   	Akta Notaris Abdul Latief, SH Nomor 2 tanggal 2 Desember 1988 dan Keputusan Kasad selaku Ketua YKEP Nomor: Skep 160/YKEP/XII/1988 tanggal 21 Desember 1988 tentang Perubahan Anggaran Rumah Tangga YKEP.<sup>17</sup>	Wawancara kolektif dengan karyawan Yayasan, yaitu Bp. Usman, Bp. Marso, Bp. Risdian, Bp. Semin Haryanto, dan Ibu Endang  di  Ruang Rapat YKEP Jakarta tanggal 26 Juli 2019.<sup>*</sup>  	Akta Notaris Abdul Latief, SH Nomor 2 tanggal 2 Desember 1988 dan Keputusan Kasad selaku Ketua YKEP Nomor: Skep 160/YKEP/XII/1988 tanggal 21 Desember 1988 tentang Perubahan Anggaran Rumah Tangga YKEP.'
					},
					{ dateLabel: '1993', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Seiring dengan perjalanan waktu, Ketua Pelaksana Harian Letjen TNI (Purn) R.H. Hidayat pada tahun 1991 digantikan Mayjen TNI  (Purn) Soetejo. Selanjutnya pada tanggal 10 Maret 1993 jabatan Ketua Pelaksana Harian dipercayakan kepada Mayjen TNI TB. Silalahi.<sup>18</sup>Pada era ini, kediaman Kasad mau direnovasi sehingga kantor Yayasan kembali pindah ke Wisma Kartika untuk beberapa waktu lamanya, dan selanjutnya kantor Yayasan menempati ruangan di lantai 9 Wisma Kartika Gedung Arta Graha Jl. Jenderal Soedirman Kav. 52-53 Jakarta Selatan.<sup>19</sup>',
						footnote: '<sup>18</sup>   	Surat Keputusan Ketua Umum YKEP Nomor: Skep/05/YKEP/III/1993 tanggal  10 Maret 1993 tentang Pengangkatan Dalam Jabatan di Lingkungan YKEP.<br><sup>19</sup>	Wawancara Op.Cit.'
					}
				],
				[
					{ dateLabel: '1995', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Pada tahun 1995, di era kepemimpinan Kasad Jenderal TNI   R. Hartono, organisasi mengalami perubahan kembali.20  Berdasarkan Anggaran Dasar yang baru, susunan organisasi terdiri dari Ketua Umum yang dijabat langsung oleh Kasad, Dewan Pertimbangan, Dewan Pengawas, dan Ketua Harian. <br><br>Yayasan Kartika Eka Paksi dalam kegiatan sehari-hari dikelola oleh Pengurus yang terdiri dari seorang Ketua Harian Yayasan yang dibantu oleh Wakil Ketua Harian dan beberapa orang Ketua Bidang, Sekretaris serta Bendahara. Untuk Ketua Harian dan Bendahara dijabat secara ex-officio masing-masing oleh Asisten Perencanaan dan Anggaran Kepala Staf TNI Angkatan Darat (Asrena Kasad), serta Direktur Keuangan  TNI Angkatan Darat (Dirkuad). Mengingat yang menjabat sebagai Asrena Kasad kala itu adalah Mayjen TNI Achfas Mufti (1995-1996), maka secara ex-officio menjadi Ketua Harian menggantikan Mayjen TNI (Purn) TB. Silalahi. Selanjutnya berturut-turut  yang  menjabat  sebagai  Asrena  Kasad  dan  secara ex-officio menjabat sebagai Ketua Harian adalah Mayjen TNI Tyasno Sudarto (1996-1998), dan Mayjen TNI Sugiarto Maksum (1998-2002).',
						footnote: '<sup>20</sup>   	Akta Notaris Lindasari Bachroem, SH. No. 53 tanggal 19 Oktober 1995, didaftarkan di pengadilan negeri Jakarta selatan dengan No. 29/A/Nat/HKM/1996 PN Jaksel tanggal 5 januari 1996, dimuat dalam tambahan Berita Negara Nomor: 22 tanggal 18 Maret 1997.'
					},
					{ dateLabel: '2001', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Seiring dengan pejalanan waktu, pada tahun 2001 pemerintah RI mengeluarkan Undang-Undang Nomor 16 tahun 2001 tentang Yayasan. Keluarnya Undang-Undang tentang Yayasan ini dilatar belakangi  oleh beberapa pertimbangan, yaitu: bahwa pendirian Yayasan di Indonesia selama ini dilakukan berdasarkan kebiasaan masyarakat, karena belum ada peraturan perundang-undangan yang mengatur  tentang  Yayasan.  Selain  itu, bahwa Yayasan di Indonesia telah berkembang pesat dengan berbagai kegiatan, maksud, dan tujuan. Karenanya, untuk menjamin kepastian dan ketertiban hukum agar Yayasan berfungsi sesuai dengan maksud dan tujuannya berdasarkan prinsip keterbukaan dan akuntabilitas kepada masyarakat, perlu membentuk Undang-undang tentang Yayasan.<sup>21</sup><br><br>Dalam rangka menyesuaikan dan menindaklanjuti terbitnya Undang-Undang Nomor 16 tahun 2001 tentang Yayasan tersebut,  YKEP  kemudian mengadakan perubahan Anggaran Dasar kembali.22 Sesuai dengan  Anggaran Dasar yang baru, maka terdapat beberapa perubahan pada maksud dan tujuan, organ Yayasan, dan  ditiadakannya jabatan Ketua Harian secara ex-officio.<br><br>Maksud dan tujuan yang sebelumnya “meningkatkan kesejahteraan Keluarga Besar Tentara Nasional Indonesia Angkatan Darat dan upaya mencerdaskan bangsa”, berubah menjadi “meningkatkan kesejahteraan dalam arti seluas-luasnya bagi Keluarga Besar Angkatan Darat yang dikelola dengan baik, mandiri, transparan dan akuntabel.<br><br>Adapun yang terkait dengan Organ Yayasan, pengorganisasiannya terdiri dari 4 (empat) organ, yaitu: Dewan Pembina, Pengurus, Dewan Pengawas, dan Badan Pelaksana. <br><br>Dewan Pembina adalah organ di lingkungan Yayasan yang kewenangannya tidak dapat diserahkan kepada Pengurus atau Dewan Pengawas berdasarkan Undang-Undang atau Anggaran Dasar Yayasan. Kewenangan Pembina sebagaimana  dimaksud adalah:  Keputusan  mengenai perubahan Anggaran Dasar Yayasan, pengangkatan dan  pemberhentian  Anggota  Pengurus  dan Pengawas, penetapan kebijakan umum Yayasan berdasarkan Anggaran Dasar Yayasan, pengesahan program   kerja  dan  rencana   kegiatan,  anggaran  dan pendapatan serta laporan tahunan Yayasan, penetapan keputusan mengenai penggabungan dan pembubaran Yayasan.<br><br>Ketua Pembina Yayasan adalah Kasad dan Wakil Ketua dijabat oleh Wakasad. Anggota Pembina terdiri dari para Asisten Kasad, Koorsahli Kasad, para Pangkotama dan Kabalakpus TNI Angkatan Darat. Dewan Pembina tidak boleh merangkap sebagai Pengurus dan/atau Pengawas, Direksi atau Pengurus dari Komisaris atau Pengawas dari Badan Pelaksana Harian.<br><br>Sedangkan mengenai Pengurus Yayasan terdiri dari seorang Ketua, seorang Wakil Ketua, Sekretaris dan Bendahara. Utamanya jabatan Ketua Harian yang sebelumnya secara ex-officio dijabat oleh Asrena Kasad yang saat itu pejabatnya adalah Mayjen TNI Sugiarto Maksum, kemudian jabatan ex-officio ditiadakan dan digantikan oleh Brigjen TNI (Purn) Soetriman MG, MM. sebagai Ketua YKEP.<br><br>Untuk Dewan Pengawas terdiri dari Ketua yang dijabat oleh Irjenad dan 2 (dua) orang anggota, dibantu tenaga ahli yang tidak tetap sesuai kebutuhan yang masing-masing bertanggung jawab kepada Ketua Dewan Pengawas.',
						footnote: '<sup>*</sup>    Akta Notaris Lindasari Bachroem, SH. No. 53 tanggal 19 Oktober 1995, didaftarkan di pengadilan negeri Jakarta selatan dengan No. 29/A/Nat/HKM/1996 PN Jaksel tanggal 5 januari 1996, dimuat dalam tambahan Berita Negara Nomor: 22 tanggal 18 Maret 1997.<br><sup>21</sup>	Undang-Undang RI Nomor 16 Tahun 2001 tentang Yayasan.<br><sup>22</sup>	Akta Notaris Refizal, SH. Nomor 2 tanggal 6 Juni 2002, dimuat dalam Berita Negara Nomor 200 Th. 2002, dan Tambahan Berita Negara tanggal 13 Agustus 2002 Nomor 65.'
					},
					{ dateLabel: '2002', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Sekolah Tinggi Ilmu Kesehatan (STIKes) Jenderal Achmad Yani Cimahi merupakan perguruan tinggi hasil pengembangan dari Akademi Perawat (Akper) Jenderal Achmad Yani, yang didirikan oleh Yayasan Kartika Eka Paksi pada tahun 1984.<br><br>Berangkat dari tujuan pendirian perguruan tinggi sebagai bentuk kontribusinya dalam berpartisipasi meningkatkan sumber daya manusia Keluarga Besar TNI Angkatan Darat dan masyarakat umum lainnya, Yayasan Kartika Eka Paksi merasa terpanggil untuk mendirikan lembaga pendidikan tinggi kesehatan. Hal ini selaras dengan kebijakan pembangunan kesehatan di Indonesia yang diarahkan untuk mencapai derajat kesehatan masyarakat yang optimal. <br><br>Agar dapat mencapai kondisi tersebut, pendidikan merupakan langkah awal yang strategis untuk memulainya. Diharapkan, para lulusan lembaga pendidikan tinggi kesehatan dapat memenuhi kebutuhan pasar akan tenaga-tenaga perawat yang langsung ditugaskan di rumah sakit-rumah sakit dan lembaga-lembaga kesehatan lainnya.45 Melalui upaya ini, maka Yayasan Kartika Eka Paksi dapat membantu pemerintah khususnya Departemen Kesehatan RI dalam memenuhi kebutuhan tenaga keperawatan di Indonesia. Di sisi lain, Sebagai wadah penerus perjuangan Angkatan 45,  Yayasan Kartika Eka Paksi merasa terpanggil  untuk meneruskan jiwa juangnya kepada generasi muda melalui bidang pendidikan keperawatan.<br><br>Dalam kerangka pemikiran seperti tersebut di atas,  Yayasan Kartika Eka Paksi mengambil kebijakan strategis mendirikan lembaga pendidikan tinggi kesehatan dengan nama <b>“Akademi Perawat  Jenderal Achmad Yani”<b> (Akper A. Yani) di Cimahi, Jawa Barat,  yang tertuang melalui Surat Keputusan Ketua Yayasan Kartika Eka Paksi Nomor: 0147/Ykep/84 tanggal 24 September 1984. Pendirian Akper     A. Yani kemudian disusul dengan pengajuan ijin kepada Kantor Wilayah Departemen Kesehatan Republik Indonesia Jawa Barat Nomor: B 279/X/1984, tanggal 15 Oktober 1984. dan selanjutnya mendapat ijin persetujuan dari Menteri Kesehatan Republik Indonesia.<sup>46</sup><br><br>Dalam operisaional kegiatannya, Akper Jenderal Achmad Yani bertanggung jawab kepada Yayasan Kartika Eka Paksi di bidang pengelolaan sumber daya, organisasi dan manajemen. Sedangkan di bidang edukatif, bertanggung jawab kepada Depkes RI  melalui Kanwil Depkes RI Provinsi Jawa Barat.<sup>47</sup><br><br>Sebagaimana akademi-akademi keperawatan lain yang ada di Indonesia,  Akper  Jendera l Achmad Yani sepenuhnya diregulasi oleh Departemen Kesehatan RI. Regulasi tersebut mencakup jumlah mahasiswa, sistem akreditasi, kurikulum pokok, dan beberapa aspek strategi lainnya. Dalam regulasinya, Departemen Kesehatan meningkatkan  status  akreditasi  suatu  akademi keperawatan dengan jumlah mahasiswa yang boleh dikelolanya. Akper Jenderal Achmad Yani kemudian memiliki status akreditasi “B”, yang berarti status tersebut dapat ditingkatkan antara lain dengan peningkatan kualifikasi staf pengajar dan perbaikan infrastruktur serta perangkat penunjang kegiatan belajar mengajar.<br><br>Dalam operasional pendidikannya, Akper Jenderal Achmad Yani menempati areal kampus di Cimahi, Jawa Barat, yang tanahnya masih merupakan milik TNI Angkatan Darat. Fasilitas yang dimiliki oleh Akper A. Yani antara lain terdiri dari gedung perkuliahan (bekas kampus STTA, dan masih merupakan milik Universitas Jenderal Achmad Yani Cimahi), perpustakaan dengan 5.663 eksemplar buku pendukung perkuliahan, dan asrama untuk menampung mahasiswa. Selain itu, Akper A. Yani juga menjalin kerja sama dengan institusi-institusi lain guna keperluan praktek kerja para mahasiswa, yaitu  4 (empat) rumah sakit, dan 5 (lima) Puskesmas, termasuk RS. Dustira yang dimiliki TNI Angkatan Darat.<sup>48</sup><br><br>Dalam perkembangannya, mengingat animo dan kepercayaan masyarakat pengguna jasa pendidikan Akper Jenderal Achmad Yani semakin meningkat, maka Yayasan Kartika Eka Paksi memandang perlu  meningkatkan  status  Akper  Jenderal  Achmad   Yani  menjadi Sekolah Tinggi Ilmu Kesehatan (STIKes) Jenderal Achmad Yani. Guna merealisasikan upaya tersebut, Ketua Yayasan Kartika Eka Paksi kemudian mengeluarkan Surat Keputusan Nomor: Skep/020/YKEP/IX/2002 tanggal 2 September 2002 tentang Pendirian Sekolah Tinggi Ilmu Kesehatan Jenderal Achmad Yani. Selanjutnya dikukuhkan oleh Menteri Pendidikan Nasional Republik Indonesia yang dituangkan melalui Surat Keputusan Nomor: 234/D/O/2002 tanggal 8 Oktober 2002, serta mendapatkan rekomendasi dari Departemen Kesehatan Republik Indonesia Nomor: KS.02.1.5.2153A. Momen dikeluarkannya Surat Keputusan dari Mendiknas RI tersebut kemudian dijadikan tonggak sejarah dan diabadikan sebagai hari lahir STIKes Jenderal Achmad Yani, yaitu  tanggal <b>8 Oktober 2002.</b>',
						footnote: '<sup>45</sup> 	Yayasan Kartika Eka Paksi, Op., Cit., Hal. 8-9.<br><sup>46</sup> 	Surat Keputusan Menteri Kesehatan RI Nomor: 634/Kep/Diknakes/V/1985 diperpanjang Nomor: 4488/Kep/Diknakes/XII/1987 serta Nomor: 79/Kep/ Diknakes/ V/1990 yang terakhir Nomor: HK. 00.06.1.1.0120 didirikan Akademi Perawatan Jenderal Achmad Yani di bawah naungan Yayasan Kartika Eka Paksi (YKEP).<br><sup>47</sup> 	Panduan Akademi Perawatan Jenderal Achmad Yani (Akper A. Yani), Cimahi, 1996, Hal.1.<br><sup>48</sup>	Yayasan Kartika Eka Paksi, Loc., Cit'
					}
				],
				[
					{ dateLabel: '2004', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Dalam rangka menyesuaikan amanat Undang-Undang Nomor 28 Tahun 2004 tentang Perubahan atas Undang-Undang Nomor 16 tahun 2001 tentang Yayasan, YKEP segera mengadakan perubahan Anggaran Dasar kembali.<sup>23</sup><br><br>Perubahan yang signifikan dalam Anggaran Dasar tersebut adalah status YKEP sebagai Badan Hukum berdiri sendiri (terlepas) dari hubungannya dengan TNI Angkatan Darat,24 adanya perluasan pada maksud dan tujuan, serta Organ Yayasan.<br><br>Mengacu kepada Anggaran Dasar yang baru tersebut, ‘Yayasan mempunyai maksud dan tujuan di bidang sosial, keagamaan, dan kemanusiaan guna membantu meningkatkan kecerdasan dan kesejahteraan masyarakat khususnya keluarga besar prajurit dan purnawirawan Angkatan Darat”.<br><br>Kegiatan di bidang sosial dilakukan melalui berbagai bentuk, yaitu: memberikan bantuan berupa santunan kepada ahli waris  dari  prajurit  Angkatan Darat yang gugur, memberikan bantuan pembangunan perumahan atau rehabilitasi rumah tidak layak huni kepada keluarga besar prajurit Angkatan Darat sesuai dengan kemampuan dan persyaratan yang ditetapkan Yayasan, menyelenggarakan pendidikan, maupun memberikan beasiswa kepada masyarakat khususnya keluarga besar prajurit Angkatan Darat.<br><br>Untuk kegiatan di bidang keagamaan dilakukan melalui pemberian bantuan  dalam bidang keagamaan kepada masyarakat khususnya keluarga besar prajurit Angkatan Darat, sesuai dengan kemampuan dan persyaratan yang ditetapkan Yayasan.<br><br>Sedangkan kegiatan di bidang kemanusiaan dilakukan melalui pemberian bantuan kemanusiaan kepada masyarakat khususnya keluarga besar prajurit Angkatan Darat, sesuai dengan kemampuan dan persyaratan yang ditetapkan Yayasan.<br><br>Terkait dengan perubahan organ Yayasan yang sebelumnya terdiri dari 4 (empat) organ, maka pada Anggaran Dasar yang baru ini disederhanakan menjadi 3 (tiga) organ, yaitu Pembina, Pengurus, dan Pengawas.<br><br>Pembina adalah organ Yayasan yang mempunyai kewenangan yang tidak diserahkan kepada Pengurus atau Pengawas, sedangkan Pengawas merupakan Organ Yayasan yang bertugas melakukan pengawasan dan memberi nasehat kepada Pengurus dalam hal menjalankan kegiatan Yayasan. <br><br>Adapun Pengurus adalah Organ Yayasan yang melaksanakan kepengurusan Yayasan terdiri dari: Ketua Umum, Wakil Ketua Umum, Sekretaris, Bendahara, dan 3 (tiga) orang Ketua Bidang. Sesuai dengan Anggaran Dasar ini, ditetapkan pula sebagai Ketua Umum Yayasan adalah Letjen TNI (Purn) Darsono TMT 9 Januari 2004. ',
						footnote: '<sup>23</sup> 	Akta Notaris Rusnaldy, SH. Nomor 36 tanggal 12 Oktober 2004, telah mendapatkan pengesahan dari Departemen Hukum & HAM melalui Surat Dirjen Administrasi Hukum Umum Nomor C-HT. 01-09-100 tanggal 18 April 2005. <br><sup>24</sup>	Kabag Hukum Yayasan Kartika Eka Paksi, Hukum Yayasan, Antara Fungsi Karikatif atau Komersial Berdasarkan Undang-Undang Nomor 28 Th. 2004 tentang Perubahan Undang-Undang No. 16 Th. 2001 tentang Yayasan, Jakarta, 2005,     Hal. 4.<br><sup>*</sup>    Surat Keputusan Ketua Umum YKEP Nomor : Skep/11/YKEP/III/2006 tanggal  31 Maret 2006 tentang Anggaran Rumah Tangga YKEP.'
					},
					{ dateLabel: '2009', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Pada era ini, kantor Yayasan menempati gedung di Jalan Medan Merdeka Timur Nomor 7, Gambir, Jakarta Pusat hingga sekarang.25 Selanjutnya, pada tanggal 30 Juni 2009 Ketua Umum Letjen TNI (Purn) Darsono digantikan oleh Brigjen TNI (Purn) Djoko Daryatno.<sup>26</sup>',
						footnote: ''
					},
					{ dateLabel: '2013', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Perkembangan selanjutnya, berdasarkan Surat Keputusan Ketua Pembina YKEP Nomor: Skep/40/YKEP/PEMBINA/VIII/2013 tanggal 30 Agustus 2013 telah megangkat Mayjen TNI (Purn) Adi Mulyono sebagai Ketua Pengurus Yayasan  menggantikan Brigjen TNI (Purn) Djoko Daryatno, dan Brigjen TNI (Purn) Drs. Aziz Ahmadi, M. Sc.  sebagai  Wakil  Ketua Pengurus Yayasan. Bersamaan dengan pengangkatan Ketua dan Wakil Ketua Pengurus Yayasan, diangkat pula Kolonel (Purn) Drs. Sulistijono, M.M. sebagai Sekretaris Pengurus dan Brigjen TNI (Purn) Sumartoyo, MBA ditetapkan kembali sebagai Bendahara Pengurus. Pengangkatan Pengurus YKEP ini kemudian dikukuhkan pula melalui Akta  Nomor 02 tanggal 04 September 2013, yang dibuat Notaris Achmad, SH. Kecuali Bendahara Pengurus Brigjen TNI (Purn) Sumartoyo yang digantikan oleh Brigjen TNI (Purn) Edy Purwanto melalui Akta No. 04 tanggal 7 Februari 2017 yang dibuat Notaris Rully Darmawan Maksudi, SH., MH, para pejabat yang duduk dalam kepengurusan YKEP masih menjabat hingga sekarang ini.',
						footnote: '<sup>25</sup> 	Wawancara Op. Cit.<br><sup>26</sup> 	Akta Notaris Rusnaldy, SH. Nomor 253 tanggal 30 Juni 2009.'
					}
				],
				[
					{ dateLabel: '2014', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Guna memenuhi persyaratan keberadaan Fakultas Kedokteran Gigi Universitas Jenderal Achmad Yani Cimahi, sehingga dapat memberikan pelayanan pendidikan yang prima bagi mahasiswa profesi kedokteran gigi, Yayasan  Kartika Eka Paksi memandang perlu mendirikan Rumah Sakit Gigi dan Mulut (RSGM) di Cimahi.<br><br>Pembangunan RSGM Cimahi dimulai pada tanggal 24 April 2014 yang ditandai dengan peletakan batu pertama oleh Ketua Pengurus YKEP Mayjen TNI (Purn) Adi Mulyono. RSGM berdiri di atas lahan seluas 4.811 m2 dengan luas bangunan  6.210 m2, berlokasi di Jl. Encep Kartawiria No.88, Citeureup, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat.',
						footnote: ''
					},
					{ dateLabel: '2018', 
						title: '',
						titleDesk: '', 
						desk: '' ,
						img: '', 
						imgDesk: 'Universitas Jenderal Achmad Yani (Unjani) Yogyakarta diresmikan pendiriannya oleh Kepala Staf Angkatan Darat Jenderal TNI Mulyono selaku Ketua Pembina Yayasan Kartika Eka Paksi pada hari Senin, tanggal 26 Maret 2018. Unjani Yogyakarta merupakan hasil penyatuan dari dua perguruan  tinggi di Yogyakarta yang berada di bawah Yayasan Kartika Eka Paksi, yaitu Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Jenderal Achmad Yani dengan Sekolah Tinggi Ilmu Kesehatan (STIKes) Jenderal Achmad Yani. Kedua perguruan tinggi yang merupakan cikal bakal Unjani Yogyakarta ini memiliki latar belakang disiplin ilmu dan sejarah yang berbeda.<br><br>STMIK Jenderal Achmad Yani merupakan pengembangan dari “Akademi  Komputer Kartika Yani” (AKKY) yang didirikan Yayasan Kartika Eka Paksi pada 2 Januari 1996.52 Pendirian AKKY ditujukan untuk menghasilkan tenaga profesional madya yang berwawasan luas, bertaqwa kepada Tuhan Yang Maha Esa, berkepribadian luhur dan selalu memperhatikan masalah bangsa dan negara Indonesia berdasarkan Pancasila. Di samping itu juga untuk menghasilkan tenaga profesional madya yang berkemampuan tinggi dalam pemahaman perkembangan dan penerapan ilmu dan teknologi, memiliki keterampilan tinggi dalam penerapan manajemen informatika dan/atau komputer dalam berbagai bidang. <br><br>Awal operasional pendidikannya, AKKY menyelenggarakan jenis  pendidikan  vokasi  setingkat  program  diploma  III  dengan  dua program studi  (Prodi), yaitu: Prodi Teknik Komputer dan Prodi Manajemen Informatika. Pemilihan kedua Prodi ini didasarkan pada pertimbangan kebutuhan di masa datang akan tenaga terampil bidang tersebut, utamanya perkembangan teknologi informasi. Sebagai tempat perkuliahan, untuk sementara AKKY menempati salah satu ruangan lantai empat  sebuah gedung Bank Lippo di Jl. Jenderal Soedirman No. 4 Yogyakarta.',
						footnote: '<sup>52></sup>	Surat Keputusan Ketua Umum Yayasan Kartika Eka Paksi Nomor: Skep/01/YKEP/1996 tanggal 2 januari 1996.'
					}
				]
				]
			}
		},
		mounted() {
			console.log(this.steps1[0][0])
			$('.display-sejarah').hide();  
		},
		methods:{
			showDesk(item){
				this.showTitle = item.titleDesk
				this.showDeskription = item.desk
				this.showImg = item.img
				this.showImgDesk = item.imgDesk
				$('.display-sejarah').fadeIn();
			}
		}
	};
</script>
<style>
	.vueperslide{
		margin-top:5em;
	}
	.line-border{
		width: 100%;
		height: 0.25rem;
		position: relative;
		top: 7.5em;
		background-color: #38c0a6;
		border-radius: 1rem;
		border-color: #38c0a6 !important;
	}

	.vueperslide--active .circle{
		height: 90px;
		width: 90px;
		background-color: #2a4745;
	}

	.vueperslide--active .circle:hover{
		transition: transform .2s;
		height: 95px;
		width: 95px;
		background-color: #38c0a6;
	}

	.circle {
		background: #c3bfbf;
		border-radius: 50%;
		color: white;
		height: 70px;
		width: 70px;
		display: table;
		margin: 20px auto;
	}
	.circle p {
		vertical-align: middle;
		display: table-cell;
		font-size: 12px;
		text-align: center;
	}

	.text-timeline{

	}
	.text-timeline .text{
		font-size: 13px;
		font-weight: 500;
	}
	.scrolabel-sejarah{
		overflow-y: scroll;
		height: 290px;
	}

	.font-t-sm{
		font-size: 10px;
	}
	.img-desk-sejarah{
		width: 75% !important;
	}
</style>