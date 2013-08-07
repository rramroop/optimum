var hasWebP = (function() {
    var images = {
        basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
        lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
    };
    
    return function(feature) {
        var deferred = $.Deferred();
        
        $("<img>").on("load", function() {
            if(this.width === 2 && this.height === 1) {
                deferred.resolve();
            } else {
                deferred.reject();
            }
        }).on("error", function() {
            deferred.reject();
        }).attr("src", images[feature || "basic"]);
        
        return deferred.promise();
    }
})();

hasWebP().then(function() {
    $('html').addClass('webp-lossy');
}, function() {
    $('html').addClass('no-webp-lossy');
});

hasWebP("lossless").then(function() {
    $('html').addClass('webp-lossless');
}, function() {
    $('html').addClass('no-webp-lossless');
});