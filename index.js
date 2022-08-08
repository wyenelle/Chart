const parentBody = document.querySelector(".content-body"),
 charts = document.querySelectorAll(".chart"),
 bodyHead = document.querySelector(".body-head")
 
charts.forEach(function(chart) {
   chart.addEventListener("mouseover", function(e) {
      const box = e.currentTarget.classList;

      if(box.contains("selector")) {
         bodyHead.style.display = "block"
      }
      
      exitChart(chart)
   })
   // chart.addEventListener("mouseleave", function(e) {
   //    const box = (e.currentTarget.classList);

   //    if(box.contains("selector")) {
   //       bodyHead.style.display = "none"
   //    }
   // })
})

function exitChart(chart) {
   chart.addEventListener("mouseout", ()=> {
      bodyHead.style.display = "none";
   })
}