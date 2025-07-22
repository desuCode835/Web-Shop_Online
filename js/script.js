(function($) {

  "use strict";

  // Animate Texts
  var initTextFx = function () {
    $('.txt-fx').each(function () {
      var newstr = '';
      var count = 0;
      var delay = 200;
      var stagger = 50;
      var words = this.textContent.split(/\s/);
      var arrWords = new Array();
      
      $.each( words, function( key, value ) {
        newstr = '<span class="word">';

        for ( var i = 0, l = value.length; i < l; i++ ) {
          newstr += "<span class='letter' style='transition-delay:"+ ( delay + stagger * count ) +"ms;'>"+ value[ i ] +"</span>";
          count++;
        }
        newstr += '</span>';

        arrWords.push(newstr);
        count++;
      });

      this.innerHTML = arrWords.join("<span class='letter' style='transition-delay:"+ delay +"ms;'>&nbsp;</span>");
    });
  }

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    // swiper slider home 2
    $('.slideshow').each(function(){
      var space = $(this).attr('data-space') ? $(this).attr('data-space') : 0 ;
      var col = $(this).attr('data-col');
      if ( typeof col == "undefined" || !col) {
        col = 1;
      }

      var swiper = new Swiper(".slideshow", {
        slidesPerView: col,
        spaceBetween: space,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.icon-arrow-right',
          prevEl: '.icon-arrow-left',
        },
        pagination: {
          el: ".slideshow-swiper-pagination",
          clickable: true,
        },
      });
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        },
      }
    });

    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 5,
      spaceBetween: 20,
      // autoplay: true,
      direction: "vertical",
      breakpoints: {
        0: {
          direction: "horizontal"
        },
        992: {
          direction: "vertical"
        },
      },
    });

    var large_slider = new Swiper(".product-large-slider", {
      slidesPerView: 1,
      // autoplay: true,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // input spinner
  var initProductQty = function(){

    $('.product-qty').each(function(){
      
      var $el_product = $(this);
      var quantity = 0;
      
      $el_product.find('.quantity-right-plus').click(function(e){
        e.preventDefault();
        quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
        e.preventDefault();
        quantity = parseInt($el_product.find('#quantity').val());
        if(quantity>0){
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function() {
    initPreloader();
    initTextFx();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);

// Profile gerak ===============================
 var typed = new Typed('#typing-text', {
    strings: ["student,", ""],
    strings: ["student", "accessory weaver"],
    typeSpeed: 40,  
    backSpeed: 80,    
    loop: true      
  });

  // Logo gerak =================================
 const texts = [
  "Selamat datang di EMI STORE - Produk Terbaik Hanya Untuk Anda!",
  "Diskon Besar Minggu Ini! Jangan Lewatkan!",
  "Banyak produk baru sedang diskon, jadi jangan ragu untuk membeli!",
  "Terima Kasih Telah Mengunjungi EMI STORE!"
];

    const marqueeContainer = document.querySelector('.marquee-container');
    const containerWidth = marqueeContainer.offsetWidth;
    const speed = 200; 
    let index = 0;

    function showNextText() {
      // Buat elemen baru
      const newText = document.createElement('div');
      newText.className = 'scroll-text';
      newText.textContent = texts[index];
      marqueeContainer.innerHTML = '';
      marqueeContainer.appendChild(newText);

      // Hitung lebar teks
      const textWidth = newText.offsetWidth;

      // Atur posisi awal
      newText.style.left = `${containerWidth}px`;

      // Hitung durasi animasi
      const duration = (containerWidth + textWidth) / speed;

      // Buat animasi
      newText.style.transition = `transform ${duration}s linear`;
      newText.style.transform = `translateX(-${containerWidth + textWidth}px)`;

      // Setelah selesai animasi, ganti ke teks berikutnya
      index = (index + 1) % texts.length;
      setTimeout(showNextText, duration * 1000);
    }

    showNextText();

// Form pembelian ==============================
  document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // mencegah form submit normal

    // ambil data
    const name = document.getElementById("name1").value;
    const produk = document.getElementById("name2").value;
    const message = document.getElementById("message").value;

    // bikin format pesan WA
    const text = `Halo, saya ${name}, saya ingin memesan%0AKode Produk: ${produk}%0APesan: ${message}`;

    // Ganti dengan nomor WhatsApp kamu (tanpa + dan tanpa spasi)
    const phoneNumber = "+6281775489682";

    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  });

  // Form Request =========================================
  document.getElementById("contactForm1").addEventListener("submit", function(event){
    event.preventDefault(); // mencegah form submit normal

    // ambil data
    const name = document.getElementById("name3").value;
    const produk = document.getElementById("name4").value;
    const message = document.getElementById("message1").value;

    // bikin format pesan WA
    const text = `Nama saya: ${name}%0APanggil saja: ${produk}%0ARequest Pesanan: ${message}`;

    // Ganti dengan nomor WhatsApp kamu (tanpa + dan tanpa spasi)
    const phoneNumber = "+6281775489682";

    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  });


// Untuk menutup menu =================================
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });

  // Untuk Waktu penawaran 5 hari ===============================
    function startCountdown(elementId, days) {
    const countdownElement = document.getElementById(elementId);
    const normalPrice = document.getElementById("normal-price");
    const discountPrice = document.getElementById("discount-price");

    const now = new Date().getTime();
    const deadline = now + days * 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        // Waktu habis -> diskon hilang, harga kembali normal
        discountPrice.style.display = "none";
        normalPrice.classList.remove("text-decoration-line-through");
        countdownElement.innerHTML = "Expired";
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${d}d ${h}h ${m}m ${s}s`;

      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
  }

  startCountdown("countdown1", 5);

   // Untuk Waktu penawaran 3 hari ===============================
    function startCountdown(elementId, days) {
    const countdownElement = document.getElementById(elementId);
    const normalPrice = document.getElementById("normal-price");
    const discountPrice = document.getElementById("discount-price");

    const now = new Date().getTime();
    const deadline = now + days * 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        // Waktu habis -> diskon hilang, harga kembali normal
        discountPrice.style.display = "none";
        normalPrice.classList.remove("text-decoration-line-through");
        countdownElement.innerHTML = "Expired";
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${d}d ${h}h ${m}m ${s}s`;

      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
  }

  startCountdown("countdown2", 3);

  // Untuk Waktu penawaran 6 hari ===============================
  function startCountdown(elementId, days) {
    const countdownElement = document.getElementById(elementId);
    const normalPrice = document.getElementById("normal-price");
    const discountPrice = document.getElementById("discount-price");

    const now = new Date().getTime();
    const deadline = now + days * 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        // Waktu habis -> diskon hilang, harga kembali normal
        discountPrice.style.display = "none";
        normalPrice.classList.remove("text-decoration-line-through");
        countdownElement.innerHTML = "Expired";
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${d}d ${h}h ${m}m ${s}s`;

      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
  }

  startCountdown("countdown3", 6);

// Untuk Waktu penawaran 4 hari ===============================
function startCountdown(elementId, days) {
    const countdownElement = document.getElementById(elementId);
    const normalPrice = document.getElementById("normal-price");
    const discountPrice = document.getElementById("discount-price");

    const now = new Date().getTime();
    const deadline = now + days * 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        // Waktu habis -> diskon hilang, harga kembali normal
        discountPrice.style.display = "none";
        normalPrice.classList.remove("text-decoration-line-through");
        countdownElement.innerHTML = "Expired";
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${d}d ${h}h ${m}m ${s}s`;

      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
  }

  startCountdown("countdown4", 4);

  // Untuk Waktu penawaran 7 hari ===============================
  function startCountdown(elementId, days) {
    const countdownElement = document.getElementById(elementId);
    const normalPrice = document.getElementById("normal-price");
    const discountPrice = document.getElementById("discount-price");

    const now = new Date().getTime();
    const deadline = now + days * 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        // Waktu habis -> diskon hilang, harga kembali normal
        discountPrice.style.display = "none";
        normalPrice.classList.remove("text-decoration-line-through");
        countdownElement.innerHTML = "Expired";
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${d}d ${h}h ${m}m ${s}s`;

      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
  }

  startCountdown("countdown5", 7);

  // Untuk Waktu penawaran 3 hari ===============================
  function startCountdown(elementId, days) {
    const countdownElement = document.getElementById(elementId);
    const normalPrice = document.getElementById("normal-price");
    const discountPrice = document.getElementById("discount-price");

    const now = new Date().getTime();
    const deadline = now + days * 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        // Waktu habis -> diskon hilang, harga kembali normal
        discountPrice.style.display = "none";
        normalPrice.classList.remove("text-decoration-line-through");
        countdownElement.innerHTML = "Expired";
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${d}d ${h}h ${m}m ${s}s`;

      setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
  }

  startCountdown("countdown6", 3);

  // Sounds toko ===============================
   const kasetLogo = document.querySelector('.kaset-logo');
  const audio = document.getElementById('myAudio');

  // Daftar lagu (isi path mp3)
  const playlist = [
    'sounds/sounds-1.mp3',
    'sounds/sounds-2.mp3',
    'sounds/sounds-3.mp3',
    'sounds/sounds-4.mp3'
  ];

  let currentTrack = 0;

  // Set lagu pertama
  audio.src = playlist[currentTrack];

  // Klik logo → play/pause
  kasetLogo.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  // Jika lagu habis → pindah lagu
  audio.addEventListener('ended', () => {
    currentTrack++;
    if (currentTrack >= playlist.length) {
      currentTrack = 0; // Reset ke lagu pertama
    }
    audio.src = playlist[currentTrack];
    audio.play();
  });

  // Untuk menu warna gerak ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 120; // offset header

  let scrolledPast = false; // untuk cek apakah sudah melewati section pertama

  sections.forEach(section => {
    if (
      section.offsetTop <= fromTop &&
      (section.offsetTop + section.offsetHeight) > fromTop
    ) {
      scrolledPast = true; // sudah melewati minimal 1 section

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
          link.classList.add('active');
        }
      });
    }
  });

  // Kalau masih di paling atas, hapus semua highlight
  if (!scrolledPast) {
    navLinks.forEach(link => link.classList.remove('active'));
  }
});

