// vue.config.js
module.exports = {
  runtimeCompiler: true,
  less:{
    // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
    // `primary` is global variables fields name
    globalVars: {
      primary: '#fff'
    }
  }
}
