const path = require('path');
const createExpoWecPackConfigAsyc = require('@expo/webpack-config');


module.exports = async function(env,argv){
    const config = await createExpoWecPackConfigAsyc(env,argv);

    config.module.rules.push({
        test:/\.js$/,
        loader:'babel-loader',
        include:[
            path.join(__dirname,'node_modules/react-router-native')
        ]
    })


    return config;
};