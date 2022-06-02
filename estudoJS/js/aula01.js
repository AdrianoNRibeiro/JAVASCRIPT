rows = 10;

var x = 6;
var y = 1;

var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

for(i=1;i<rows;i++)
{
    document.write(x + "&#10005;" + y + " = " + x*y + "<br/>");
    y++;
}

