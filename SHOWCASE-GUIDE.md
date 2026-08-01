# Инструкция: карточка-витрина шаблонов с живыми превью

Как воспроизвести секцию «Šablony pro kavárnu» — одну карточку с табами
«Šablona 1…5», внутри которой живое, само-скроллящееся превью выбранного
сайта-шаблона. Эталонная реализация: корневой `index.html` этого репозитория
(ветка `hub-showcase-card`), секция `#sablony` + скрипт «Vitrína šablon».

## Идея

- Одна широкая карточка. Сверху ряд pill-кнопок (табов), ниже — превью
  (уменьшенный настоящий сайт в iframe) и справа инфо-панель: имя стиля,
  пара шрифтов, описание, палитра 4 цветов, ссылка «Otevřít →».
- Превью — **живой iframe** страницы шаблона (не скриншот): рендерится в
  десктопной ширине 1280×800 и вписывается в рамку через `transform:scale`.
- Превью **само медленно скроллится вниз** (80 px/с), внизу пауза 2.5с,
  возврат наверх, пауза 1.5с, по кругу. Скроллится настоящее окно iframe,
  поэтому срабатывают собственные scroll-анимации шаблонов (GSAP и т.п.).
- Наведение мыши на превью ставит автоскролл на паузу; колёсико в этот
  момент скроллит сайт внутри превью (плавно, с инерцией), а страница-хаб
  стоит на месте.
- Клик по превью или по «Otevřít» открывает шаблон. Повторный клик по уже
  активному табу плавно возвращает превью в начало страницы.
- Ленивая загрузка: шаблон грузится при **первом** выборе таба (посетитель
  один раз видит загрузку), дальше пять iframe живут стопкой и переключение
  лишь меняет видимость — мгновенно, с сохранением позиции скролла каждого.
- Стрелки ←/→ на табах переключают шаблоны с клавиатуры.
- `prefers-reduced-motion: reduce` отключает автоскролл и сглаживание
  (мгновенный скролл), причём реагирует на смену настройки на лету.

## HTML

```html
<div class="showcase">
  <p class="showcase-cat">Šablony pro kavárnu</p>

  <div class="tabs" role="tablist" aria-label="Výběr šablony" id="tplTabs">
    <button type="button" role="tab" data-i="0" aria-selected="true">Šablona 1</button>
    <button type="button" role="tab" data-i="1" aria-selected="false">Šablona 2</button>
    <button type="button" role="tab" data-i="2" aria-selected="false">Šablona 3</button>
    <button type="button" role="tab" data-i="3" aria-selected="false">Šablona 4</button>
    <button type="button" role="tab" data-i="4" aria-selected="false">Šablona 5</button>
  </div>

  <div class="showcase-body">
    <div class="preview" id="tplPreview">
      <!-- iframes náhledů vkládá skript (lazy, při prvním zvolení tabu) -->
      <a class="preview-link" id="tplPreviewLink" href="site/index.html" aria-label="Otevřít šablonu"></a>
    </div>
    <aside class="showcase-info">
      <h3 id="tplName">Warm Paper</h3>
      <p class="pair" id="tplPair"></p>
      <p class="desc" id="tplDesc"></p>
      <div class="swatches" id="tplSwatches"></div>
      <a class="open" id="tplOpen" href="site/index.html">Otevřít →</a>
    </aside>
  </div>
</div>
```

Важно: в ссылках указывать файл явно (`site/index.html`, а не `site/`) —
иначе при открытии хаба через `file://` браузер покажет листинг папки.

## CSS

Цветовые переменные (`--card`, `--line`, `--ink`, `--accent`…) — из темы
хаба; заменить на свои.

