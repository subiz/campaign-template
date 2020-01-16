<template>
	<div class="countdown-template" v-if="showCountDown"  :key="this.seconds" >
		<p class="text" >{{showCountDown}}</p>
		<div class= "date" >
			<div class="main">
				<div class="top"/>
				<div class="bottom"/>
				<p class="number">{{days}}</p>
			</div>
			<p class="text">NGÀY</p>
		</div>
		<div class= "hour" >
			<div class="main">
				<div class="top"/>
				<div class="bottom"/>
				<p class="number">{{hours}}</p>
			</div>
			<p class="text">GIỜ</p>
		</div>
		<div class= "minute">
			<div class="main">
				<div class="top"/>
				<div class="bottom"/>
				<p class="number">{{mins}}</p>
			</div>
			<p class="text">PHÚT</p>
		</div>
		<div class= "second">
			<div class="main">
				<div class="top"/>
				<div class="bottom"/>
				<p class="number">{{seconds}}</p>
			</div>
			<p class="text">GIÂY</p>
		</div>
	</div>
</template>
<script>
export default {
	name:'countdown',
	props: ["countdown"],
	data(){
		return{
			days:0,
			hours: 0,
			mins: 0, 
			seconds:0
		}
	},
	created(){
		var countDownDate = new Date("Jan 16, 2020 12:15:00").getTime();
		var end_time = this.countdown.end_time;
		var distance
		var countdown = setInterval(() => {
			var now = new Date().getTime()
			distance = countDownDate - now 
			this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
			this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
		},1000)
	},
	computed: {
		showCountDown(){
			var countDownDate = new Date("Jan 16, 2020 12:15:00").getTime();
			var end_time = this.countdown.end_time;
			var now = new Date().getTime()
			var distance = countDownDate - now

			var countdown = setInterval( () =>{
				var now = new Date().getTime()
				distance = countDownDate - now
				if(distance < 0) console.log("ended")
				console.log("running")
			},1000)

			if(distance < 0) {
				console.log("ended")
				return false
			}else{
				console.log("running")
				return true
			}
		}
	},
}
</script>
<style src="./base.css"></style>