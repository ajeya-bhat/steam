#!/usr/bin/env python
# coding: utf-8

# In[79]:


import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
from sklearn.preprocessing import LabelEncoder


# In[80]:


gameset = pd.read_csv('/Users/kartikeya/Desktop/WT2_Proj/Game_Updated_Final.csv',header=None)


# In[81]:


# 1. Bar Chart - number of games for each platform
# 2. Bar graph - number of games per year
# 3. Line graph - release date vs price
# 4. Pie chart - number of games in each platform
# 5. Line graph - Developer vs price


# 

# In[82]:


xlabels = ["Action;Casual;Indie","Racing","Action;Casual;Indie;Sports;Early Access","Indie","Action;Indie;Strategy","Action;Adventure;Indie","Action;Free to Play;Indie;Massively Multiplayer","Action;RPG;Simulation;Strategy","Action;Adventure;Casual;Indie;Early Access","Indie;Strategy;Early Access","RPG;Strategy","Action","Action;Indie;RPG;Strategy","Strategy","Violent;Gore;Action;Indie;Strategy","Adventure;Casual","Casual;Indie;Simulation;Strategy;Early Access","Free to Play","Adventure;Casual;Indie","Action;Adventure;Casual;Indie","Indie;Strategy","Action;Adventure","Action;Indie","Action;Indie;Early Access","Gore;Adventure","Casual;Indie","Indie;RPG;Strategy","Adventure","Simulation","Violent;Gore;Action;Adventure;Indie","Action;Casual;Indie;Simulation;Strategy","Adventure;Indie","Utilities","Action;Adventure;Casual;Indie;Strategy","Action;Adventure;Casual","Action;Free to Play;Indie","Casual;Simulation","Adventure;Casual;Simulation;Strategy","Action;Indie;RPG","Sexual Content;Nudity;Violent;Casual;Indie","Casual","RPG","Free to Play;Indie;RPG","Indie;Early Access","Casual;Free to Play;Indie;Simulation","Casual;Indie;Simulation;Strategy","Casual;Free to Play","Action;RPG;Early Access","Indie;RPG","Casual;Indie;Strategy","Adventure;Indie;Simulation","Action;Racing","Casual;RPG","Casual;Indie;Simulation","Action;Indie;Sports","Strategy;RPG;Indie","Casual;Indie;Massively Multiplayer;Early Access","Indie;Racing;Simulation;Sports","Action;Indie;Simulation;Sports","Action;Strategy","Free to Play;Massively Multiplayer;RPG","Violent;Gore;Action;Free to Play;Indie","Action;Adventure;Simulation","Action;Indie;Casual","Violent;Gore;Adventure;Indie;Simulation","Animation & Modeling;Design & Illustration;Utilities","Adventure;Indie;Sports","Racing;Simulation;Sports","Indie;Simulation;Strategy","Action;Casual;Indie;Simulation;Sports","Action;Adventure;Indie;Early Access","Adventure;Indie;RPG","Action;Adventure;Indie;RPG;Sports","Action;Adventure;Massively Multiplayer;Simulation","Action;Casual;Indie;Strategy","Sports","Violent;Casual;RPG;Simulation;Strategy","Action;Adventure;Indie;Simulation","Casual;Indie;RPG","Sexual Content;Free to Play;Indie","Action;Casual;Free to Play;Indie","Adventure;Casual;Indie;RPG;Strategy","Action;Adventure;Indie;RPG;Strategy;Early Access","Racing;Simulation","Indie;Simulation;Strategy;Early Access","Casual;Indie;Racing","Action;Adventure;Indie;Racing;Simulation","Adventure;Casual;Indie;Simulation","Adventure;Casual;Simulation;Early Access","Action;Adventure;Indie;Simulation;Early Access","Action;Adventure;Indie;RPG;Strategy","Action;Adventure;Casual;Free to Play;Indie;Massively Multiplayer;Racing;RPG;Simulation;Sports;Strategy","Sexual Content;Nudity;Indie;RPG;Simulation","Violent;Gore;Action;Adventure;RPG","Adventure;Casual;Indie;RPG","Action;Indie;Racing;Early Access","Adventure;Casual;Indie;RPG;Simulation;Strategy","Action;Casual;Indie;Simulation","Action;Simulation","Violent;Adventure;Indie","Action;Adventure;Casual;Free to Play;Indie","Adventure;Simulation","Adventure;Indie;Strategy","Simulation;Strategy","Action;Casual;Indie;Racing;Simulation;Sports","Action;Indie;Simulation","Action;Indie;Racing;Simulation;Sports","Action;Simulation;Strategy","Indie;RPG;Simulation;Early Access","Indie;RPG;Strategy;Early Access","Action;Casual;Simulation;Early Access","Violent;Action;Indie;Early Access","Indie;RPG;Simulation;Strategy","Action;Simulation;Early Access","Indie;Racing","Adventure;Indie;RPG;Simulation;Strategy","Indie;Massively Multiplayer;RPG;Early Access","Action;Adventure;Free to Play;RPG","Adventure;Indie;Massively Multiplayer","Action;Adventure;RPG","Action;Adventure;Indie;RPG"]


# In[83]:


ylabels = [12,2,1,11,2,16,1,1,1,2,3,5,1,2,1,5,1,1,7,4,5,5,17,5,1,14,2,4,2,1,1,10,2,1,1,2,2,1,4,1,7,5,1,1,1,2,1,1,1,5,2,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,2,3,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]


# In[84]:


new = zip(xlabels,ylabels)


# In[85]:


print(z)


# In[ ]:




