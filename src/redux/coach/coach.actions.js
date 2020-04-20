export const addHeadline = (player) => ({
    type: "ADD_HEADLINE",
    payload: player,
});

export const addSubstitute = (player) => ({
    type: "ADD_SUBSTITUTE",
    payload: player,
});

export const removeHeadline = (player) => ({
    type: "REMOVE_HEADLINE",
    payload: player,
});

export const removeSubstitute = (player) => ({
    type: "REMOVE_SUBSTITUTE",
    payload: player,
});