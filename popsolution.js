//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="You are as bright as a jack-o-lantern!"
compliments[1]="Wow, you are one smart Pumpkin!"
compliments[2]="Fab-boo-lus!"
compliments[3]="You are the pick of the patch!"
compliments[4]="Way ahead of the carve!"
compliments[5]="Gourd Job!"
compliments[6]="Oh my gourdness, great work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/


question[1]="Every ________ years, there is a full moon on Halloween."
choice1[1]="19"
choice1[2]="5"
choice1[3]="14"
choice1[4]="24"

question[2]= "Halloween is the _______ largest commercial holiday in the United States"
choice2[1]="Third"
choice2[2]="Second"
choice2[3]="Fifth"
choice2[4]="First"



question[3]="Americans spend an estimated ________ dollars on candy, costumes, and decor."
choice3[1]="203"
choice3[2]="57"
choice3[3]="108"
choice3[4]="99"

question[4]="The top Halloween candy is _________."
choice4[1]="Sour Patch Kids"
choice4[2]="M&Ms"
choice4[3]="Hot Tamales"
choice4[4]="Reese's"


question[5]="The state of _________ produces twice as many pumpkins as any other state."
choice5[1]="Indiana"
choice5[2]="Ohio"
choice5[3]="Illinois"
choice5[4]="Nebraska"

question[6]="Candy corn was originally called _________."
choice6[1]="Sweet Corn"
choice6[2]="Chicken Feed"
choice6[3]="Butter Cream"
choice6[4]="Corn Candy"

question[7]="The city of ________ throws the biggest Halloween parade in the U.S."
choice7[1]="New York City"
choice7[2]="Chicago"
choice7[3]="Los Angeles"
choice7[4]="Kansas City"

question[8]=" The city of ________ throws the biggest Halloween parade in the United States."
choice8[1]="Scotland"
choice8[2]="Italy"
choice8[3]="Canada"
choice8[4]="Ireland"

question[9]="One in ______ adults pretend not to be home on Halloween."
choice9[1]="Two"
choice9[2]="Seven"
choice9[3]="Five"
choice9[4]="Eight"

question[10]="People used to carve _______ before they started carving pumpkins."
choice10[1]="Turnips"
choice10[2]="Potatoes"
choice10[3]="Squash"
choice10[4]="Carrots"


solution[1]="a"
solution[2]="b"
solution[3]="c"
solution[4]="d"
solution[5]="c"
solution[6]="b"  
solution[7]="a"
solution[8]="d"
solution[9]="c"   
solution[10]="a"


