const objObservers = {
	mainSliderVideos: {
		elements: function () {
			let allMainSlidesVideos = document.querySelectorAll(
				".swiper-main .swiper-wrapper .swiper-slide video"
			);
			return allMainSlidesVideos;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;
				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					target.load();

					source.forEach((sourceEl) => {
						let src = sourceEl.getAttribute("data-src");
						if (sourceEl.hasAttribute("src")) {
							sourceEl.removeAttribute("src");
						}
						sourceEl.setAttribute("src", src);
						target.setAttribute("autoplay", "autoplay");
					});
					source.forEach((sourceEl) => {
						setTimeout(() => {
							sourceEl.removeAttribute("src");
							target.removeAttribute("autoplay");
						}, 5000);
					});

					// this.observerInit(source)
				}
			});
		},
		options: {
			root: document.querySelector(".swiper-main"),
			rootMargin: "0px 400px 0px 0px",
			threshold: 0.5,
		},
		observerInit(a) {
			let init = new IntersectionObserver(this.callback, this.options);
			if (a) {
				init.unobserve(a);
			}
			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((video) => {
				this.observerInit().observe(video);
			});
		},
	},
	images: {
		elementsAllImages: function () {
			let allImages = document.querySelectorAll("picture");
			return allImages;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;

				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					source.forEach((image) => {
						let datasrc = image.getAttribute("data-src");
						image.setAttribute("srcset", datasrc);
					});
					target.querySelector("img").classList.remove("placeholder");
				}
			});
		},
		options: {
			rootMargin: "0px 0px 75px 0px",
			threshold: 1,
		},
		observerInit(a) {
			let init = new IntersectionObserver(this.callback, this.options);
			if (a) {
				init.unobserve(a)
			}
			return init;
		},
		observerItems: function () {
			let itemsImages = this.elementsAllImages();
			itemsImages.forEach((image) => {
				this.observerInit().observe(image);
			});
		},
	},
	sections: {
		elements: function () {
			let allSections = document.querySelectorAll(".section");
			return allSections;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;

				if (isIntersecting) {
					target.classList.add("view");
				}
			});
		},
		options: {
			rootMargin: "0px 0px 75px 0px",
			threshold: 0.5,
		},
		observerInit(a) {
			let init = new IntersectionObserver(this.callback, this.options);
			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((section) => {
				this.observerInit().observe(section);
			});
		},
	},
	videos: {
		elementsAllVideos: function () {
			let allVideos = document.querySelectorAll("video");
			return allVideos;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;

				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					target.load();
					source.forEach((video) => {
						let datasrc = video.getAttribute("data-src");
						video.setAttribute("src", datasrc);
					});
					target.classList.remove("placeholder");
				}
			});
		},
		options: {
			rootMargin: "0px 0px 75px 0px",
			threshold: 0.8,
		},
		observerInit(a) {
			let init = new IntersectionObserver(this.callback, this.options);
			return init;
		},
		observerItems: function () {
			let itemsVideos = this.elementsAllVideos();
			itemsVideos.forEach((video) => {
				this.observerInit().observe(video);
			});
		},
	},
	aboutSliderVideos: {
		elements: function () {
			let allMainSlidesVideos = document.querySelectorAll(
				".swiper-about .swiper-wrapper .swiper-slide video"
			);
			return allMainSlidesVideos;
		},
		callback: function (entries) {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;
				if (isIntersecting) {
					let source = target.querySelectorAll("source");
					target.load();

					source.forEach((sourceEl) => {
						let src = sourceEl.getAttribute("data-src");
						if (sourceEl.hasAttribute("src")) {
							sourceEl.removeAttribute("src");
						}
						sourceEl.setAttribute("src", src);
						target.setAttribute("autoplay", "autoplay");
					});
					source.forEach((sourceEl) => {
						setTimeout(() => {
							sourceEl.removeAttribute("src");
							target.removeAttribute("autoplay");
						}, 5000);
					});
				}
			});
		},
		options: {
			root: document.querySelector(".swiper-about"),
			rootMargin: "0px 0px 0px 0px",
			threshold: 0,
		},
		observerInit(a) {
			let init = new IntersectionObserver(this.callback, this.options);
			return init;
		},
		observerItems: function () {
			let items = this.elements();
			items.forEach((video) => {
				this.observerInit().observe(video);
			});
		},
	},
};

const {
	mainSliderVideos,
	// sections,
	// aboutSliderVideos,
	images,
	videos
} = objObservers;

export function observe() {
	mainSliderVideos.observerItems();
	// sections.observerItems();
	// aboutSliderVideos.observerItems();
	images.observerItems();
	videos.observerItems();
}


export default observe;
