module.exports = {
    meta: {
        docs: {
            description: "enforce one newline after class declaration",
            category: "Stylistic Issues",
            recommended: false
        },
        schema: []
    },
    create: function(context) {
        return {
            ClassDeclaration: function(node) {

                var afterToken = context.getTokenAfter(node);

                if(afterToken && afterToken.loc.start.line !== node.loc.end.line + 2) {

                    context.report({
                        node: node,
                        message: "There must be one newline after class declaration"
                    });

                }

            }
        };
    }
};
