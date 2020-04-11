let publicPath = process.env.NODE_ENV === 'production' ? '/circle-demo' : '/'
console.log(`publicPath => ${publicPath}`)
module.exports = {
    publicPath: publicPath
}
