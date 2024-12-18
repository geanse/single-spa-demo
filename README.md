# Single SPA demo

Run `single-spa-app` first, then `single-spa-root-config`, and open http://localhost:9000/demo.

If you want to change which Parcel is loaded in `/demo`, update the URL in `single-spa-app/src/App.tsx` at line 8.

## Requirements for Using Vizualist Single SPA Parcels

1. Vizualist Single SPA Parcels must be loaded using [SystemJS](https://github.com/systemjs/systemjs) because our Parcel is a UMD module, not an ES module.

Here’s an example of a working Vizualist Table Single SPA Parcel:
[Vizualist Table Parcel](https://res.cloudinary.com/wochap/raw/upload/v1734538220/tmp/soe6rkmbbdlpijfnusxo.js)
