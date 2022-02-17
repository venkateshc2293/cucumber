$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/VENKATESH/eclipse-workspace/Cucumber/src/test/resources/Test.features/Test1.feature");
formatter.feature({
  "name": "validate login function in Adactin and",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login with username and passsword",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "name": "Search hotel page appear or not",
  "keyword": "Then "
});
formatter.step({
  "name": "user in Search hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \"\u003clocation\u003e\" , \"\u003chotels\u003e\" , \"\u003croom_type\u003e\", \"\u003croom_nos\u003e\", \"\u003cadult_room\u003e\" from dropdown to select by value",
  "keyword": "When "
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user in select hotel page",
  "keyword": "Given "
});
formatter.step({
  "name": "click on hotel and click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user on book hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \"\u003cfirstname\u003e\" , \"\u003clastname\u003e\"  , \"\u003caddress\u003e\" , \"\u003ccard no\u003e\" , \"\u003ccard_type\u003e\" , \"\u003cexp_month\u003e\" , \"\u003cexp_year\u003e\" , \"\u003ccc_cvv_no\u003e\" to enter detail for booking",
  "keyword": "When "
});
formatter.step({
  "name": "click on booknow button",
  "keyword": "And "
});
formatter.step({
  "name": "find order id to print id",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "room_type",
        "room_nos",
        "adult_room",
        "firstname",
        "lastname",
        "address",
        "card no",
        "card_type",
        "exp_month",
        "exp_year",
        "cc_cvv_no"
      ]
    },
    {
      "cells": [
        "chikannan",
        "Venk$22",
        "Sydney",
        "Hotel Sunshine",
        "Standard",
        "1",
        "1",
        "ABC",
        "Venk",
        "Sydney",
        "1234567890123456",
        "VISA",
        "12",
        "2022",
        "987"
      ]
    },
    {
      "cells": [
        "chikannan",
        "Venk$22",
        "Paris",
        "Hotel Creek",
        "Double",
        "1",
        "1",
        "ABC",
        "XYZ",
        "Sydney",
        "1234567890123456",
        "VISA",
        "12",
        "2022",
        "987"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login with username and passsword",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Method.user_in_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"chikannan\" and \"Venk$22\"",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search hotel page appear or not",
  "keyword": "Then "
});
formatter.match({
  "location": "Method.search_hotel_page_appear_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in Search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Method.user_in_Search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Sydney\" , \"Hotel Sunshine\" , \"Standard\", \"1\", \"1\" from dropdown to select by value",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_enter_from_dropdown_to_select_by_value(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in select hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Method.user_in_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on hotel and click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_on_hotel_and_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on book hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_on_book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"ABC\" , \"Venk\"  , \"Sydney\" , \"1234567890123456\" , \"VISA\" , \"12\" , \"2022\" , \"987\" to enter detail for booking",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_enter_to_enter_detail_for_booking(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on booknow button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_on_booknow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "find order id to print id",
  "keyword": "Then "
});
formatter.match({
  "location": "Method.find_order_id_to_print_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login with username and passsword",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Method.user_in_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"chikannan\" and \"Venk$22\"",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search hotel page appear or not",
  "keyword": "Then "
});
formatter.match({
  "location": "Method.search_hotel_page_appear_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in Search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Method.user_in_Search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Paris\" , \"Hotel Creek\" , \"Double\", \"1\", \"1\" from dropdown to select by value",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_enter_from_dropdown_to_select_by_value(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in select hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Method.user_in_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on hotel and click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_on_hotel_and_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on book hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_on_book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"ABC\" , \"XYZ\"  , \"Sydney\" , \"1234567890123456\" , \"VISA\" , \"12\" , \"2022\" , \"987\" to enter detail for booking",
  "keyword": "When "
});
formatter.match({
  "location": "Method.user_enter_to_enter_detail_for_booking(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on booknow button",
  "keyword": "And "
});
formatter.match({
  "location": "Method.click_on_booknow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "find order id to print id",
  "keyword": "Then "
});
formatter.match({
  "location": "Method.find_order_id_to_print_id()"
});
formatter.result({
  "status": "passed"
});
});