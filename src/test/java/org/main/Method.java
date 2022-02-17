package org.main;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Method {
	WebDriver driver;
	@Given("user in hotel page")
	public void user_in_hotel_page() {
		WebDriverManager.chromedriver().setup();
		 driver=new ChromeDriver();
		driver.get("https://adactinhotelapp.com/");
		
	}

	@When("user enter {string} and {string}")
	public void user_enter_and(String string, String string2) {
		   WebElement a = driver.findElement(By.id("username"));
		   a.sendKeys(string);
		   WebElement b = driver.findElement(By.id("password"));
		   b.sendKeys(string2);
		  
	}

	@When("click login button")
	public void click_login_button() {
		 WebElement loginclick = driver.findElement(By.id("login"));
		   loginclick.click();
		   
		   
	}

	@Then("Search hotel page appear or not")
	public void search_hotel_page_appear_or_not() {
		   System.out.println("search hotel page");
		   
	}

	@Given("user in Search hotel page")
	public void user_in_Search_hotel_page() {
		   System.out.println("user in search hotel page");

		   
	}

	@When("user enter {string} , {string} , {string}, {string}, {string} from dropdown to select by value")
	public void user_enter_from_dropdown_to_select_by_value(String string, String string2, String string3, String string4, String string5) {
		   WebElement c = driver.findElement(By.id("location"));
		   Select s=new Select(c);
		   s.selectByValue(string);
		   
		   WebElement d = driver.findElement(By.id("hotels"));
		   Select s1=new Select(d);
		   s1.selectByValue(string2);
		   
		   
		   WebElement f = driver.findElement(By.id("room_type"));
		   Select s3=new Select(f);
		   s3.selectByValue(string3);
		   
		   WebElement g = driver.findElement(By.id("room_nos"));
		   Select s5=new Select(g);
		   s5.selectByValue(string4);

		   WebElement h = driver.findElement(By.id("adult_room"));
		   Select s6=new Select(h);
		   s6.selectByValue(string5);
 
		   
	}

	@When("click on search button")
	public void click_on_search_button() {
	   WebElement submmit = driver.findElement(By.id("Submit"));
	   submmit.click();
	}

	@Given("user in select hotel page")
	public void user_in_select_hotel_page() {
		WebElement clickhotel = driver.findElement(By.id("radiobutton_0"));
		clickhotel.click();
	
	}

	@Given("click on hotel and click on continue button")
	public void click_on_hotel_and_click_on_continue_button() {
		
		WebElement continueclick = driver.findElement(By.id("continue"));
		continueclick.click();
		
	}

	@When("user on book hotel page")
	public void user_on_book_hotel_page() {
	  
	}

	@When("user enter {string} , {string}  , {string} , {string} , {string} , {string} , {string} , {string} to enter detail for booking")
	public void user_enter_to_enter_detail_for_booking(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
	   
		
		WebElement firstname = driver.findElement(By.id("first_name"));
		firstname.sendKeys(string);
		
		WebElement lastname = driver.findElement(By.id("last_name"));
		lastname.sendKeys(string2);
		
		WebElement addres = driver.findElement(By.id("address"));
		addres.sendKeys(string3);
		
		WebElement card = driver.findElement(By.id("cc_num"));
		card.sendKeys(string4);
		
		WebElement cardtype = driver.findElement(By.id("cc_type"));
		Select select6=new Select(cardtype);
		select6.selectByValue(string5);
		
		
		WebElement expmonth = driver.findElement(By.id("cc_exp_month"));
		Select select7=new Select(expmonth);
		select7.selectByValue(string6);
		
		WebElement expyear = driver.findElement(By.id("cc_exp_year"));
		Select select8=new Select(expyear);
		select8.selectByValue(string7);
		
		WebElement cardccv = driver.findElement(By.id("cc_cvv"));
		cardccv.sendKeys(string8);
		
	}

	@When("click on booknow button")
	public void click_on_booknow_button() {
		WebElement booknow = driver.findElement(By.id("book_now"));
		booknow.click();
	System.out.println("booking page");
	}
	@Then("find order id to print id")
	public void find_order_id_to_print_id() {
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);

		WebElement orderid = driver.findElement(By.xpath("//input[@name='order_no']"));

		String attributevalue = orderid.getAttribute("value");
		System.out.println("print order id "+attributevalue);
	}

	
}