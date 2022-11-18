class ControlsAnimation {
  constructor(selector, initialStyles = null) {
    this.elem = $(selector);
    if (initialStyles) { this.elem.css(initialStyles) }

    return this;
  }

  toggleSlideUpDown(size, toggleStatus) {
    if (toggleStatus === '0') {
      this.slideUp(size)
    } else {
      this.slideDown(size)
    }
  }

  slideUp(size) {
    this.elem.animate({
      marginBottom: "+="+size,
      duration: 400,
      easing: "easein"
    });
  }

  slideDown(size) {
    this.elem.animate({
      marginBottom: "-="+size,
      duration: 400,
      easing: "easein"
    });
  }
}