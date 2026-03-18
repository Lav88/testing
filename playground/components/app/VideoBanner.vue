<template>
    <div class="hero__img">
					<div class="hero__cover hero__cover--left"></div>
					<div class="hero__cover hero__cover--right"></div>
					<div class="hero__video">
						<video class="hero__video-el" autoplay loop muted playsinline>
							<source :src="bannerVideo" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				</div>

</template>
<script setup>
const props = defineProps({
    bannerVideo: String
})

const { bannerVideo } = props
</script>