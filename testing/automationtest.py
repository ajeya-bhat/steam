#imports
from selenium import webdriver
import time
from random import randint

#invoking chromedriver
chromedriver = "./chromedriver"
driver = webdriver.Chrome(chromedriver)

#Test1 - Check if clicking on a game of home page works
def test1():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	driver.find_element_by_id("img1").click()
	time.sleep(2)
	driver.execute_script("window.history.go(-1)")
	time.sleep(4)
	print("Test 1 passed succesfully")
	
#Test2 - Checking if next and previous toggle buttons work, and all the images in the slideshow work properly.
def test2():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	driver.find_element_by_id("prev").click()
	time.sleep(1)
	driver.find_element_by_id("next").click()
	time.sleep(1)
	driver.find_element_by_id("img1").click()
	time.sleep(2)
	driver.execute_script("window.history.go(-1)")
	time.sleep(2)
	driver.find_element_by_id("next").click()
	time.sleep(1)
	driver.find_element_by_id("img2").click()
	time.sleep(4)
	print("Test 2 passed succesfully")

#Test3 - Checking if all game catalog button works
def test3():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	l=driver.find_elements_by_xpath("//*[contains(text(), 'all games')]")
	l[0].click()
	time.sleep(4)
	print("Test 3 passed succesfully")

#Test4 - Checking if sidebar functionality works
def test4():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	driver.find_element_by_id("sidebar-toggle-2").click()
	time.sleep(2)
	l=driver.find_elements_by_tag_name("li")
	r=randint(0,4)
	l[r].click()
	time.sleep(2)
	driver.execute_script("window.history.go(-1)")
	time.sleep(4)
	print("Test 4 passed succesfully")

#Test5 - Checking if multistage download section works, that is, checking if all games are loaded when load more button is clicked
def test5():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	l=driver.find_elements_by_xpath("//*[contains(text(), 'all games')]")
	l[0].click()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	l1=driver.find_elements_by_xpath("//*[contains(text(), 'more')]")
	l1[0].click()
	time.sleep(6)
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(4)
	print("Test 5 passed succesfully")

#Test6 - 
def test6():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	time.sleep(2)
	print("Test 6 passed succesfully")

#Test7 - 
def test7():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	time.sleep(2)
	print("Test 7 passed succesfully")

#Test8 - 
def test8():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	time.sleep(2)
	print("Test 8 passed succesfully")

#Test9 - 
def test9():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	time.sleep(2)
	print("Test 9 passed succesfully")

#Test10 - 
def test10():
	driver.get("http://localhost:4200/")
	driver.maximize_window()
	driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")
	time.sleep(2)
	time.sleep(2)
	print("Test 10 passed succesfully")


"""test1()
test2()
test3()
test4()"""
test5()
"""test6()
test7()
test8()
test9()
test10()"""
