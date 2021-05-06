const ACTION_TYPE = {
    WORLD: {
        UPDATE: 'WORLD_UPDATE'
    },
    LEVEL: {
        INIT: 'LEVEL_INIT',
        UPDATE: {
            LIGHTLEVEL: 'LEVEL_UPDATE_LIGHTLEVEL',
            STRUCTURE:'LEVEL_UPDATE_STRUCTURE',
        },
        CLEAR: {
            ENTITY: 'LEVEL_CLEAR_ENTITY',
        },
    },
    ENTITY: {
        MOB: {
            MOVE: 'ENTITY_MOB_MOVE'
        }
    },
    PLAYER: {
        INIT: 'PLAYER_INIT',
        JOIN: 'PLAYER_JOIN',
        MOVE: 'PLAYER_MOVE',
        INTERACT: 'PLAYER_INTERACT'
    },
    PLAYERS: {
        INIT: 'PLAYERS_INIT',
        JOIN: 'PLAYERS_JOIN',
        LEAVE: 'PLAYERS_LEAVE',
        MOVE: 'PLAYERS_MOVE',
        OBTAIN: 'PLAYERS_OBTAIN',
    }
}

Object.freeze(ACTION_TYPE);

export default ACTION_TYPE;