var scenes;
(function (scenes) {
    let State;
    (function (State) {
        State[State["No_SCENE"] = -1] = "No_SCENE";
        State[State["START"] = 0] = "START";
        State[State["PLAY"] = 1] = "PLAY";
        State[State["INSTRUCTION"] = 2] = "INSTRUCTION";
        State[State["END"] = 3] = "END";
        State[State["NUM_OF_SCENES"] = 4] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
// PRIVATE INSTANCE MEMBERS
// PUBLIC PROPERTIES
// CONSTRUCTOR
// PRIVATE METHODS
// PUBLIC METHODS
//# sourceMappingURL=State.js.map