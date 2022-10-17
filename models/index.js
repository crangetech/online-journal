const User=require('./User.js');
const entry=require('./entry.js');

User.belongsTo(entry,{
    foreignKey: entryId,

})




module.exports={User,entry}