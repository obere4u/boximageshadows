function imageshadow(option) {
  let images = document.querySelectorAll(".imageshadow")

  if (option.shadow_type === "hard") {
    option.shadow_type = '0px';
  } else {
    option.shadow_type = '12px';
  }

  images.forEach(image => {
    image.style.boxShadow = `10px 10px ${option.shadow_type} 1px rgba(0, 0, 0, 0.2)`;

    if (option.padding) {
      image.style.padding = '1em'
    }
  })
}

module.export.imageshadow = imageshadow;