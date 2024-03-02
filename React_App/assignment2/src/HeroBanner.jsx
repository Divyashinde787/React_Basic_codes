import React from "react";

class HeroBanner extends React.Component{

   render(){
     return <>
     <div class="container">
     <h1>Happy Diwali Ladu-Ganapati</h1>
    </div>
    <div>
    <h2 class="text-big" id="program"> 
                            What is Machine Learning? 
                        </h2> 
                        <button onClick={this.show}>I am button</button>
                        <button>hey i m button</button>
                        <p class="text-small"> 

 Machine Learning is the field of study that gives computers the capability to  
 learn without being explicitly programmed. ML is one of the most exciting 
 technologies that one would have ever come across. As it is evident from the  
 name, it gives the computer that makes it more similar to humans: The ability  
 to learn. Machine learning is actively being used today, perhaps in many more
  places than one would expect. 
                        </p> 
                    </div> 
    </>
   }
}
export default HeroBanner;
