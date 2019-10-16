'use strict';
//use this and event delegation
//enter items user needs to purchase by entering text
//and hitting return or add item button
//check and uncheck items on list by clicking check button
//permanently remove items from the list
//.submit(), .preventDefault(), .toggleClass(), and .closest()

$(function () {   //wait for page to load and listen for...
    $("#js-shopping-list-form").submit(function addingItems(event) {
        event.preventDefault(); //when the form is submitted, prevent it being submmitted to a server by the browser
        const addItem = $(this).find('#shopping-list-entry'); //find #shopping-list-entry(the input element) in the form
        $(".shopping-list").prepend( //add new elements to the beginning of unordered list with input value
        `<li>
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
        addItem.val(""); //empty the input
    }
    );

    //event delegations for clicking on buttons of original and new inputs
    //toggle on and off the strikethrough for shopping items with the check button
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
    //remove list items with the delete buttons
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });


});