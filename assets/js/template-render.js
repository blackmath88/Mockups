(function () {
  const data = window.ATLASFLOW_DATA;
  if (!data) return;

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value) node.textContent = value;
  };

  setText('[data-product-name]', data.product.name);
  setText('[data-product-category]', data.product.category);
  setText('[data-product-strapline]', data.product.strapline);
  setText('[data-product-mission]', data.product.mission);

  document.querySelectorAll('[data-cta]').forEach((node) => {
    node.textContent = data.product.ctaLabel;
    node.setAttribute('href', data.product.ctaHref);
  });

  const renderList = (selector, items) => {
    const list = document.querySelector(selector);
    if (!list || !Array.isArray(items)) return;
    list.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
  };

  renderList('[data-exec-bullets]', data.executiveSummary.bullets);
  renderList('[data-problem-points]', data.problem.points);

  setText('[data-problem-text]', data.problem.text);
  setText('[data-insight-text]', data.insight.text);

  const architecture = document.querySelector('[data-architecture]');
  if (architecture) {
    architecture.innerHTML = data.architecture.blocks
      .map(
        (block) => `
        <article class="architecture-block">
          <h3>${block.name}</h3>
          <p>${block.detail}</p>
        </article>
      `
      )
      .join('');
  }

  const metrics = document.querySelector('[data-metrics]');
  if (metrics) {
    metrics.innerHTML = data.proof.metrics
      .map(
        (metric) => `
        <article class="metric-card">
          <p class="metric-value">${metric.value}</p>
          <p class="metric-label">${metric.label}</p>
        </article>
      `
      )
      .join('');
  }

  setText('[data-testimonial-quote]', `“${data.proof.testimonial.quote}”`);
  setText('[data-testimonial-person]', data.proof.testimonial.person);
  setText('[data-testimonial-role]', data.proof.testimonial.role);
})();
