$(document).ready(function() {
    // Test if modal function is available
    if ($.fn.modal) {
        console.log("Bootstrap modal is available.");
    } else {
        console.log("Bootstrap modal is NOT available.");
    }
    
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
