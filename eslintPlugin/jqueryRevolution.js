module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary semicolons",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-extra-semi"
        },
        fixable: "code",
        schema: [] // no options
    },
    create: function(context) {
        return {
            ImportDeclaration(node){
                if(node.source.value === "react"){
                    context.report({
                        node,
                        message: 'dont use react use jquery'
                    })
                }
            }
        };
    }
};