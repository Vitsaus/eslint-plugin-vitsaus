module.exports = {
    meta: {
        docs: {
            description: "enforce one newline before export declaration",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: []
    },
    create: function(context) {
        return {
            ExportDefaultDeclaration: function(node) {

                var beforeToken = context.getTokenBefore(node);

                if(beforeToken && beforeToken.loc.end.line !== node.loc.start.line - 2) {

                    return context.report({
                        node: node,
                        message: "There must be one newline before export declaration"
                    });

                }

            },
            ExportNamedDeclaration: function(node) {

                var beforeToken = context.getTokenBefore(node);

                if(beforeToken && beforeToken.loc.end.line !== node.loc.start.line - 2) {

                    return context.report({
                        node: node,
                        message: "There must be one newline before export declaration"
                    });

                }

            }
        };
    }
};