```css
.showcase{
  background:var(--card);border:1px solid var(--line);border-radius:16px;
  padding:26px;transition:background-color .3s,border-color .3s;
}
.showcase-cat{font-family:'Fraunces',serif;font-size:1.35rem;font-weight:600;margin-bottom:18px}
.tabs{
  display:flex;gap:10px;margin-bottom:22px;
  overflow-x:auto;padding-bottom:6px;   /* на мобиле ряд табов скроллится */
  -webkit-overflow-scrolling:touch;
}
.tabs button{
  flex:none;padding:9px 18px;border:1px solid var(--line);border-radius:99px;
  background:transparent;color:var(--ink);font:inherit;font-size:.85rem;font-weight:500;
  cursor:pointer;transition:border-color .2s,background .2s,color .2s;white-space:nowrap;
}
.tabs button:hover{border-color:var(--line-strong)}
.tabs button[aria-selected="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.showcase-body{display:grid;gap:24px;grid-template-columns:1fr}
@media(min-width:820px){.showcase-body{grid-template-columns:1fr 240px;align-items:start}}
.preview{
  position:relative;aspect-ratio:16/10;overflow:hidden;
  border:1px solid var(--line);border-radius:12px;background:var(--line);
}
/* Пять iframe стопкой; видим только активный. Ширина 1296 = 1280 видимых
   + 16px на вертикальный скроллбар, который срезает маска рамки. */
.preview iframe{
  position:absolute;top:0;left:0;
  width:1296px;height:800px;border:0;display:block;
  transform-origin:0 0;pointer-events:none;
}
.preview-link{position:absolute;inset:0;border-radius:12px;transition:box-shadow .2s}
.preview-link:hover{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 100%,transparent)}
.showcase-info h3{font-size:1.55rem;margin-bottom:6px}
.showcase-info .pair{font-size:.82rem;color:var(--muted);margin-bottom:12px}
.showcase-info .desc{font-size:.88rem;color:var(--muted);margin-bottom:18px}
.swatches{display:flex;gap:8px}
.sw{width:30px;height:30px;border-radius:8px;border:1px solid var(--sw-ring)}
.open{display:inline-block;margin-top:18px;font-size:.85rem;font-weight:600;color:var(--ink);
  border-bottom:1px solid var(--line);padding-bottom:2px;text-decoration:none;transition:border-color .2s}
.open:hover{border-color:var(--ink)}
```

## JS

Полный рабочий скрипт (вставить перед `</body>`; данные в `TEMPLATES`
заменить на свои — порядок = порядок табов):

