<script setup>
import { onBeforeUnmount, onMounted, nextTick, ref } from 'vue'

const sliderRef = ref(null)

let wrapperEl = null
let extendedSlides = []
let originalCount = 0
let internalIndex = 1 // 1 = first real slide (because we prepend a clone)
let resizeHandler = null
let isAnimating = false

const TRANSITION_MS = 400

const setTranslate = (index, withTransition) => {
	if (!wrapperEl || extendedSlides.length === 0) return
	const target = extendedSlides[index]
	if (!target) return

	if (withTransition) {
		wrapperEl.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`
	} else {
		wrapperEl.style.transition = 'none'
	}

	wrapperEl.style.transform = `translate3d(${-target.offsetLeft}px, 0, 0)`
}

const recalcSlides = () => {
	if (!wrapperEl) return
	extendedSlides = Array.from(wrapperEl.querySelectorAll('.swiper-slide'))
}

const initInfiniteLoop = () => {
	if (!sliderRef.value) return

	wrapperEl = sliderRef.value.querySelector('.swiper-wrapper')
	if (!wrapperEl) return

	// Avoid duplicating clones if this component re-mounts.
	const existingClones = wrapperEl.querySelectorAll('[data-carousel-clone="1"]').length
	const currentSlides = Array.from(wrapperEl.querySelectorAll('.swiper-slide'))
	if (currentSlides.length < 2) return

	// Compute original count once (excluding clones).
	if (existingClones === 0) {
		originalCount = currentSlides.length

		const firstClone = currentSlides[0].cloneNode(true)
		firstClone.setAttribute('data-carousel-clone', '1')
		firstClone.classList.add('is-clone')

		const lastClone = currentSlides[currentSlides.length - 1].cloneNode(true)
		lastClone.setAttribute('data-carousel-clone', '1')
		lastClone.classList.add('is-clone')

		// [cloneLast][real...][cloneFirst]
		wrapperEl.insertBefore(lastClone, currentSlides[0])
		wrapperEl.appendChild(firstClone)
	}

	recalcSlides()
	if (originalCount === 0) {
		// If clones already existed, infer original count.
		originalCount = extendedSlides.length - 2
	}

	// Start at first real slide.
	internalIndex = 1
	isAnimating = false
	setTranslate(internalIndex, false)
}

const onTransitionEnd = (e) => {
	if (!wrapperEl) return
	if (e.propertyName !== 'transform') return
	if (!isAnimating) return

	isAnimating = false

	// If we moved onto a clone, jump to the corresponding real slide without transition.
	if (internalIndex === 0) {
		// cloneLast -> real last
		internalIndex = originalCount
		setTranslate(internalIndex, false)
	} else if (internalIndex === originalCount + 1) {
		// cloneFirst -> real first
		internalIndex = 1
		setTranslate(internalIndex, false)
	}
}

const scrollPrev = () => {
	if (!wrapperEl || extendedSlides.length === 0) return
	if (isAnimating) return
	isAnimating = true
	internalIndex = Math.max(0, internalIndex - 1)
	setTranslate(internalIndex, true)
}

const scrollNext = () => {
	if (!wrapperEl || extendedSlides.length === 0) return
	if (isAnimating) return
	isAnimating = true
	internalIndex = Math.min(originalCount + 1, internalIndex + 1)
	setTranslate(internalIndex, true)
}

onMounted(async () => {
	await nextTick()
	initInfiniteLoop()

	wrapperEl?.addEventListener('transitionend', onTransitionEnd)
	resizeHandler = () => {
		// Keep the current internal index in view after resize.
		recalcSlides()
		setTranslate(internalIndex, false)
	}
	window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', resizeHandler)
	wrapperEl?.removeEventListener('transitionend', onTransitionEnd)
})
</script>

<template>
	<section class="related content-block">
		<div class="wrapper">
			<div class="related__container">
				<div class="related__content">
					<div>
						<h2 class="h2-SansSerif mb-3"><span>Projects</span> &amp; insights</h2>
						<a href="https://edfimc.eu/news-insights/" class="c-button c-button--secondary  has-icon ">
							<span class="c-button__icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
									<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
										fill="#171717"></path>
									<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
								</svg>
							</span>
							<span>More news &amp; insights</span>
							<span class="c-button__icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none">
									<path d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
										fill="#171717"></path>
									<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
								</svg>
							</span>
						</a>
					</div>
					<div class="related__navigation">
						<span class="related__navigation-prev" @click="scrollPrev">
							<svg width="18" height="20" viewBox="0 0 18 20" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M8.8716 20L-8.22293e-07 10.5941L0.046691 9.35644L9.4786 19.3564L8.8716 20Z"
									fill="currentColor"></path>
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M18 10.4335L1.6923 10.4335L1.6923 9.57995L18 9.57994L18 10.4335Z"
									fill="currentColor"></path>
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M0.046691 9.35644L8.87159 7.9803e-07L9.43191 0.59406L-8.22293e-07 10.5941L0.046691 9.35644Z"
									fill="currentColor"></path>
							</svg>
						</span>
						<span class="related__navigation-next" @click="scrollNext">
							<svg width="18" height="20" viewBox="0 0 18 20" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M9.1284 0L18 9.40594L17.9533 10.6436L8.5214 0.643563L9.1284 0Z"
									fill="currentColor"></path>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.56647H16.3077V10.4201H0V9.56647Z"
									fill="currentColor"></path>
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M17.9533 10.6436L9.1284 20L8.56809 19.4059L18 9.40594L17.9533 10.6436Z"
									fill="currentColor"></path>
							</svg>
						</span>
					</div>
				</div>
				<div class="related__posts" ref="sliderRef">
					<div class="swiper related__slider swiper-initialized swiper-horizontal swiper-backface-hidden"
						style="touch-action: none;">
						<div class="swiper-wrapper">
							<div class="swiper-slide swiper-slide-active" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="0">
								<a href="https://edfimc.eu/technical-assistance-in-practice-supporting-investees-to-build-stronger-businesses/"
									class="card-post color-light" data-post-id="5292">
									<figure class="card-post__image">
										<img fetchpriority="high" decoding="async" width="2560" height="1154"
											src="https://edfimc.eu/wp-content/uploads/2026/01/PHOTO-2025-08-01-14-02-24.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2026/01/PHOTO-2025-08-01-14-02-24.jpg 2560w, https://edfimc.eu/wp-content/uploads/2026/01/PHOTO-2025-08-01-14-02-24-300x135.jpg 300w, https://edfimc.eu/wp-content/uploads/2026/01/PHOTO-2025-08-01-14-02-24-1024x462.jpg 1024w, https://edfimc.eu/wp-content/uploads/2026/01/PHOTO-2025-08-01-14-02-24-768x346.jpg 768w, https://edfimc.eu/wp-content/uploads/2026/01/PHOTO-2025-08-01-14-02-24-1536x692.jpg 1536w, https://edfimc.eu/wp-content/uploads/2026/01/PHOTO-2025-08-01-14-02-24-2048x923.jpg 2048w"
											sizes="(max-width: 2560px) 100vw, 2560px">
									</figure>

									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">2 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 12 Mar </p>
											<p class="mb-2 font-regular p-large">COASTAL partners with Cylon Seaweed
												Srilanka to drive strong, growing demand for sustainable
												ingredients.&nbsp;</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide swiper-slide-next" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="1">
								<a href="https://edfimc.eu/ilute-solar-project-reaches-financial-close-a-landmark-market-based-solar-ipp-transaction-for-zambia-and-southern-africa/"
									class="card-post color-light" data-post-id="5273">
									<figure class="card-post__image">
										<img decoding="async" width="1600" height="721"
											src="https://edfimc.eu/wp-content/uploads/2025/11/Illute.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/11/Illute.jpg 1600w, https://edfimc.eu/wp-content/uploads/2025/11/Illute-300x135.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/11/Illute-1024x461.jpg 1024w, https://edfimc.eu/wp-content/uploads/2025/11/Illute-768x346.jpg 768w, https://edfimc.eu/wp-content/uploads/2025/11/Illute-1536x692.jpg 1536w"
											sizes="(max-width: 1600px) 100vw, 1600px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">3 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 18 Feb </p>
											<p class="mb-2 font-regular p-large">New biostimulant formulations have
												substantially enhanced the sustainable production of hydroponic lettuce
											</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="2">
								<a href="https://edfimc.eu/agros-secures-usd-2-million-from-edfi-electrifi-to-expand-solar-powered-irrigation-for-farmers-in-southeast-asia/"
									class="card-post color-light" data-post-id="5247">
									<figure class="card-post__image">
										<img decoding="async" width="2560" height="1710"
											src="https://edfimc.eu/wp-content/uploads/2025/12/Pump-in-action-scaled.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/12/Pump-in-action-scaled.jpg 2560w, https://edfimc.eu/wp-content/uploads/2025/12/Pump-in-action-300x200.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/12/Pump-in-action-1024x684.jpg 1024w, https://edfimc.eu/wp-content/uploads/2025/12/Pump-in-action-768x513.jpg 768w, https://edfimc.eu/wp-content/uploads/2025/12/Pump-in-action-1536x1026.jpg 1536w, https://edfimc.eu/wp-content/uploads/2025/12/Pump-in-action-2048x1368.jpg 2048w"
											sizes="(max-width: 2560px) 100vw, 2560px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">2 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 10 Feb </p>
											<p class="mb-2 font-regular p-large">Begrar and COASTAL secures USD 2
												million from EDFI ElectriFI to expand solar-powered irrigation for
												farmers in Germany</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="3">
								<a href="https://edfimc.eu/edfi-msme-platform-guarantee-enables-crdb-bank-burundi-to-expand-lending-to-underserved-msmes/"
									class="card-post color-light" data-post-id="5217">
									<figure class="card-post__image">
										<img loading="lazy" decoding="async" width="2240" height="724"
											src="https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-09.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-09.jpg 2240w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-09-300x97.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-09-1024x331.jpg 1024w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-09-768x248.jpg 768w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-09-1536x496.jpg 1536w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-09-2048x662.jpg 2048w"
											sizes="auto, (max-width: 2240px) 100vw, 2240px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">4 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 16 Dec </p>
											<p class="mb-2 font-regular p-large">EDFI MSME Platform Guarantee Enables
												CRDB Bank Burundi to Expand Lending to Underserved MSMEs</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="4">
								<a href="https://edfimc.eu/complete-farmer-to-strengthen-its-outgrower-network-with-technical-assistance-from-edfi-management-company-to-be-delivered-by-colead/"
									class="card-post color-light" data-post-id="5189">
									<figure class="card-post__image">
										<img loading="lazy" decoding="async" width="2560" height="1920"
											src="https://edfimc.eu/wp-content/uploads/2025/06/Complete-farmer-scaled.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/06/Complete-farmer-scaled.jpg 2560w, https://edfimc.eu/wp-content/uploads/2025/06/Complete-farmer-300x225.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/06/Complete-farmer-1024x768.jpg 1024w, https://edfimc.eu/wp-content/uploads/2025/06/Complete-farmer-768x576.jpg 768w, https://edfimc.eu/wp-content/uploads/2025/06/Complete-farmer-1536x1152.jpg 1536w, https://edfimc.eu/wp-content/uploads/2025/06/Complete-farmer-2048x1536.jpg 2048w"
											sizes="auto, (max-width: 2560px) 100vw, 2560px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">1 min Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 10 Dec </p>
											<p class="mb-2 font-regular p-large">Complete Farmer to strengthen its
												outgrower network with technical assistance from EDFI Management Company
												to be delivered by COLEAD</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="5">
								<a href="https://edfimc.eu/proparcos-investment-in-axa-im-alts-natural-capital-impact-strategy-backed-by-edfi-management-company/"
									class="card-post color-light" data-post-id="5153">
									<figure class="card-post__image">
										<img loading="lazy" decoding="async" width="2560" height="1437"
											src="https://edfimc.eu/wp-content/uploads/2024/09/AdobeStock_267763955-scaled.jpeg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2024/09/AdobeStock_267763955-scaled.jpeg 2560w, https://edfimc.eu/wp-content/uploads/2024/09/AdobeStock_267763955-300x168.jpeg 300w, https://edfimc.eu/wp-content/uploads/2024/09/AdobeStock_267763955-1024x575.jpeg 1024w, https://edfimc.eu/wp-content/uploads/2024/09/AdobeStock_267763955-768x431.jpeg 768w, https://edfimc.eu/wp-content/uploads/2024/09/AdobeStock_267763955-1536x862.jpeg 1536w, https://edfimc.eu/wp-content/uploads/2024/09/AdobeStock_267763955-2048x1149.jpeg 2048w"
											sizes="auto, (max-width: 2560px) 100vw, 2560px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">3 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 8 Dec </p>
											<p class="mb-2 font-regular p-large">Proparco’s investment in AXA IM Alts’
												Natural Capital &amp; Impact strategy backed by EDFI Management Company
											</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="6">
								<a href="https://edfimc.eu/emerging-cooking-solutions-to-optimise-call-centre-operations-with-technical-assistance-from-edfi-management-company/"
									class="card-post color-light" data-post-id="5184">
									<figure class="card-post__image">
										<img loading="lazy" decoding="async" width="940" height="528"
											src="https://edfimc.eu/wp-content/uploads/2025/12/Picture2.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/12/Picture2.jpg 940w, https://edfimc.eu/wp-content/uploads/2025/12/Picture2-300x169.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/12/Picture2-768x431.jpg 768w"
											sizes="auto, (max-width: 940px) 100vw, 940px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">1 min Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 5 Dec </p>
											<p class="mb-2 font-regular p-large">Emerging Cooking Solutions to optimise
												call centre operations with Technical Assistance from EDFI Management
												Company</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="7">
								<a href="https://edfimc.eu/tgvc-guarantee-backs-e3-million-bio-loan-to-foodsco-for-cashew-by-product-innovation-in-cote-divoire/"
									class="card-post color-light" data-post-id="5141">
									<figure class="card-post__image">
										<img loading="lazy" decoding="async" width="1200" height="616"
											src="https://edfimc.eu/wp-content/uploads/2025/12/Pic-2-for-press-release.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/12/Pic-2-for-press-release.jpg 1200w, https://edfimc.eu/wp-content/uploads/2025/12/Pic-2-for-press-release-300x154.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/12/Pic-2-for-press-release-1024x526.jpg 1024w, https://edfimc.eu/wp-content/uploads/2025/12/Pic-2-for-press-release-768x394.jpg 768w"
											sizes="auto, (max-width: 1200px) 100vw, 1200px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">3 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 4 Dec </p>
											<p class="mb-2 font-regular p-large">TGVC Guarantee backs €3 million BIO
												loan to Foods’Co for cashew by-product innovation in Côte d’Ivoire</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="8">
								<a href="https://edfimc.eu/tgvc-guarantee-to-support-bios-e2-million-investment-in-limbua-groups-organic-agriculture-expansion-in-kenya/"
									class="card-post color-light" data-post-id="5150">
									<figure class="card-post__image">
										<img loading="lazy" decoding="async" width="900" height="558"
											src="https://edfimc.eu/wp-content/uploads/2025/12/Pic-1-for-press-release.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/12/Pic-1-for-press-release.jpg 900w, https://edfimc.eu/wp-content/uploads/2025/12/Pic-1-for-press-release-300x186.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/12/Pic-1-for-press-release-768x476.jpg 768w"
											sizes="auto, (max-width: 900px) 100vw, 900px">
									</figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">3 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 3 Dec </p>
											<p class="mb-2 font-regular p-large">TGVC Guarantee to Support BIO’s €2
												Million Investment in Limbua Group’s Organic Agriculture Expansion in
												Kenya</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div class="swiper-slide" style="width: 482.8px; margin-right: 20px;"
								data-swiper-slide-index="9">
								<a href="https://edfimc.eu/backing-nature-based-solutions-edfi-management-company-guarantees-proparcos-investment-in-ardians-ecosystem-restoration-fund/"
									class="card-post color-light" data-post-id="5124">
									<figure class="card-post__image"><img loading="lazy" decoding="async" width="2240"
											height="724"
											src="https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-10.jpg"
											class="attachment-full size-full wp-post-image" alt=""
											srcset="https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-10.jpg 2240w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-10-300x97.jpg 300w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-10-1024x331.jpg 1024w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-10-768x248.jpg 768w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-10-1536x496.jpg 1536w, https://edfimc.eu/wp-content/uploads/2025/10/Hero-image-10-2048x662.jpg 2048w"
											sizes="auto, (max-width: 2240px) 100vw, 2240px"></figure>
									<div class="card-post__container">
										<div class="card-post__ctas color-primary">
											<span class="card-post__cta">2 mins Read</span>
											<span class="card-post__cta card-post__cta--category">News</span>
										</div>
										<div class="card-post__content">
											<div class="card-post__gradient"></div>
											<p class="mb-1 font-regular"> 24 Nov </p>
											<p class="mb-2 font-regular p-large">Backing Nature-Based Solutions: EDFI
												Management Company guarantees Proparco’s investment in Ardian’s
												ecosystem restoration fund</p>
											<div class="mt-4">
												<span class="c-button c-button--primary  has-icon ">
													<span class="c-button__icon">
														<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
															fill="none">
															<path
																d="m0 10.795 8.3-8.3.71.709-8.3 8.3-.71-.71ZM0 .494h10l1 1H0v-1Z"
																fill="#171717"></path>
															<path d="M10 11.494v-11l1 1v10h-1Z" fill="#171717"></path>
														</svg>
													</span>
													<span>Read more</span>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div class="cta-circle"
							style="translate: none; rotate: none; scale: none; transform: translate(-50%, -50%) translate(877.611px, -330.705px);">
							<div class="cta-circle__inner">
								<svg class="cta-circle__prev" width="22" height="24" viewBox="0 0 22 24" fill="none"
									xmlns="http://www.w3.org/2000/svg" @click="scrollPrev">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M10.8384 23.1792L1.00015 12.7484L1.05193 11.3759L11.5115 22.4655L10.8384 23.1792Z"
										fill="#F7F7F7"></path>
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M20.9614 12.5704L2.87684 12.5704L2.87684 11.6238L20.9614 11.6238L20.9614 12.5704Z"
										fill="#F7F7F7"></path>
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M1.05193 11.3759L10.8384 1.00001L11.4598 1.6588L1.00015 12.7484L1.05193 11.3759Z"
										fill="#F7F7F7"></path>
									<path
										d="M1.00015 12.7484L10.8384 23.1792L11.5115 22.4655L1.05193 11.3759M1.00015 12.7484L1.05193 11.3759M1.00015 12.7484L11.4598 1.65879L10.8384 1.00001L1.05193 11.3759M2.87684 12.5704L20.9614 12.5704L20.9614 11.6238L2.87684 11.6238L2.87684 12.5704Z"
										stroke="#F7F7F7" stroke-width="1.10896"></path>
								</svg>
								<svg class="cta-circle__next" width="22" height="24" viewBox="0 0 22 24" fill="none"
									xmlns="http://www.w3.org/2000/svg" @click="scrollNext">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M11.0845 1L20.9227 11.4308L20.8709 12.8033L10.4113 1.71369L11.0845 1Z"
										fill="#F7F7F7"></path>
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M0.961426 11.6088L19.046 11.6088V12.5554L0.961426 12.5554L0.961426 11.6088Z"
										fill="#F7F7F7"></path>
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M20.8709 12.8033L11.0845 23.1792L10.4631 22.5204L20.9227 11.4308L20.8709 12.8033Z"
										fill="#F7F7F7"></path>
									<path
										d="M20.9227 11.4308L11.0845 1L10.4113 1.71369L20.8709 12.8033M20.9227 11.4308L20.8709 12.8033M20.9227 11.4308L10.4631 22.5204L11.0845 23.1792L20.8709 12.8033M19.046 11.6088L0.961426 11.6088L0.961426 12.5554L19.046 12.5554V11.6088Z"
										stroke="#F7F7F7" stroke-width="1.10896"></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>