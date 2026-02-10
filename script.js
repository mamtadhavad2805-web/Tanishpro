$(document).ready(function () {
  const envelope = $("#envelope");
  const btn_open = $("#open");
  const btn_reset = $("#reset");
  let heartInterval = null;

  btn_open.click(function () {
    envelope.addClass("open").removeClass("close");
    spawnBigHearts();
    startFloatingHearts();
  });

  btn_reset.click(function () {
    envelope.addClass("close").removeClass("open");
    stopFloatingHearts();
    $(".hearts").empty(); // remove big hearts
  });

  /* ===== BIG HEARTS (RECREATE ON OPEN) ===== */
  function spawnBigHearts() {
    const heartsContainer = $(".hearts");
    heartsContainer.empty(); // reset

    heartsContainer.append('<div class="heart a1"></div>');
    heartsContainer.append('<div class="heart a2"></div>');
    heartsContainer.append('<div class="heart a3"></div>');
  }

  /* ===== SMALL FLOATING HEARTS ===== */
  function startFloatingHearts() {
    if (heartInterval) return;

    heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 6000);
    }, 50);
  }

  function stopFloatingHearts() {
    clearInterval(heartInterval);
    heartInterval = null;
  }
});
