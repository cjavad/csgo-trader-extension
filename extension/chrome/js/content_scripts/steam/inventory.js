overridePopulateActions();

const module0 = `<a class="module">
    <div class="descriptor tradability" id="iteminfo0_tradability"></div>
    <div class="descriptor countdown" id="iteminfo0_countdown"></div>
    <div class="descriptor tradability bookmark" id="iteminfo0_bookmark">Bookmark and Notify</div>
</a>`;

const module1 = `<a class="module">
    <div class="descriptor tradability" id="iteminfo1_tradability"></div>
    <div class="descriptor countdown" id="iteminfo1_countdown"></div>
    <div class="descriptor tradability bookmark" id="iteminfo1_bookmark">Bookmark and Notify</div>
</a>`;

const floatBar0 = `
<div class="floatBar" id="floatBar0">
    <div class="floatToolTip" id="float0">
        <div>Float: <span id="float0DropTarget">Waiting for csgofloat.com</span></div>
        <svg id="floatPointer0" class="floatPointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
   </div>
 <div class="progress">
    <div class="progress-bar floatBarFN" title="Factory New"></div>
    <div class="progress-bar floatBarMW" title="Minimal Wear"></div>
    <div class="progress-bar floatBarFT" title="Field-Tested"></div>
    <div class="progress-bar floatBarWW" title="Well-Worn"></div>
     <div class="progress-bar floatBarBS" title="Battle-Scarred"></div>
 </div>
 <div class="showTechnical" id="showTechnical0">Show Technical</div>
 <div class="floatTechnical" id="floatTechnical0">
        Technical:<br>
        Float Value: <span id="fvDrop0"></span><br>
        Paint Index: <span id="piDrop0"></span><br>
        Paint Seed: <span id="psDrop0"></span><br>
        Origin: <span id="origDrop0"></span><br>
        Best Possible Float: <span id="minDrop0"></span><br>
        Worst Possible Float: <span id="maxDrop0"></span><br>
        <br>
        Float info from <a href="https://csgofloat.com/" target="_blank">csgofloat.com</a>
</div>
</div>`;
const floatBar1 = `
<div class="floatBar" id="floatBar1">
    <div class="floatToolTip" id="float1">
        <div>Float: <span id="float1DropTarget">Waiting for csgofloat.com</span></div>
        <svg id="floatPointer1" class="floatPointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
   </div>
 <div class="progress">
    <div class="progress-bar floatBarFN" title="Factory New"></div>
    <div class="progress-bar floatBarMW" title="Minimal Wear"></div>
    <div class="progress-bar floatBarFT" title="Field-Tested"></div>
    <div class="progress-bar floatBarWW" title="Well-Worn"></div>
     <div class="progress-bar floatBarBS" title="Battle-Scarred"></div>
 </div>
  <div class="showTechnical" id="showTechnical1">Show Technical</div>
 <div class="floatTechnical" id="floatTechnical1">
        Technical:<br>
        Float Value: <span id="fvDrop1"></span><br>
        Paint Index: <span id="piDrop1"></span><br>
        Paint Seed: <span id="psDrop1"></span><br>
        Origin: <span id="origDrop1"></span><br>
        Best Possible Float: <span id="minDrop1"></span><br>
        Worst Possible Float: <span id="maxDrop1"></span><br>
        <br>
        Float info from <a href="https://csgofloat.com/" target="_blank">csgofloat.com</a>
</div>
</div>`;

// const note0 = `<div class="descriptor note" id="note0"></div>`;
// const note1 = `<div class="descriptor note" id="note1"></div>`;

const tradable = "<span class='tradable'>Tradable</span>";
const notTradable = "<span class='not_tradable'>Not Tradable</span>";

const dopplerPhase = "<div class='dopplerPhase'><span></span></div>";

const exteriors1 = `
    <div class="descriptor otherExteriors" id="otherExteriors1">
        <span>${chrome.i18n.getMessage("links_to_other_exteriors")}:</span>
        <ul>
            <li><a href="" target="_blank" id="fnLink1">${exteriors.factory_new.localized_name}</a> - <a href="" target="_blank" id="fnSTLink1"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.factory_new.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="mwLink1">${exteriors.minimal_wear.localized_name}</a> - <a href="" target="_blank" id="mwSTLink1"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.minimal_wear.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="ftLink1">${exteriors.field_tested.localized_name}</a> - <a href="" target="_blank" id="ftSTLink1"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.field_tested.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="wwLink1">${exteriors.well_worn.localized_name}</a> - <a href="" target="_blank" id="wwSTLink1"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.well_worn.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="bsLink1">${exteriors.battle_scarred.localized_name}</a> - <a href="" target="_blank" id="bsSTLink1"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.battle_scarred.localized_name}</span></a></li>
        </ul>
        <span>${chrome.i18n.getMessage("not_every_available")}</span>
    </div>`;

