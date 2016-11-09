module.exports = {
    meta: {
        docs: {
            description: "enforce one newline before if statement",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: []
    },
    create: function(context) {
        return {
            IfStatement: function(node) {

                var beforeToken = context.getTokenBefore(node);

                if(beforeToken && beforeToken.loc.end.line !== node.loc.start.line - 2) {

                    context.report({
                        node: node,
                        message: "There must be one newline before if statement"
                    });

                }

            }
        };
    }
}
