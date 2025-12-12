// =========================== galeri.js ==============================================

const cards = [...document.querySelectorAll(".card")];

class Galeri {
  constructor(element) {
    this.element = element;
    this.image = element.querySelector("img");
    this.caption = element.querySelector("p");

    // Simpan teks asli dan di swmbunyikan terlebih dahulu
    this.originalText = this.caption.textContent;
    this.caption.textContent = ""; // di sembunyikan awal

    this.isVisible = false;

    // Event click dan hover
    this.image.addEventListener("click", () => this.toggleNama());

    this.element.addEventListener("mouseenter", () =>
      this.element.classList.add("hover")
    );

    this.element.addEventListener("mouseleave", () =>
      this.element.classList.remove("hover")
    );
  }

  toggleNama() {
    const { alt } = this.image; // Destructuring alt

    this.caption.textContent = this.isVisible ? "" : `📌 Nama Produk: ${alt}`;
    this.isVisible = !this.isVisible;
  }
}

cards.forEach(card => new Galeri(card));
