import unittest
import requests 
#from unit_testing import app

class BasicTests(unittest.TestCase):
    #def setUp(self):
    	#pass
        #app.config['TESTING'] = True
        #app.config['WTF_CSRF_ENABLED'] = False
        #app.config['DEBUG'] = False
        #app.config['MONGO_DATABASE_URI'] = 'mongo:///test.db'
        #self.app = app.test_client()




# UNIT TESTING is a type of software testing where individual units or components of a software are tested. 
# The purpose is to validate that each unit of the software code performs as expected. 
# Unit Testing is done during the development (coding phase) of an application by the developers. 
# Unit Tests isolate a section of code and verify its correctness.


#WE WILL DO THE FOLLOWING TYPES OF UNIT TESTING: 
#1 RESPONSE CHECKING
#2 ENCODING TESTING
#3 BRANCH CHECKING & RESPONSE BODY CHECKING
#4 TEXT TESTING


#BENEFITS OF UNIT TESTING 
#1 Unit tests help to fix bugs early in the development cycle and save costs.
#2 It helps the developers to understand the code base and enables them to make changes quickly
#3 Good unit tests serve as project documentation


#unittest — Unit testing framework
#EXAMPLE FOR UNIT TESTING
# import unittest

# class TestStringMethods(unittest.TestCase):

#     def test_upper(self):
#         self.assertEqual('foo'.upper(), 'FOO')

#     def test_isupper(self):
#         self.assertTrue('FOO'.isupper())
#         self.assertFalse('Foo'.isupper())

#     def test_split(self):
#         s = 'hello world'
#         self.assertEqual(s.split(), ['hello', 'world'])
#         # check that s.split fails when the separator is not a string
#         with self.assertRaises(TypeError):
#             s.split(2)

# if __name__ == '__main__':
#     unittest.main()








######1 RESPONSE CHECKING. THIS IS THE FIRST TYPE OF UNIT TESTING IN WHICH WE CHECK THAT THE CORRECT RESPONSE CODE IS BEING GIVEN WHEN 
#EACH OF THE APIs is getting called. THIS IS TO ENSURE THAT IF REQUEST ISN'T FULFILLED, DIFFERENT RESPONSE CODES ARE RETURNED #######


#THIS IS THE REQUEST STRUCTURE FOR 1
# router.put('/carts',(req,res)=>{
#     Cart.findOne({name:req.body.name},(err,doc)=>
#     {
#         if(err){console.log("ERR");}
#         if(!doc){
#             var c=new Cart({


    def test_1(self):
        response = requests.post('http://localhost:3000/cart/carts', json = dict(name='random_game', url='example.com', price=320)) #Issued HTTP response, given random str input json
        ######self.assertEqual(response.status_code, 200)
        self.assertEqual(response.status_code, 404)
        #Checking the status code




#STRUCTURE FOR REQUEST 2
# router.post('/stats',(req,res)=>{
#     Stat.findOne({p1:req.body.p1,p2:req.body.p2},(err,doc)=>
#     {
#         if(err){console.log("ERR");}
#         if(!doc){
            
#             var c=new Stat({
#                 p1: req.body.p1,
#                 p2:req.body.p2
                
#             });
#             c.save((err,doc)=>{
#                 if(!err) {res.send(doc);}
        
#                 else{console.log("ERR")}


    def test_2(self):
        response = requests.post('http://localhost:3000/cart/stats', json = dict(p1='price', p2='year'))
        self.assertEqual(response.status_code, 200)
        #Checking the status code




#STRUCTURE FOR REQUEST 3     
# router.post('/detail',(req,res)=>{
#     Detail.findOne({name:req.body.name,email:req.body.email,games:req.body.games},(err,doc)=>
#     {
#         if(err){console.log("ERR");}
#         if(!doc){
#             let co=req.body;
#             sendmail1(co);
#             var c=new Detail({
#                 name: req.body.name,
#                 email:req.body.email,
#                 totalprice:req.body.totalprice,
#                 games:req.body.games
#             });
#             c.save((err,doc)=>{
#                 console.log(doc);
#                 if(!err) {res.send(doc);}
        
#                 else{console.log("ERR")}

    def test_3(self):
        response = requests.post('http://localhost:3000/cart/detail', json = dict(name='test_user',email='test@gmail.com', totalprice=100, games='test game'))
        self.assertEqual(response.status_code, 200)
        #CHECKING TYPE AS WELLL 
        #self.assertEqual(response.type, 'str')
        #Checking the status code





#STRUCTURE FOR REQUEST 4
# router.post('/contactus',(req,res)=>{
#     let co=req.body;
#     sendmail(co);
#     var c=new Contactus({
#         name: req.body.name,
#         email:req.body.email,
#         request:req.body.request
#     });
#     c.save((err,doc)=>{
#         if(!err) {res.send(doc);}
#         else{console.log("ERR")}
#     });
# });


    def test_4(self):
        response = requests.post('http://localhost:3000/cart/contactus', json = dict(name='', email='', request=''))
        self.assertEqual(response.status_code, 200)
        #Checking the status code






#STRUCTURE FOR REQUEST 5
# router.delete('/carts/:id',(req,res)=>{
   
#     Cart.findByIdAndRemove(req.params.id,(err,doc)=>{
#         if(!err){res.send(doc);}
#         else{console.log("NO DEL");}
#PROBLEMATIC TEST CASE
#Database is empty

#    def test_5(self):
#        response = requests.delete('http://localhost:3000/cart/carts/:id',)
#        self.assertEqual(response.status_code, 200)
#        #Checking the status code


















#######2 ENCODING TESTING FOR FILE METADATA #######
####### IN THIS TEST WE CHECK FOR THE ENCODING OF THE FILE. USUALLY, THIS IS SUPPOSED TO BE UTF-8 FOR STANDARDISATION AND COMPATIBILITY.#######

