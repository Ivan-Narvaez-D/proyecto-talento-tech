#!/usr/bin/env python
# coding: utf-8

# In[9]:


import pandas as pd
import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px

df=pd.read_csv("/Users/b1cyruz/Documents/ProyectoTech/ExoticasRiesgoInvacion.csv")
print(df.head())

df=df.dropna()

df=df[df["count"]>1]
x = df['count']
y = df['label']



figure=px.bar(df, x="count", y="label", color="label",orientation="h", title="Aves Exoticas con riesgo de invacion por region")
figure

app=dash.Dash(__name__)

app.layout=html.Div(children=[
    html.H1(children="Aves Exoticas con riesgo de invacion por region"),
    html.Div(children="Tableros"),
    
    dcc.Graph(
        id="figure",
        figure=figure
        )

])

if __name__=="__main__":
    app.run_server(debug=True)


# In[ ]:




