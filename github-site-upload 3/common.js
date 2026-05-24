/* ═══════════════════════════════════════════════
   common.js — Forbach & Partners
   Termin-Modal + Floating Widget für alle Seiten
   ═══════════════════════════════════════════════ */

/* ── TERMIN-MODAL ── */
(function(){
  const modalHTML = `
<div id="terminModal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:1rem;">
  <div style="background:#111;border:1px solid rgba(228,177,94,0.4);border-radius:20px;max-width:520px;width:100%;padding:2.5rem;position:relative;max-height:90vh;overflow-y:auto;">
    <button onclick="closeTerminModal()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:#a0a0a0;font-size:1.5rem;cursor:pointer;line-height:1;">✕</button>
    <div style="font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:#e4b15e;letter-spacing:4px;text-transform:uppercase;margin-bottom:0.75rem;">Kostenloses Erstgespräch</div>
    <h3 style="font-family:'Oswald',sans-serif;font-size:2rem;letter-spacing:1px;margin-bottom:0.5rem;color:#fff;">TERMIN<br><span style="background:linear-gradient(135deg,#e4b15e,#f8dfa5);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">VEREINBAREN</span></h3>
    <p style="font-size:0.82rem;color:#a0a0a0;margin-bottom:1.75rem;line-height:1.6;">In 20 Minuten sehen Sie ob und wie wir Ihre Anlage überwachen können. Wählen Sie Ihr bevorzugtes Meeting-Format:</p>

    <form id="terminForm" onsubmit="submitTermin(event)">
      <input type="hidden" name="access_key" value="IHRE_WEB3FORMS_ACCESS_KEY_HIER">
      <input type="hidden" name="subject" value="Neuer Terminwunsch — Forbach & Partners">
      <input type="hidden" name="from_name" value="Forbach & Partners Website">
      <input type="hidden" name="redirect" value="false">

      <!-- Plattform-Auswahl -->
      <div style="margin-bottom:1.25rem;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;margin-bottom:0.75rem;">Meeting-Plattform</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <label class="plat-btn" for="plat-teams">
            <input type="radio" id="plat-teams" name="platform" value="Microsoft Teams" style="display:none;">
            <span>🟦 Microsoft Teams</span>
          </label>
          <label class="plat-btn" for="plat-meet">
            <input type="radio" id="plat-meet" name="platform" value="Google Meet" style="display:none;">
            <span>🟩 Google Meet</span>
          </label>
          <label class="plat-btn" for="plat-zoom">
            <input type="radio" id="plat-zoom" name="platform" value="Zoom" style="display:none;">
            <span>🟦 Zoom</span>
          </label>
          <label class="plat-btn" for="plat-facetime">
            <input type="radio" id="plat-facetime" name="platform" value="FaceTime" style="display:none;">
            <span>🍏 FaceTime</span>
          </label>
          <label class="plat-btn" for="plat-phone" style="grid-column:1/-1;">
            <input type="radio" id="plat-phone" name="platform" value="Telefon" style="display:none;">
            <span>📞 Lieber per Telefon</span>
          </label>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Ihr Name *</label>
          <input type="text" name="name" required placeholder="Max Mustermann" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Unternehmen *</label>
          <input type="text" name="company" required placeholder="Musterfirma GmbH" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">E-Mail *</label>
          <input type="email" name="email" required placeholder="m.mustermann@firma.de" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Telefon</label>
          <input type="tel" name="phone" placeholder="+49 …" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:1.25rem;">
        <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Kurze Nachricht (optional)</label>
        <textarea name="message" rows="3" placeholder="Anzahl Maschinen, Maschinentyp, aktuelle Herausforderung…" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;resize:vertical;"></textarea>
      </div>
      <button type="submit" id="terminSubmitBtn" style="width:100%;background:linear-gradient(135deg,#e4b15e,#f8dfa5,#e4b15e);color:#000;border:none;padding:0.9rem;border-radius:8px;font-weight:700;font-size:0.875rem;cursor:pointer;letter-spacing:0.5px;">TERMIN ANFRAGEN →</button>
      <div id="terminSuccess" style="display:none;background:rgba(0,255,136,0.08);border:1px solid rgba(0,255,136,0.3);border-radius:8px;padding:1rem;text-align:center;color:#00ff88;font-family:'JetBrains Mono',monospace;font-size:0.75rem;letter-spacing:1px;margin-top:1rem;">✓ ANFRAGE ERHALTEN — Sascha Forbach meldet sich persönlich innerhalb von 24 Stunden.</div>
      <div id="terminError" style="display:none;background:rgba(255,56,96,0.08);border:1px solid rgba(255,56,96,0.3);border-radius:8px;padding:0.75rem;text-align:center;color:#ff3860;font-size:0.78rem;margin-top:0.75rem;">Fehler beim Senden — bitte direkt an info@forbachandpartners.com schreiben.</div>
    </form>
  </div>
</div>

<style>
.plat-btn{display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.6rem 0.75rem;font-size:0.8rem;color:#a0a0a0;cursor:pointer;transition:all 0.2s;text-align:center;}
.plat-btn:hover{border-color:rgba(228,177,94,0.5);color:#fff;}
.plat-btn.selected{background:rgba(228,177,94,0.12);border-color:rgba(228,177,94,0.6);color:#e4b15e;}
</style>`;

  // Modal ins DOM einfügen
  document.addEventListener('DOMContentLoaded', function(){
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Plattform-Radio Styling
    document.querySelectorAll('.plat-btn').forEach(function(lbl){
      lbl.addEventListener('click', function(){
        document.querySelectorAll('.plat-btn').forEach(function(l){ l.classList.remove('selected'); });
        lbl.classList.add('selected');
      });
    });

    // Klick außerhalb schließt Modal
    document.getElementById('terminModal').addEventListener('click', function(e){
      if(e.target === this) closeTerminModal();
    });

    // Alle "Termin anfragen" / "Termin vereinbaren" Buttons verknüpfen
    document.querySelectorAll('[data-termin],[id="navCta"],.nav-cta').forEach(function(el){
      if(el.href && el.href.indexOf('mailto') !== -1){
        el.addEventListener('click', function(e){
          e.preventDefault();
          openTerminModal();
        });
      }
    });
  });
})();

