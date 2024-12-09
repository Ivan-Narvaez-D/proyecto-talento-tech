#!/usr/bin/env python
# coding: utf-8

# In[10]:


import pandas as pd
import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px

#Exoticas en riesgo de invacion
df1=pd.read_csv("/Users/b1cyruz/Documents/ProyectoTech/ExoticasRiesgoInvacion.csv")
print(df1.head())

df1=df1.dropna()

df1=df1[df1["count"]>1]
x = df1['count']
y = df1['label']

figure1=px.bar(df1, x="count", y="label", color="label",orientation="h", title="Aves Exoticas con riesgo de invacion por region")
figure1

figure1.update_layout(
    paper_bgcolor="palegoldenrod",  # Fondo general
    plot_bgcolor="white",       # Fondo del área de trazado
    title_font=dict(size=20),   # Opcional: personalizar título
    font=dict(size=14)          # Opcional: personalizar fuente general
)

#Exoticas
df2=pd.read_csv("/Users/b1cyruz/Documents/ProyectoTech/Exoticas.csv")
print(df2.head())

df2=df2[df2["registros_exoticas"]>1]
x = df2['registros_exoticas']
y = df2['label']

figure2=px.pie(df2, values='registros_exoticas', names='label', title="Aves Exoticas por region")
figure2

figure2.update_layout(
    paper_bgcolor="darkseagreen",  # Fondo general
    plot_bgcolor="white",       # Fondo del área de trazado
    title_font=dict(size=20),   # Opcional: personalizar título
    font=dict(size=14)          # Opcional: personalizar fuente general
)

#Migratorias
df3=pd.read_csv("/Users/b1cyruz/Documents/ProyectoTech/Migratorias.csv")
print(df3.head())

df3=df3.dropna()

df3=df3[df3["count"]>10]
x = df3['count']
y = df3['label']

figure3=px.bar(df3, x="count", y="label", color="label", title="Aves Migratorias por region")
figure3

figure3.update_layout(
    paper_bgcolor="lightyellow",  # Fondo general
    plot_bgcolor="white",       # Fondo del área de trazado
    title_font=dict(size=20),   # Opcional: personalizar título
    font=dict(size=14)          # Opcional: personalizar fuente general
)

#Endemicas
df4=pd.read_csv("/Users/b1cyruz/Documents/ProyectoTech/Endemicas.csv")
print(df4.head())

df4=df4[df4["count"]>1]
x = df4['count']
y = df4['label']

figure4=px.bar(df4, x="count", y="label", color="label",orientation="h", title="Aves endemicas por region")
figure4

figure4.update_layout(
    paper_bgcolor="khaki",  # Fondo general
    plot_bgcolor="white",       # Fondo del área de trazado
    title_font=dict(size=20),   # Opcional: personalizar título
    font=dict(size=14)          # Opcional: personalizar fuente general
)


app=dash.Dash(__name__)

app.layout=html.Div(children=[
    html.H1(children="Aves de Bolivar por region"),
    html.Div(children="Tableros"),
    
    dcc.Graph(
        id="figure",
        figure=figure1
        ),

    dcc.Graph(
        id="figure2",
        figure=figure2
        ),
        
    dcc.Graph(
        id="figure3",
        figure=figure3
        ),
    dcc.Graph(
        id="figure4",
        figure=figure4
        )      

])

if __name__=="__main__":
    app.run_server(debug=True)


# In[ ]:




