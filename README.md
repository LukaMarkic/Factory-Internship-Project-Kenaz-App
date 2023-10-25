# Factory Internship Project Kenaz App

Ovaj projekt predstavlja projektni zadatak izrađen kroz stručnu praksu u tvrtki Factory d.o.o.. Projekt predstvalja mrežnu starnicu za pristup članicima i vijestima, kao i raspored istih kroz odgovarajuće kategorije (News, Bussines, Sport, Life, Tech i Travel).

## Korištene tehnologije

Aplikacija je izrađena korištenjem JavaScript razvojnog okvira [ReactJS](https://react.dev/). Za potrebe stilizacije korišten je CSS kao i CSS predproceski alat za stiliziranje [Syntactically Awesome Style Sheets -SASS](https://sass-lang.com/) (.scss).

## Strukutra

Zbog optimizacijskih razloga (brže ponovne izgradnje), webpack obrađuje samo datoteke koje se nalze unutar /src direktorija. Unutar ovog dirktorija je sadržana glavna logika aplikacije jer upravo u njemu trebaju biti sadžane skriptne datoteka (.js) i datoteke za stilsko uređenje dokumenta (.css i .scss). U nastavku je moguće vidjeti strukturu /src direktorija.
<br/>

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /src
  - /components
  - /context
  - /data
  - /help
  - /hooks
  - /images
  - /pages
  - /styles
  - App.js
  - index.js

</div>
<br />

Dirketorij se sastoji od podirektorija: components, context, data, help, hooks, images, pages, styles. Kao i JavaScript datoteke App.js i index.js.
Izgled /components direktorija prikazan je u nastavaku. Unutar tog direktorija sadržane su same React komponente kao što su Header koji predstavlja zaglavlje. Te komponente su također rapoređene u odgovarajuće direkorije prema njihovim svojstvima, primjerice one komponete koje se nalaze unutar podnožja (engl. _footer_) smještene su u direktorij /footer.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /components
  - /aside
    - AsideBannerContainer.js
    - Sidebar.js
    - SocialBox.js
  - /category
    - /list
      - ArticleListElement.js
      - CategoryArticlesList.js
    - ArticleTumbnail.js
    - CategoryArticlesBox.js
    - CategoryCarousel.js
  - /cover-article
    - CoverArticle.js
  - /footer
    - Footer.js
    - FooterPost.js
    - InfoFooter.js
    - Newsletter.js
    - TwitterFeed.js
    - WidgetTag.js
  - /shared
    - Banner.js
    - CarouselWheel.js
    - ContentWrapper.js
    - Header.js
  - /single-page
    - CommentSection.js
    - SingleArticle.js
  - ImageCarousel.js
  - ModalWindow.js

</div>
<br/>

Direktorij /context sadrži korisniči kreirane kontekste.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /context
  - CategoryContext.js

</div>
<br/>

Direktorij /data sadrži odgovarajući sadržaj koji se učitava.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /data
  - /category
    - businessArticle.json
    - lifeArticle.json
    - newsArticles.json
    - sportArticle.json
    - techArticle.json
  - authorData.json
  - carouselImagesData.js
  - twitterPosts.json
  - widgetTags.json

</div>

<br/>

Direkorij /help sadrži datoteke unutar kojih su definirane pomoćne funkcije.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /help
  - arrayHelp.js
  - postDataHelp.js

</div>
<br/>

Direkorij /hooks sadrži korisnički napisan _hook_.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /hooks
  - useCategoryContext.js

</div>
<br/>

Direktorij /images sadrži slike, ikone kao i sami logo aplikacije.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /images
  - /carousel-display
    - coffe_cup.png
    - fence_img.png
    - island_img.png
    - pier.png
    - ship_img.png
    - street.png
    - sunshine_profile.png
  - /logos
    - kenaz-blue-logo.svg
    - kenaz-logo.svg
  - /navigation
    - left_brown.svg
    - left_gray.svg
    - left_orange.svg
    - right_brown.svg
    - right_gray.svg
    - right_orange.svg
  - /social-icons
    - dribble-icon.svg
    - facebook-icon.svg
    - linkedin-logo.png
    - rss-icon.svg
    - skype-icon.svg
    - twitter-bird.svg
    - twitter-icon.svg
    - youtube-icon.svg
  - author-icon.png
  - black_layer.svg
  - calendar-icon.png
  - comment-icon.svg
  - comment-profile-image.png
  - search-icon.svg
  - white-layer.png

</div>
<br/>

Direktorij /pages sadrži tri glavna web mjesta (Home page, Category page, Single page). Home page se učitava samim otvarenjem stranice i on predstvlja naslovnu stranicu. Category page prikazuje sadržaj odgovarjuće kategorije koje smo naveli prethodno. Primjerice, za kategoriju News prikazat će se članici za tu kategoriju. U konačnici Single page sadrži sami sadržaj članka, informacije o autoru članka i sekciju u kojem je moguće ostaviti komentar.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /pages
  - Category.js
  - Home.js
  - Single.js

</div>
<br/>

Direktorij /styles sadrži datoteke za stilsko uređene stranice.

<div style="background-color: #333; color: white; padding: 10px; border-radius: 5px">

- /styles
  - /category
    - articleTumbinal.scss
    - categoryArticleBox.scss
    - categoryArticleList.scss
    - categoryCarousel.scss
  - /footer
    - footer.scss
    - footerPost.scss
    - infoFooter.scss
    - newsletter.scss
    - twitterFeed.scss
    - widgetTag.scss
  - /modules
    - disable.module.scss
  - /shared-components
    - banner.scss
    - carousel.scss
    - contentWrapper.scss
    - header.scss
    - sidebar.scss
    - socialNetwork.scss
  - /single-page
    - commentSection.scss
    - singleArticle.scss
  - \_colors.scss
  - \_mixins.scss
  - App.css
  - coverArticle.scss
  - imageCarousel.scss
  - index.css
  - modalWindow.scss
  - page.scss
  - post.scss

</div>

## Pokretanje

### Instaliranje Node.js i Node Package Manger paketa

Kako bi bilo moguće pokretanje potrebno je imati instaliran Node.js odnosno Node Package Manger (NPM). Ukoliko nije instaliran instalacijkom paketu je moguće pristupiti putem ljedeće poveznice: [NodeJS Download page](https://nodejs.org/en/download).
Putem navedne poveznice pistupa se službenoj stranici gdje je moguće preuzeti instalcijske pakete LTS (Long-Term Support) ili Current verzije za odgovarajući operacijski sustav (Windows, MacOS, Linux). Preporuča se preuzimanje LTS verzije instalacijskog paketa. Nakon instalcije potrebno je pokrenuti instalcijki paket i sljediti upute. Nakon završetka instalacije možemo provjeriti je li ona bila uspješna upisivanjem sljedećih naredbi u naredbeni redak:

```bash
node -v
npm -v
```

Ukoliko kao ispis dobijemo verziju programa, instalacija je uspješna.

_Ovaj projekt je konkrentno razvijen na veriji Node.js-a v18.13.0 i s verzijom NPM-a 8.19.3._

### 1. Kloniranje repozitorija:

Prvo je potrebno klonirati repozitorij za što je moguće koristiti sljedeću _bash_ naredbu:

```bash
git clone https://github.com/LukaMarkic/factory-internship-project-kenaz-app.git
```

### 2. Navigacija do direktorija:

Promijenite svoj trenutni direktorij na direktorij kloniranog projekta. Za navigaciju kroz direktorije moguće je korsiti _bash_ naredbu **cd**, a primjer njezinog poziva prikazan je u nastavku:

```bash
cd ./factory-internship-project-kenaz-app
```

### 3. Instaliranje paketa i ovisnosti:

Kako bi pokratenje projekta bilo usješno potrebno je instalirati ovisnosi (eng. _Dependencies_). Navedeno je potrebno uraditi korištenjem upisivanje prikazane naredbe u naredbeni redak.

```bash
npm install
```

### 4. Pokretanje projekta (razvojog servera/izgradnja aplikacije):

Ukoliko smo gotovi s predhodnim koracima, možemo pokrenuti razvojni server kako bi se izvodila naša React aplikacija. Potrebno je koristi **start** naredbu.

```bash
npm start
```

Na ovaj način smo aplikaciju pokrenuli u razvojnom načinu rada, no ako je aplikacija spremna za distribuciju istu je moguće "izgraditi" korištnjem
**run build** naredbe.

```bash
npm run build
```
