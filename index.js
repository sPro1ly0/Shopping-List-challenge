'use strict';
//use this and event delegation
//enter items user needs to purchase by entering text
//and hitting return or add item button
//check and uncheck items on list by clicking check button
//permanetly remove items from the list
//.submit(), .preventDefault(), .toggleClass(), and closest()

$(function () {
    $("#js-shopping-list-form").submit(function addingItems(event) {
        event.preventDefault();
        const addItem = $(this).find('#shopping-list-entry');
        $(".shopping-list").prepend(`<li>
        <span class="shopping-item">${addItem.val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
        addItem.val(""); //empty input
    }
    );

    



});

//<li>
//<span class="shopping-item">apples</span>
//<div class="shopping-item-controls">
  //<button class="shopping-item-toggle">
    //<span class="button-label">check</span>
  //</button>
  //<button class="shopping-item-delete">
    //<span class="button-label">delete</span>
  //</button>
//</div>
//</li>