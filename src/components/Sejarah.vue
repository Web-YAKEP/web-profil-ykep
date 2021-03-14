<template>
	<div class="sejarah">
		<main id="main">
			<section id="about" class="about">
				<div class="container-fluid p-0" data-aos="fade-up">
					<div class="row">
						<div class="col-12">
							<img src="@/assets/img/education.png" class="img-fluid" alt="">
						</div>
					</div>
				</div>
			</section>
			<section id="clients" class="clients">
				<div class="container">
					<div class="row">
						<div class="col-md-12">

							<div style="display:inline-block;width:100%;overflow-y:auto;">
								<ul class="timeline timeline-horizontal">
									<li class="timeline-item">
										<div class="timeline-badge primary"><span class="text-time">1972</span></div>
										<div class="timeline-text">
											<p>Awal mula berdirinya <br>YAKEP</p>
										</div>
									</li>
									<li class="timeline-item">
										<div class="timeline-badge success"><span class="text-time">1980</span></div>
										<div class="timeline-text">
											<p>Pada tahun ini <br>Yayasan Kartika EKa PAksi <br>didirikan dan sebagainya <br>dan lain lain.</p>
										</div>
									</li>
									<li class="timeline-item">
										<div class="timeline-badge info"><span class="text-time">1990</span></div>
										<div class="timeline-text">
											<p>Pada tahun ini <br>Yayasan Kartika EKa PAksi <br>didirikan dan sebagainya <br>dan lain lain.</p>
										</div>
									</li>
									<li class="timeline-item">
										<div class="timeline-badge danger"><span class="text-time">2021</span></div>
										<div class="timeline-text">
											<p>Pembangunan New Unjani</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="why-us" class="why-us">
				<div class="container-fluid" data-aos="fade-up">
					<header class="section-header">
						<h3>Awal mula berdiri</h3>
						<p>Yayasan Kartika Eka Paksi</p>
						<div class="divider-custom">
							<div class="divider-custom-line"></div>
						</div>
					</header>
					<div class="row mt-3">
						<div class="col-md-12">
							<div class="why-us-content text-justify">
								<p>Yayasan   Kartika   Eka   Paksi (YAKEP) didirikan oleh Kasad Jenderal TNI Umar Wirahadikusumah pada tanggal 10 
								Agustus 1972. YAng di kukuhkan melalui AKta Nomor 41, dibuat notaris Bdul Latief, S.H. Tujuan didirikannya YAKEP adalah untuk meningkatkan kesejahteraan KEluarga BEsar Angkatan Darat.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="about" class="container about bg-1 mb-5">
				<div class="row" data-aos="fade-up">
						<div class="col-lg-5 col-md-6 p-0">
							<div class="about-img" data-aos="fade-right" data-aos-delay="100">
								<img src="@/assets/img/kasad-jend-umar.png" alt="">
							</div>
						</div>
						<div class="col-lg-7 col-md-6 text-sambutan">
							<div class="about-content text-justify" data-aos="fade-left" data-aos-delay="100">
								<p>Jenderal TNI Umar Wirahadikusumah</p>
							</div>
						</div>
					</div>
			</section>
		</main>
		<footer id="footer" class="section-bg bg-3">
			<div class="footer-top bg-2">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-lg-3">
							<div class="footer-info">
								<img class="img-footer" src="@/assets/img/logo-ykep.png" >
								<br>
								<br>
								<p>Sistem Informasi YAKEP <br>
								Yayasan Kartika Eka Paksi</p>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="footer-links">
								<h4>Peta Situs</h4>
								<ul>
									<li><a href="">Beranda</a></li>
									<li><a href="">Tentang Kami</a></li>
									<li><a href="">Visi Misi</a></li>
									<li><a href="">Berita</a></li>
									<li><a href="">Program</a></li>
									<li><a href="">Kontak</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="footer-links">
								<h4>Tautan Terkait</h4>
								<ul>
									<li><a href="">Unjani</a></li>
									<li><a href="">Aston</a></li>
									<li><a href="">Green Valey Water Park</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="social-links">
								<h4>Kontak Kami</h4>
								<p>
									Jalan Medan Merdeka Timur No. 7,
									RT.2/RW.1, Gambir, Kota Jakarta Pusat,
									Daerah Khusus Ibu Kota 10110<br>
									<strong>Phone:</strong> (021) 23549153<br>
									<strong>Email:</strong> @gmail.com<br>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="copyright">
					<strong>Copyright &copy; 2021.</strong> All Rights Reserved
				</div>
			</div>
		</footer>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
	</div>
