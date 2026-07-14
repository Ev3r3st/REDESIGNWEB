Změny provedené pro "Mapa přínosu AI pro VUCH"

- Přidán jednoduchý Node/Express server: `server.js` — ukládá dokumenty do `data/` jako JSON s náhodným ID a slouží veřejné zobrazení na `/public/:id`.
- Frontend dokument: [public/ai-map.html](public/ai-map.html) — interaktivní formulář, výpočty a tlačítko "Uložit a sdílet".
- Testy: `__tests__/calc.test.js` — základní test výpočtů.
- `package.json` s příkazy `start` a `test`.

Jak to spustit lokálně

1) Nainstalujte závislosti:

```
cd REDESIGNWEB
npm install
```

2) Spusťte server:

```
npm start
```

Server bude dostupný na `http://localhost:3000`. Dokument si otevřete na:

```
http://localhost:3000/public/<id>
```

Jak vytvořit veřejný sdílecí odkaz

- Na stránce `public/ai-map.html` klikněte na `Uložit a sdílet` — provede POST na `/api/documents` a vrátí `url` s formátem `/public/<id>`.
- Veřejný odkaz je bezpečný: generované ID jsou náhodné UUID a server slouží pouze daný soubor. Návštěvník nemá přístup k dalším dokumentům ani administraci.

Bezpečnost a migrace

- Místní řešení používá adresář `data/` pro jednoduchost. Pokud chcete integrovat do existující DB, připravím migraci a bezpečné API. Neprovádí se žádné ukládání tajných klíčů do klienta.

Další poznámky

- Všechno uživatelské rozhraní je v češtině.
- Veřejné podklady jsou vloženy v dokumentu (odkazy). Viz `public/ai-map.html`.
