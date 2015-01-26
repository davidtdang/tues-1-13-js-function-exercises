function maxOfThree(m,n,o)
{
  if(n > m && n > o){
    return(n + " is the largest")
  }
  else if(m > n && m > o){
    return(m + " is the largest")
  }
  else if(o > n && o > m){
    return(o + " is the largest")
  }
}
maxOfThree(1,100,72)
