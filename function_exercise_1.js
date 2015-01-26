function max(n,m)
{
    if(n > m){
        return(n + "is larger than " + m)
    }
    else if(m > n){
        return(m + " is larger than " + n)
    }
    else {
        return(n + " and " + m + " are equal.")
    }
}
max(1,3)
