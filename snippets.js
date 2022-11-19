//find what all the head stuff does
document.getElementById('sidebar').innerHTML = `
<h2 class="home"><a class="homelink" href="index.html">Home</a></h2>
<ul>
    <li><a href="test.html">test</a></li>
    <li><a href="test2.html">test2</a></li>
    <li><a href="test3.html">test3</a></li>
</ul> 
`;
document.getElementById('head').innerHTML += `<link rel="icon" type="image/x-icon" href="favicon.ico">`;