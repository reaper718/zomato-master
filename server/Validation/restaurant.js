import joi from "joi";

export const ValidateRestaurantCity = (restaurant) => {
    const Schema = joi.object({
        city: joi.string().required()
    });

    return Schema.validateAsync(restaurant);

};

export const ValidateRestaurantSearchString = (restaurantObj) => {
    const Schema = joi.object({
        searchString: joi.string().required()
    });

    return Schema.validateAsync(restaurantObj);

};