ng();
function ng(){
	var i=1;
	var o=[99,98,97,96,95,94,93,92,91];
	var q=0;
	var p=[0,0,0,0,0,0,0,0,0];
	var activeplayer=1;
	// var w=12;
	// w=12;
	// q=0;
	// activeplayer=1;
	// for(i=0;i<9;i++)
	// {
	// 	p[i]=0;
	// 	o[i]=w;
	// 	w++;
	// }
	
document.querySelector('.zz').classList.remove('qq');
document.querySelector('.main').classList.remove('rr');
document.querySelector('.z').classList.remove('ss');
document.querySelector('.z').textContent='tictactoe';
document.querySelector('.a').style.display='block';
document.querySelector('.b').style.display='block';
document.querySelector('.c').style.display='block';
document.querySelector('.d').style.display='block';
	
for(i=1;i<10;i++)
{
	document.querySelector('.p'+i).style.display='none';
	document.querySelector('.q'+i).style.display='block';
}
document.querySelector('.q1').addEventListener('click',a);
document.querySelector('.q2').addEventListener('click',b);
document.querySelector('.q3').addEventListener('click',c);
document.querySelector('.q4').addEventListener('click',d);
document.querySelector('.q5').addEventListener('click',e);
document.querySelector('.q6').addEventListener('click',f);
document.querySelector('.q7').addEventListener('click',g);
document.querySelector('.q8').addEventListener('click',h);
document.querySelector('.q9').addEventListener('click',j);



function a()
{
    if(q==0)
	{	
		document.querySelector('.q1').style.display='none';
		document.querySelector('.p1').style.display='block';
		document.querySelector('.p1').src='images' + activeplayer + '.png'
		o[0]=activeplayer;
		p[0]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}
}
function b()
{
	if(q==0)
	{	
		document.querySelector('.q2').style.display='none';
		document.querySelector('.p2').style.display='block';
		document.querySelector('.p2').src='images' + activeplayer + '.png'
		o[1]=activeplayer;
		p[1]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
function c()
{
	if(q==0)
	{	
		document.querySelector('.q3').style.display='none';
		document.querySelector('.p3').style.display='block';
		document.querySelector('.p3').src='images' + activeplayer + '.png'
		o[2]=activeplayer;
		p[2]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
function d()
{
    if(q==0)
	{	
		document.querySelector('.q4').style.display='none';
		document.querySelector('.p4').style.display='block';
		document.querySelector('.p4').src='images' + activeplayer + '.png'
		o[3]=activeplayer;
		p[3]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
function e()
{
    if(q==0)
	{	
		document.querySelector('.q5').style.display='none';
		document.querySelector('.p5').style.display='block';
		document.querySelector('.p5').src='images' + activeplayer + '.png'
		o[4]=activeplayer;
		p[4]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
function f()
{
	if(q==0)
	{	
		document.querySelector('.q6').style.display='none';
		document.querySelector('.p6').style.display='block';
		document.querySelector('.p6').src='images' + activeplayer + '.png'
		o[5]=activeplayer;
		p[5]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
function g()
{
	if(q==0)
	{	
		document.querySelector('.q7').style.display='none';
		document.querySelector('.p7').style.display='block';
		document.querySelector('.p7').src='images' + activeplayer + '.png'
		o[6]=activeplayer;
		p[6]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
function h()
{
	if(q==0)
	{	
		document.querySelector('.q8').style.display='none';
		document.querySelector('.p8').style.display='block';
		document.querySelector('.p8').src='images' + activeplayer + '.png'
		o[7]=activeplayer;
		p[7]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
function j()
{
	if(q==0)
	{	
		document.querySelector('.q9').style.display='none';
		document.querySelector('.p9').style.display='block';
		document.querySelector('.p9').src='images' + activeplayer + '.png'
		o[8]=activeplayer;
		p[8]=1;
		activeplayer===1 ? activeplayer=2 : activeplayer=1;
		l();
	}	
}
// var aa=document.querySelector('.p1').src;
// var bb=document.querySelector('.p2').src;
// var cc=document.querySelector('.p3').src;
// dd=document.querySelector('.p4').src;
// ee=document.querySelector('.p5').src;
// ff=document.querySelector('.p6').src;
// gg=document.querySelector('.p7').src;
// hh=document.querySelector('.p8').src;
// ii=document.querySelector('.p9').src;
// var zz=document.querySelector('.q1').style.display;
// var yy=document.querySelector('.q2').style.display;
// xx=document.querySelector('.p3').style.display;
// ww=document.querySelector('.p4').style.display;
// vv=document.querySelector('.p5').style.display;
// uu=document.querySelector('.p6').style.display;
// tt=document.querySelector('.p7').style.display;
// ss=document.querySelector('.p8').style.display;
// rr=document.querySelector('.p9').style.display;
// if(aa==dd && dd==ii||
// cc==ee && ee==gg ||
// aa==dd && dd==gg ||
// bb==ee && ee==hh ||
// cc==ff && ff==ii ||
// aa==bb && bb==cc ||
// dd==ee && ee==ff ||
// gg==hh && hh==ii  
// )
// {
//     if(zz!='none' && vv!='none' && rr!='none'||
//     xx!='none' && vv!='none' && tt!='none' ||
//     zz!='none' && ww!='none' && tt!='none' ||
//     yy!='none' && vv!='none' && ss!='none' ||
//     xx!='none' && uu!='none' && rr!='none' ||
//     zz!='none' && yy!='none' && xx!='none' ||
//     ww!='none' && vv!='none' && uu!='none' ||
//     tt!='none' && ss!='none' && rr!='none')
//     {
//         console.log('h');
//         document.querySelector('.z').textContent='done';
//     // }
//     // else{
//     //     document.querySelector('.z').textContent='done';
//     // }
   
// }
// }
function l(){
    if(o[0]==o[1] && o[1]==o[2] ||
        o[3]==o[4] && o[4]==o[5] ||
        o[6]==o[7] && o[7]==o[8] ||
        o[0]==o[3] && o[3]==o[6] ||
        o[1]==o[4] && o[4]==o[7] ||
        o[2]==o[5] && o[5]==o[8] ||
        o[0]==o[4] && o[4]==o[8] ||
        o[2]==o[4] && o[4]==o[6] )
    {
        
        
        activeplayer===1 ? activeplayer=2 : activeplayer=1;
        document.querySelector('.z').textContent='player'+activeplayer+'wins';
		q=1;
		for(i=1;i<=9;i++)
		{
			if(p[i-1]==0)
			{
				document.querySelector('.q'+i).style.display='none';
			}
		}
		for(i=1;i<=9;i++)
		{
			if(p[i-1]==1)
			{
				document.querySelector('.p'+i).style.display='none';
			}
		}
		document.querySelector('.a').style.display='none';
		document.querySelector('.b').style.display='none';
		document.querySelector('.c').style.display='none';
		document.querySelector('.d').style.display='none';
		document.querySelector('.zz').classList.add('qq');
		document.querySelector('.main').classList.add('rr');
		document.querySelector('.z').classList.add('ss');
		o=[99,98,97,96,95,94,93,92,91];
		 q=0;
		 p=[0,0,0,0,0,0,0,0,0];
		 activeplayer=1;

	}
	
	else if(p[0]==1 && p[1]==1 && p[2]==1 && p[3]==1 && p[4]==1 && p[5]==1 && p[6]==1 && p[7]==1 && p[8]==1)
	{
		console.log('m');
		document.querySelector('.a').style.display='none';
		document.querySelector('.b').style.display='none';
		document.querySelector('.c').style.display='none';
		document.querySelector('.d').style.display='none';
		document.querySelector('.zz').classList.add('qq');
		document.querySelector('.main').classList.add('rr');
		document.querySelector('.z').textContent='draw';
		document.querySelector('.z').classList.add('ss');
		for(i=1;i<10;i++)
		{
			document.querySelector('.q'+i).style.display='none';
			document.querySelector('.p'+i).style.display='none';
		}
		o=[99,98,97,96,95,94,93,92,91];
		 q=0;
		 p=[0,0,0,0,0,0,0,0,0];
		 activeplayer=1;
	}
}
}
document.querySelector('.zz').addEventListener('click',ng);

