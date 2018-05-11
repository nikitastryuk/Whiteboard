import tools from '../../components/whiteboard/tools/tools';
import paper from 'paper';
const state = {
    tool: null,
    toolArgs: {
        size: 2,
        color: '#000000'
    },
    eraserArgs: {
        size: 2,
        color: 'lightblue'
    }
};

const mutations = {
    'SET_TOOL_COLOR' (state, toolColor) {
        state.toolArgs.color = toolColor;
    },
    'SET_TOOL_SIZE' (state, toolSize) {
        state.toolArgs.size = toolSize;
    },
    'SET_ERASER_SIZE' (state, eraserSize) {
        state.eraserArgs.size = eraserSize;
    },
    'SET_ERASER_COLOR' (state, eraserColor) {
        state.eraserArgs.color = eraserColor;
    },
    'SET_WHITEBOARD_TOOL' (state, tool) {
        state.tool = tool;
        if (tools[tool]) {
            tools[tool].activate();
        } else {
            console.warn('unknown tool');
        }
    }
}


const actions = {
    setToolColor: ({
        commit
    }, toolColor) => {
        commit('SET_TOOL_COLOR', toolColor);
    },
    setToolSize: ({
        commit
    }, toolSize) => {
        commit('SET_TOOL_SIZE', toolSize);
    },
    setEraserSize: ({
        commit
    }, eraserSize) => {
        commit('SET_ERASER_SIZE', eraserSize);
    },
    setEraserColor: ({
        commit
    }, eraserColor) => {
        commit('SET_ERASER_COLOR', eraserColor);
    },
    setWhiteboardTool: ({
        commit
    }, tool) => {
        commit('SET_WHITEBOARD_TOOL',  tool);
    }
}

const getters = {
    tool(state) {
        return state.tool;
    },
    toolArgs(state) {
        return state.toolArgs;
    },
    eraserArgs(state) {
        return state.eraserArgs;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}