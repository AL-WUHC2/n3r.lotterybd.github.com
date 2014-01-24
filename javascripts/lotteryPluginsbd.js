var specItem = 8;
var magicItem = 11;
Lottery.getCurrentOrder = function() {
    if (Lottery.winnersLs[Lottery.currentLotteryOrder].lName == "三等奖"
            && Lottery.currentLotteryOrder + 1 == parseInt(Lottery.winnersLs[Lottery.currentLotteryOrder].lCount / 2)) {
        return $(".lotteryItem[id=\"li_" + specItem + "\"]").attr("ord");
    } else if (Lottery.winnersLs[Lottery.currentLotteryOrder].lName == "二等奖") {
        return $(".lotteryItem[id=\"li_" + magicItem + "\"]").attr("ord");
    }
    return $(".lotteryItem[ord=\"" + Lottery.currentOrder + "\"]").attr("id") == "li_" + specItem ? Lottery.nextRandomOrder() : Lottery.currentOrder;
}
