// fetching the elements to be emanipulated on 
 let charts = document.querySelectorAll(".chart")
 let bodyHead = document.querySelectorAll(".body-head")
 
// convertind to an array
// i converted to array because some array methods like indexOf dont  work on nodeList
 let converted_chart = Array.from(charts)
 let body_head = Array.from(bodyHead)

 // Listen to a 'mouseover' event 
 converted_chart.forEach(function(chart){
   chart.addEventListener('mouseover', function(e){
      let arr = converted_chart.indexOf(chart) // got the index of the element in our array then checked for a match on the second array by index comparison 
      body_head[arr].classList.add('show')
      
   })

   //  when user 'mousesout' the price display as hidden  
   chart.addEventListener('mouseout',function(e){
      let arr = converted_chart.indexOf(chart)
      body_head[arr].classList.remove('show')
   })
 })

 // REname your variables if you want 
 

