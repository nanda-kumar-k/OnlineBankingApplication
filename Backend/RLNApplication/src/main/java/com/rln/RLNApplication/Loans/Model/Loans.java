package com.rln.RLNApplication.Loans.Model;

public class Loans
{
 private int id;
 private String startingdate;
 private String  endingdate;
 private String closingdate;
 private String  totalamount;
 private long intrest;
 private String loantype;
 private String loandocuments;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getStartingdate() {
	return startingdate;
}
public void setStartingdate(String startingdate) {
	this.startingdate = startingdate;
}
public String getEndingdate() {
	return endingdate;
}
public void setEndingdate(String endingdate) {
	this.endingdate = endingdate;
}
public String getClosingdate() {
	return closingdate;
}
public void setClosingdate(String closingdate) {
	this.closingdate = closingdate;
}
public String getTotalamount() {
	return totalamount;
}
public void setTotalamount(String totalamount) {
	this.totalamount = totalamount;
}
public long getIntrest() {
	return intrest;
}
public void setIntrest(long intrest) {
	this.intrest = intrest;
}
public String getLoantype() {
	return loantype;
}
public void setLoantype(String loantype) {
	this.loantype = loantype;
}
public String getLoandocuments() {
	return loandocuments;
}
public void setLoandocuments(String loandocuments) {
	this.loandocuments = loandocuments;
}
@Override
public String toString() {
	return "Loans [id=" + id + ", startingdate=" + startingdate + ", endingdate=" + endingdate + ", closingdate="
			+ closingdate + ", totalamount=" + totalamount + ", intrest=" + intrest + ", loantype=" + loantype
			+ ", loandocuments=" + loandocuments + "]";
}
 
}
