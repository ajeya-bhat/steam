from locust import HttpUser, TaskSet, task,SequentialTaskSet
import json
class UserBehavior(TaskSet):
    def on_start(self):
        """ on_start is called when a Locust start before 
            any task is scheduled
        """
       
    @task(2)
    def index(self):
        self.client.get("/cart/contactus")
    @task(2)
    def hel2lo(self):
        self.client.get("/cart/stats")  
    @task(2)
    def hell3o(self):
        self.client.get("/cart/carts")
    @task(2)
    def hel4lo(self):
        self.client.get("/cart/detail")
    
    @task(3)
    def statu(self):
        data ={"p1":"al23sks","p2":"man2sdza"}
        self.client.post("/cart/stats", data=json.dumps(data), headers={'Content-Type': 'application/json'})
    @task(3)
    def detauilu(self):
        data2={"name":"al23sks","email":"man2sdza@gmail.com","totalprice":5.26,"games":"COD"}
        self.client.post("/cart/detail",data=json.dumps(data2), headers={'Content-Type': 'application/json'})    
    @task(3)
    def cartu(self):
        data1={"name":"sudhanvs","url":"xpo.com","price":420}
        self.client.put("/cart/carts",data=json.dumps(data1), headers={'Content-Type': 'application/json'})
    @task(3)
    def contactu(self):
        data2={"name":"al23sks","email":"man2sdza@gmail.com","totalprice":5.26,"games":"COD"}
        self.client.post("/cart/contactus",data=json.dumps(data2), headers={'Content-Type': 'application/json'})
    @task(2)
    def deletucastr(self):
        self.client.delete("/cart/carts")
    
class WebsiteUser(HttpUser):
    tasks = [UserBehavior]
    min_wait = 5
    max_wait = 9