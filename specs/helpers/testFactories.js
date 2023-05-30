import LikeButtonPresenter from "../../src/scripts/utils/fav-button-presenter";

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    restaurant,
  });
};

export { createLikeButtonPresenterWithResto };
