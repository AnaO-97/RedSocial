// import * as ACTION from "./actionsTypes";

const stateInicial = {
    JWT_KEY : "",
    userData : {},
    updatedUserData : {}
};

function reducer (state = stateInicial, action){
    const { type, payload } = action;

    console.log(type, payload)
}

export default reducer;