// Load web
  window.onload = () => {
    // Tunggu 3 detik meskipun halaman sudah loaded
    setTimeout(() => {
      const loader = document.getElementById('loader');
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
      }, 500); // menunggu transisi fade-out selesai
    }, 3000); // angka ini jedanya dalam milidetik (3000ms = 3 detik)
  };

  // Kamus translate
  const translations = {
  id: {
    nav_1: "Penawaran",
    nav_2: "Produk",
    nav_3: "Kontak",
    nav_4: "Kain Rajut Lembut",
    nav_5: "Benang Hidup",
    nav_6: "Kerajinan Wol",
    nav_7: "Cerita Benang",
    nav_8: "Cara Melakukan Pembelian",
    nav_9: "Jelajahi fitur Website",
    nav_10: "Telusuri dulu apa yang anda ingin beli, kemudian terdapat kode produk.",
    nav_11: "Kode Produk",
    nav_12: "Setiap produk memiliki kode tersendiri, saat memesan lihat kode produk dan ketikan pada form pembelian.",
    nav_13: "Form Pembelian",
    nav_14: "Form pembelian berwarna kuning, klik tombol CHECKOUT pada produk yang ingin dibeli dan nantinya akan diarahkan ke form pembelian, pastikan isi data pembelian dengan benar, dan klik submit.",
    nav_15: "Diskusi Produk",
    nav_16: "Form akan diarahkan ke whatsApp Penjual, disana melakukan diskusi produk.",
    nav_17: "Pembayaran Produk",
    nav_18: "Setelah melakukan diskusi dan membuat kesepakatan terkait pembayaran produk, bisa menunggu pesanan selesai dibuat.",
    nav_19: "Info Produk",
    nav_20: "Setelah produk selesai dibuat, akan di infokan melalui whatsApp.",
    nav_21: "Penawaran Spesial",
    nav_22: "Penawaran Paket Spesial",
    nav_23: "Kode : Special-01",
    nav_24: "Kode : Special-02",
    nav_25: "Kode : Special-03",
    nav_26: "Kode : Special-04",
    nav_27: "Kode : Special-05",
    nav_28: "Kode : Special-06",
    nav_29: "Gantungan Aksesoris",
    nav_30: "Kode : 01",
    nav_31: "Kode : 02",
    nav_32: "Kode : 03",
    nav_33: "Kode : 04",
    nav_34: "Kode : 05",
    nav_35: "Kode : 06",
    nav_36: "Kode : 07",
    nav_37: "Kode : 08",
    nav_38: "Kode : 09",
    nav_39: "Kode : 10",
    nav_40: "Kode : 11",
    nav_41: "Kode : 12",
    nav_42: "Kode : 13",
    nav_43: "Kode : 14",
    nav_44: "Kode : 15",
    nav_45: "Kode : 16",
    nav_46: "Kode : 17",
    nav_47: "Kode : 18",
    nav_48: "Kode : 19",
    nav_49: "Kode : 20",
    nav_50: "Kode : 21",
    nav_51: "Kode : 22",
    nav_52: "Kode : 23",
    nav_53: "Kode : 24",
    nav_54: "Kode : 25",
    nav_55: "Kode : 26",
    nav_56: "Produk Baru",
    nav_57: "Baru",
    nav_58: "Kode : 25",
    nav_59: "Kode : 23",
    nav_60: "Kode : 24",
    nav_61: "Diskon Hingga 30%",
    nav_62: "Kode : D-01",
    nav_63: "Diskon Hingga 40%",
    nav_64: "Kode : D-02",
    nav_65: "Diskon Hingga 30%",
    nav_66: "Kode : D-03",
    nav_67: "Diskon Hingga 30%",
    nav_68: "Kode : D-04",
    nav_69: "Diskon Hingga 30%",
    nav_70: "Kode : D-05",
    nav_71: "Diskon Hingga 40%",
    nav_72: "Kode : D-06",
    nav_73: "Diskon Hingga 35%",
    nav_74: "Kode : D-07",
    nav_75: "Diskon Hingga 30%",
    nav_76: "Kode : D-08",
    nav_77: "Aksesoris Kepala",
    nav_78: "Kode : K-01",
    nav_79: "Kode : K-02",
    nav_80: "Kode : K-03",
    nav_81: "Kode : K-04",
    nav_82: "Kode : K-05",
    nav_83: "Kode : K-06",
    nav_84: "Kode : K-07",
    nav_85: "Buket Bunga",
    nav_86: "Kode : B-01",
    nav_87: "Kode : B-02",
    nav_88: "Kode : B-03",
    nav_89: "Kode : B-04",
    nav_90: "Kode : B-05",
    nav_91: "Testimoni",
    nav_96: "Dapatkan",
    nav_97: "Diskon",
    nav_98: "setiap hari",
    nav_99: "Dengan membeli setiap produk buatan saya, akan terus mendapatkan diskon dengan harga yang murah,  tunggu apa lagi checkout sekarang!",
    nav_100: "Nama",
    nav_101: "Kode Produk",
    nav_102: "Pesan untuk Penjual",
    nav_103: "Anda bisa melakukan",
    nav_104: "Request Produk",
    nav_105: "sesuai keinginan anda",
    nav_106: "Jika Anda memiliki permintaan khusus untuk produk rajutan atau ingin memesan barang dengan detail khusus, silakan isi formulir di samping ini. Saya akan segera menghubungi Anda untuk mengonfirmasi pesanan Anda!",
    nav_107: "Nama Lengkap",
    nav_108: "Nama Panggilan",
    nav_109: "Request Produk",
    nav_110: "Profil Pencipta",
    nav_111: "Saya mulai belajar merajut sejak duduk di bangku kelas 4 SD. Sempat berhenti selama 5 tahun, saya kembali tertarik pada dunia rajut saat memasuki kelas 10 SMA. Sejak itu, saya belajar secara otodidak — mulai dari mengenal pola, teknik, hingga mempelajari berbagai macam alat dan bahan yang digunakan. Suatu hari, seorang teman menyarankan saya untuk mulai menjual hasil rajutan saya kepadanya. Dari situlah saya memberanikan diri untuk membuka usaha kecil ini.",
    nav_112: "Kontak Saya",
    nav_113: "Lokasi Toko",
    nav_114: "Pengiriman gratis",
    nav_115: "Untuk wilayah Desa Tamblang, Kecamatan Kubutambahan, pengiriman barang diberikan secara gratis.",
    nav_116: "Pembayaran 100% aman.",
    nav_117: "Pembayaran untuk barang Anda aman dan dapat dinegosiasikan.",
    nav_118: "Jaminan kualitas",
    nav_119: "Ada garansi produk jika barang yang diterima rusak dalam waktu 4 hari.",
    nav_120: "Produk berkualitas",
    nav_121: "Produk berkualitas tinggi yang menggunakan bahan-bahan terpilih.",
    nav_122: "Penawaran harian",
    nav_123: "Saya selalu menawarkan penawaran khusus dan produk baru yang mengejutkan.",
    nav_124: "Saran dan Masukan",
    nav_125: "Testimoni Pelanggan",
    nav_126: "Pelayanan sangat cepat dan produk berkualitas. Saya akan order lagi!",
    nav_127: "Produk sesuai harapan, pelayanan ramah dan cepat. Saya puas!",
    nav_128: "Bagus Bangett!, lain kali order lagi, terima kasih!",
    nav_129: "Bagus-bagus banget, next mau order lagi!",
    nav_130: "Respon penjual cepat, produk sesuai, terima kasih!"

  },
  en: {
    nav_1: "Offer",
    nav_2: "Products",
    nav_3: "Contact",
    nav_4: "Soft Knitted Fabric",
    nav_5: "Living Yarn",
    nav_6: "Wool Craft",
    nav_7: "Thread Tales",
    nav_8: "How to Make a Purchase",
    nav_9: "Explore Website Features",
    nav_10: "Browse first what you want to buy, then there is a product cod.",
    nav_11: "Product Code",
    nav_12: "Each product has its own code, when ordering look at the product cod.",
    nav_13: "Purchase Form",
    nav_14: "Purchase form is yellow, click the CHECKOUT button on the product you want.",
    nav_15: "Product Discussion",
    nav_16: "The form will be directed to the seller's WhatsApp, where you can discuss the product.",
    nav_17: "Product Payment",
    nav_18: "After discussing and making an agreement regarding product payment, you can wait for",
    nav_19: "Product Information",
    nav_20: "After the product is finished, it will be informed through WhatsApp.",
    nav_21: "Special Offer",
    nav_22: "Special Package Offer",
    nav_23: "Code : Special-01",
    nav_24: "Code : Special-02",
    nav_25: "Code : Special-03",
    nav_26: "Code : Special-04",
    nav_27: "Code : Special-05",
    nav_28: "Code : Special-06",
    nav_29: "Keychain Accessories",
    nav_30: "Code : 01",
    nav_31: "Code : 02",
    nav_32: "Code : 03",
    nav_33: "Code : 04",
    nav_34: "Code : 05",
    nav_35: "Code : 06",
    nav_36: "Code : 07",
    nav_37: "Code : 08",
    nav_38: "Code : 09",
    nav_39: "Code : 10",
    nav_40: "Code : 11",
    nav_41: "Code : 12",
    nav_42: "Code : 13",
    nav_43: "Code : 14",
    nav_44: "Code : 15",
    nav_45: "Code : 16",
    nav_46: "Code : 17",
    nav_47: "Code : 18",
    nav_48: "Code : 19",
    nav_49: "Code : 20",
    nav_50: "Code : 21",
    nav_51: "Code : 22",
    nav_52: "Code : 23",
    nav_53: "Code : 24",
    nav_54: "Code : 25",
    nav_55: "Code : 26",
    nav_56: "New Products",
    nav_57: "New",
    nav_58: "Code : 25",
    nav_59: "Code : 23",
    nav_60: "Code : 24",
    nav_61: "Up to 30% off",
    nav_62: "Code : D-01",
    nav_63: "Up to 40% off",
    nav_64: "Code : D-02",
    nav_65: "Up to 30% off",
    nav_66: "Code : D-03",
    nav_67: "Up to 30% off",
    nav_68: "Code : D-04",
    nav_69: "Up to 30% off",
    nav_70: "Code : D-05",
    nav_71: "Up to 40% off",
    nav_72: "Code : D-06",
    nav_73: "Up to 35% off",
    nav_74: "Code : D-07",
    nav_75: "Up to 30% off",
    nav_76: "Code : D-08",
    nav_77: "Head Accessories",
    nav_78: "Code : K-01",
    nav_79: "Code : K-02",
    nav_80: "Code : K-03",
    nav_81: "Code : K-04",
    nav_82: "Code : K-05",
    nav_83: "Code : K-06",
    nav_84: "Code : K-07",
    nav_85: "Flower Bouquet",
    nav_86: "Code : B-01",
    nav_87: "Code : B-02",
    nav_88: "Code : B-03",
    nav_89: "Code : B-04",
    nav_90: "Code : B-05",
    nav_91: "Testimony",
    nav_96: "Get",
    nav_97: "Discount",
    nav_98: "Every Day",
    nav_99: "By purchasing any of my handmade products, you will continue to get discounts at affordable prices. What are you waiting for? Checkout now!",
    nav_100: "Name",
    nav_101: "Product Code",
    nav_102: "Message to Seller",
    nav_103: "You can make a",
    nav_104: "Product Request",
    nav_105: "according to your wishes",
    nav_106: "If you have a special request for a knitted product or want to order an item with custom details, please fill out the form beside this text. I will contact you shortly to confirm your order!",
    nav_107: "Full Name",
    nav_108: "Nickname",
    nav_109: "Product Request",
    nav_110: "Creator Profile",
    nav_111: "I started learning to knit when I was in 4th grade of elementary school. I stopped for about 5 years and got interested in knitting again when I entered 10th grade of high school. Since then, I have been self-taught — learning patterns, techniques, and getting to know the various tools and materials used. One day, a friend suggested that I sell my knitted creations to them. From there, I gained the confidence to start this small business.",
    nav_112: "Contact Me",
    nav_113: "Store Location",
    nav_114: "Free Shipping",
    nav_115: "For the Tamblang Village area, Kubutambahan District, shipping is free of charge.",
    nav_116: "100% Secure Payment",
    nav_117: "Your payment is secure and can be negotiated.",
    nav_118: "Quality Guarantee",
    nav_119: "There is a product warranty if the item received is damaged within 4 days.",
    nav_120: "High-Quality Products",
    nav_121: "High-quality products made with carefully selected materials.",
    nav_122: "Daily Offers",
    nav_123: "I always offer special deals and surprise new products.",
    nav_124: "Suggestions and Feedback",
    nav_125: "Customer Testimonials",
    nav_126: "Very fast service and quality products. I will order again!",
    nav_127: "Product matches my expectations, friendly and fast service. I'm satisfied!",
    nav_128: "So good! I’ll definitely order again next time, thank you!",
    nav_129: "Everything’s really good, I’ll order again next time!",
    nav_130: "Seller responds quickly, product as described, thank you!"

  }
};

  // Fungsi ganti bahasa
  function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
  }

  // Event listener
  document.getElementById("lang-id").addEventListener("click", function() {
    changeLanguage("id");
  });

  document.getElementById("lang-en").addEventListener("click", function() {
    changeLanguage("en");
  });