```js
const TEMPLATES = [
  { href:'site/index.html', name:'Warm Paper', pair:'Playfair Display + Inter',
    desc:'…', colors:['#F6F1E7','#33523E','#22382B','#C8742C'] },
  // … остальные шаблоны: href, name, pair, desc, colors[4]
];

const tplTabs = Array.from(document.querySelectorAll('#tplTabs [role="tab"]'));
const tplPreview = document.getElementById('tplPreview');

/* Пять iframe стопкой; src ставится при первом выборе таба (лениво). */
let activeIdx = 0;
const tplFrames = TEMPLATES.map((t, i) => {
  const f = document.createElement('iframe');
  f.title = 'Náhled šablony: ' + t.name;
  if (i !== 0) f.style.visibility = 'hidden';
  f.addEventListener('load', () => { if (i === activeIdx) startAutoScroll(); });
  tplPreview.insertBefore(f, document.getElementById('tplPreviewLink'));
  return f;
});

/* iframe рендерится в 1280×800 и вписывается в рамку масштабом */
function fitPreview() {
  const s = 'scale(' + tplPreview.clientWidth / 1280 + ')';
  tplFrames.forEach(f => { f.style.transform = s; });
}

function selectTemplate(i) {
  const t = TEMPLATES[i];
  tplTabs.forEach((tab, j) => tab.setAttribute('aria-selected', j === i ? 'true' : 'false'));
  activeIdx = i;
  tplFrames.forEach((f, j) => { f.style.visibility = j === i ? '' : 'hidden'; });
  if (!tplFrames[i].getAttribute('src')) tplFrames[i].src = t.href;   // первый выбор = единственная загрузка
  startAutoScroll();
  document.getElementById('tplName').textContent = t.name;
  document.getElementById('tplPair').textContent = t.pair;
  document.getElementById('tplDesc').textContent = t.desc;
  document.getElementById('tplSwatches').innerHTML =
    t.colors.map(c => '<span class="sw" style="background:' + c + '"></span>').join('');
  document.getElementById('tplOpen').href = t.href;
  document.getElementById('tplPreviewLink').href = t.href;
  fitPreview();
}

/* Повторный клик на активный таб — плавный возврат превью наверх */
function scrollPreviewTop() {
  const w = tplFrames[activeIdx].contentWindow;
  if (!w) return;
  if (reducedMotion.matches) { scrollPos = 0; w.scrollTo({ top: 0, behavior: 'instant' }); return; }
  scrollPos = w.scrollY;
  returnToTop = true;   // дојезд делает анимационный цикл, автоскролл подхватит сразу
  waitUntil = 0;        // сбросить и паузу внизу/наверху — иначе наверху молча ждал бы
}
tplTabs.forEach(tab => tab.addEventListener('click', () => {
  const i = +tab.dataset.i;
  if (i === activeIdx) scrollPreviewTop(); else selectTemplate(i);
}));
document.getElementById('tplTabs').addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  const cur = tplTabs.findIndex(t => t.getAttribute('aria-selected') === 'true');
  const next = (cur + (e.key === 'ArrowRight' ? 1 : -1) + TEMPLATES.length) % TEMPLATES.length;
  selectTemplate(next);
  tplTabs[next].focus();
});
window.addEventListener('resize', fitPreview);

/* Автоскролл: 80 px/с вниз, внизу пауза 2.5с, возврат, наверху 1.5с.
   Скроллится настоящее окно iframe → работают scroll-анимации шаблонов. */
const reducedMotion = matchMedia('(prefers-reduced-motion:reduce)');
let scrollRafId = null;
let scrollPos = 0;       // свой float — scrollTo округляет; общий для автоскролла и колёсика
let manualTarget = null; // цель ручного скролла колёсиком; scrollPos мягко дотягивается
let returnToTop = false; // мягкий дојезд наверх после повторного клика на активный таб
let waitUntil = 0;       // пауза автоскролла внизу/наверху (timestamp)
function startAutoScroll() {
  cancelAnimationFrame(scrollRafId);
  const cw = tplFrames[activeIdx].contentWindow;
  scrollPos = (cw && cw.scrollY) || 0;
  manualTarget = null;
  returnToTop = false;
  waitUntil = 0;
  if (reducedMotion.matches) return;
  let lastT = 0;
  function step(t) {
    scrollRafId = requestAnimationFrame(step);
    if (!lastT) { lastT = t; return; }
    const dt = (t - lastT) / 1000; lastT = t;
    const w = tplFrames[activeIdx].contentWindow;
    if (!w || !w.document.documentElement) return;
    if (pausedByHover) {
      /* ручной режим: позиция мягко дотягивается к цели колёсика */
      if (manualTarget !== null && Math.abs(manualTarget - scrollPos) > .5) {
        scrollPos += (manualTarget - scrollPos) * .15;
        w.scrollTo({ top: scrollPos, behavior: 'instant' });
      }
      return;
    }
    if (returnToTop) {
      scrollPos *= .88;   // мягкий откат наверх; автоскролл продолжит следующим кадром
      if (scrollPos < 1) { scrollPos = 0; returnToTop = false; waitUntil = 0; }
      w.scrollTo({ top: scrollPos, behavior: 'instant' });
      return;
    }
    if (t < waitUntil) return;
    const max = w.document.documentElement.scrollHeight - w.innerHeight;
    /* behavior:'instant' перебивает scroll-behavior:smooth шаблонов — иначе каждый
       кадр запускал бы новую плавную анимацию и превью бы заикалось */
    if (scrollPos >= max) { scrollPos = 0; waitUntil = t + 1500; w.scrollTo({ top: 0, behavior: 'instant' }); return; }
    scrollPos = Math.min(scrollPos + 80 * dt, max);
    w.scrollTo({ top: scrollPos, behavior: 'instant' });
    if (scrollPos >= max) waitUntil = t + 2500;   // внизу постоять
  }
  scrollRafId = requestAnimationFrame(step);
}
let pausedByHover = false;
tplPreview.addEventListener('mouseenter', () => { pausedByHover = true; });
tplPreview.addEventListener('mouseleave', () => { pausedByHover = false; manualTarget = null; });
/* колёсико над превью скроллит сам шаблон; хаб стоит (preventDefault) */
tplPreview.addEventListener('wheel', (e) => {
  e.preventDefault();
  const w = tplFrames[activeIdx].contentWindow;
  if (!w || !w.document.documentElement) return;
  const max = w.document.documentElement.scrollHeight - w.innerHeight;
  manualTarget = Math.min(Math.max((manualTarget === null ? scrollPos : manualTarget) + e.deltaY, 0), max);
  if (scrollRafId === null) {
    /* без анимационного цикла (prefers-reduced-motion) прыгаем сразу */
    scrollPos = manualTarget;
    w.scrollTo({ top: scrollPos, behavior: 'instant' });
  }
}, { passive: false });
/* если посетитель переключит «уменьшение анимаций» на лету — реагируем сразу */
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) { cancelAnimationFrame(scrollRafId); scrollRafId = null; }
  else startAutoScroll();
});

selectTemplate(0);
```

