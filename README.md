# ShipYard

A product-catalog storefront built from scratch with **Next.js + TypeScript**. This is the reference project for the Module 5 mini-project (Part 1 of 3: Catalog Setup).

**Live demo:** https://kalviumcommunity.github.io/shipyard/

## What it does

- A responsive **product grid** on the home page, rendered from typed data.
- A dynamic **`/products/[id]`** detail route, one page per product.
- A typed **`ProductCard`** component and a shared `Product` type.
- A **404** page for ids that do not exist.

## Run it locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build the static site

```bash
npm run build
# static output is written to ./out
```

## Project structure

```
app/
  layout.tsx              root layout (nav + footer)
  page.tsx                home page: the product grid
  globals.css             styles
  not-found.tsx           404 page
  components/
    ProductCard.tsx       typed card, one product per card
  data/
    products.ts           the Product type + the product list + getProduct()
  products/
    [id]/
      page.tsx            dynamic product detail route
```

## Part of a 3-part mini-project

1. **Catalog Setup** (this repo): repo, scaffold, grid, detail routes.
2. **Optimize**: `next/image`, `next/font`, lazy loading, metadata.
3. **Measure, Deploy & Ship**: Lighthouse 90+, deploy, submit.
