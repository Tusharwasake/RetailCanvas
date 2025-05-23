export const WishlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            };

        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter(item => item.id !== action.payload.id)
            };

        case "CLEAR_WISHLIST":
            return {
                ...state,
                wishlist: []
            };

        default:
            return state;
    }
};
