window.Animate = {
  init(selector) {
    this.elem = $(selector);

    return this;
  },
  slideUp(size) {
    this.elem.animate({
      marginBottom: "+="+size,
      duration: 400,
      easing: "easein"
    });
  },
  slideDown(size) {
    this.elem.animate({
      marginBottom: "-="+size,
      duration: 400,
      easing: "easein"
    });
  }
}