function FormsData(state, action) {
    switch (action.type) {
        case "fname":
            state.fname = action.state;
            return state;
        case "lname":
            state.lname = action.state;
            return state;
        case "emailid":
            state.emailid = action.state;
            return state;
        case "gender":
            state.gender = action.state;
            return state;
        case "reset":
            state.fname = action.state.fname;
            state.lname = action.state.lname;
            state.emailid = action.state.emailid;
            state.gender = action.state.gender;
            return state;
        default:
            return state;
    }
}

export default FormsData;