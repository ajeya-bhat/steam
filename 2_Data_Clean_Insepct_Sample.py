#!/usr/bin/env python
# coding: utf-8

# In[22]:


import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
from sklearn.preprocessing import LabelEncoder


# In[23]:


gameset = pd.read_csv('/Users/kartikeya/Downloads/steam-store-games/steam.csv')


# In[24]:


gameset


# In[ ]:





# In[25]:


#unique = np.unique(genre_list)


# In[26]:


#unique


# In[27]:


sample = gameset.sample(frac =.01) 


# In[28]:


sample.head(10)


# In[53]:


sample.to_csv('/Users/kartikeya/Downloads/Game_Updated.csv', header = ["appid","name","release_date","english","developer","publisher","platforms","required_age","categories","genres","steamspy_tags","achievements","positive_ratings","negative_ratings","average_playtime","median_playtime","owners","price"])


# In[54]:


temp1 = pd.read_csv('/Users/kartikeya/Downloads/steam-store-games/steam.csv')


# In[55]:


temp2 = pd.read_csv('/Users/kartikeya/Downloads/steam-store-games/steam_media_data.csv')


# In[56]:


temp3 = pd.read_csv('/Users/kartikeya/Downloads/steam-store-games/steam_description_data.csv')


# In[57]:


#


# In[58]:


temp1


# In[59]:


temp2


# In[60]:


temp3


# In[73]:


temp4 = temp2[['steam_appid','header_image','screenshots','background']]


# In[74]:


#temp2.loc[0]['header_image']


# In[75]:


temp5 = temp4.rename(columns={'steam_appid': 'appid'})


# In[76]:


temp6 = temp3[['steam_appid','detailed_description','about_the_game','short_description']]


# In[77]:


temp7 = temp6.rename(columns={'steam_appid': 'appid'})


# In[78]:


final_1 = pd.merge(temp1, temp5, on='appid')


# In[79]:


final_2 = pd.merge(final_1, temp7, on='appid')


# In[80]:


final_2


# In[83]:


final_sample = final_2.sample(frac =.01) 


# In[85]:


final_sample


# In[87]:


#final_sample.loc[9231]['header_image'] #Confirming images are correct


# In[88]:


#final_sample.loc[17209]['header_image'] #Confirming images are correct


# In[98]:


final_final_1 = final_sample.drop('screenshots',axis=1)


# In[99]:


final_final_2 = final_final_1.drop('detailed_description',axis=1)


# In[100]:


final_final_2.to_csv('/Users/kartikeya/Downloads/Game_Updated_2.csv')


# In[45]:


#temp_new = pd.read_csv('/Users/kartikeya/Downloads/steam-store-games/steam_description_data.csv')


# In[102]:


final_final_3 = final_final_2.drop('about_the_game',axis=1)


# In[103]:


final_final_3.to_csv('/Users/kartikeya/Downloads/Game_Updated_Small.csv')


# In[107]:


temp1.describe()


# In[108]:


temp2.describe()


# In[109]:


temp3.describe()


# In[110]:


#NOW MAKING THEM GRAPHS


# In[111]:


get_ipython().run_cell_magic('js', '', '')


# In[120]:


# all_text = """ha,lol,this,is,fun
# hal,olol,thisnt,fun,sdfs
# asdf,sadfg,sadfsg,adfsg,sadfsg"""

# new_lines = all_text.split("\n")
# #new_words = {'1':'','2':''}
# for i in new_lines:
# #    temp = new_lines.split(",")
# #    print(temp)
    
    
    


# In[ ]:




