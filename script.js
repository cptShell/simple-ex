const gallery = document.querySelector('.gallery');

const fillGallery = () => {
  const count = Math.ceil(Math.random() * 120) + 1;
  console.log(count);
  const pictures = new Array(count).fill(null).map(() => {
    const picture = document.createElement('div');
    picture.classList.add('picture');

    return picture;
  });

  gallery.replaceChildren(...pictures);
}

fillGallery();
