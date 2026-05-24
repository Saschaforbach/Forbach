// ═══════════════════════════════════════════════════════════════════
// FORBACH & PARTNERS — BLOG ARTIKEL
// ═══════════════════════════════════════════════════════════════════
//
// ✅ SO FÜGEN SIE EINEN NEUEN ARTIKEL HINZU (kein Code-Wissen nötig):
//
//  1. Gehen Sie zu github.com → Ihr Repository → diese Datei "blog-posts.js"
//  2. Klicken Sie auf den Stift ✏️  (Edit this file)
//  3. Kopieren Sie den VORLAGE-BLOCK unten (von  {  bis  },  )
//  4. Fügen Sie ihn GANZ OBEN direkt nach  const POSTS = [  ein
//  5. Füllen Sie Ihre Daten ein — nur die Texte ändern, nichts anderes!
//  6. Klicken Sie "Commit changes" → die Webseite aktualisiert sich in ~1 Minute
//
// ✅ SO BEARBEITEN SIE EINEN BESTEHENDEN ARTIKEL:
//  Suchen Sie den Artikel per id-Nummer und ändern Sie die Texte direkt.
//
// ✅ VERFÜGBARE KATEGORIEN:
//  "Technologie" | "Fallstudie" | "ROI & Wirtschaftlichkeit"
//  "Robotik" | "Industrie 4.0" | "CNC" | "Spritzguss" | "Laser"
//  Oder einfach eine neue Kategorie erfinden — sie erscheint automatisch!
//
// ═══════════════════════════════════════════════════════════════════
//
// ──────────── VORLAGE FÜR NEUEN ARTIKEL (hier kopieren) ────────────
//
//  {
//    id: 99,                              // ← Eindeutige Nummer (immer +1)
//    featured: false,                     // ← true = großes Hauptartikel-Format
//    date: "2026-06-01",                  // ← Datum: YYYY-MM-DD
//    dateFormatted: "1. Juni 2026",       // ← Datum für Anzeige
//    readTime: "5 Min.",                  // ← Geschätzte Lesezeit
//    category: "Technologie",             // ← Kategorie (siehe Liste oben)
//    author: "Sascha Forbach",            // ← Autorenname
//    title: "Ihr Artikeltitel hier",
//    excerpt: "Kurze Zusammenfassung (1-2 Sätze) — erscheint auf der Übersicht.",
//    tags: ["Stichwort1", "Stichwort2", "Stichwort3"],
//    content: `
//      <p class="detail-lead">Einleitungssatz — wird fett/hervorgehoben angezeigt.</p>
//      <h2>Abschnitt 1 Überschrift</h2>
//      <p>Ihr Text hier. Normaler Absatz.</p>
//      <h2>Abschnitt 2</h2>
//      <p>Weiterer Text.</p>
//      <ul>
//        <li>Punkt 1</li>
//        <li>Punkt 2</li>
//      </ul>
//    `
//  },
//
// ───────────────────────────────────────────────────────────────────

