(function(){
  var d=document.documentElement; d.classList.add('js');
  var header=document.getElementById('site-header');
  var btn=document.querySelector('.nav-toggle'), nav=document.getElementById('site-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');if(header)header.classList.toggle('menu-open',o);});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');if(header)header.classList.remove('menu-open');}});
  }
  var fab=document.querySelector('.direct-fab');
  function onScroll(){ if(header){ header.classList.toggle('is-solid', window.scrollY>140); } if(fab){ fab.classList.toggle('show', window.scrollY>560); } }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  var sf=document.getElementById('search');
  if(sf){sf.addEventListener('submit',function(e){e.preventDefault();var q=(document.getElementById('q').value||'').trim();var p=document.getElementById('price').value;var b=document.getElementById('beds').value;var msg='Hi Kanekalon, I am looking for a home'+(q?' in '+q:'')+'. Price: '+p+'. Bedrooms: '+b+'.';window.location.href='sms:+15016157709?&body='+encodeURIComponent(msg);});}
  var vf=document.getElementById('value-form');
  if(vf){vf.addEventListener('submit',function(e){e.preventDefault();var a=(document.getElementById('addr').value||'').trim();var m=(document.getElementById('vemail').value||'').trim();window.location.href='mailto:kanekalonkindle@epique.me?subject='+encodeURIComponent('Home valuation request')+'&body='+encodeURIComponent('Property address: '+a+'\nMy email: '+m);});}
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in');});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ var el=en.target; var sib=[].slice.call(el.parentNode.children).filter(function(c){return c.classList.contains('reveal');}); var i=Math.max(0,sib.indexOf(el)); el.style.transitionDelay=Math.min(i*90,450)+'ms'; el.classList.add('in'); io.unobserve(el);} });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  els.forEach(function(el){io.observe(el);});
})();