</template>

<style>
	/* Timeline */
.timeline,
.timeline-horizontal {
  list-style: none;
  padding: 20px;
  position: relative;
}
.timeline:before {
  top: 40px;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -1.5px;
}
.timeline .timeline-item {
  margin-bottom: 20px;
  position: relative;
}
.timeline .timeline-item:before,
.timeline .timeline-item:after {
  content: "";
  display: table;
}
.timeline .timeline-item:after {
  clear: both;
}
.timeline .timeline-item .timeline-badge {
  color: #fff;
  width: 70px;
  height: 70px;
  line-height: 52px;
  font-size: 22px;
  text-align: center;
  position: absolute;
  top: 18px;
  left: 50%;
  margin-left: -25px;
  background-color: #7c7c7c;
  border: 3px solid #ffffff;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}
.timeline .timeline-item .timeline-badge i,
.timeline .timeline-item .timeline-badge .fa,
.timeline .timeline-item .timeline-badge .glyphicon {
  top: 2px;
  left: 0px;
}
.timeline .timeline-item .timeline-badge.primary {
  background-color: #1f9eba;
}
.timeline .timeline-item .timeline-badge.info {
  background-color: #5bc0de;
}
.timeline .timeline-item .timeline-badge.success {
  background-color: #59ba1f;
}
.timeline .timeline-item .timeline-badge.warning {
  background-color: #d1bd10;
}
.timeline .timeline-item .timeline-badge.danger {
  background-color: #ba1f1f;
}
.timeline .timeline-item .timeline-panel {
  position: relative;
  width: 46%;
  float: left;
  right: 16px;
  border: 1px solid #c0c0c0;
  background: #ffffff;
  border-radius: 2px;
  padding: 20px;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}
.timeline .timeline-item .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -16px;
  display: inline-block;
  border-top: 16px solid transparent;
  border-left: 16px solid #c0c0c0;
  border-right: 0 solid #c0c0c0;
  border-bottom: 16px solid transparent;
  content: " ";
}
.timeline .timeline-item .timeline-panel .timeline-title {
  margin-top: 0;
  color: inherit;
}
.timeline .timeline-item .timeline-panel .timeline-body > p,
.timeline .timeline-item .timeline-panel .timeline-body > ul {
  margin-bottom: 0;
}
.timeline .timeline-item .timeline-panel .timeline-body > p + p {
  margin-top: 5px;
}
.timeline .timeline-item:last-child:nth-child(even) {
  float: right;
}
.timeline .timeline-item:nth-child(even) .timeline-panel {
  float: right;
  left: 16px;
}
.timeline .timeline-item:nth-child(even) .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}
.timeline-horizontal {
  list-style: none;
  position: relative;
  padding: 20px 0px 20px 0px;
  display: inline-block;
}
.timeline-horizontal:before {
  height: 3px;
  top: 73px;
  left: 56px;
  right: 0;
  width: 100%;
  margin-bottom: 20px;
}
.timeline-horizontal .timeline-item {
  display: table-cell;
  height: 200px;
  width: 20%;
  min-width: 320px;
  float: none !important;
  padding-left: 0px;
  padding-right: 20px;
  margin: 0 auto;
}
.timeline-horizontal .timeline-item .timeline-panel {
  top: auto;
  bottom: 64px;
  display: inline-block;
  float: none !important;
  left: 0 !important;
  right: 0 !important;
  width: 100%;
  margin-bottom: 20px;
}
.timeline-horizontal .timeline-item .timeline-panel:before {
  top: auto;
  bottom: -16px;
  left: 28px !important;
  right: auto;
  border-right: 16px solid transparent !important;
  border-top: 16px solid #c0c0c0 !important;
  border-bottom: 0 solid #c0c0c0 !important;
  border-left: 16px solid transparent !important;
}
.timeline-horizontal .timeline-item:before,
.timeline-horizontal .timeline-item:after {
  display: none;
}
.timeline-horizontal .timeline-item .timeline-badge {
  
  left: 43px;
}
.text-time{
	top: 5px;
    position: relative;
}
.timeline-text{
	margin-top: 100px;
    position: absolute;
    text-align: left;
}
</style>