function openTerminModal(){
  var m = document.getElementById('terminModal');
  if(m){ m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeTerminModal(){
  var m = document.getElementById('terminModal');
  if(m){ m.style.display = 'none'; document.body.style.overflow = ''; }
}
async function submitTermin(e){
  e.preventDefault();
  var btn = document.getElementById('terminSubmitBtn');
  btn.disabled = true; btn.textContent = 'WIRD GESENDET…';
  try {
    var res = await fetch('https://api.web3forms.com/submit', { method:'POST', body: new FormData(e.target) });
    var json = await res.json();
    if(json.success){
      document.getElementById('terminSuccess').style.display = 'block';
      btn.style.display = 'none';
    } else { throw new Error(); }
  } catch(err){
    btn.disabled = false; btn.textContent = 'TERMIN ANFRAGEN →';
    document.getElementById('terminError').style.display = 'block';
  }
}

/* ── FLOATING CONTACT WIDGET ── */
document.addEventListener('DOMContentLoaded', function(){
  var widget = document.createElement('div');
  widget.id = 'floatContact';
  widget.innerHTML = `
    <a href="tel:004921190989962" title="Jetzt anrufen" style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;background:#141414;border:1px solid rgba(228,177,94,0.25);border-radius:10px;color:#e4b15e;text-decoration:none;font-size:1.1rem;transition:all 0.2s;margin-bottom:8px;">📞</a>
    <a href="mailto:info@forbachandpartners.com" title="E-Mail senden" style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;background:#141414;border:1px solid rgba(228,177,94,0.25);border-radius:10px;color:#e4b15e;text-decoration:none;font-size:1.1rem;transition:all 0.2s;">✉️</a>
  `;
  widget.style.cssText = 'position:fixed;right:16px;bottom:80px;z-index:1000;display:flex;flex-direction:column;align-items:center;';
  document.body.appendChild(widget);

  // Hover-Effekt
  widget.querySelectorAll('a').forEach(function(a){
    a.addEventListener('mouseenter', function(){ this.style.borderColor='rgba(228,177,94,0.7)'; this.style.background='rgba(228,177,94,0.1)'; this.style.transform='scale(1.08)'; });
    a.addEventListener('mouseleave', function(){ this.style.borderColor='rgba(228,177,94,0.25)'; this.style.background='#141414'; this.style.transform=''; });
  });
});

/* ── NAV CTA → Modal verdrahten (alle Seiten) ── */
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.nav-cta').forEach(function(el){
    if(el.tagName === 'A' && el.href && el.href.indexOf('mailto') !== -1){
      el.addEventListener('click', function(e){
        e.preventDefault();
        openTerminModal();
      });
    }
  });
});

/* ═══════════════════════════════════════════════
   SPRACH-TOGGLE — universell für alle Seiten
   Nutzt body.lang-en + .de/.en CSS-Klassen
   ═══════════════════════════════════════════════ */
function setLang(l) {
  var isEN = (l === 'en');
  document.body.classList.toggle('lang-en', isEN);

  // DE-Buttons
  document.querySelectorAll('#btnDe,.btn-de').forEach(function(b){ b.classList.toggle('active', !isEN); });
  // EN-Buttons
  document.querySelectorAll('#btnEn,.btn-en').forEach(function(b){ b.classList.toggle('active', isEN); });

  // index.html kompatibel: langBtn Text
  var lb = document.getElementById('langBtn');
  if(lb) lb.textContent = isEN ? 'DE' : 'EN';

  // Sprache merken
  try { localStorage.setItem('fp_lang', l); } catch(e){}
}

// Sprache beim Laden wiederherstellen
document.addEventListener('DOMContentLoaded', function(){
  try {
    var saved = localStorage.getItem('fp_lang');
    if(saved === 'en') setLang('en');
  } catch(e){}

  // Lang-CSS injizieren falls noch nicht vorhanden
  if(!document.querySelector('#langStyle')){
    var s = document.createElement('style');
    s.id = 'langStyle';
    s.textContent = '.de{display:block;}.en{display:none;}' +
      'span.de{display:inline;}span.en{display:none;}' +
      'body.lang-en .de{display:none!important;}' +
      'body.lang-en .en{display:block!important;}' +
      'body.lang-en span.en{display:inline!important;}' +
      'body.lang-en span.de{display:none!important;}' +
      '.lang-toggle-nav{display:flex;gap:3px;align-items:center;}' +
      '.lang-btn-nav{background:none;border:1px solid rgba(228,177,94,0.25);color:#a0a0a0;font-family:"JetBrains Mono",monospace;font-size:0.62rem;padding:3px 8px;border-radius:4px;cursor:pointer;transition:all 0.2s;letter-spacing:1px;}' +
      '.lang-btn-nav:hover{color:#e4b15e;border-color:rgba(228,177,94,0.5);}' +
      '.lang-btn-nav.active{color:#000;background:#e4b15e;border-color:#e4b15e;}';
    document.head.appendChild(s);
  }
});
