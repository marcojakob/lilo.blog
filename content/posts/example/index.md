+++
title = "Example Post"
date = "2023-01-01"
draft = false
pinned = false
tags = [ "Lilo", "Example" ]
image = "/img/default-image.jpg"
description = "In diesem Artikel werden Möglichkeiten aufgezeigt für das Verfassen von Blogeinträgen."
footnotes = "In der Fusszeile können zum Beispiel Bildquellen angegeben werden. Dieser Text ist abgetrennt durch eine Linie und etwas kleiner."
+++

{{<lead>}}
In diesem Artikel werden Möglichkeiten aufgezeigt für das Verfassen von Blogeinträgen.
{{</lead>}}

Tipp: Um diesen Blogartikel zu behalten, ohne ihn zu löschen, kann man den **Entwurfsmodus** einschalten.

# Überschrift 1

So sieht die grösste Überschrift aus (H1).

## Überschrift 2

Dies ist die Überschrift 2 (H2).

### Überschrift 3

Die Überschrift 3 ist nicht mehr im Menu verfügbar. Wenn man sie verwenden will, muss man in den `Markdown`-Modus wechseln und dort eine Überschrift mit drei Hastags einleiten: `### Überschrift 3`

#### Überschrift 4

Auch Überschrift 4 muss im `Markdown`-Modus erstellt werden: `#### Überschrift 4`

## Weitere Textformatierungen

Am besten einfach alle Formatierungsmöglichkeiten in der Toolbar von `Inhalt` mal ausprobieren.

### Fett und Kursiv

Natürlich gibt es auch **fett** und _kursiv_.

### Links

[So können Links angegeben werden](https://www.lilo.blog). Wenn man in den `Markdown`-Modus wechselt, sieht man auch, welcher Link hinterlegt worden ist.

### Zitate

> «Zitate können hervorgehoben werden.»
>
> _Autor mit [Link zur Quelle](https://www.lilo.blog)_

Die Quellenangabe muss _kursiv_ geschrieben werden, damit sie als Fusszeile erkannt wird.

### Liste

So sieht eine Liste aus:

- Nam de isto magna dissensio est.
- Mihi, inquam, qui te id ipsum rogavi?
- Haec et tu ita posuisti, et verba vestra sunt.
- Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia.

### Nummerierte Liste

Und so eine nummerierte Liste:

1. Nam de isto magna dissensio est.
2. Mihi, inquam, qui te id ipsum rogavi?
3. Haec et tu ita posuisti, et verba vestra sunt.
4. Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia.

## Bilder

Bilder werden mit dem `+`-Symbol eingefügt.

![Der Alt-Text wird jeweils als Bildunterschrift angezeigt.](/img/default-image.jpg)

**Empfehlung für Bilder**: Meist empfiehlt sich, ein Bild ganz zuoberst im `Inhalt`-Feld einzufügen. Zusätzlich sollte man dieses auch im `Bild`-Feld angeben, damit es in der Blogübersicht erscheint.

### Tipps zu Bildgrössen

Ein Richtwert für Bilder ist, dass diese wenn möglich nicht grösser als `400kb` sein sollten. Man kann sie so verkleinern, dass die Breite höchstens `1200px` gross ist. Dies ist für die meisten Bildschirme mehr als genug.

### Bildunterschrift

Wenn bei einem Bild ein `ALT TEXT` erfasst wird, so wird dieser als Bildunterschrift im Artikel angezeigt.

## Horizontale Linie

Eine Horizontale Linie kann man entweder durch ein `<hr>` einfügen oder indem man im `Markdown`-Modus drei Striche `---` einfügt. So sieht die Linie aus:

---

## Lead

{{<lead>}}
Oft haben Artikel unterhalb des Haupttitels einen einführenden Lead, der etwas grösser dargestellt wird.
{{</lead>}}

`{{</*lead*/>}}`  
Ein Lead steht zwischen zwei solchen Blöcken.  
`{{</*/lead*/>}}`

## Kasten

{{<box>}}
In dieser Box können Texte, Bilder, Videos oder andere Inhalte dargestellt werden.
{{</box>}}

`{{</*box*/>}}`  
Der Inhalt einer Box muss wie hier von zwei Blöcken umgeben werden.  
`{{</*/box*/>}}`

{{<box title="Ausklappbare Box">}}
Wird ein Titel angegeben, so kann die Box ausgeklappt werden.

Dies eignet sich auch für längere Inhalte.

![](/img/default-image.jpg)

Auch Bilder können in eine Box gepackt werden.
{{</box>}}

`{{</*box title="Ausklappbare Box"*/>}}`  
Wird ein Titel angegeben, so kann die Box ausgeklappt werden.  
`{{</*/box*/>}}`

## Video, Audio und andere Medien einbetten

Es kann auch `HTML-Code` eingefügt werden. Manchmal geht dies etwas einfacher, wenn man dazu in den `Markdown`-Modus wechselt.

Damit können zum Beispiel Filme, Audiodateien oder Karten eingebettet werden. Meist sind auf den entsprechenden Plattformen (YouTube, Vimeo, Google Maps, etc.) entsprechende Code-Ausschnitte vorbereitet, die man direkt in den Blog einfügen kann. Am besten auf der jeweiligen Plattform nach einem Knopf für `embed` oder `share` suchen.

Bei Videos ist es ideal, wenn sie sich automatisch **an die Bildschirmgrösse anpassen**. Dies geht am einfachsten mit den hinterlegten YouTube- und Vimeo-Codes:

### YouTube einbetten

Einbetten von YouTube-Videos mit dem Code: `{{</*youtube video_id*/>}}`

(Die `video_id` steht bei jedem YouTube-Video in der Browser-URL.)

{{<youtube kQjtK32mGJQ>}}

### Vimeo einbetten

Einbetten von Vimeo-Videos geht mit dem Code: `{{</*vimeo video_id*/>}}`

{{<vimeo 194276412>}}

### Code und Code-Blöcke

Mit dem Code-Symbol `<>` können Wörter auf `diese Art` hervorgehoben werden. Dies wird zum Beispiel für Tastenkombinationen wie `ctrl+s` oder für `Programmiercode` verwendet. Auch Math-Formeln können so ausgedrückt werden: `y = mx + b`.

Für längere solche Abschnitte verwendet man am besten das Code-Block-Symbol. Damit wird ein solcher Block erstellt:

```
const sun1 = "sun" + "il";
const sun2 = "su" + "n" + "il";
sun1 === sun2;
```

## Spass haben

😀 Viel Spass mit deinem Blog!
