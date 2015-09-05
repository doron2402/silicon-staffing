Handlebars.registerHelper('ifIsNthItem', function(options) {
    var index = options.data.index,
        nth = options.hash.nth;
    if (options.hash.add === true) {
        index++;
    }
    if (index % nth === 0) {
        return options.fn(this);
    }
});

Handlebars.registerHelper('ifIndexCond', function(v1, options) {
    var index = options.data.index;
    if (v1 === index) {
        return options.fn(this);
    }
    return options.inverse(this);
});
