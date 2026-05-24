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
  // POST 11 — CNC Spindel Geräusche
  // ─────────────────────────────────────────────
  {
    id: 11,
    featured: false,
    date: "2026-05-20",
    dateFormatted: "20. Mai 2026",
    readTime: "5 Min.",
    category: "CNC",
    author: "Sascha Forbach",
    title: "CNC-Spindel macht komische Geräusche — was steckt wirklich dahinter?",
    excerpt: "Pfeifen, Rattern, Schlagen: Jedes Geräusch an der CNC-Spindel ist ein Frühwarnsignal. Wir erklären, welches Geräusch welchen Schaden ankündigt — und ab wann es teuer wird.",
    tags: ["CNC", "Spindel", "Lagerdiagnose", "Vibrationsanalyse", "Predictive Maintenance"],
    content: `
      <p class="detail-lead">Eine CNC-Spindel, die beginnt zu pfeifen oder zu schlagen, hat im Durchschnitt noch 72 Betriebsstunden bis zum Totalausfall — wenn man nichts unternimmt.</p>
      <h2>Die häufigsten Geräusche und ihre Ursachen</h2>
      <p>Jede Art von Spindelgeräusch ist ein anderes Signal:</p>
      <ul>
        <li><strong>Hochfrequentes Pfeifen (5–15 kHz):</strong> Wälzlagerschaden im Frontlager. Meist durch unzureichende Schmierung oder thermische Überlastung verursacht. Restlaufzeit: 40–120 Stunden.</li>
        <li><strong>Tiefes Rattern bei hoher Drehzahl:</strong> Unwucht durch beschädigtes Werkzeug oder verschlissenes Spannfutter. Löst Sekundärschäden an der Spindel aus.</li>
        <li><strong>Metallisches Schlagen (rhythmisch):</strong> Einlaufspur im Innenlager — oft verursacht durch falsches Einfahren nach Stillstand. Sofortiger Stillstand empfohlen.</li>
        <li><strong>Dumpfes Brummen bei niedrigen Drehzahlen:</strong> Schmierfilmabriss oder Lagerspiel. Häufig der erste Hinweis auf thermische Probleme im Lagerbereich.</li>
      </ul>
      <h2>Warum "hören" allein nicht ausreicht</h2>
      <p>Das menschliche Ohr kann Geräusche erst ab ca. 65 dB wahrnehmen — zu einem Zeitpunkt, an dem der Schaden bereits 30–40 % Lagersubstanz zerstört hat. Unsere Beschleunigungssensoren erfassen Frequenzspektren ab 10 Hz bis 20 kHz mit einer Abtastrate von 10.000 Hz. Das erlaubt die Erkennung von Lagerdefekten, bevor der Schaden für das menschliche Ohr wahrnehmbar ist.</p>
      <div class="highlight-box">
        <strong>Praxisfall:</strong> Lohnfertiger in Süddeutschland — SGM-5-Achsfräse, Spindel 18.000 U/min. Unsere KI erkannte eine charakteristische BPFO-Frequenz (Ball Pass Frequency Outer Race) 68 Stunden vor dem eigentlichen Lagerversagen. Ergebnis: geplanter Lagertausch in der Nachtschicht, kein Produktionsstopp.
      </div>
      <h2>Was Sie jetzt tun können</h2>
      <p>Hören Sie verdächtige Geräusche? Messen Sie sofort die Vibrationsfrequenz. Liegt die Schwinggeschwindigkeit über 2,8 mm/s (nach ISO 10816 Klasse C für Werkzeugmaschinen), ist ein ungeplanter Ausfall in den nächsten 5–10 Schichten wahrscheinlich. Mit permanenter Sensorüberwachung bekommen Sie diese Warnung 48–72 Stunden früher — mit voller Planbarkeit.</p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 12 — Hydraulikdruck fällt ab
  // ─────────────────────────────────────────────
  {
    id: 12,
    featured: false,
    date: "2026-05-15",
    dateFormatted: "15. Mai 2026",
    readTime: "6 Min.",
    category: "Hydraulik",
    author: "Sascha Forbach",
    title: "Hydraulikdruck fällt ab — 7 Ursachen und wie KI sie unterscheidet",
    excerpt: "Druckabfall im Hydrauliksystem ist einer der häufigsten Ausfallgründe bei Spritzguss- und Stanzmaschinen. Hier sind die 7 wahren Ursachen — und warum nur eine davon sofort teuer wird.",
    tags: ["Hydraulik", "Druckabfall", "Spritzguss", "Predictive Maintenance", "Instandhaltung"],
    content: `
      <p class="detail-lead">Nicht jeder Druckabfall ist gleich gefährlich. Aber alle beginnen gleich: mit einer kleinen Abweichung im Druckverlaufsgraphen — die niemand sieht, bis es zu spät ist.</p>
      <h2>Die 7 Ursachen für sinkenden Hydraulikdruck</h2>
      <ul>
        <li><strong>1. Internes Leckage am Hydraulikzylinder:</strong> Die häufigste Ursache. Kolbendichtung verschlissen — Druck bricht unter Last zusammen. Erkennbar durch asymmetrischen Druckverlauf in der Haltedruckphase.</li>
        <li><strong>2. Pumpenabnutzung (Zahnradpumpe):</strong> Volumetrischer Wirkungsgrad sinkt. Das System kompensiert durch höhere Pumpendrehzahl — Energieverbrauch steigt messbar. KI-Kennzeichen: Druck + Stromaufnahme korrelieren nicht mehr.</li>
        <li><strong>3. Ölviskositätsverlust durch Überhitzung:</strong> Hydrauliköl über 65 °C verliert Schmierwirkung. Führt zu beschleunigtem Pumpen- und Ventilverschleiß. Erkennbar durch Temperaturtrend > 0,8 °C/Stunde.</li>
        <li><strong>4. Verstopfter Rücklauffilter:</strong> Schleichend steigender Gegendruck. Drucksensor zeigt Normalwert — der Bypass öffnet jedoch bereits. Erkennbar nur durch differenzielle Druckmessung vor/nach Filter.</li>
        <li><strong>5. Ventilspiel am Proportionalventil:</strong> Hysterese im Regelverhalten nimmt zu. Druckschwankungen ±3–5 bar bei stabilen Sollwerten. Häufig unterschätzt, bis Maßhaltigkeit leidet.</li>
        <li><strong>6. Lufteintrag (Kavitation):</strong> Druckspitzen mit hoher Frequenz (> 500 Hz), begleitet von charakeristischem Knistern. Führt innerhalb von Stunden zu Pumpen-Fresser.</li>
        <li><strong>7. Undichte externe Leitungsverbindung:</strong> Meistens sichtbar — aber erst nachdem 10–15 Liter Öl gelaufen sind und jemand auf dem Boden ausrutscht.</li>
      </ul>
      <div class="highlight-box">
        <strong>Wichtig:</strong> Ursache 1–5 lassen sich 24–96 Stunden im Voraus durch KI erkennen. Ursache 6 (Kavitation) muss in Echtzeit erkannt werden — weil der Schaden in Minuten entsteht. Unser System unterscheidet automatisch zwischen allen 7 Mustern.
      </div>
      <h2>Was unterscheidet die KI-Diagnose vom Manometer?</h2>
      <p>Ein Manometer zeigt den aktuellen Druck. Unsere KI analysiert den <em>Druckverlauf</em> über Zeit — Anstiegsrate, Haltephasen, Druckabfall unter verschiedenen Lastprofilen — und vergleicht das mit dem Baseline-Muster derselben Maschine aus den letzten 90 Tagen. Abweichungen von weniger als 2 bar, die ein Mensch nie bemerken würde, werden erkannt und klassifiziert.</p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 13 — OEE verbessern
  // ─────────────────────────────────────────────
  {
    id: 13,
    featured: false,
    date: "2026-05-10",
    dateFormatted: "10. Mai 2026",
    readTime: "7 Min.",
    category: "ROI & Wirtschaftlichkeit",
    author: "Sascha Forbach",
    title: "OEE unter 75%? Hier sind die drei Hauptursachen — und wie Sie sie beheben",
    excerpt: "Die Gesamtanlageneffektivität (OEE) ist der wichtigste KPI in der Fertigung. Unter 75% verlieren Sie täglich Geld. Wir zeigen, wo die verlorene Zeit wirklich steckt.",
    tags: ["OEE", "Gesamtanlageneffektivität", "KPI", "Fertigungseffizienz", "Predictive Maintenance"],
    content: `
      <p class="detail-lead">Weltklasse-OEE liegt bei 85%. Die meisten mittelständischen Fertigungsbetriebe in Deutschland erreichen 55–68%. Die Differenz kostet — bei einer einzelnen CNC-Linie mit 8h Schicht — bis zu 180.000 Euro pro Jahr.</p>
      <h2>Was OEE wirklich misst</h2>
      <p>OEE = Verfügbarkeit × Leistung × Qualität. Klingt einfach. Aber die meisten Betriebe messen nur die großen, offensichtlichen Stillstände. Die eigentlichen OEE-Killer sind kleiner und häufiger:</p>
      <ul>
        <li><strong>Verfügbarkeit:</strong> Nicht nur geplante Wartung und große Ausfälle. Auch die 4-Minuten-Unterbrechungen 8× täglich, die in keiner Statistik auftauchen.</li>
        <li><strong>Leistung:</strong> Maschinen, die 94% der Nenngeschwindigkeit laufen, weil "es sich so besser anfühlt". Das sind 6% Leistungsverlust — unsichtbar, aber konstant.</li>
        <li><strong>Qualität:</strong> Ausschuss in der Anlaufphase nach Wartung. Häufig nicht als Qualitätsverlust gebucht, weil er "normal" ist.</li>
      </ul>
      <h2>Die drei echten OEE-Killer im Mittelstand</h2>
      <p><strong>1. Ungeplante Micro-Stops (2–8 Minuten):</strong> Einzeln harmlos, summieren sich zu 45–90 Minuten pro Schicht. Ursache: intermittierende Sensorausfälle, Werkzeugvibration, Mini-Staus in Zuführeinrichtungen. KI erkennt das Muster bevor es eskaliert.</p>
      <p><strong>2. Speed Loss durch Verschleiß:</strong> Eine Spindel mit beginnendem Lagerschaden läuft der Maschinenführer intuitiv langsamer — ohne es zu merken oder zu dokumentieren. 8% Geschwindigkeitsreduktion über 3 Monate = 8% OEE-Verlust allein durch diesen Faktor.</p>
      <p><strong>3. Anlaufqualität nach Stillstand:</strong> Nach jedem Stopp von mehr als 20 Minuten produzieren thermisch empfindliche Maschinen 6–18 Ausschussteile. Permanente Temperaturüberwachung erlaubt es, den optimalen Anlaufzeitpunkt zu bestimmen.</p>
      <div class="highlight-box">
        <strong>Benchmark aus der Praxis:</strong> Unser Kunde, ein Zulieferer für die Automobilindustrie (12 Anlagen), steigerte die OEE innerhalb von 8 Monaten von 61% auf 79% — allein durch automatische Erkennung von Micro-Stops und proaktiven Werkzeugwechsel. Ergebnis: +380.000 € Mehrerlös pro Jahr bei gleichem Personal.
      </div>
    `
  },

  // ─────────────────────────────────────────────
  // POST 14 — Wälzlagerschaden früh erkennen
  // ─────────────────────────────────────────────
  {
    id: 14,
    featured: false,
    date: "2026-05-05",
    dateFormatted: "5. Mai 2026",
    readTime: "5 Min.",
    category: "Technologie",
    author: "Sascha Forbach",
    title: "Wälzlagerschaden früh erkennen: Diese Vibrationsmuster verraten alles",
    excerpt: "90% aller Wälzlagerschäden sind durch Vibrationsmessung 2–8 Wochen vor dem Ausfall erkennbar. Wir zeigen, welche Frequenzmuster auf welchen Schadenstyp hinweisen.",
    tags: ["Wälzlager", "Lagerdiagnose", "Vibrationsanalyse", "FFT", "Condition Monitoring"],
    content: `
      <p class="detail-lead">Wälzlager sprechen eine klare Sprache — in Frequenzen. Wer diese Sprache lesen kann, spart pro Maschinenausfall durchschnittlich 18.000 bis 85.000 Euro.</p>
      <h2>Die vier charakteristischen Schadensfrequenzen</h2>
      <p>Jeder Wälzlagerschaden erzeugt eine mathematisch berechenbare Schadensfrequenz, die vom normalen Betriebsrauschen unterschieden werden kann:</p>
      <ul>
        <li><strong>BPFO (Ball Pass Frequency Outer Race):</strong> Schaden am Außenring. Erkennbar durch impulsartige Erhöhung bei f = 0,4 × n × z (n = Drehzahl, z = Anzahl Wälzkörper). Häufigste Schadensform: 45%.</li>
        <li><strong>BPFI (Ball Pass Frequency Inner Race):</strong> Schaden am Innenring. Tritt oft bei höher belasteten Lagern auf, z.B. Spindelfrontlager. Frequenz moduliert mit der Drehfrequenz.</li>
        <li><strong>BSF (Ball Spin Frequency):</strong> Schaden am Wälzkörper selbst. Charakteristisch: Seitenfrequenzen ±BSF um die Grundfrequenz.</li>
        <li><strong>FTF (Fundamental Train Frequency):</strong> Käfigschaden. Niederfrequent, oft schwer zu detektieren. Kündigt sich durch Amplitudenmodulation anderer Frequenzen an.</li>
      </ul>
      <h2>Vier Stufen des Lagerverschleißes</h2>
      <p><strong>Stufe 1 (Ultraschall-Stadium, 8 Wochen vor Ausfall):</strong> Erste Oberflächenveränderungen im Bereich 250–350 kHz. Für konventionelle Sensoren unsichtbar.</p>
      <p><strong>Stufe 2 (Hochfrequenz-Schwingungen, 4–6 Wochen):</strong> Schadensfrequenzen erscheinen im Spektrum. Noch kein hörbares Geräusch. Hier greift unser KI-System ein.</p>
      <p><strong>Stufe 3 (Seitenfrequenzen, 1–3 Wochen):</strong> Harmonische und Seitenfrequenzen vermehren sich. Gesamtvibration beginnt zu steigen. Menschliches Ohr beginnt, ungewöhnliche Geräusche zu hören.</p>
      <p><strong>Stufe 4 (Kritische Phase, Stunden bis Tage):</strong> Gesamtschwingungspegel > 3× Baseline. Breites Rauschen überdeckt Diskretfrequenzen. Totalversagen unmittelbar.</p>
      <div class="highlight-box">
        <strong>Unser System erkennt Stufe 2 zuverlässig</strong> — das gibt Ihnen 4–6 Wochen Planungsvorlauf für einen geplanten Lagertausch in der nächsten Wartungspause. Statt €45.000 Notfallreparatur: €1.200 geplanter Lagerwechsel.
      </div>
    `
  },

  // ─────────────────────────────────────────────
  // POST 15 — Spritzguss Einspritzdruck schwankt
  // ─────────────────────────────────────────────
  {
    id: 15,
    featured: false,
    date: "2026-04-28",
    dateFormatted: "28. April 2026",
    readTime: "5 Min.",
    category: "Spritzguss",
    author: "Sascha Forbach",
    title: "Einspritzdruck schwankt bei der Spritzgussmaschine — Ursachen und Lösung",
    excerpt: "Schwankender Einspritzdruck ist der häufigste Grund für Qualitätsprobleme im Spritzguss. Wir zeigen, welche 5 Ursachen dahinterstecken und wie Sie sie voneinander unterscheiden.",
    tags: ["Spritzguss", "Einspritzdruck", "Hydraulik", "Qualitätssicherung", "Predictive Maintenance"],
    content: `
      <p class="detail-lead">±8 bar Druckschwankung im Einspritzprozess klingt nach wenig. Bei Präzisionsteilen für die Automobil- oder Medizintechnik bedeutet das 3–12% Ausschuss — und manchmal eine Rückrufaktion.</p>
      <h2>5 Ursachen für schwankenden Einspritzdruck</h2>
      <ul>
        <li><strong>1. Rückstromsperre verschlissen:</strong> Die häufigste Ursache. Wenn die Rückstromsperre nicht mehr sauber schließt, variiert das eingespritzte Volumen pro Schuss um 1–4%. Erkennbar durch ansteigende Standardabweichung im Einspritzdruck über Schuss-Verlauf.</li>
        <li><strong>2. Hydraulikpumpe mit nachlassendem Volumenwirkungsgrad:</strong> Pumpenabnutzung führt zu Druckabfall unter dynamischer Last — genau dann, wenn die Maschine den vollen Einspritzdruck abruft. Muster: Druck normal bei niedriger Last, Abfall bei Einspritzung.</li>
        <li><strong>3. Temperaturschwankungen in der Plastifiziereinheit:</strong> Viskositätsschwankungen der Schmelze durch ±5°C Zonendifferenz. Gleiche Pumpeinstellung — unterschiedlicher Widerstand — unterschiedlicher Druckaufbau.</li>
        <li><strong>4. Schneckenverschleiß:</strong> Schnecke und Zylinder mit fortgeschrittenem Verschleiß zeigen inkonsistentes Plastifiziervolumen. Erkennbar durch langfristigen Trend sinkender Einspritzdrücke bei gleichem Prozessparameter-Set.</li>
        <li><strong>5. Proportionalventil mit Hysterese:</strong> Elektro-hydraulisches Proportionalventil regelt den Einspritzdruck. Bei steigender Hysterese (typisch nach 15.000+ Betriebsstunden) reagiert das Ventil träger — die Regelung beginnt zu "jagen".</li>
      </ul>
      <h2>Warum das nicht per Sichtprüfung erkennbar ist</h2>
      <p>Alle fünf Ursachen erzeugen auf dem Maschinendisplay denselben Effekt: Druckschwankungen. Ohne Trendanalyse über Hunderte von Schüssen ist eine Unterscheidung praktisch unmöglich. Unsere KI trennt die Muster durch Cross-Korrelation von Druck-, Temperatur-, Stromaufnahme- und Zeitdaten — und benennt die Ursache direkt.</p>
      <div class="highlight-box">
        <strong>Fallbeispiel:</strong> Spritzgussbetrieb, 800-t-Maschine, Automobilinnenteile. Ausschussquote stieg von 0,8% auf 4,1% über 3 Wochen. Diagnose nach 48h Sensor-Monitoring: Rückstromsperre verschlissen + Proportionalventil-Hysterese. Geplanter Tausch in Wochenendschicht. Ausschussquote: zurück auf 0,7%.
      </div>
    `
  },

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