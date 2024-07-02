document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new PhotoSwipeLightbox({
        // may select multiple "galleries"
        gallery: 'article',

        // Elements within gallery (slides)
        children: 'a',
        showHideAnimationType: 'zoom',
        preloaderDelay: 100,
        pswpModule: PhotoSwipe,
        secondaryZoomLevel: "fit"
    });
    lightbox.init();
});