## Несколько витрин на одной странице

Скрипт выше написан под одну карточку с `id`. Когда карточек больше одной
(на хабе сейчас «Šablony pro kavárnu» и «Šablony pro bistro»), весь блок
завёрнут в фабрику `initShowcase(rootEl, TEMPLATES)`:

- в разметке `id="tpl…"` заменены на классы `.tpl-tabs`, `.tpl-preview`,
  `.tpl-preview-link`, `.tpl-name`, `.tpl-pair`, `.tpl-desc`,
  `.tpl-swatches`, `.tpl-open`; сама карточка получает `id`
  (`#showcaseCafe`, `#showcaseBistro`) — только чтобы её найти;
- все `document.getElementById(…)` внутри стали
  `rootEl.querySelector('.tpl-…')`;
- состояние (`activeIdx`, `scrollPos`, `manualTarget`, `returnToTop`,
  `waitUntil`, `scrollRafId`, `pausedByHover`, `tplFrames`) живёт в замыкании
  — у каждой карточки свой независимый автоскролл;
- `resize` и `prefers-reduced-motion` слушаются **один раз** на страницу,
  экземпляры складываются в массив `showcases` и получают вызовы `fit()` /
  `motionChanged()`. Иначе на каждую карточку вешался бы свой listener.

Вызов в конце: `initShowcase(document.getElementById('showcaseCafe'), TEMPLATES_CAFE);`
и то же для бистро.

Ленивая загрузка при этом работает как раньше: вторая карточка при открытии
хаба не тянет ничего, пока по её табу не кликнут.

## Грабли, на которые уже наступили (не повторять)

1. **Same-origin обязателен.** Доступ к `contentWindow.scrollTo` и высоте
   документа работает только для шаблонов с того же origin (относительные
   пути в том же репо). Чужие домены так превьюить нельзя.
2. **`behavior:'instant'` во всех scrollTo.** Если у шаблонов в CSS
   `html{scroll-behavior:smooth}`, обычный `scrollTo` запускает плавную
   анимацию; 60 вызовов/с душат друг друга → превью «застревает», а при
   паузе рывком догоняет. `'instant'` перебивает CSS.
3. **Свой float для позиции.** `scrollTop/scrollTo` округляют до целого;
   если каждый кадр прибавлять 1.3px к прочитанному scrollY, округление
   съедает движение. Позицию держать в своей переменной (`scrollPos`).
4. **Скроллбар iframe** нельзя убрать через `scrolling="no"` — это ломает
   и программный скролл. Вместо этого iframe шире на 16px, скроллбар
   срезается маской `.preview{overflow:hidden}`.
5. **Ссылки с явным `index.html`** — иначе `file://` показывает листинг.
6. **Остаточный `waitUntil`**: любое действие, возвращающее превью наверх,
   обязано обнулять таймер паузы, иначе наверху будет «немая» задержка.
7. **Скрытые окна браузера**: `requestAnimationFrame` и нативный smooth
   scroll заморожены в фоновых/невидимых вкладках — при автоматизированной
   проверке (Claude in Chrome и т.п.) автоскролл «не работает», хотя в
   видимом окне всё в порядке. Проверять в видимой вкладке.
8. **`prefers-reduced-motion`** уважать (автоскролл выключен, скролл
   мгновенный) и слушать смену настройки на лету — Windows-пользователи
   часто переключают «Эффекты анимации» при открытой странице.