#STRUCTURE FOR REQUEST 6
#It is similar to request 1 but we check for encoding
# router.get('/listall',(req,res)=>{
#     Main.find((err,doc)=>{
#         if(!err) {console.log("balls");res.send(doc);}
#         else{console.log("ERR")}

    def test_6(self):
        response = requests.post('http://localhost:3000/cart/listall')
        self.assertEqual(str(response.encoding),'utf-8')
        #Checking the encoding






#STRUCTURE FOR REQUEST 7
# router.put('/carts',(req,res)=>{
#     Cart.findOne({name:req.body.name},(err,doc)=>
#     {
#         if(err){console.log("ERR");}
#         if(!doc){
#             var c=new Cart({


    def test_7(self):
        response = requests.post('http://localhost:3000/cart/carts', json = dict(name='random_game', url='example.com', price=320))
        self.assertEqual(str(response.encoding),'utf-8')
        #Checking the encoding






#STRUCTURE FOR REQUEST 8
# router.post('/detail',(req,res)=>{
#     Detail.findOne({name:req.body.name,email:req.body.email,games:req.body.games},(err,doc)=>
#     {
#         if(err){console.log("ERR");}
#         if(!doc){
#             let co=req.body;
#             sendmail1(co);
#             var c=new Detail({
#                 name: req.body.name,
#                 email:req.body.email,
#                 totalprice:req.body.totalprice,
#                 games:req.body.games
#             });
#             c.save((err,doc)=>{
#                 console.log(doc);
#                 if(!err) {res.send(doc);}
        
#                 else{console.log("ERR")}


    def test_8(self):
        response = requests.post('http://localhost:3000/cart/detail', json = dict(name='test_user',email='test@gmail.com', totalprice=100, games='test'))
        self.assertEqual(str(response.encoding),'utf-8')
        #Checking the encoding














#######3 BRANCH TESTING #######
####### TESTING TO SEE WHAT HAPPENS IF THE INPUT GOES IN THE "ELSE" BRANCH DURING THE EXECUTION #######

#TEST 9
# router.put('/carts',(req,res)=>{
    
#     Cart.findOne({name:req.body.name},(err,doc)=>
#     {
#         if(err){console.log("ERR");}
#         if(!doc){
            
#             var c=new Cart({
#                 name: req.body.name,
#                 url:req.body.url,
#                 price:req.body.price
#             });
#             c.save((err,doc)=>{
#                 if(!err) {res.send(doc);}
        
#                 else{console.log("ERR")}
#             });
#         }
#         else{
#             res.send(["Game already there in cart"]);
#         }
#     });
    
# });
#As mongo DB is unstructured, it won't give an error
    def test_9(self):
        response = requests.put('http://localhost:3000/cart/carts', json = dict(random=""))
        self.assertEqual(response.status_code, 200)
        #It is giving 404 error. 
        #Checking the else conditional
        
   
    def test_9_a(self):
        response = requests.post('http://localhost:3000/cart/carts', json = dict(random=""))
        self.assertEqual(response.status_code, 404)
        #It is giving 404 error. 
        #Checking the else conditional

#TEST 10
    def test_10(self):
        response = requests.post('http://localhost:3000/cart/carts', json = dict(name=''))
        self.assertEqual(response.status_code, 404)
        #Checking the empty response


#TEST 11
    def test_11(self):
        response = requests.post('http://localhost:3000/cart/stats', json = dict(p1=1, p2=1))
        self.assertEqual(response.status_code, 200)
        #Why is this okay??????????
        #Checking the else conditional


#TEST 12
    def test_12(self):
        response = requests.post('http://localhost:3000/cart/stats', json = dict(p1='', p2=''))
        self.assertEqual(response.status_code, 200)
        #Checking the empty response






####### TEXT TESTING #######
####### TESTING TO SEE WHAT TEXT IS RETURNED AFTER EXECUTING A REQUEST #######
#text

#If entry already exists in the database
#TEST 13
    def test_13(self):
        response = response = requests.post('http://localhost:3000/cart/stats', json = dict(p1='1', p2=''))
        self.assertEqual(response.text, '["Entry already there"]')
        
        
#If entry doesnt exist in the database
#TEST 14
    def test_14(self):
        response = requests.post('http://localhost:3000/cart/detail', json = dict(name='test_user',email='test@gmail.com', totalprice=100, games='test'))
        self.assertEqual(response.text, '["You have already bought these games"]')



    def test_15(self):
        response = requests.post('http://localhost:3000/cart/listall')
        self.assertEqual(str(type(response.text)),"<class 'str'>")
        #Checking the encoding

'''
# class BasicTests(unittest.TestCase):
#     def setUp(self):
#         app.config['TESTING'] = True
#         app.config['WTF_CSRF_ENABLED'] = False
#         app.config['DEBUG'] = False
#         #app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
#         self.app = app.test_client()
#         self.assertEqual(app.debug, False)
 


#SAMPLE CODE FOR REFERENCE OF THE TEST CASES
    
#     def test_valid_hint(self):
#         three = 3
#         response = requests.post('http://localhost:8080/hint/used', json = dict(hint=three, options=three))
#         self.assertEqual(response.status_code, 200)
#         self.assertEqual(response.json(),[2,2])
    
#     def test_invalid_hint_equal_to_zero(self):
#         three = 3
#         response = requests.post('http://localhost:8080/hint/used', json = dict(hint=0, options=three))
#         self.assertEqual(response.status_code, 400)
        
#         self.assertEqual(response.json(),[0,3])
        
#     def test_invalid_hint_option_less_(self):
        
#         self.assertEqual(response.json(),{})
'''


if __name__ == "__main__":
	unittest.main()