const exteriors0 = `
    <div class="descriptor otherExteriors" id="otherExteriors0">
        <span>${chrome.i18n.getMessage("links_to_other_exteriors")}:</span>
        <ul>
            <li><a href="" target="_blank" id="fnLink0">${exteriors.factory_new.localized_name}</a> - <a href="" target="_blank" id="fnSTLink0"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.factory_new.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="mwLink0">${exteriors.minimal_wear.localized_name}</a> - <a href="" target="_blank" id="mwSTLink0"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.minimal_wear.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="ftLink0">${exteriors.field_tested.localized_name}</a> - <a href="" target="_blank" id="ftSTLink0"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.field_tested.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="wwLink0">${exteriors.well_worn.localized_name}</a> - <a href="" target="_blank" id="wwSTLink0"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.well_worn.localized_name}</span></a></li>
            <li><a href="" target="_blank" id="bsLink0">${exteriors.battle_scarred.localized_name}</a> - <a href="" target="_blank" id="bsSTLink0"><span class="stattrakOrange exteriorsLink">StatTrak™ ${exteriors.battle_scarred.localized_name}</span></a></li>
        </ul>
        <span>${chrome.i18n.getMessage("not_every_available")}</span>
    </div>`;

const stickers1 = `
    <div class="descriptor customStickers" id="stickers1"></div>`;

const stickers0 = `
    <div class="descriptor customStickers" id="stickers0"></div>`;

const nametag1 = `
    <div class="nametag" id="nametag1"></div>`;

const nametag0 = `
    <div class="nametag" id="nametag0"></div>`;

const duplicates1 = `
    <div class="duplicate" id="duplicates1">x1</div>`;

const duplicates0 = `
    <div class="duplicate" id="duplicates0">x1</div>`;

const patternInfo1 = `
    <div class="patternInfo" id="patternInfo1"></div>`;

const patternInfo0 = `
    <div class="patternInfo" id="patternInfo0"></div>`;

// the promise will be stored here temporarily
let inventoryPromise = undefined;

//listens to the message events on the extension side of the communication
window.addEventListener('message', e => {
    if (e.data.type === 'inventory') {
        inventoryPromise(e.data);
        inventoryPromise = undefined;
    }
    else if (e.data.type === 'allItemsLoaded') {
        if(e.data.allItemsLoaded){
            doInitSorting();
        }
        else{
            loadFullInventory();
        }
    }
});

//sends the message to the page side to get the info
const getInventory = function() {
    window.postMessage(
        {
            type: 'requestInventory'
        },
        '*'
    );
    return new Promise(resolve => {
        inventoryPromise = resolve;
    });
};

//this injected script listens to the messages from the extension side and responds with the page context info needed
let getItems = `
    window.addEventListener('message', (e) => {
        if (e.data.type == 'requestInventory') {
            let inventory = UserYou.getInventory(730,2);
            let assets = inventory.m_rgAssets;
            let assetKeys= Object.keys(assets);
            let trimmedAssets = [];
            
            for(let assetKey of assetKeys){
                let asset = {
                    amount: assets[assetKey].amount,
                    assetid: assets[assetKey].assetid,
                    contextid: assets[assetKey].contextid,
                    description: assets[assetKey].description
                };
                trimmedAssets.push(asset);
            }
            window.postMessage({
                type: 'inventory',
                inventory: trimmedAssets
            }, '*');
        }
    });`;
injectToPage(getItems, false, "getItems");

//mutation observer observes changes on the right side of the inventory interface, this is a workaround for waiting for ajax calls to finish when the page changes
MutationObserver = window.MutationObserver;

let observer = new MutationObserver(function(mutations, observer) {
    if($(".games_list_tab.active").first().attr("href")==="#730"){
        addElements();
        addFunctionBar();
    }
    else{
        removeElements();
    }
});

let observer2 = new MutationObserver(function(mutations, observer) {
    addPerItemInfo(false);
});

//does not execute if inventory is private or failed to load the page (502 for example, mostly when steam is dead)
if($("#no_inventories").length!==1&&$("#iteminfo0").length!==0){
    observer.observe(document.getElementById("iteminfo0"), {
        subtree: false,
        attributes: true
    });

    observer2.observe(document.getElementById("inventories"),{
        subtree: false,
        attributes: true
    });
}

chrome.storage.local.get('hideOtherExtensionPrices', function(result) {
    if(result.hideOtherExtensionPrices){
        hideOtherExtensionPrices();
    }
});

//sends a message to the "back end" to request inventory contents

let items = [];

