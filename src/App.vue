<template>
	<v-app class="grey lighten-2">
		<Navbar />
		<v-content class="mx-4 mt-4 mb-4" id="mainContainer">
			<transition name="router-anim" enter-active-class="animated fadeInRight">
				<router-view/>
			</transition>
		</v-content>
	</v-app>
</template>

<script>
	import Navbar from '@/components/Navbar';
	export default {
		name: 'App',
		components: {
			Navbar
		},
		data () {
			return {
				
			}
		},
		updated() {
			if(this.$store.state.username == '')
			{
				this.$store.commit('REFRESH_USER', sessionStorage.getItem("user")) ;
			}
		}
	}
</script>

<style>
	@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
</style>