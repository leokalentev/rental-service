import { Offer } from "../models/offer.js";
import ApiError from "../error/ApiError.js";
import { adaptOfferToClient } from "../adapters/offerAdapter.js";
import { adaptFullOfferToClient } from "../adapters/offerAdapter.js";
import { User } from "../models/user.js";

async function getAllOffers(req, res, next) {
  try {
    const offers = await Offer.findAll();
    const adaptedOffers = offers.map(adaptOfferToClient);
    res.send(adaptedOffers);
  } catch (e) {
    console.error("Не удалось получить список приложений: ", e);
  }
}

async function createOffer(req, res, next) {
  try {
    const {
      title,
      description,
      publishDate,
      city,
      isPremium,
      isFavorite,
      rating,
      type,
      rooms,
      guests,
      price,
      features,
      commentsCount,
      latitude,
      longitude,
      userId,
    } = req.body;

    if (!req.files?.previewImage || req.files.previewImage.length === 0) {
      return next(
        ApiError.badRequest("Превью изображение обязательно для загрузки")
      );
    }

    const previewImagePath = `/static/${req.files.previewImage[0].filename}`;

    const processedPhotos = req.files.photos
      ? req.files.photos.map((file) => `/static/${file.filename}`)
      : [];

    let parsedFeatures = [];
    if (features) {
      if (typeof features === "string") {
        try {
          parsedFeatures = JSON.parse(features);
        } catch {
          parsedFeatures = features
            .split(",")
            .map((f) => f.replace(/^[\[\]"]+|[\[\]"]+$/g, "").trim());
        }
      } else if (Array.isArray(features)) {
        parsedFeatures = features;
      }
    }

    const isPremiumBool = isPremium === "true" || isPremium === true;
    const isFavoriteBool = isFavorite === "true" || isFavorite === true;
    const ratingNum = parseFloat(rating);
    const roomsNum = parseInt(rooms, 10);
    const guestsNum = parseInt(guests, 10);
    const priceNum = parseInt(price, 10);
    const commentsCountNum = commentsCount ? parseInt(commentsCount, 10) : 0;
    const latitudeNum = parseFloat(latitude);
    const longitudeNum = parseFloat(longitude);

    console.log("parsedFeatures:", parsedFeatures);

    const offer = await Offer.create({
      title,
      description,
      publishDate,
      city,
      previewImage: previewImagePath,
      photos: processedPhotos,
      isPremium: isPremiumBool,
      isFavorite: isFavoriteBool,
      rating: ratingNum,
      type,
      rooms: roomsNum,
      guests: guestsNum,
      price: priceNum,
      features: parsedFeatures,
      commentsCount: commentsCountNum,
      latitude: latitudeNum,
      longitude: longitudeNum,
      authorId: userId,
    });

    return res.status(201).json(offer);
  } catch (error) {
    console.error(
      "[createOffer] реальная ошибка при создании предложения:",
      error
    );
    next(
      ApiError.internal("Не удалось добавить предложение: " + error.message)
    );
  }
}

async function getFullOffer(req, res, next) {
  try {
    const { id } = req.params;

    const offer = await Offer.findByPk(id, {
      include: { model: User, as: "author" },
    });

    if (!offer) {
      return next(ApiError.badRequest("Offer not found"));
    }

    const adaptedOffer = adaptFullOfferToClient(offer, offer.author);
    return res.send(adaptedOffer);
  } catch (error) {
    console.error("[getFullOffer] Ошибка:", error);
    return next(error);
  }
}

export { getAllOffers, createOffer, getFullOffer };
