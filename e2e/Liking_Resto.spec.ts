
const assert = require("assert");

Feature("Favorite Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/fav");
});

const emptyFavoriteResto = "Ups! Resto Favorite Kamu Kosong";

Scenario("showing empty favorite restaurant", ({ I }) => {
  I.seeElement(".lists");
  I.see(emptyFavoriteResto, ".lists");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see(emptyFavoriteResto, ".lists");

  I.amOnPage("/");

  I.seeElement(".list-item_content h2 a");
  const firstRestoCard = locate(".restaurant-item_link").first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/fav");
  I.seeElement(".lists");
  const likedCardTitle = await I.grabTextFrom(".restaurant-item_link");

  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".list-item_content h2 a");
  const firstRestoCard = locate(".restaurant-item_link").first();
  I.click(firstRestoCard);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/fav");
  I.seeElement(".card");
  const likedCardTitle = await I.grabTextFrom(".restaurant-item_link");
  I.click(likedCardTitle);

  // URL: /resto/:id
  I.seeElement("#likeButton");
  I.click("#likeButton");

  // URL: /#/favorite
  I.amOnPage("/#/fav");
  I.seeElement("#lists");
  I.dontSeeElement(".list-item");
  I.dontSeeElement(".restaurant-item_link");
});
