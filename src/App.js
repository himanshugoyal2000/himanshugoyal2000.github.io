import React,{Component} from 'react';
import logo from './pic.jpg';
import './App.css';
const intro ={

}

class App extends Component {
  constructor() {
    super()
    
     
      this.state= {
        count1 : 0,
        count2 : 0,
        count3 : 0,
        button1 : 'Introduction',
        button2 : 'Projects Done By Me',
        button3 : 'Conclusion',
        name : ' ',
        intro : [ ],
        projects : [ ],
        conclusion : ' '
      };
    }
    
      
      
    
    message=() =>
    {
       this.setState({name : prompt("Please Enter Your Name")});
    }
    
    displayintro=() =>
    { 
      if(this.state.count1==0)
      {
      this.setState({intro : ['Name:Himanshu','College:BITS Pilani Hyderabad Campus','Branch:Msc. Chemistry','Id No:2018B2PS0753H','From:Jaipur','GitHub Username:himanshugoyal2000'],count1 : 1,button1 : 'Hide Intro'})
      }
      else if(this.state.count1==1)
      {
        this.setState({intro : [ ],count1 : 0,button1 : 'Introduction'})
      }

    }
    displayprojects=() =>
    {
      if(this.state.count2==0)
      {
      this.setState({projects : ['Library Management System using Netbeans as FrontEnd and MySQL as BackEnd','DataBase to play cards using SQl','Random Room allotment in C'],count2 : 1,button2 : 'Hide Projects'})
      }
      else if(this.state.count2==1)
      {
        this.setState({projects : [ ],count2 : 0,button2 : 'Projects Done By me'})
      }
    }

    displayconclusion=() =>

    {
      if(this.state.count3==0)
      {
      this.setState({conclusion : 'This is my First WebPage.Please dont judge.I am still learning and hope to improve.Thanks for visiting',count3 : 1,button3 : 'Hide Conclusion'})
      }
      else if(this.state.count3==1)
      {
        this.setState({conclusion : [ ],count3 : 0,button3 : 'Conclusion'})
      }
    }

    


    render() {
      
        let intro1=this.state.intro.map((e,i)=>{
          return(
            <li key={i}>{e}</li>
          );
        });
        let project2=this.state.projects.map((e,i)=>{
          return(
            <li key={i}>{e}</li>
          );
        });
      
      return (
        <body class="main">
        <header class="header1" id="header">
        <h1>Welcome,{this.state.name}</h1>
        </header>
        <nav>
          <ul class="list1">
            <li>
              <a href="#header">Home Page</a>
            </li>
            <li>
              <a href="#profile">Profile Page</a>
            </li>
            <li>
              <a href="#projects" onclick={this.displayprojects}>Projects done by me</a>
            </li>
            <li>
              <a href="#" onclick={this.message}>Welcome Message</a>
            </li>
            <li>
              <a href="#feedback">Send Feedback</a>
            </li>
            <li>
              <a href="#conclusion" onClick={this.displayconclusion}>Conclusion</a>
            </li>

          </ul>
        </nav>
        <main id="profile">
          <img src={logo} class="profilepic"></img>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <ol>
            <li>
              <button onClick={this.displayintro}>{this.state.button1}</button>
              <ul>
                {intro1}
              </ul>
            </li>
            <li>
              <button id="projects" onClick={this.displayprojects}>{this.state.button2}</button>
              <ol>
                {project2}
              </ol>
            </li>
            <li>
              <button id="conclusion" onClick={this.displayconclusion}>{this.state.button3}</button><br/>
              {this.state.conclusion}
            </li>
          </ol>
          
          <aside >
              <a href="#header" >Home Page</a>
              <a href="#profile">Profile Page</a>
              <a href="#projects" onClick={this.displayprojects}>Projects done by me</a>
            
              <a href="#" onClick={this.message}>Welcome Message</a>
            
              <a href="#feedback">Send Feedback</a>
            
              <a href="#conclusion" onClick={this.displayconclusion}>Conclusion</a>
            
         </aside>
        </main>
        <footer id="feedback">
          <form action="mailto:f20180753@hyderabad.bits-pilani.ac.in" method="post" enctype="text/plain">
            Name:<br/>
            <input type="text" name="name"/><br/>
              Email:<br/>
              
            <input type="text" name="mail"/><br/>
             
            <input type="submit" value="Send Feedback"/>
          </form>
        </footer>
        
        

        </body>

        


      );
    }
  }



export default App;
