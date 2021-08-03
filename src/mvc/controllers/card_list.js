class card_list{
    get(req,res){
        res.render('body/card_list')
    }
}

module.exports = new card_list