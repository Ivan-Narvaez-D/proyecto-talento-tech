#!/usr/bin/env python
# coding: utf-8

# In[7]:


import pandas as pd
import dash
import dash_core_components as dcc
import dash_html_components as html

df=pd.read_csv("/Users/b1cyruz/Documents/ProyectoTech/Exoticas.csv")
print(df.head())

import plotly.express as px
df=df[df["registros_exoticas"]>1]
x = df['registros_exoticas']
y = df['label']

figure=px.bar(df, x="registros_exoticas", y="label", color="label",orientation="h", title="Aves Exoticas por region")
figure

app=dash.Dash(__name__)

app.layout=html.Div(children=[
    html.H1(children="Aves Exoticas por region"),
    html.Div(children="Tableros"),
    
    dcc.Graph(
        id="figure",
        figure=figure
        )

])

if __name__=="__main__":
    app.run_server(debug=True)


# In[ ]:




