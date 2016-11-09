module.exports = {
    meta: {
        docs: {
            description: "enforce one newline after if statement",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: []
    },
    create: function(context) {
        return {
            IfStatement: function(node) {

                var afterToken = context.getTokenAfter(node);

                if(afterToken && afterToken.loc.start.line !== node.loc.end.line + 2) {

                    context.report({
                        node: node,
                        message: "There must be one newline after if statement"
                    });

                }

            }
        };
    }
};
