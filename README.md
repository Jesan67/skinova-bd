# Skinova BD — Free GitHub Pages website

A responsive, bilingual (English/Bangla) static storefront for Skinova BD. It includes a product catalogue, search, category filtering, sorting, a local shopping bag, customer-facing delivery/payment information, and social-message ordering.

## Important before publishing

- The product catalogue is intentionally empty because no product names, prices, or photos were provided. Add only products you actually stock in `products.js`.
- Replace the text-based logo in `index.html` with your supplied logo when ready.
- The cart is stored in the visitor's browser. There is no server, database, payment gateway, inventory management, or automatic order submission.
- The "Prepare order message" button copies the order summary and opens your Facebook page. The customer pastes the copied message into Messenger. You can change the destination to Instagram in `script.js` if preferred.
- Delivery charges are displayed as Dhaka ৳70 and outside Dhaka ৳120. Payment options are Cash on Delivery and bKash.

## Add products

Open `products.js` and add objects inside `window.SKINOVA_PRODUCTS`:

```js
window.SKINOVA_PRODUCTS = [
  {
    id: "cosrx-cleanser",
    name: "COSRX Salicylic Acid Daily Gentle Cleanser",
    nameBn: "COSRX স্যালিসিলিক অ্যাসিড ডেইলি জেন্টল ক্লেনজার",
    category: "Cleansers",
    price: 850,
    oldPrice: 950,
    badge: "BESTSELLER",
    image: "assets/cosrx-cleanser.jpg",
    description: "A gentle daily cleanser."
  }
];
```

Upload each product image into the `assets/` folder and make the `image` path match its filename. Remove `oldPrice` if there is no discount. You can add categories such as `Cleansers`, `Toners`, `Serums`, `Moisturisers`, and `Sunscreens`.

## Publish free with GitHub Pages

1. Sign in to https://github.com/ or create a free account.
2. Create a new repository. For example, name it `skinova-bd`. Choose **Public**.
3. Upload the contents of this folder to the repository's root. Make sure `index.html`, `styles.css`, `script.js`, and `products.js` are directly in the root—not inside an extra nested folder.
4. Open the repository's **Settings**.
5. Select **Pages** in the left sidebar.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then click **Save**.
8. Wait a few minutes. GitHub will show your public website URL in the Pages section. It will look like:
   `https://YOUR-USERNAME.github.io/skinova-bd/`

You do not need to buy a domain or hosting plan. GitHub Pages provides a free `github.io` address for public repositories.

## Updating the website

Whenever you want to change products, prices, photos, or text, edit the relevant file on GitHub and commit the changes. GitHub Pages will publish the update automatically after the build completes.

## Logo

When you provide your logo, add it under `assets/` (for example `assets/skinova-logo.png`). Then replace the brand block in `index.html` with an image tag, for example:

```html
<a class="brand" href="#home">
  <img src="assets/skinova-logo.png" alt="Skinova BD" class="brand-logo">
</a>
```

Add styling for `.brand-logo` in `styles.css` to set its height.