const POSTS = [

  // ─────────────────────────────────────────────
  // POST 1 — FEATURED (Neuester / Hauptartikel)
  // ─────────────────────────────────────────────
  {
    id: 1,
    featured: true,
    date: "2026-05-20",
    dateFormatted: "20. Mai 2026",
    readTime: "7 Min.",
    category: "Technologie",
    author: "Sascha Forbach",
    title: "Warum 3-Sigma-Alarme allein nicht ausreichen — und was KI besser macht",
    excerpt: "Die klassische Schwellenwert-Überwachung meldet Alarme erst, wenn es schon fast zu spät ist. Wie Isolation Forest und LSTM-Netzwerke Muster erkennen, die kein Mensch und kein einfacher Schwellenwert sieht.",
    tags: ["Isolation Forest", "LSTM", "3-Sigma", "Anomalieerkennung", "Vibration"],
    content: `
      <p class="detail-lead">
        Die meisten Industriebetriebe überwachen ihre Maschinen heute noch mit starren Schwellenwerten: Sobald die Temperatur über 80 °C steigt oder die Vibration einen bestimmten mm/s-Wert überschreitet, schlägt das System Alarm. Das Problem: Zu diesem Zeitpunkt hat der Schaden meistens schon begonnen.
      </p>

      <h2>Das Problem mit klassischen Grenzwerten</h2>
      <p>
        Starre Schwellenwerte sind blind gegenüber dem <strong>Kontext</strong>. Eine Vibration von 4,2 mm/s bei einer frisch gewarteten Maschine bedeutet etwas völlig anderes als dieselbe Vibration nach 12.000 Betriebsstunden. Der klassische Alarm meldet beides gleich — oder gar nichts, weil der Wert gerade noch unterhalb der Grenze liegt.
      </p>
      <p>
        Die Folge: entweder zu viele Fehlalarme (die Mitarbeiter ignorieren irgendwann) oder zu wenige Warnungen (der Ausfall kommt dann trotzdem).
      </p>

      <h2>Die 3-Sigma-Regel: besser, aber noch nicht gut genug</h2>
      <p>
        Unsere Basisalarmierung setzt auf die <strong>gleitende 3σ-Regel</strong>: Das System lernt kontinuierlich den Normalzustand der Maschine (Mittelwert μ und Standardabweichung σ) und schlägt Alarm, wenn der aktuelle RMS-Wert für mehr als 10 Sekunden über μ + 3σ liegt.
      </p>
      <div class="highlight-box">
        <strong>Alarm-Formel:</strong><br>
        <code>Schwellenwert = μ + 3 × σ</code><br><br>
        Status wechselt von GRÜN → GELB nach der ersten Überschreitung,<br>
        GELB → ROT nach 10 Sekunden anhaltender Überschreitung.
      </div>
      <p>
        Das ist deutlich besser als feste Grenzwerte — aber es erkennt nur <em>Amplitudenanomalien</em>. Veränderungen im Frequenzmuster, im Crest-Faktor oder in der Kurtosis (Stoßhaftigkeit) bleiben unsichtbar.
      </p>

      <h2>Was Isolation Forest anders macht</h2>
      <p>
        Der Isolation Forest arbeitet mit einem <strong>6-dimensionalen Feature-Vektor</strong> pro Zeitfenster:
      </p>
      <ul>
        <li><strong>RMS</strong> — Effektivwert (Gesamtenergie)</li>
        <li><strong>Peak</strong> — Maximalamplitude</li>
        <li><strong>Crest-Faktor</strong> — Peak/RMS (erkennt Impulse)</li>
        <li><strong>Standardabweichung</strong></li>
        <li><strong>Kurtosis</strong> — Stoßhaftigkeit (Lagerschäden!)</li>
        <li><strong>Skewness</strong> — Asymmetrie des Signals</li>
      </ul>
      <p>
        Aus diesen 6 Merkmalen lernt das Modell, was "normal" für genau diese Maschine ist. Datenpunkte, die schwer zu isolieren sind (weil sie wie alle anderen Punkte liegen), sind normal. Punkte, die sich leicht isolieren lassen, sind anomal.
      </p>

      <blockquote>
        "Eine Kurtosis von 8,5 bei 2.000 Betriebsstunden ist ein früher Hinweis auf beginnenden Lagerschaden — Wochen bevor der Schaden messbar groß wird. Die 3-Sigma-Regel sieht das nicht. Der Isolation Forest schon."
      </blockquote>

      <h2>Fallbeispiel: CNC-Fräszentrum, Lager Achse B</h2>
      <p>
        Bei einem unserer Kunden zeigte das Lager der B-Achse über 18 Tage eine langsam steigende Kurtosis — von 3,2 auf 7,8 — während der RMS-Wert völlig stabil blieb. Der Isolation-Forest-Score stieg von 0,12 auf 0,71. Am Tag 19 löste das System einen AMBER-Alarm aus.
      </p>
      <div class="highlight-box">
        <span class="stat-highlight">18 Tage</span>
        Vorwarnzeit vor dem Lagerschaden
        <br><br>
        <span class="stat-highlight">€ 34.000</span>
        Vermiedene Ausfallkosten (2 Schichten + Notfall-Reparatur)
      </div>
      <p>
        Die Maschine wurde planmäßig nach der Frühschicht gewartet. Kein ungeplanter Stillstand, kein Folgeschaden an der Spindel.
      </p>

      <h2>Fazit: Die Kombination macht den Unterschied</h2>
      <p>
        Unser System setzt beide Methoden parallel ein: die 3σ-Regel als schnellen, reaktiven Layer — und den Isolation Forest als prädiktiven Layer für schleichende Veränderungen. Erst die Kombination ergibt die <strong>95,2% Prognose-Konfidenz</strong>, die wir unseren Kunden garantieren.
      </p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 2
  // ─────────────────────────────────────────────
  {
    id: 2,
    featured: false,
    date: "2026-05-08",
    dateFormatted: "8. Mai 2026",
    readTime: "5 Min.",
    category: "Fallstudie",
    author: "Sascha Forbach",
    title: "Spritzgussmaschine 800 t: Hydraulikversagen verhindert — 3 Tage vorher",
    excerpt: "Eine 800-Tonnen-Spritzgussmaschine zeigte über 3 Tage eine klassische Vor-Ausfall-Signatur im Hydraulikdruck. So haben wir den Schaden verhindert — und was die Daten genau gezeigt haben.",
    tags: ["Spritzguss", "Hydraulik", "Fallstudie", "Druckanalyse", "ROI"],
    content: `
      <p class="detail-lead">
        Eine 800-Tonnen-Spritzgussmaschine ist der Herzschlag jeder Kunstoffproduktionslinie. Wenn sie ausfällt, steht alles. Dieser Artikel beschreibt, wie unser System einen drohenden Hydraulikausfall 72 Stunden im Voraus erkannte.
      </p>

      <h2>Ausgangslage</h2>
      <p>
        Die Maschine lief seit 21.140 Betriebsstunden — innerhalb des Wartungsplans, keine bekannten Probleme. Unser System überwachte Hydraulikdruck, Schmelzetemperatur, Zykluszeit und Vibration der Hydraulikpumpe.
      </p>

      <h2>Was die Daten zeigten</h2>
      <p>Über 3 Tage entwickelte sich folgendes Muster:</p>
      <ul>
        <li>Druckabfall beim Schließen um 4,2 % pro Tag (normalerweise ±0,3 %)</li>
        <li>Steigende Pulsation im Druckverlauf (typisch für verschlissene Pumpenkolben)</li>
        <li>Temperaturanstieg am Hydraulikaggregat von 58 °C auf 71 °C</li>
        <li>Isolation-Forest-Score: 0,08 → 0,82 über 72 Stunden</li>
      </ul>

      <div class="highlight-box">
        <span class="stat-highlight">72 Std.</span>
        Vorwarnzeit bis zum prognostizierten Ausfall
      </div>

      <h2>Reaktion und Ergebnis</h2>
      <p>
        Das System löste nach 48 Stunden einen AMBER-Alarm aus. Nach weiteren 12 Stunden (Isolation-Forest-Score > 0,75) wurde auf ROT eskaliert. Der Betrieb tauschte den Kolbensatz der Hydraulikpumpe in einer geplanten 4-Stunden-Wartung aus.
      </p>
      <p>
        Hätte die Pumpe versagt: 2–3 Schichten Ausfall, Notfall-Reparatur, mögliche Folgeschäden am Steuerblock. Gesamtkosten geschätzt bei <strong>€ 62.000</strong>.
      </p>

      <blockquote>
        "Wir haben die Maschine noch nie so gut im Griff gehabt. Früher haben wir auf das Klopfen gewartet. Jetzt sehen wir es in den Daten — bevor wir es hören."
        <br><br>— Produktionsleiter, anonymisiert
      </blockquote>
    `
  },

  // ─────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────
  {
    id: 3,
    featured: false,
    date: "2026-04-22",
    dateFormatted: "22. April 2026",
    readTime: "6 Min.",
    category: "Technologie",
    author: "Thomas Brückner",
    title: "OPC UA vs. MQTT: Welches Protokoll für Ihre Produktionsdaten?",
    excerpt: "OPC UA und MQTT sind die beiden dominanten Protokolle für industrielle IoT-Daten. Wir erklären die Unterschiede — und wann welches für Ihr Setup sinnvoll ist.",
    tags: ["OPC UA", "MQTT", "IoT", "Protokoll", "Gateway", "Industrie 4.0"],
    content: `
      <p class="detail-lead">
        Wenn Sie eine Maschine an unser Predictive-Maintenance-System anbinden wollen, stellen sich immer wieder dieselben Fragen: OPC UA oder MQTT? Edge Gateway oder Cloud-direkt? Dieser Artikel gibt eine klare Antwort.
      </p>

      <h2>OPC UA — der Industriestandard</h2>
      <p>
        OPC Unified Architecture ist der De-facto-Standard für Maschinen-zu-Maschinen-Kommunikation in der Fertigung. Siemens S7, Fanuc, Beckhoff TwinCAT — sie alle sprechen OPC UA. Die Vorteile:
      </p>
      <ul>
        <li>Eingebaute Sicherheit (Zertifikate, Verschlüsselung)</li>
        <li>Maschinennahe Datenmodelle (Semantik inklusive)</li>
        <li>Bidirektionale Kommunikation (auch Befehle möglich)</li>
        <li>Unterstützung von historischen Datenzugriffen</li>
      </ul>
      <p><strong>Nachteil:</strong> Höhere Konfigurationskomplexität, benötigt meist einen lokalen OPC-UA-Server auf der Maschine oder SPS.</p>

      <h2>MQTT — leicht, schnell, cloud-freundlich</h2>
      <p>
        MQTT ist ein publish/subscribe-Protokoll, das ursprünglich für schlechte Netzwerkverbindungen entwickelt wurde. Es ist extrem leichtgewichtig und ideal für:
      </p>
      <ul>
        <li>Hochfrequente Sensordaten (kHz-Bereich)</li>
        <li>Edge-to-Cloud-Kommunikation</li>
        <li>Retrofit-Szenarien ohne SPS-Anbindung</li>
        <li>Heterogene Sensorlandschaften</li>
      </ul>

      <h2>Unsere Empfehlung</h2>
      <div class="highlight-box">
        <strong>Neue Maschinen (ab Baujahr 2018):</strong> OPC UA, wenn ein Server vorhanden ist<br><br>
        <strong>Ältere Maschinen / Retrofit:</strong> MQTT über Edge Gateway (z.B. Raspberry Pi + Broker)<br><br>
        <strong>Hochfrequente Vibrationsdaten (≥ 1 kHz):</strong> Immer MQTT — OPC UA ist hier zu langsam
      </div>

      <p>
        In der Praxis verwenden wir oft eine Hybridlösung: Maschinenstatus und Prozessparameter über OPC UA, Vibrations-Rohdaten über MQTT — aggregiert in unserem Edge Gateway.
      </p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 4
  // ─────────────────────────────────────────────
  {
    id: 4,
    featured: false,
    date: "2026-04-10",
    dateFormatted: "10. April 2026",
    readTime: "4 Min.",
    category: "ROI & Wirtschaftlichkeit",
    author: "Sascha Forbach",
    title: "So rechnen Sie den ROI von Predictive Maintenance in 10 Minuten",
    excerpt: "Die meisten ROI-Berechnungen für Industrie 4.0 sind zu komplex. Hier ist die einfache Formel, die wir im Kundengespräch nutzen — mit realen Zahlen aus 14 verhinderten Ausfällen.",
    tags: ["ROI", "Wirtschaftlichkeit", "Kalkulation", "Amortisation", "Business Case"],
    content: `
      <p class="detail-lead">
        Der häufigste Einwand in Verkaufsgesprächen: "Das klingt gut, aber rechnet sich das wirklich?" Hier ist die ehrliche Antwort — mit der genauen Formel und realen Benchmarks.
      </p>

      <h2>Die 3 Kostentreiber von Maschinenstillständen</h2>
      <p>Bevor wir rechnen, müssen wir die tatsächlichen Kosten eines ungeplanten Stillstands verstehen:</p>
      <ul>
        <li><strong>Direktkosten:</strong> Reparatur, Ersatzteile, Überstunden (oft 2.000–8.000 €/Ausfall)</li>
        <li><strong>Produktionsausfall:</strong> Typisch 1.500–5.000 € pro Stunde je nach Anlage</li>
        <li><strong>Folgekosten:</strong> Ausschuss, Nacharbeit, Lieferverzug, Konventionalstrafen</li>
      </ul>

      <h2>Die einfache ROI-Formel</h2>
      <div class="highlight-box">
        <code>Jährlicher Verlust = Stillstunden/Jahr × Kosten/Stunde</code><br><br>
        <code>Einsparung = Verlust × 0,72</code>  (unser Ø-Reduktionsfaktor)<br><br>
        <code>ROI Jahr 1 = (Einsparung − Investition) / Investition × 100</code>
      </div>

      <h2>Reales Beispiel: 4 Maschinen, mittelständischer Betrieb</h2>
      <p>Typische Konfiguration: 2 CNC-Fräsen, 1 Spritzguss, 1 Schweißroboter.</p>
      <ul>
        <li>Jährliche Stillstunden gesamt: 28 h</li>
        <li>Durchschnittlicher Stundensatz: 2.900 €</li>
        <li>Jährlicher Verlust: <strong>81.200 €</strong></li>
        <li>Einsparung (72 %): <strong>58.464 €</strong></li>
        <li>Investition (Setup + 12 Monate): <strong>30.800 €</strong></li>
        <li>ROI Jahr 1: <strong>90 %</strong></li>
        <li>Amortisation: <strong>6,3 Monate</strong></li>
      </ul>

      <blockquote>
        Wir haben dieses Modell an 14 realen Kundenprojekten validiert. Die tatsächliche Amortisation lag zwischen 5 und 14 Monaten — im Schnitt bei 8 Monaten.
      </blockquote>
    `
  },

  // ─────────────────────────────────────────────
  // POST 5
  // ─────────────────────────────────────────────
  {
    id: 5,
    featured: false,
    date: "2026-03-28",
    dateFormatted: "28. März 2026",
    readTime: "5 Min.",
    category: "Robotik",
    author: "Dr. Markus Weiland",
    title: "Teach-Punkt-Drift bei 6-Achs-Robotern: früh erkennen, teuer reparieren vermeiden",
    excerpt: "Wenn ein Schweißroboter beginnt, 0,3 mm daneben zu treffen, ist das kein Zufall — es ist das erste Signal eines Lagerverschleißes. Wie unsere KI diesen Drift erkennt, bevor er Ausschuss produziert.",
    tags: ["Robotik", "6-Achs", "Teach-Punkt-Drift", "Gelenküberwachung", "Schweißen"],
    content: `
      <p class="detail-lead">
        Schweißroboter sind präzise — bis sie es plötzlich nicht mehr sind. Teach-Punkt-Drift ist eine der häufigsten Ursachen für Ausschuss und Nacharbeit in automatisierten Schweißlinien. Und er kündigt sich immer an.
      </p>

      <h2>Was ist Teach-Punkt-Drift?</h2>
      <p>
        Jeder Roboter wird auf exakte Positionen (Teach-Punkte) programmiert. Mit zunehmender Betriebsstundenzahl beginnen Lager, Getriebe und Harmonic-Drive-Einheiten zu verschleißen — die TCP-Position (Tool Center Point) weicht langsam von der programmierten Position ab.
      </p>
      <p>
        Typische Progression: 0,1 mm → 0,3 mm → 0,8 mm → sichtbarer Ausschuss. Die ersten 0,3 mm sind mit dem Auge unsichtbar, produzieren aber bereits Qualitätsprobleme.
      </p>

      <h2>Unsere Erkennung: Drehmomentsignatur-Analyse</h2>
      <p>
        Jede Roboterachse hat einen Servomotor mit Stromregelung. Das Strom-/Drehmomentprofil bei einer definierten Bewegungssequenz ist ein präziser Fingerabdruck des mechanischen Zustands. Wir analysieren:
      </p>
      <ul>
        <li>Drehmomentvarianz bei Wiederholbewegungen</li>
        <li>Stromsignal-Kurtosis (Stoßimpulse im Getriebe)</li>
        <li>Phasenversatz zwischen Soll- und Ist-Position</li>
        <li>Reibungskoeffizient-Trend über Zeit</li>
      </ul>

      <div class="highlight-box">
        <span class="stat-highlight">0,08 mm</span>
        Drift, den unser System erkennt (vor sichtbarem Ausschuss)
      </div>

      <h2>Praxis-Ergebnis</h2>
      <p>
        Bei einem Kunden mit 4 Schweißrobotern reduzierten wir die ausschussbedingten Nacharbeitskosten um 67 % im ersten Betriebsjahr. Die Lager werden jetzt geplant getauscht — nicht notfallmäßig.
      </p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 6
  // ─────────────────────────────────────────────
  {
    id: 6,
    featured: false,
    date: "2026-03-14",
    dateFormatted: "14. März 2026",
    readTime: "4 Min.",
    category: "Industrie 4.0",
    author: "Lena Hartmann",
    title: "Edge Computing vs. Cloud: Wo sollte Ihre KI rechnen?",
    excerpt: "Hochfrequente Vibrationsdaten lokal zu verarbeiten oder alles in die Cloud zu schicken? Die Antwort ist nicht so einfach, wie sie klingt — aber es gibt eine klare Empfehlung für Fertigungsbetriebe.",
    tags: ["Edge Computing", "Cloud", "Latenz", "Datenschutz", "Gateway", "Architektur"],
    content: `
      <p class="detail-lead">
        2 kHz Vibrationsdaten, 8 Maschinen, 24/7 — das sind rund 1,4 GB Rohdaten pro Stunde. In die Cloud zu schicken? Theoretisch möglich. Sinnvoll? Selten.
      </p>

      <h2>Das Latenz-Problem</h2>
      <p>
        Unsere 3σ-Alarmlogik benötigt unter 800 ms von der Messung bis zum Alarm. Cloud-Roundtrips über normale Business-Internetleitungen liegen bei 50–200 ms — theoretisch in Ordnung. Aber: Verbindungsabbrüche, Paketverlust und Bandbreitenengpässe können die Latenz auf Sekunden treiben. In einer Notabschaltungs-Situation (E-STOP) ist das nicht akzeptabel.
      </p>

      <h2>Unsere Hybrid-Architektur</h2>
      <div class="highlight-box">
        <strong>Edge Gateway (lokal, Raspberry Pi 5 oder Industrie-PC):</strong><br>
        — Rohdaten-Erfassung (MQTT, OPC UA)<br>
        — Feature-Extraktion in Echtzeit<br>
        — 3σ-Alarmlogik (Latenz: &lt; 50 ms)<br>
        — Isolation Forest Scoring<br><br>
        <strong>Cloud Backend (Azure / AWS):</strong><br>
        — Langzeit-Datenspeicherung<br>
        — Modell-Retraining auf historischen Daten<br>
        — Web-Dashboard für Management<br>
        — SMS/E-Mail-Alerts
      </div>

      <h2>Datenschutz & Souveränität</h2>
      <p>
        Für viele Mittelständler ist es wichtig, dass Produktionsdaten das Werk nicht verlassen. Mit unserem Edge-Ansatz bleiben die Rohdaten lokal. In die Cloud gehen nur aggregierte Features und Alarm-Events — keine Rückschlüsse auf Produktionsmengen oder Fertigungsparameter möglich.
      </p>
    `
  }

  // ─────────────────────────────────────────────
  // NEUEN POST HIER EINFÜGEN:
  // Kopiere den Block oben (von { id: ... bis },)
  // Erhöhe die id um 1
  // Passe date, category, title, excerpt, tags, content an
  // ─────────────────────────────────────────────

];