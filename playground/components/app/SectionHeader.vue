<template>
    <div class="grid">
						<div class="lg-col-span-5 services__text">
							<div class="h3 color-primary services__title">
                                <p v-html="serviceTitle"></p>
							
							</div>
							<div class="p-small color-primary pt-2 services__subtitle">
                                <p>{{ serviceDescription }}</p>
							
							</div>
						</div>
					</div>
</template>
<script setup>
const props = defineProps({
    serviceTitle: String,
    serviceDescription: String
})

const { serviceTitle, serviceDescription } = props
</script>