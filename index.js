const hr = document.getElementById('hr')

const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
setInterval(()=>{
  const day =new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes()* 6;
  const ss = day.getSeconds()*6;
  
  hr.style.transform = `rotateZ(${hh + mm/12}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`})
