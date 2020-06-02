const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkListSchema  = new Schema({
    number:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

checkListSchema.statics.getCheckedItems = function(){
    this.find().then(result=>{
        
        
    })
}

module.exports = mongoose.model('Checklist',checkListSchema);