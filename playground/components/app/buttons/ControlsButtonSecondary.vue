<template>
    <a href="#" class="c-button c-button--secondary team__cta   has-icon " data-filter="investment-team">
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
								<span>{{controlsDescription}}</span>
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
							</a>

</template>
<script setup>
const props = defineProps({
    controlsDescription: String
})

const { controlsDescription } = props
</script>