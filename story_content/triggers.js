function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fnQYEC9yEG":
        Script1();
        break;
      case "6rGRPYZtGGW":
        Script2();
        break;
      case "6Kt8qP3NJBB":
        Script3();
        break;
      case "6AbvUZWclTE":
        Script4();
        break;
      case "5akJDjwall1":
        Script5();
        break;
      case "5mcjQ3mfVbx":
        Script6();
        break;
      case "5utwpPruyqU":
        Script7();
        break;
      case "5kOIh7nEZeS":
        Script8();
        break;
      case "5XV85C5pnUF":
        Script9();
        break;
      case "5pCyyRUAgt3":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6TkC8TNZEEh');
const duration = 750;
const easing = 'ease-out';
const id = '6C4FsW1lnRv';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6DjPwYzKfWk');
const duration = 750;
const easing = 'ease-out';
const id = '6aS1iUliaYJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5YsXyJXOWZZ');
const duration = 750;
const easing = 'ease-out';
const id = '6BlnGCLle2K';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('69ROVhwkpdZ');
const duration = 750;
const easing = 'ease-out';
const id = '6c2ijovel2I';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6BHClVAM1te');
const duration = 750;
const easing = 'ease-out';
const id = '6ojVb4VhaoB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('60b4NqwIMuH');
const duration = 750;
const easing = 'ease-out';
const id = '6buMu5Tyy7H';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5pZSvviFH86');
const duration = 750;
const easing = 'ease-out';
const id = '6kg7EfYcxc0';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6BKcor8cQXj');
const duration = 750;
const easing = 'ease-out';
const id = '68h9s0NTpc6';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5ycCXFdeoj2');
const duration = 750;
const easing = 'ease-out';
const id = '5uKq0EPVHZS';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('64D6iCBqvh1');
const duration = 750;
const easing = 'ease-out';
const id = '5buC0O4SkGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
