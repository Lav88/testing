<template>
    <section id="team" class="team content-block">
				<div class="wrapper">
					<div class="mb-40 grid">
						<div class="team__heading">
							<h2 class="team__title font-medium">{{ segmentControlsTitle }}</h2>
						</div>
						<div class="team__filters mr-2">
							<a href="#" class="c-button c-button--secondary team__cta active  has-icon " data-filter="board-of-directors">
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path><path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
								<span>{{controlsDescription1}}</span>
								<span>Biostimulant Formulations</span>
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
							</a>
							<AppButtonsControlsButtonSecondary :controlsDescription="controlsDescription"/>
							<AppButtonsControlsButtonSecondary :controlsDescription="controlsDescription"/>
								
							
							
							<a href="#" class="c-button c-button--secondary team__cta   has-icon " data-filter="general-management">
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path><path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
								<span>{{controlsDescription3}}</span>
								<span>Sustainable Polymers for Packaging</span>
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
							</a>
							<a href="#" class="c-button c-button--secondary team__cta   has-icon " data-filter="cross-functional-team">
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path><path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
								<span>{{controlsDescription4}}</span>
								<span>Raw Seaweed Materials</span>
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
							</a>																							
							<a href="#" class="c-button c-button--secondary team__cta   has-icon " data-filter="finance-team">
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
								<span>{{controlsDescription5}}</span>
								<span>Gelling Agents</span>
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
							</a>
							<a href="#" class="c-button c-button--secondary team__cta   has-icon " data-filter="partnerships-and-development">
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
								<span>{{controlsDescription6}}</span>
								<span>R & D and Lab Partner</span>
								<span class="c-button__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
										<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z" fill="#171717"></path>
										<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
									</svg>
								</span>
							</a>
						</div>
					</div>	
				</div>
			</section>
</template>

<script setup>
const props = defineProps({
    segmentControlsTitle: String,
    controlsDescription: String,
})

const { segmentControlsTitle, controlsDescription1, controlDescrption2, controlsDescription3, controlsDescription4, controlsDescription5, controlsDescription6, heroTextLink } = props
</script>