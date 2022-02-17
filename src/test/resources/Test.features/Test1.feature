Feature: validate login function in Adactin and

  Scenario Outline: login with username and passsword
    Given user in hotel page
    When user enter "<username>" and "<password>"
    And click login button
    Then Search hotel page appear or not
    Given user in Search hotel page
    When user enter "<location>" , "<hotels>" , "<room_type>", "<room_nos>", "<adult_room>" from dropdown to select by value
    And click on search button
    Given user in select hotel page
    And click on hotel and click on continue button
    When user on book hotel page
    When user enter "<firstname>" , "<lastname>"  , "<address>" , "<card no>" , "<card_type>" , "<exp_month>" , "<exp_year>" , "<cc_cvv_no>" to enter detail for booking
    And click on booknow button
    Then find order id to print id

    Examples: 
      | username  | password | location | hotels         | room_type | room_nos | adult_room | firstname | lastname | address | card no          | card_type | exp_month | exp_year | cc_cvv_no |
      | chikannan | Venk$22  | Sydney   | Hotel Sunshine | Standard  |        1 |          1 | ABC       | Venk     | Sydney  | 1234567890123456 | VISA      |        12 |     2022 |       987 |
      | chikannan | Venk$22  | Paris    | Hotel Creek    | Double    |        1 |          1 | ABC       | XYZ      | Sydney  | 1234567890123456 | VISA      |        12 |     2022 |       987 |
