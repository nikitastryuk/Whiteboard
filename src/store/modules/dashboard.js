import tools from '../../components/whiteboard/tools/tools';

const state = {
    tool: null,
    toolArgs: {
        size: 5,
        color: '#7841CC'
    }
};

const mutations = {
    'SET_TOOL_COLOR' (state, toolColor) {
        state.toolArgs.color = toolColor;
    },
    'SET_TOOL_SIZE' (state, toolSize) {
        state.toolArgs.size = toolSize;
    },
    'SET_WHITEBOARD_TOOL' (state, tool) {
        state.tool = tool;
        console.log(tool);
        console.log(tools);
        console.log(tools[tool]);
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
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}