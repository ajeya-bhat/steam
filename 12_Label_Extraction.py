#!/usr/bin/env python
# coding: utf-8

# In[50]:


import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
from sklearn.preprocessing import LabelEncoder


# In[53]:


gameset = pd.read_csv('/Users/kartikeya/Desktop/WT2_Proj/WTF.csv',header=None)


# In[54]:


gameset


# In[56]:


new = gameset[1]


# In[57]:


new = new.astype(str)


# In[58]:


new


# In[59]:


new.to_csv('/Users/kartikeya/Desktop/WT2_Proj/6_y.csv', index=False, header=False)


# In[ ]:




