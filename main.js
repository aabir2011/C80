var GuestName = document.getElementById("name_of_guest").value;
guest_list.push(GuestName);

var GuestListSorted = document.getElementById(guest_list.sorted()).value;
document.getElementById(guest_list_sorted).textContent=GuestListSorted;

function search_name(){
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<name_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("searchedname").innerHTML="name found"+found+"time/s";
    console.log("found name"+found+"time/s");
}
