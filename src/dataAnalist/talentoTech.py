#!/usr/bin/env python
# coding: utf-8

import pandas as pd
import dash
import dash_core_components as dcc
import dash_html_components as html

df=pd.read_csv("/Users/b1cyruz/Documents/ProyectoTech/Endemicas.csv")
print(df.head())

import plotly.express as px
df=df[df["count"]>10]
x = df['count']
y = df['label']

figure=px.bar(df, x="count", y="label", color="label",orientation="h", title="Aves endemicas por region")
figure

app=dash.Dash(__name__)

app.layout=html.Div(children=[
    html.H1(children="Aves endemicas por region"),
    html.Div(children="Tableros"),
    
    dcc.Graph(
        id="figure",
        figure=figure
        )

])

if __name__=="__main__":
    app.run_server(debug=True)

get_ipython().system('pip install plotly_express==0.4.0')