function requestInventory(){
    chrome.runtime.sendMessage({inventory: getInventoryOwnerID()}, function(response) {
        if(!(response===undefined||response.inventory===undefined||response.inventory===""||response.inventory==="error")){
            items = response.inventory;
            addElements();
            addPerItemInfo();
            setInventoryTotal(items);
            addClickListener();
            addFunctionBar();
            loadFullInventory();
        }
        else{
            console.log("Wasn't able to get the inventory, it's most likely steam not working properly or you loading inventory pages at the same time");
            console.log("Retrying in 30 seconds");
            setTimeout(function () {
                requestInventory();
            }, 30000);

        }
    });
}
requestInventory();

//to refresh the trade lock remaining indicators
setInterval(function () {
    if(!document.hidden){
        addPerItemInfo(true); //true means it's only for updating the time remaining indicators
    }
}, 60000);


//adds everything that is per item, like trade lock, exterior, doppler phases, border colors
function addPerItemInfo(updating){
    $(".slot_app_fraudwarning").css({"top":"19px", "left":"75px"});
    $items = $(".item.app730.context2");
    if($items.length!==0){
        chrome.storage.local.get(['colorfulItems'], function(result) {
            $items.each(function () {
                $item = $(this);
                if($item.attr("data-processed")===undefined||$item.attr("data-processed")==="false"||updating){
                    if($item.attr('id')===undefined){ //in case the inventory is not loaded yet
                        setTimeout(function () {
                            addPerItemInfo(false);
                        }, 1000);
                        return false;
                    }
                    else{
                        let assetID = $item.attr('id').split("730_2_")[1]; //gets the assetid of the item from the html
                        let item = getItemByAssetID(assetID); //matches it with the info from the api call

                        if(updating){
                            $itemDate = $item.find($(".perItemDate"));
                            let tradableShort = getShortDate(item.tradability);
                            if(tradableShort==="T"){
                                $itemDate.removeClass("not_tradable");
                                $itemDate.addClass("tradable");
                                $itemDate.text("T");
                            }
                            else{
                                $itemDate.removeClass("tradable");
                                $itemDate.addClass("not_tradable");
                                $itemDate.text(tradableShort);
                            }
                        }
                        else{
                            if(item.tradability==="Tradable"){
                                $item.append(`<div class='perItemDate tradable'>T</div>`);
                            }
                            else if(item.tradability!=="Not Tradable"){
                                $item.append(`<div class='perItemDate not_tradable'>${item.tradabilityShort}</div>`);
                            }

                            addDopplerPhase($item, item.dopplerInfo);
                            if(result.colorfulItems){
                                if(item.dopplerInfo!==undefined){
                                    $item.css({"border-color": "#"+item.dopplerInfo.color, "background-image": "url()", "background-color": "#"+item.dopplerInfo.color});
                                }
                                else{
                                    $item.css({"border-color": item.quality.backgroundcolor, "background-image": "url()", "background-color": item.quality.backgroundcolor});
                                }
                            }

                            let stattrak = "";
                            if(item.isStatrack){
                                stattrak = "ST";
                            }
                            let souvenir = "";
                            if(item.isSouvenir){
                                souvenir = "S";
                            }

                            if(item.exterior!==undefined){
                                $item.append(`<div class='exteriorSTInfo'><span class="souvenirYellow">${souvenir}</span><span class="stattrakOrange">${stattrak}</span><span class="exteriorIndicator">${item.exterior.localized_short}</span></div>`);
                            }

                            if(item.price!==undefined && item.price !== "null"){
                                $item.append(`<div class='priceIndicator'>${item.price.display}</div>`);
                            }

                            $(this).attr("data-processed", true);
                        }
                    }
                }
            });
        });
    }
    else{ //in case the inventory is not loaded yet
        setTimeout(function () {
            addPerItemInfo(false);
        }, 1000);
    }
}

//variables for the countdown recursive logic
let countingDown = false;
let countDownID = "";

function addElements(){
    if($(".games_list_tab.active").first().attr("href")==="#730"){
        let activeID = "";
        try{
            activeID = getAssetIDofActive();
        }catch (e) {
            console.log("Could not get assetID of active item");
            return false
        }
        let item = getItemByAssetID(activeID);

        //removes "tags"
        $("#iteminfo1_item_tags").remove();
        $("#iteminfo0_item_tags").remove();

        //adds float bar, sticker info, nametag
        if(!$("#floatBar1").length) {
            $("#iteminfo1_content").children().first().after(nametag1, stickers1, duplicates1, floatBar1, patternInfo1);
        }
        if(!$("#floatBar0").length) {
            $("#iteminfo0_content").children().first().after(nametag0, stickers0, duplicates0, floatBar0, patternInfo0);
        }

        $(".floatTechnical").hide();

        //allows the float pointer's text to go outside the boundaries of the item - they would not be visible otherwise on high-float items
        $(".item_desc_content.app730.context2").css("overflow", "visible");

        //removes background from the right side of the page
        $(".item_desc_content").css("background-image", 'url()');

        //add "other exteriors" links module
        if(!$("#otherExteriors1").length) {
            $("#iteminfo1_item_descriptors").after(exteriors1);
        }
        if(!$("#otherExteriors0").length) {
            $("#iteminfo0_item_descriptors").after(exteriors0);
        }

        //hides "tradable after" in one's own inventory
        $("#iteminfo1_item_owner_descriptors").hide();
        $("#iteminfo0_item_owner_descriptors").hide();


        $iteminfo1 = $("#iteminfo1_item_actions");
        $iteminfo0 = $("#iteminfo0_item_actions");

        //adds tradability and countdown elements
        if(!$("#iteminfo1_tradability").length){
            $iteminfo1.after(module1);
        }
        if(!$("#iteminfo0_tradability").length){
            $iteminfo0.after(module0);
        }

        $(".descriptor.tradability.bookmark").text("Bookmark and Notify");

        //tradability logic and countdown initiation
        $tradability1 =  $("#iteminfo1_tradability");
        $tradability0 = $("#iteminfo0_tradability");

        if(item){
            //add nametag
            $nametag0 = $("#nametag0");
            $nametag1 = $("#nametag1");
            if(item.nametag!==undefined){
                $nametag0.show();
                $nametag1.show();
                $nametag0.text(item.nametag);
                $nametag1.text(item.nametag);
                $("#iteminfo1_fraud_warnings").remove();
                $("#iteminfo0_fraud_warnings").remove();
            }
            else{
                $nametag0.hide();
                $nametag1.hide();
            }
            //repositions stickers
            if(item.stickers.length!==0){
                $("#sticker_info").remove();

                setTimeout(function () { //sometimes it is added slowly so it does not get removed by the first one..
                    $("#sticker_info").remove();
                }, 1000);

                $( ".stickerSlot" ).remove();
                $("#stickers1").show();
                $("#stickers0").show();
                item.stickers.forEach(function (stickerInfo) {
                    $("#stickers1").append(`<div class="stickerSlot" data-tooltip="${stickerInfo.name}"><a href="${stickerInfo.marketURL}" target="_blank"><img src="${stickerInfo.iconURL}" class="stickerIcon"></a></div>`);
                    $("#stickers0").append(`<div class="stickerSlot" data-tooltip="${stickerInfo.name}"><a href="${stickerInfo.marketURL}" target="_blank"><img src="${stickerInfo.iconURL}" class="stickerIcon"></a></div>`);
                })
            }
            else{
                $("#stickers1").hide();
                $("#stickers0").hide();
            }
            //adds duplicates count
            document.querySelectorAll(".duplicate").forEach (duplicate => {
                duplicate.style.display = "block";
                duplicate.innerText = "x"+item.duplicates.num;
            });

            if(item.tradability==="Tradable"){
                $tradability1.html(tradable);
                $tradability0.html(tradable);
                $("#iteminfo1_countdown").hide();
                $("#iteminfo0_countdown").hide();
            }
            else if(item.tradability==="Not Tradable"){
                $tradability1.html(notTradable);
                $tradability0.html(notTradable);
                $("#iteminfo1_countdown").hide();
                $("#iteminfo0_countdown").hide();
            }
            else{
                let tradableAt = new Date(item.tradability).toString().split("GMT")[0];
                $tradability1.html(`<span class='not_tradable'>Tradable After ${tradableAt}</span>`);
                $tradability0.html(`<span class='not_tradable'>Tradable After ${tradableAt}</span>`);
                countDown(tradableAt);
                $("#iteminfo1_countdown").show();
                $("#iteminfo0_countdown").show();
            }

            let name = item.name;

            getInventory().then(inventory => {
                inventory.inventory.forEach(function (onPageItem) {
                    if(onPageItem.assetid===activeID){
                        name = onPageItem.description.name;
                    }
                });
                if(item.dopplerInfo!==undefined){
                    changeName(name+" ("+ item.dopplerInfo.name+")",item.name_color,item.marketlink);
                }
                else{
                    changeName(name,item.name_color,item.marketlink);
                }
            });


            //removes sih "Get Float" button - does not really work since it's loaded after this script..
            if(isSIHActive()){
                document.querySelectorAll(".float_block").forEach(e => e.parentNode.removeChild(e));
                setTimeout(function () {
                    document.querySelectorAll(".float_block").forEach(e => e.parentNode.removeChild(e));
                }, 1000);
            }

            let inspectLink = item.inspectLink;

            //text while floats load
            let float ="Waiting for csgofloat.com";
            $("#float0DropTarget").text(float);
            $("#float1DropTarget").text(float);
            let paintIndex = "";
            let paintSeed = "";
            let origin = "";
            let min = "";
            let max = "";
            let stickers = [];

            if(inspectLink!==""&&inspectLink!==undefined){
                $(".floatBar").show();
                chrome.runtime.sendMessage({getFloatInfo: inspectLink}, function(response) {
                    try{
                        float = response.floatInfo.floatvalue;
                        paintIndex = response.floatInfo.paintindex;
                        paintSeed = response.floatInfo.paintseed;
                        origin = response.floatInfo.origin_name;
                        min = response.floatInfo.min;
                        max = response.floatInfo.max;
                        stickers = response.floatInfo.stickers;

                    }
                    catch{

                    }
                    let patternInfo =  getPattern(item.market_hash_name, paintSeed);
                    let position = float.toFixed(2)*100-2;
                    $("#float0").css("left", position + "%");
                    $("#float1").css("left", position + "%");
                    $("#float0DropTarget").text(float.toFixed(4));
                    $("#float1DropTarget").text(float.toFixed(4));

                    $patterinfInfo = $(".patternInfo");
                    if(patternInfo!==undefined){
                        $patterinfInfo.removeClass("fadeGradient marbleFadeGradient caseHardenedGradient");

                        if(patternInfo.type==="fade"){
                            $patterinfInfo.addClass("fadeGradient");
                        }
                        else if(patternInfo.type==="marble_fade"){
                            $patterinfInfo.addClass("marbleFadeGradient");
                        }
                        else if(patternInfo.type==="case_hardened"){
                            $patterinfInfo.addClass("caseHardenedGradient");
                        }
                        $patterinfInfo.text("Pattern: " + patternInfo.value);
                        $patterinfInfo.show();
                    }
                    else{
                        $patterinfInfo.text("");
                        $patterinfInfo.hide();
                    }
                    $("#fvDrop0").text(float);
                    $("#fvDrop1").text(float);
                    $("#piDrop0").text(paintIndex);
                    $("#piDrop1").text(paintIndex);
                    $("#psDrop0").text(paintSeed);
                    $("#psDrop1").text(paintSeed);
                    $("#origDrop0").text(origin);
                    $("#origDrop1").text(origin);
                    $("#minDrop0").text(min);
                    $("#minDrop1").text(min);
                    $("#maxDrop0").text(max);
                    $("#maxDrop1").text(max);

                    //sticker wear to sticker icon tooltip
                    stickers.forEach(function (stickerInfo, index) {
                        let wear = 100;
                        if(stickerInfo.wear!==undefined){
                            wear =  Math.trunc(Math.abs(1-stickerInfo.wear)*100);
                        }
                        $currentSticker1 = $("#stickers1").find($(".stickerSlot")).eq(index);
                        $currentSticker0 = $("#stickers0").find($(".stickerSlot")).eq(index);
                        $currentSticker1.attr("data-tooltip", stickerInfo.name + " - Condition: " + wear + "%");
                        $currentSticker0.attr("data-tooltip", stickerInfo.name + " - Condition: " + wear + "%");
                        $currentSticker1.find("img").css("opacity", (wear>10) ? wear/100 : (wear/100)+0.1);
                        $currentSticker0.find("img").css("opacity", (wear>10) ? wear/100 : (wear/100)+0.1);
                    });

                    if(float===0){
                        $(".floatBar").hide();
                    }
                });
            }
            else{
                $(".floatBar").hide();
            }

            let thereSouvenirForThisItem = souvenirExists($(".descriptor").text());

            let genericMarketLink = "https://steamcommunity.com/market/listings/730/";
            let weaponName = "";
            let stattrak = "StatTrak%E2%84%A2%20";
            let souvenir = "Souvenir ";
            let star = "";

            if(item.starInName){
                star = "%E2%98%85%20";
            }

            if(item.isStatrack){
                weaponName = item.market_hash_name.split("StatTrak™ ")[1].split("(")[0];
            }
            else if(item.isSouvenir){
                weaponName = item.market_hash_name.split("Souvenir ")[1].split("(")[0];
            }
            else{
                weaponName = item.market_hash_name.split("(")[0].split("★ ")[1];
                if(weaponName===undefined){
                    weaponName = item.market_hash_name.split("(")[0];
                }
            }


            $("#fnLink1").attr("href", genericMarketLink + star + weaponName + "%28Factory%20New%29");
            $("#mwLink1").attr("href", genericMarketLink + star + weaponName + "%28Minimal%20Wear%29");
            $("#ftLink1").attr("href", genericMarketLink + star + weaponName + "%28Field-Tested%29");
            $("#wwLink1").attr("href", genericMarketLink + star + weaponName + "%28Well-Worn%29");
            $("#bsLink1").attr("href", genericMarketLink + star + weaponName + "%28Battle-Scarred%29");

            $("#fnLink0").attr("href", genericMarketLink + star + weaponName + "%28Factory%20New%29");
            $("#mwLink0").attr("href", genericMarketLink + star + weaponName + "%28Minimal%20Wear%29");
            $("#ftLink0").attr("href", genericMarketLink + star + weaponName + "%28Field-Tested%29");
            $("#wwLink0").attr("href", genericMarketLink + star + weaponName + "%28Well-Worn%29");
            $("#bsLink0").attr("href", genericMarketLink + star + weaponName + "%28Battle-Scarred%29");

            if(item.isSouvenir||thereSouvenirForThisItem){
                $st = $(".stattrakOrange.exteriorsLink");
                $st.addClass("souvenirYellow");
                $st.removeClass("stattrakOrange");

                $fnst1=$("#fnSTLink1");
                $fnst1.attr("href", genericMarketLink + souvenir + weaponName + "%28Factory%20New%29");
                $fnst1.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.factory_new.localized_name);

                $mwst1=$("#mwSTLink1");
                $mwst1.attr("href", genericMarketLink + souvenir + weaponName + "%28Minimal%20Wear%29");
                $mwst1.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.minimal_wear.localized_name);

                $ftst1=$("#ftSTLink1");
                $ftst1.attr("href", genericMarketLink + souvenir + weaponName + "%28Field-Tested%29");
                $ftst1.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.field_tested.localized_name);

                $wwst1=$("#wwSTLink1");
                $wwst1.attr("href", genericMarketLink + souvenir + weaponName + "%28Well-Worn%29");
                $wwst1.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.well_worn.localized_name);

                $bsst1=$("#bsSTLink1");
                $bsst1.attr("href", genericMarketLink + souvenir + weaponName + "%28Battle-Scarred%29");
                $bsst1.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.battle_scarred.localized_name);

                $fnst0=$("#fnSTLink0");
                $fnst0.attr("href", genericMarketLink + souvenir + weaponName + "%28Factory%20New%29");
                $fnst0.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.factory_new.localized_name);

                $mwst0=$("#mwSTLink0");
                $mwst0.attr("href", genericMarketLink + souvenir + weaponName + "%28Minimal%20Wear%29");
                $mwst0.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.minimal_wear.localized_name);

                $ftst0=$("#ftSTLink0");
                $ftst0.attr("href", genericMarketLink + souvenir + weaponName + "%28Field-Tested%29");
                $ftst0.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.field_tested.localized_name);

                $wwst0=$("#wwSTLink0");
                $wwst0.attr("href", genericMarketLink + souvenir + weaponName + "%28Well-Worn%29");
                $wwst0.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.well_worn.localized_name);

                $bsst0=$("#bsSTLink0");
                $bsst0.attr("href", genericMarketLink + souvenir + weaponName + "%28Battle-Scarred%29");
                $bsst0.find("span").text(chrome.i18n.getMessage("souvenir")+ exteriors.battle_scarred.localized_name);
            }
            else{
                $sv = $(".souvenirYellow.exteriorsLink");
                if($sv.length!==0){
                    $sv.addClass("stattrakOrange");
                    $sv.removeClass("souvenirYellow");
                }
                $("#fnSTLink1").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Factory%20New%29");
                $("#mwSTLink1").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Minimal%20Wear%29");
                $("#ftSTLink1").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Field-Tested%29");
                $("#wwSTLink1").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Well-Worn%29");
                $("#bsSTLink1").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Battle-Scarred%29");

                $("#fnSTLink0").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Factory%20New%29");
                $("#mwSTLink0").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Minimal%20Wear%29");
                $("#ftSTLink0").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Field-Tested%29");
                $("#wwSTLink0").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Well-Worn%29");
                $("#bsSTLink0").attr("href", genericMarketLink + star + stattrak + weaponName + "%28Battle-Scarred%29");
            }

            if(item.exterior===undefined){
                $("#otherExteriors1").hide();
                $("#otherExteriors0").hide();
            }
        }
    }
    else{
        $("#iteminfo1_countdown").hide();
        $("#iteminfo0_countdown").hide();
    }
}


