
fetch("assets/data.json")
  .then(response => response.json())
  .then(data => {
    // Hero
    const hero = document.getElementById("hero");
    hero.innerHTML = `
      <h1>${data.hero.quote}</h1>
      <p><em>— ${data.hero.author}</em></p>
      <p>${data.hero.lead}</p>
      <button onclick="document.getElementById('tematy').scrollIntoView({ behavior: 'smooth' });">${data.hero.cta}</button>
    `;

    // Test Info
    const testInfo = document.getElementById("testInfo");
    testInfo.innerHTML = `
      <h2>${data.testInfo.heading}</h2>
      <p>${data.testInfo.body.replace(/\n/g, "<br>")}</p>
    `;

    // Tematy
    const tematy = document.getElementById("tematy");
    tematy.innerHTML = "<h2>Tematy konsultacji testowych</h2>";
    data.tematy.forEach(t => {
      tematy.innerHTML += `
        <div>
          <h3>${t.title}</h3>
          <p>${t.desc.replace(/\n/g, "<br>")}</p>
          <button>${t.cta}</button>
        </div>
        <hr>
      `;
    });

    // FAQ
    const faq = document.getElementById("faq");
    faq.innerHTML = "<h2>FAQ</h2>";
    data.faq.forEach(f => {
      faq.innerHTML += `
        <details>
          <summary>${f.q}</summary>
          <p>${f.a}</p>
        </details>
      `;
    });
  });
