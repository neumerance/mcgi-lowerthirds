class ControlsAnimation {
  constructor(selector, initialStyles = null) {
    this.elem = $(selector);
    if (initialStyles) { this.elem.css(initialStyles) }

    return this;
  }

  toggleSlideUpDown(size, toggled) {
    if (toggled) {
      this.slideDown(size)
    } else {
      this.slideUp(size)
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

  toggleSlideLeftRight(size, toggled) {
    if (toggled) {
      this.slideLeft(size)
    } else {
      this.slideRight(size)
    }
  }

  slideRight(size) {
    this.elem.animate({
      marginRight: "+="+size,
      duration: 400,
      easing: "easein"
    });
  }

  slideLeft(size) {
    this.elem.animate({
      marginRight: "-="+size,
      duration: 400,
      easing: "easein"
    });
  }
}