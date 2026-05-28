// useState é uma ferramenta que cria memória quando o valor muda, a tela 
// atualiza automaticamente
import React, {useState} from "react";

// View -> é como uma caixa que organiza os elementos
// Text -> é o único jeito de mostrar texto na tela
// TouchableOpacity -> botão que podemos personalizar
// StyleSheet -> onde criamos os estilos (css sem js)
// Animated -> permite criar animações suaves
// Easing -> controla o ritmo das animações
import {View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

// Banco de perguntas 
// uma lista de (array) de projetos
// Cada objeto é uma pergunta com suas opções de respostas e a resposta correta.
const PERGUNTAS = [
  {
    pergunta: 'Qual a empresa criou o React?',
    opcoes:['Google', 'Meta', 'Microsoft', 'Apple'],
    correta: 'Meta',
    emoji: '⚛️',
  },
  
  {
    pergunta: 'Qual linguagem o React Native usa?',
    opcoes:['Python', 'Java', 'JavaScript', 'PHP'],
    correta: 'JavaScript',
    emoji: '💛',
  }, 

  {
    pergunta: 'Qual o hook usam para criar estado?',
    opcoes:['Propos', 'Hooks', 'Estado(State)', 'Componentes'],
    correta: 'Estado(State)',
    emoji: '🎣',
  }, 

    {
    pergunta: 'O que JSX significa?',
    opcoes:['Java Style Extension', 'JavaScript XML', 
      'JSON Syntax extra', 'Just Some example'],
    correta: 'JavaScript XML',
    emoji: '🏷️',
  }, 

    {
    pergunta: 'O que é um componente no React?',
    opcoes:['Um banco de dados', 'um pedaço reutilizável da tela',
       'um servidor', 'um arquivo css'],
    correta: 'um pedaço reutilizável da tela',
    emoji: '🧠',
  }, 

    {
    pergunta: 'Como chamamos as "caixinhas de memória" do React?',
    opcoes:['', '', '', ''],
    correta: '',
    emoji: '🧩',
  }, 

    {
    pergunta: '',
    opcoes:['', '', '', ''],
    correta: '',
    emoji: '📦',
  }, 

    {
    pergunta: '',
    opcoes:['', '', '', ''],
    correta: '',
    emoji: '⚡',
  }, 

    {
    pergunta: '',
    opcoes:['', '', '', ''],
    correta: '',
    emoji: '🔄',
  }, 

    {
    pergunta: '',
    opcoes:['', '', '', ''],
    correta: '',
    emoji: '✍️',
  }, 
];