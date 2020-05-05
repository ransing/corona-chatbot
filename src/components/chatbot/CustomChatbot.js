import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';


function CustomChatbot(props) {

    const config = {
      width: "450px",
      height: "500px",
      floating: true
    };

    const theme = {
        background: '#1F1C18',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#30274F',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };

      
  const steps = [
      {
       id: "Greet",
       message: "Hello, Welcome to the COVID-19 Chatbot",
       trigger: "Ask Name"
      },
      {
        id: "Ask Name",
        message: "What's your name?",
        trigger: "Waiting for name"
      },
      {
        id: "Waiting for name",
        user: true,
        trigger: "Asking feeling"
      },
      {
        id: "Asking feeling",
        message: "Hi {previousValue}, good to meet you!!",
        trigger: "Done name"
      },
      {
        id: "Done name",
        message: "How are you feeling today?",
        trigger:"display options"
      },
      {
        id: "display options",
        options: [
          {
            value: "fine",
            label: "fine",
            trigger: "Done"
          },
          {
            value: "not well",
            label: "Not well",
            trigger: "more detail"
          }
        ]
      },
      {
        id: "more detail",
        message: "Sorry to hear you are feeling unwell",
        trigger: "unwell options"
      },
      {
        id: "unwell options",
        message: "which of the following symptoms do you have?",
        trigger: "symptom options"
      },
      {
        id: "symptom options",
        options: [
          {
            value: "Shortness of breath",
            label: "Shortness of breath?",
            trigger: () => {
              props.eventHandler("chest");
              return "Anything else";
            }
          },
          {
            value: "cough",
            label: "Cough?",
            trigger:  () => {
              props.eventHandler("head");
              return "Anything else";
            }
          },
          {
            value: "Aches",
            label: "Body Ache",
            trigger:  () => {
              props.eventHandler("aches");
              return "Anything else";
            }
          },
          {
            value: "fever",
            label: "Fever?",
            trigger:  () => {
              props.eventHandler("Fever");
              return "Anything else";
            }
          },
        ]
      },
      {
        id: "Anything else",
        message: "Current symptom: {previousValue}",
        trigger: "before yes or no"
      },
      {
        id: "before yes or no",
        message: "do you have any other symptom",
        trigger: "anything next"
      },
      {
        id: "anything next",
        options:[
          {
            value: "yes",
            label: "yes I do",
            trigger:"symptom options"
          },
          {
            value: "not at the moment",
            label: "not at the moment",
            trigger: "Done"
          }
        ]
      },
      {
       id: "Done",
       message: "Have a great day !!",
       trigger: "more info"
      },
      {
        id: "more info",
        component: (
          <div>
          <li><a target="_blank" href="https://coronacollection.netlify.com">More COVID-19 Apps</a></li>
          <li><a target="_blank" href="https://viraj.info">Feedback</a></li>
          </div>
        ),
        end: true,
      }
    ];

  return(
    <>
     <ThemeProvider theme={theme}>
        <ChatBot 
          style={{"z-index":"999"}}
          headerTitle="COVID-19 Chatbot"
          recognitionEnable={true}
          steps={steps}
          {...config}

        />
     </ThemeProvider>
    </>
  )
}


export default CustomChatbot;