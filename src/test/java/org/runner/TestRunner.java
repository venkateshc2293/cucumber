package org.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"C:\\Users\\VENKATESH\\eclipse-workspace\\Cucumber\\src\\test\\resources\\Test.features"},glue= {"org.main"} ,monochrome=true, dryRun=false, plugin= {"pretty",
		"html:C:\\Users\\VENKATESH\\eclipse-workspace\\Cucumber\\target","json:C:\\Users\\VENKATESH\\eclipse-workspace\\Cucumber\\target\\sample.json"})


public class TestRunner {

}
