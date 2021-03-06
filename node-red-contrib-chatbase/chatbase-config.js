module.exports = function(RED) {
    const register = function (config) {
        RED.nodes.createNode(this, config);
        this.name = config.name;
        this.version = config.version
    }
    RED.nodes.registerType("chatbase-config", register, {
    	credentials: {
    		token:        { type: "text" }
    	}

    });
}