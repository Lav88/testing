<template>
<section class="services content-block">
				<div class="wrapper">
                    <AppSectionHeader :service-title="serviceTitle" :service-description="serviceDescription"/>
					
					<div class="grid services__border mt-10">
						<div class="md-col-span-6 card">
							<a href="https://edfimc.eu/what-we-do/#investments" class="services__card">
                                <h4 class="color-primary">{{ primaryService }}</h4>
								<div class="services__content">
									<p class="p-small color-light ">{{ primaryServiceDescription }}</p>
									<span class="c-button c-button--primary services__button p-small  has-icon ">
										<span class="c-button__icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
												<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
												<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
											</svg>
										</span>
										<span>Read More</span>
									</span>
								</div>
							</a>
						</div>
						<div class="md-col-span-6 card">
							<a href="https://edfimc.eu/what-we-do/#guarantees" class="services__card">
								<h4 class="color-primary">{{ secondaryService }}</h4>
								<div class="services__content">
									<p class="p-small color-light ">{{ secondaryServiceDescription }}</p>
									<span class="c-button c-button--primary services__button p-small  has-icon ">
										<span class="c-button__icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
												<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
												<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
											</svg>
											</span>
										<span> Read More. </span>
									</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

</template>
<script setup>
const props = defineProps({
    primaryService: String,
    primaryServiceDescription: String,
    secondaryService: String,
    secondaryServiceDescription: String,
    serviceTitle: String,
    serviceDescription: String
})

const { serviceTitle, serviceDescription, primaryService, primaryServiceDescription, secondaryService, secondaryServiceDescription } = props
</script>