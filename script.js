const products = Array.isArray(window.SKINOVA_PRODUCTS) ? window.SKINOVA_PRODUCTS : [];
const state = { language: "en", cart: JSON.parse(localStorage.getItem("skinova-cart") || "[]") };
const $ = (id) => document.getElementById(id);
const translations = {
 en:{
  announcement:"Authentic Korean skincare • Delivery across Bangladesh",navHome:"Home",navShop:"Shop",navBest:"Best Sellers",navNew:"New Arrivals",navAbout:"About",navContact:"Contact",bag:"Bag",
  heroEyebrow:"THE K-BEAUTY EDIT · BANGLADESH",heroTitle:'Premium skincare for <em>healthy,</em> glowing skin.',heroText:"Thoughtfully selected Korean skincare essentials to make your everyday routine feel special.",shopNow:"Explore the collection",ourStory:"Discover our story",heroNote:"Your glow, your way.",heroBottom:"A softer approach to skincare",
  trust1:"Authentic Korean skincare",trust2:"Carefully curated essentials",trust3:"Delivery across Bangladesh",shopEyebrow:"FIND YOUR EVERYDAY FAVOURITE",shopTitle:"The skincare shelf",shopDescription:"A considered collection for your skin, your routine, your rhythm.",searchPlaceholder:"Search products...",filterLabel:"Category",allCategories:"All categories",sortLabel:"Sort",emptyTitle:"Your skincare edit is coming soon.",emptyText:"We're preparing the product collection. Please check back soon or message us for product enquiries.",messageUs:"Message Skinova BD",catalogNote:"Product availability and prices will be updated here. Message us to confirm current stock.",
  bestEyebrow:"THE SKINOVA PROMISE",bestTitle:'Good skin days<br>start with <em>good care.</em>',bestText:"From gentle daily cleansers to nourishing hydration, find the little steps that make your routine feel like self-care.",browseProducts:"Browse products ↗",newEyebrow:"A FRESH LITTLE SOMETHING",newTitle:"New arrivals & special offers",offerLabel:"THE SKINOVA EDIT",offerTitle:"A little more love<br>for your skin.",offerText:"New finds and special offers will be announced here. Follow us to be the first to know.",followInstagram:"Follow on Instagram ↗",
  aboutEyebrow:"A NOTE FROM SKINOVA",aboutTitle:'Your skin deserves<br><em>thoughtful care.</em>',aboutText:"Skinova BD is here to bring you authentic Korean skincare, thoughtfully selected for your everyday routine. We believe skincare is more than a trend — it's a little promise you make to yourself.",reviewsEyebrow:"KIND WORDS, COMING SOON",reviewsTitle:"Your experience matters.",reviewsText:"Customer stories and reviews will be featured here as our Skinova community grows.",contactEyebrow:"LET'S TALK SKINCARE",contactTitle:"We're just a message away.",contactText:"Questions about a product, an order or your skincare routine? We'd love to hear from you.",facebookMessage:"Message on Facebook ↗",instagramMessage:"Instagram DM ↗",emailLabel:"EMAIL",locationLabel:"LOCATION",deliveryLabel:"DELIVERY",deliveryText:"Inside Dhaka ৳70 · Outside Dhaka ৳120",paymentLabel:"PAYMENT",paymentText:"Cash on Delivery · bKash",footerLine:"A little care, every day.",rights:"All rights reserved.",cartTitle:"Your bag",cartEmpty:"Your bag is waiting for something lovely.",subtotal:"Subtotal",cartShipping:"Delivery: Dhaka ৳70 · Outside Dhaka ৳120",sendOrder:"Prepare order message",cartNote:"You'll send your order through Facebook or Instagram. No online payment is collected on this website.",added:"Added to your bag",removed:"Item removed",emptyCart:"Your bag is empty.",orderCopied:"Order summary copied. Paste it in your Facebook or Instagram message.",copyFailed:"Please copy your order details manually.",noProducts:"No products match your search."
 },
 bn:{
  announcement:"অরিজিনাল কোরিয়ান স্কিনকেয়ার • সারা বাংলাদেশে ডেলিভারি",navHome:"হোম",navShop:"শপ",navBest:"বেস্ট সেলার",navNew:"নতুন পণ্য",navAbout:"আমাদের সম্পর্কে",navContact:"যোগাযোগ",bag:"ব্যাগ",
  heroEyebrow:"কে-বিউটি কালেকশন · বাংলাদেশ",heroTitle:'স্বাস্থ্যোজ্জ্বল ও উজ্জ্বল ত্বকের জন্য <em>প্রিমিয়াম</em> স্কিনকেয়ার।',heroText:"আপনার প্রতিদিনের স্কিনকেয়ার রুটিনকে বিশেষ করে তুলতে বেছে নেওয়া কোরিয়ান স্কিনকেয়ার পণ্য।",shopNow:"পণ্য দেখুন",ourStory:"আমাদের গল্প জানুন",heroNote:"আপনার ত্বকের উজ্জ্বলতা, আপনার মতো করে।",heroBottom:"ত্বকের যত্ন হোক আরও কোমল",
  trust1:"অরিজিনাল কোরিয়ান স্কিনকেয়ার",trust2:"বাছাই করা প্রয়োজনীয় পণ্য",trust3:"সারা বাংলাদেশে ডেলিভারি",shopEyebrow:"আপনার পছন্দের পণ্য খুঁজুন",shopTitle:"স্কিনকেয়ার কালেকশন",shopDescription:"আপনার ত্বক ও প্রতিদিনের রুটিনের জন্য বাছাই করা পণ্য।",searchPlaceholder:"পণ্য খুঁজুন...",filterLabel:"ক্যাটাগরি",allCategories:"সব ক্যাটাগরি",sortLabel:"সাজান",emptyTitle:"আমাদের পণ্যের কালেকশন আসছে।",emptyText:"আমরা পণ্যের তালিকা প্রস্তুত করছি। পণ্য সম্পর্কে জানতে আমাদের মেসেজ করুন।",messageUs:"Skinova BD-কে মেসেজ করুন",catalogNote:"পণ্যের স্টক ও দাম এখানে আপডেট করা হবে। বর্তমান স্টক জানতে মেসেজ করুন।",
  bestEyebrow:"SKINOVA-র প্রতিশ্রুতি",bestTitle:'সুন্দর ত্বকের শুরু<br><em>যত্ন থেকে।</em>',bestText:"প্রতিদিনের কোমল ক্লেনজার থেকে ময়েশ্চারাইজিং পণ্য—আপনার রুটিনে যোগ করুন নিজের যত্নের ছোট ছোট মুহূর্ত।",browseProducts:"পণ্য দেখুন ↗",newEyebrow:"নতুন কিছু",newTitle:"নতুন পণ্য ও বিশেষ অফার",offerLabel:"SKINOVA কালেকশন",offerTitle:"আপনার ত্বকের জন্য<br>আরও একটু ভালোবাসা।",offerText:"নতুন পণ্য ও বিশেষ অফারের খবর এখানে জানানো হবে। সবার আগে জানতে আমাদের ফলো করুন।",followInstagram:"ইনস্টাগ্রামে ফলো করুন ↗",
  aboutEyebrow:"SKINOVA-র পক্ষ থেকে",aboutTitle:'আপনার ত্বক প্রাপ্য<br><em>যত্ন ও ভালোবাসা।</em>',aboutText:"Skinova BD আপনাদের জন্য নিয়ে এসেছে অরিজিনাল কোরিয়ান স্কিনকেয়ার পণ্য, যা প্রতিদিনের রুটিনের কথা মাথায় রেখে বাছাই করা। আমাদের বিশ্বাস, স্কিনকেয়ার শুধু ট্রেন্ড নয়—এটি নিজের প্রতি করা একটি ছোট প্রতিশ্রুতি।",reviewsEyebrow:"আপনাদের মতামত শীঘ্রই",reviewsTitle:"আপনার অভিজ্ঞতা আমাদের কাছে গুরুত্বপূর্ণ।",reviewsText:"Skinova কমিউনিটি বড় হওয়ার সঙ্গে সঙ্গে আপনাদের মতামত ও অভিজ্ঞতা এখানে তুলে ধরা হবে।",contactEyebrow:"স্কিনকেয়ার নিয়ে কথা বলি",contactTitle:"আমরা আছি আপনার এক মেসেজ দূরে।",contactText:"পণ্য, অর্ডার বা স্কিনকেয়ার রুটিন নিয়ে কোনো প্রশ্ন আছে? আমাদের মেসেজ করুন।",facebookMessage:"ফেসবুকে মেসেজ করুন ↗",instagramMessage:"ইনস্টাগ্রামে মেসেজ করুন ↗",emailLabel:"ইমেইল",locationLabel:"ঠিকানা",deliveryLabel:"ডেলিভারি",deliveryText:"ঢাকার মধ্যে ৳৭০ · ঢাকার বাইরে ৳১২০",paymentLabel:"পেমেন্ট",paymentText:"ক্যাশ অন ডেলিভারি · বিকাশ",footerLine:"প্রতিদিন একটু যত্ন।",rights:"সর্বস্বত্ব সংরক্ষিত।",cartTitle:"আপনার ব্যাগ",cartEmpty:"আপনার ব্যাগে এখনো কোনো পণ্য নেই।",subtotal:"সর্বমোট",cartShipping:"ডেলিভারি: ঢাকা ৳৭০ · ঢাকার বাইরে ৳১২০",sendOrder:"অর্ডার মেসেজ তৈরি করুন",cartNote:"ফেসবুক বা ইনস্টাগ্রামে আপনার অর্ডার পাঠাতে হবে। এই ওয়েবসাইটে অনলাইন পেমেন্ট নেওয়া হয় না।",added:"ব্যাগে যোগ হয়েছে",removed:"পণ্য সরানো হয়েছে",emptyCart:"আপনার ব্যাগ খালি।",orderCopied:"অর্ডারের বিবরণ কপি হয়েছে। ফেসবুক বা ইনস্টাগ্রাম মেসেজে পেস্ট করুন।",copyFailed:"অর্ডারের বিবরণ নিজে কপি করুন।",noProducts:"আপনার সার্চের সঙ্গে মেলে এমন পণ্য নেই।"
 }
};
function t(key){return translations[state.language][key]||translations.en[key]||key}
function applyLanguage(){
 document.documentElement.lang=state.language==="bn"?"bn":"en";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const val=t(el.dataset.i18n);if(val)el.innerHTML=val});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 $("languageToggle").textContent=state.language==="en"?"বাংলা":"English";
 renderProducts();renderCart();
}
function money(n){return "৳"+Number(n||0).toLocaleString("en-BD")}
function safeText(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderCategories(){
 const select=$("categoryFilter");const selected=select.value||"all";const categories=[...new Set(products.map(p=>p.category).filter(Boolean))];
 select.innerHTML=`<option value="all">${t("allCategories")}</option>`+categories.map(c=>`<option value="${safeText(c)}">${safeText(c)}</option>`).join("");
 select.value=categories.includes(selected)?selected:"all";
}
function renderProducts(){
 const grid=$("productGrid");const query=$("productSearch").value.toLowerCase().trim();const category=$("categoryFilter").value;const sort=$("sortFilter").value;
 let list=products.filter(p=>(!query||`${p.name} ${p.nameBn||""} ${p.category||""}`.toLowerCase().includes(query))&&(category==="all"||p.category===category));
 if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);
 if(!list.length){grid.innerHTML=`<div class="empty-products"><span>✳</span><h3>${products.length?t("noProducts"):t("emptyTitle")}</h3><p>${products.length?t("noProducts"):t("emptyText")}</p><a class="button button-outline" href="https://www.facebook.com/share/1GrWrSQ7ph/?mibextid=wwXIfr" target="_blank" rel="noopener">${t("messageUs")}</a></div>`;return}
 grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-photo">${p.image?`<img src="${safeText(p.image)}" alt="${safeText(p.name)}" loading="lazy">`:`<span class="product-placeholder">SKINOVA</span>`}${p.badge?`<span class="product-badge">${safeText(p.badge)}</span>`:""}<button class="add-button" data-add="${safeText(p.id)}" aria-label="Add ${safeText(p.name)} to bag">+</button></div><div class="product-info"><span class="product-category">${safeText(p.category||"Skincare")}</span><h3>${safeText(state.language==="bn"&&p.nameBn?p.nameBn:p.name)}</h3><span class="product-price">${p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span>`:""}${money(p.price)}</span></div></article>`).join("");
 grid.querySelectorAll("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addToCart(btn.dataset.add)));
}
function saveCart(){localStorage.setItem("skinova-cart",JSON.stringify(state.cart))}
function addToCart(id){const p=products.find(x=>x.id===id);if(!p)return;const item=state.cart.find(x=>x.id===id);if(item)item.qty++;else state.cart.push({id,qty:1});saveCart();renderCart();showToast(t("added"))}
function changeQty(id,delta){const item=state.cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)state.cart=state.cart.filter(x=>x.id!==id);saveCart();renderCart()}
function renderCart(){
 $("cartCount").textContent=state.cart.reduce((n,x)=>n+x.qty,0);
 const items=$("cartItems");const valid=state.cart.map(x=>({...x,product:products.find(p=>p.id===x.id)})).filter(x=>x.product);
 if(!valid.length){items.innerHTML=`<p class="cart-empty">${t("cartEmpty")}</p>`;$("cartSubtotal").textContent=money(0);return}
 items.innerHTML=valid.map(x=>`<div class="cart-row"><div><strong>${safeText(state.language==="bn"&&x.product.nameBn?x.product.nameBn:x.product.name)}</strong><small>${money(x.product.price)} each</small></div><div class="quantity-controls"><button data-qty="${safeText(x.id)}" data-delta="-1">−</button><span>${x.qty}</span><button data-qty="${safeText(x.id)}" data-delta="1">+</button></div></div>`).join("");
 items.querySelectorAll("[data-qty]").forEach(b=>b.addEventListener("click",()=>changeQty(b.dataset.qty,Number(b.dataset.delta))));
 $("cartSubtotal").textContent=money(valid.reduce((n,x)=>n+x.product.price*x.qty,0));
}
function showToast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2600)}
function openCart(){ $("cartOverlay").classList.add("open");$("cartOverlay").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeCart(){ $("cartOverlay").classList.remove("open");$("cartOverlay").setAttribute("aria-hidden","true");document.body.style.overflow=""}
function prepareOrder(){
 const valid=state.cart.map(x=>({...x,product:products.find(p=>p.id===x.id)})).filter(x=>x.product);
 if(!valid.length){showToast(t("emptyCart"));return}
 const total=valid.reduce((n,x)=>n+x.product.price*x.qty,0);
 const lines=["Hello Skinova BD! I'd like to place an order:",...valid.map(x=>`• ${x.product.name} × ${x.qty} — ${money(x.product.price*x.qty)}`),`Subtotal: ${money(total)}`,"Delivery: Dhaka ৳70 / Outside Dhaka ৳120","Payment: Cash on Delivery or bKash","Please confirm availability and delivery details."];
 const message=lines.join("\n");
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(message).then(()=>showToast(t("orderCopied"))).catch(()=>showToast(t("copyFailed")))}else{showToast(t("copyFailed"))}
 window.open("https://www.facebook.com/share/1GrWrSQ7ph/?mibextid=wwXIfr","_blank","noopener");
}
$("languageToggle").addEventListener("click",()=>{state.language=state.language==="en"?"bn":"en";applyLanguage()});
$("openCart").addEventListener("click",openCart);$("closeCart").addEventListener("click",closeCart);
$("cartOverlay").addEventListener("click",e=>{if(e.target===$("cartOverlay"))closeCart()});
$("sendOrder").addEventListener("click",prepareOrder);
$("productSearch").addEventListener("input",renderProducts);$("categoryFilter").addEventListener("change",renderProducts);$("sortFilter").addEventListener("change",renderProducts);
$("menuToggle").addEventListener("click",()=>$("mobileNav").classList.toggle("open"));
document.querySelectorAll("#mobileNav a").forEach(a=>a.addEventListener("click",()=>$("mobileNav").classList.remove("open")));
$("year").textContent=new Date().getFullYear();
renderCategories();applyLanguage();renderCart();
