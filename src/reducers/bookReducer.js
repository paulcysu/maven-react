const initialState = {
    all: {},
    single: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_BOOK":
            return {
                all: action.payload,
                single: null
            }
        case "SELECT_WORD":
            return {
                ...state,
                single: action.payload
            }
        case "TOGGLE_COMPLETE":
            const new_db = state.all.word_list.map( item => {
                if (item.id === action.id)  {
                    return {
                        completed: true,
                        definition: "very unpleasantly or unfairly",
                        example: "he had treated her abominably",
                        id: 0,
                        punctuation: "a·bom·i·na·bly",
                        type: "(adverb)",
                        word: "Abominably"
                    }
                }
            })
            return {
                ...state,
                all: new_db
            }
        default: 
            return state
    }
}
