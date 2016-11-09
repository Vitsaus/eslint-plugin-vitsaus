module.exports = {
    meta: {
        docs: {
            description: "enforce one newline after function declaration",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: []
    },
    create: function(context) {
        return {
            FunctionDeclaration: function(node) {

                var afterToken = context.getTokenAfter(node);

                if(afterToken && afterToken.loc.start.line !== node.loc.end.line + 2) {

                    context.report({
                        node: node,
                        message: "There must be one newline after function declaration"
                    });

                }

            }
        };
    }
};
