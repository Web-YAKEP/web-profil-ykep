<template>
	<div>
		<section id="about" class="about mt-5">
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-12">
						<img src="@/assets/img/baner-program.jpg" class="img-fluid header-page" alt="">
					</div>
				</div>
			</div>
		</section>
		<section id="why-us" class="why-us">
			<div class="container-fluid p-10" data-aos="fade-up">
				<div class="row mb-3" v-for="dataProgram of dataPrograms">
					<div class="col-6 text-center pl-5 pr-5">
						<h3 class="title-program">{{ dataProgram.nama }}</h3>
						<button class="btn btn-program btn-sm " v-on:click="openmodal(dataProgram)">BACA SELENGKAPNYA <i class="fa fa-chevron-circle-right"></i></button>
					</div>
					<div class="col-6">
						<img class="img-program" :src="dataProgram.img" >
					</div>
				</div>
			</div>
		</section>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
		<div class="modal"  id="programModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-12 text-center">
								<img :src="modalimg" class="w-100">
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-center mt-3">
								<h2>{{ modalNamaProgram }}</h2>
								<div class="divider-custom-3">
									<div class="divider-custom-line-3"></div>
								</div>
							</div>
							<div class="col-12">
								<p class="text-justify">
									{{ modalnarasi }}
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
		#programModal .modal-dialog {
			max-width: 100% !important;
		}
	}
	#programModal .modal-dialog {
		max-width: 50%;
	}
	#programModal .modal-dialog .modal-content{
		border-radius: 15px;
	}
	#programModal .modal-dialog .modal-content .modal-header{
		border-bottom: none;
		padding-left: 3em;
	}
	.btn-program{
		background-color: #68afab;
		color: #e6eeee;
		font-size: 13px;
		border-radius: 8px;
	}
	.title-program{
		font-weight: 1000
	}
	.p-10{
		padding:0em 10em !important;
	}
	.icon-misi{	
		text-align: center;
		font-size: 4em;
	}
	.logo-text{
		color: #ffffff !important;
	}
	.img-program{
		width: 100%;
	}
</style>

<script>
	export default{
		data(){
			return{
				modalNamaProgram: '',
				modalimg: '',
				modalnarasi: '',
				dataPrograms:[
				{
					id: 1,
					nama: 'New Unjani',
					img: require('@/assets/img/new-unjani.png'),
					narasi:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				{
					id: 2,
					nama: 'The Riverpark Residence',
					img: require('@/assets/img/the-river-park.png'),
					narasi:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				{
					id: 3,
					nama: 'Perumahan TNI-AD Sorong',
					img: require('@/assets/img/perum-sorong.png'),
					narasi:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				}]
			}
		},
		methods:{
			openmodal(item){
				this.modalNamaProgram = item.nama
				this.modalimg = item.img
				this.modalnarasi = item	.narasi
				$('#programModal').modal('show')
			}
		}
	};
</script>