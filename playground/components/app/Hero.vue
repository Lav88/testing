<template>
	<section class="hero content-block">
		<div class="wrapper">
			<div class="grid">
				<div class="lg-col-span-7 md-col-span-7">
					<div class="h2 hero__title">
						<p v-html="heroTitle"></p>
					</div>
				</div>
				<div class="lg-col-span-5 md-col-span-5">
					<div class="p-small hero-border">
						<p>&nbsp;</p>
						<p v-html="heroDescription"></p>
						<p>&nbsp;</p>
						<p v-html="heroTextLink"></p>
						<p>&nbsp;</p>
					</div>
				</div>
			</div>
		</div>

		<!-- TwocolumnGrid -->
		<AppVideoBanner :banner-video="bannerVideo" />
	</section>
</template>
<script setup>
const props = defineProps({
	heroTitle: String,
	heroDescription: String,
	heroTextLink: String,
	bannerVideo: {
		type: String,
		default: '/landing.mp4'
	}
})

const { heroTitle, heroDescription, heroTextLink, bannerVideo } = props
</script>