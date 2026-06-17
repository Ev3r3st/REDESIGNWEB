# Redesign návrhy – Vercel static portfolio

Tento balíček obsahuje jednoduchý statický web pro prezentaci redesign návrhů klientům.

## Struktura

- `index.html` – hlavní stránka se seznamem návrhů
- `navrhy/ms-studanka/index.html` – konkrétní návrh pro MŠ Studánka
- `vercel.json` – jednoduchá konfigurace pro čisté URL adresy

## Jak nasadit na Vercel přes GitHub

1. Vytvoř na GitHubu nový repozitář, například `redesign-navrhy`.
2. Nahraj do něj všechny soubory z této složky.
3. Otevři Vercel.
4. Dej `Add New Project`.
5. Vyber GitHub repozitář `redesign-navrhy`.
6. Framework nech jako `Other` nebo bez frameworku.
7. Klikni na `Deploy`.

Po nasazení dostaneš veřejnou adresu například:

`https://redesign-navrhy.vercel.app`

Konkrétní návrh pro školku potom bude například:

`https://redesign-navrhy.vercel.app/navrhy/ms-studanka/`

## Jak přidat další redesign

1. Vytvoř novou složku:
   `navrhy/nazev-klienta/`
2. Do ní vlož `index.html` s návrhem.
3. Na hlavní stránce `index.html` přidej další kartu s odkazem:
   `/navrhy/nazev-klienta/`
4. Commitni a pushni změny na GitHub.
5. Vercel se po propojení s GitHubem přenasadí automaticky.
