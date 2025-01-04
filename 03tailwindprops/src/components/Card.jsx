import React from 'react'

function Card({username ="Gamma",post="Not assignrd yet",img}) {
    //console.log(props);
    
  return (
    <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            {img || <img src="https://images.pexels.com/photos/30000612/pexels-photo-30000612/free-photo-of-indigo-passenger-plane-on-tarmac-at-airport.jpeg?auto=compress&cs=tinysrgb&w=600"></img>}
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quaerat.
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username || "Alpha"}  
            </div>    
            {/* first it will display value of (username) declared in App.jsx, if username is not declared and 
             if no parameter of username are declared in the function than this value ("Alpha") will be displayed      
                      */}
             {/* the sequence can be username-->parameter of username declared in functin-->"Alpha" */}
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
                
    </div>
  )
}

export default Card