function removeElements() {
    let itemsWiththeseSelectorsToRemove = [".otherExteriors", "a.hover_item_name", ".duplicate", ".customStickers", ".countdown", ".bookmark", ".floatBar", ".descriptor.tradability", ".nametag"];
    itemsWiththeseSelectorsToRemove.forEach((selector) =>{
        document.querySelectorAll(selector).forEach((element) =>{
            element.style.display = "none";
        })
    });
    $("#iteminfo0_item_name").show();
    $("#iteminfo1_item_name").show();
    //removeNote();
}

// gets the asset id of the item that is currently selected
function getAssetIDofActive() {
    return  $(".activeInfo")[0].id.split("730_2_")[1];
}

//gets the details of an item by matching the passed asset id with the ones from the api call
function getItemByAssetID(assetidToFind){
    if (items === undefined || items.length === 0) {
        return false
    }
    return $.grep(items, function(e){ return e.assetid === assetidToFind; })[0];
}

//manages the trade lock countdown
function countDown(dateToCountDownTo){
    if(!countingDown){
        countingDown = true;
        countDownID = setInterval(function() {
            $(".countdown").each(function () {
                let $this = $(this);

                let now = new Date().getTime();
                let distance = new Date(dateToCountDownTo) - now;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                $this.text(days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s " + "remains");

                if (distance < 0) {
                    clearInterval(countDownID);
                    $this.hide();
                    $tradability1 = $("#iteminfo1_tradability");
                    $tradability1.text("Tradable");
                    $tradability1.addClass("tradable");
                    $tradability0 = $("#iteminfo0_tradability");
                    $tradability0.text("Tradable");
                    $tradability0.addClass("tradable");
                }
            }, 1000);
        });
    }
    else{
        clearInterval(countDownID);
        countingDown = false;
        countDown(dateToCountDownTo);
    }
}

// function addNote(note){
//     if(!$("#note1").length) {
//         $("#iteminfo1_item_descriptors").before(note1);
//     }
//     if(!$("#note0").length) {
//         $("#iteminfo0_item_descriptors").before(note0);
//     }
//     $("#note1").text("Note: " + note);
//     $("#note0").text("Note: " + note);
// }
//
// function removeNote(){
//     $("#note1").remove();
//     $("#note0").remove();
// }

function changeName(name, color, link){
    $itemName0 = $("#iteminfo0_item_name");
    $itemName1 = $("#iteminfo1_item_name");
    let newNameElement0 = `<a class="hover_item_name" id="item_name0" style="color: ${color}" href="${link}" target="_blank">${name}</a>`;
    let newNameElement1 = `<a class="hover_item_name" id="item_name1" style="color: ${color}" href="${link}" target="_blank">${name}</a>`;

    if($("#item_name0").length===0&&$("#item_name1").length===0){
        $itemName0.after(newNameElement0);
        $itemName1.after(newNameElement1);
    }
    else{
        $newItemname0 =  $("#item_name0");
        $newItemname1 =  $("#item_name1");
        $newItemname0.attr({
            href: link,
            style: `color: #${color}`
        });
        $newItemname0.text(name);
        $newItemname1.attr({
            href: link,
            style: `color: #${color}`
        });
        $newItemname1.text(name);
    }
    $itemName0.hide();
    $itemName1.hide();
}

function addClickListener(){
    $(".module").click(function () {
        $module = $(this);
        let bookmark = {
            itemInfo: getItemByAssetID(getAssetIDofActive()),
            owner: getInventoryOwnerID(),
            comment: " ",
            notify: true,
            notifTime: getItemByAssetID(getAssetIDofActive()).tradability.toString(),
            notifType: "chrome"
        };
        chrome.storage.local.get('bookmarks', function(result) {
            let bookmarks = result.bookmarks;
            bookmarks.push(bookmark);
            chrome.storage.local.set({'bookmarks': bookmarks}, function() {
                if(bookmark.itemInfo.tradability!=="Tradable"){
                    chrome.runtime.sendMessage({setAlarm: {name:  bookmark.itemInfo.assetid, when: bookmark.itemInfo.tradability}}, function(response) {});
                }
                chrome.runtime.sendMessage({openInternalPage: "/html/bookmarks.html"}, function(response) {
                    if(response.openInternalPage==="no_tabs_api_access"){
                        $module.find($(".descriptor.tradability.bookmark")).text("Bookmarked! Open the bookmarks menu to see what you have saved!");
                    }
                });
            });
        });
    });
    $("#showTechnical1").click(function () {
        $("#floatTechnical1").toggle();
    });
    $("#showTechnical0").click(function () {
        $("#floatTechnical0").toggle();
    });

    let sihSort = document.getElementById("Lnk_SortItems");
    if(isSIHActive() && sihSort !== null){
        sihSort.addEventListener("click", function () {
            addPerItemInfo(false);
        })
    }
}

function hideOtherExtensionPrices(){
    if(!document.hidden && isSIHActive()){
        //sih
        document.querySelectorAll(".price_flag").forEach((price)=>{
            price.remove();
        });
    }
    setTimeout(() =>{hideOtherExtensionPrices()}, 2000);
}

function setInventoryTotal(items){
    let inventoryTotalValueElement = document.getElementById("inventoryTotalValue");
    chrome.runtime.sendMessage({inventoryTotal: items}, (response) =>{
        if(!(response===undefined||response.inventoryTotal===undefined||response.inventoryTotal===""||response.inventoryTotal==="error"||inventoryTotalValueElement===null)){
            inventoryTotalValueElement.innerText = response.inventoryTotal;
        }
        else setTimeout(() =>{setInventoryTotal(items)}, 1000)
    });
}

let listenSelectClicks = function (event){
    if (event.target.parentElement.classList.contains('item') && event.target.parentElement.classList.contains('app730') && event.target.parentElement.classList.contains('context2')) {
        event.target.parentElement.classList.toggle("selected");
        updateSelectedValue();
    }
};

function addFunctionBar(){
    if(document.getElementById("inventory_function_bar") === null){
        let hand_pointer = chrome.runtime.getURL("images/hand-pointer-solid.svg");
        document.querySelector(".filter_ctn.inventory_filters").insertAdjacentHTML('afterend', `
                <div id="inventory_function_bar">
                    <div id="functionBarValues" class="functionBarRow">
                        <span id="selectedTotal"><span>Selected Items Value: </span><span id="selectedTotalValue">0.00</span></span>
                        <span id="inventoryTotal"><span>Total Inventory Value: </span><span id="inventoryTotalValue">0.00</span></span>
                    </div>
                    <div id="functionBarActions" class="functionBarRow">
                        <span id="selectMenu">
                            <img id ="selectButton" src="${hand_pointer}">
                        </span>
                        <div id="sortingMenu">
                            <span>Sorting:</span>
                            <select id="sortingMethod">
                            </select>
                        </div>
                    </div>
                </div>
                `);

        let sortingSelect = document.getElementById("sortingMethod");

        let keys = Object.keys(sortingModes);
        for (let key of keys){
            let option = document.createElement("option");
            option.value = sortingModes[key].key;
            option.text = sortingModes[key].name;
            sortingSelect.add(option);
        }

        document.getElementById("selectButton").addEventListener("click", function (event) {
            if(event.target.classList.contains("selectionActive")){
                unselectAllItems();
                updateSelectedValue();
                event.target.classList.remove("selectionActive");
                document.body.removeEventListener('click', listenSelectClicks, false);
            }
            else{
                document.body.addEventListener('click', listenSelectClicks, false);
                event.target.classList.add("selectionActive");
            }
        });

        sortingSelect.addEventListener("change", function () {
            let selected = sortingSelect.options[sortingSelect.selectedIndex].value;
            sortItems(selected);
        });
    }
    else{
        setTimeout(function () {
            setInventoryTotal(items);
        }, 1000);
    }
}

function updateSelectedValue(){
    let selectedItems = document.querySelectorAll(".item.app730.context2.selected");
    let selectedTotal = 0;
    selectedItems.forEach(itemelement =>{
        let assetID = getAssetIDOfElement(itemelement);
        let item = getItemByAssetID(assetID);
        selectedTotal += parseFloat(item.price.price);
    });
    chrome.storage.local.get('currency', (result) =>{
        document.getElementById("selectedTotalValue").innerText = prettyPrintPrice(result.currency, selectedTotal);
    });
}

function unselectAllItems() {
    let items = document.querySelectorAll(".item.app730.context2");
    items.forEach(item =>{
        item.classList.remove("selected");
    })
}

function sortItems(method) {
    let items = document.querySelectorAll(".item.app730.context2");
    let inventoryPages = document.getElementById("inventories").querySelectorAll(".inventory_page");
    doTheSorting(items, method, Array.from(inventoryPages), "inventory");
    addPerItemInfo(false);
}

function loadFullInventory() {
    if(!isSIHActive()){
        let loadFullInventory = `
        g_ActiveInventory.LoadCompleteInventory().done(function () {
            for (let i = 0; i < g_ActiveInventory.m_cPages; i++) {
                g_ActiveInventory.m_rgPages[i].EnsurePageItemsCreated();
                g_ActiveInventory.PreloadPageImages(i);
            }
            window.postMessage({
                type: 'allItemsLoaded',
                allItemsLoaded: true
            }, '*');
        });`;
        injectToPage(loadFullInventory, true, "loadFullInventory");
    }
    else{
        doInitSorting();
    }
}

function doInitSorting() {
    chrome.storage.local.get('inventorySortingMode', function(result) {
        sortItems(result.inventorySortingMode);
        document.querySelector('#sortingMethod [value="' + result.inventorySortingMode + '"]').selected = true;
    });
}

//reloads the page on extension update/reload/uninstall
chrome.runtime.connect().onDisconnect.addListener(function() {
    location.reload();
});
